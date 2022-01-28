module Api (app, getTransactionFeeEstimate, apiDocs) where

import Api.Fees (estimateTxFees)
import Control.Monad.Catch (try)
import Control.Monad.Except (throwError)
import Control.Monad.IO.Class (liftIO)
import Control.Monad.Reader (ReaderT, runReaderT)
import Data.ByteString.Lazy.Char8 qualified as LC8
import Data.Kind (Type)
import Servant (
  Application,
  Get,
  Handler,
  HasServer (ServerT),
  JSON,
  Proxy (..),
  QueryParam',
  Required,
  Server,
  ServerError (errBody),
  err400,
  hoistServer,
  serve,
  type (:>),
 )
import Servant.Client (ClientM, client)
import Servant.Docs qualified as Docs
import Types (
  AppM (..),
  CardanoBrowserServerError (..),
  Cbor,
  Env,
  Fee,
  FeeEstimateError (InvalidCbor, InvalidHex),
 )
import Utils (lbshow)

type Api = "fees" :> QueryParam' '[Required] "tx" Cbor :> Get '[JSON] Fee

app :: Env -> Application
app = serve api . appServer

appServer :: Env -> Server Api
appServer env = hoistServer api appHandler server
  where
    appHandler :: forall (a :: Type). AppM a -> Handler a
    appHandler (AppM x) = tryServer x >>= either handleError pure
      where
        tryServer ::
          ReaderT Env IO a ->
          Handler (Either CardanoBrowserServerError a)
        tryServer =
          liftIO
            . try @_ @CardanoBrowserServerError
            . flip runReaderT env

        handleError ::
          CardanoBrowserServerError ->
          Handler a
        handleError (FeeEstimate fe) = case fe of
          InvalidCbor ic -> throwError err400 {errBody = lbshow ic}
          InvalidHex ih -> throwError err400 {errBody = LC8.pack ih}

api :: Proxy Api
api = Proxy

server :: ServerT Api AppM
server = estimateTxFees

apiDocs :: Docs.API
apiDocs = Docs.docs api

getTransactionFeeEstimate :: Cbor -> ClientM Fee
getTransactionFeeEstimate = client api
