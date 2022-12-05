// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1267484798"] = [{"values":[{"sourceSpan":{"start":[135,1],"name":"src/Internal/Transaction.purs","end":[136,78]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"attachNativeScript","moduleName":"Ctl.Internal.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","NativeScript"],"NativeScript"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Transaction"],"ModifyTxError"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Transaction"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[122,1],"name":"src/Internal/Transaction.purs","end":[123,78]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"attachPlutusScript","moduleName":"Ctl.Internal.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Scripts"],"PlutusScript"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Transaction"],"ModifyTxError"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Transaction"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attach a `PlutusScript` to a transaction by modifying its existing witness\nset\n\nFails if either the script or updated witness set cannot be converted\nduring (de-)serialization\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[106,1],"name":"src/Internal/Transaction.purs","end":[107,74]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"attachRedeemer","moduleName":"Ctl.Internal.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Redeemer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Transaction"],"ModifyTxError"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Transaction"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attach a `Redeemer` to a transaction by modifying its existing witness set.\nNote that this is the `Types.Transaction` representation of a redeemer and\nnot a wrapped `PlutusData`.\nFails if either the redeemer or updated witness set cannot be converted\nduring (de-)serialization\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[83,1],"name":"src/Internal/Transaction.purs","end":[83,81]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"attachDatum","moduleName":"Ctl.Internal.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Datum"],"Datum"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Transaction"],"ModifyTxError"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Transaction"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attach a `Datum` to a transaction by modifying its existing witness set.\nFails if either the datum or updated witness set cannot be converted during\n(de-)serialization\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[470,1],"name":"src/Internal/Plutip/Server.purs","end":[473,57]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"startPlutipCluster","moduleName":"Ctl.Internal.Plutip.Server","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutip","Types"],"PlutipConfig"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutip","Types"],"InitialUTxODistribution"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet","Key"],"PrivatePaymentKey"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutip","Types"],"ClusterStartupParameters"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Start the plutip cluster, initializing the state with the given\nutxo distribution. Also initializes an extra payment key (aka\n`ourKey`) with some utxos for use with further plutip\nsetup. `ourKey` has funds proportional to the total amount of the\nutxos in the passed distribution, so it can be used to handle\ntransaction fees.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[868,1],"name":"src/Internal/Deserialization/Transaction.purs","end":[871,45]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"_unpackWithdrawals","moduleName":"Ctl.Internal.Deserialization.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","FfiHelpers"],"ContainerHelper"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"Withdrawals"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Address"],"RewardAddress"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","BigNum"],"BigNum"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[883,1],"name":"src/Internal/Deserialization/Transaction.purs","end":[884,75]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"_unpackMintAssets","moduleName":"Ctl.Internal.Deserialization.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","FfiHelpers"],"ContainerHelper"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"MintAssets"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"AssetName"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Int"],"Int"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[880,1],"name":"src/Internal/Deserialization/Transaction.purs","end":[881,73]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"_unpackMint","moduleName":"Ctl.Internal.Deserialization.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","FfiHelpers"],"ContainerHelper"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"Mint"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Hash"],"ScriptHash"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"MintAssets"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[762,1],"name":"src/Internal/Deserialization/Transaction.purs","end":[765,52]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"_unpackMetadatums","moduleName":"Ctl.Internal.Deserialization.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","FfiHelpers"],"ContainerHelper"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"GeneralTransactionMetadata"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","BigNum"],"BigNum"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"TransactionMetadatum"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[716,1],"name":"src/Internal/Deserialization/Transaction.purs","end":[719,66]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"_unpackMetadataMap","moduleName":"Ctl.Internal.Deserialization.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","FfiHelpers"],"ContainerHelper"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"MetadataMap"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"TransactionMetadatum"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"TransactionMetadatum"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[711,1],"name":"src/Internal/Deserialization/Transaction.purs","end":[712,78]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"_unpackCostModels","moduleName":"Ctl.Internal.Deserialization.Transaction","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","FfiHelpers"],"ContainerHelper"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"Costmdls"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"Language"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"CostModel"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[142,1],"name":"src/Internal/BalanceTx/BalanceTx.purs","end":[145,57]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"balanceTxWithConstraints","moduleName":"Ctl.Internal.BalanceTx","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Constraints"],"BalanceTxConstraintsBuilder"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM"],"QueryM"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Error"],"BalanceTxError"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Types"],"FinalizedTransaction"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Balances an unbalanced transaction using the specified balancer\nconstraints.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[124,1],"name":"src/Internal/BalanceTx/ExUnitsAndMinFee.purs","end":[127,51]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"evalExUnitsAndMinFee","moduleName":"Ctl.Internal.BalanceTx.ExUnitsAndMinFee","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Types"],"PrebalancedTransaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"UtxoMap"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Types"],"BalanceTxM"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"UnattachedUnbalancedTx"]},{"tag":"TypeConstructor","contents":[["Data","BigInt"],"BigInt"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[157,1],"name":".spago/affjax/v12.0.0/src/Affjax.purs","end":[157,68]},"score":0,"packageInfo":{"values":["affjax"],"tag":"Package"},"name":"patch_","moduleName":"Affjax","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Affjax"],"URL"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Affjax","RequestBody"],"RequestBody"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Affjax"],"Error"]}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Makes a `PATCH` request to the specified URL with the option to send data\nand ignores the response body.\n"}],"tag":"SearchResult"}]