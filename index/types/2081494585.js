// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2081494585"] = [{"values":[{"sourceSpan":{"start":[240,1],"name":"src/Contract/Monad.purs","end":[253,4]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ConfigParams","moduleName":"Contract.Monad","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["ogmiosConfig",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","ServerConfig"],"ServerConfig"]},{"tag":"RCons","contents":["datumCacheConfig",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","ServerConfig"],"ServerConfig"]},{"tag":"RCons","contents":["kupoConfig",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","ServerConfig"],"ServerConfig"]},{"tag":"RCons","contents":["networkId",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Address"],"NetworkId"]},{"tag":"RCons","contents":["logLevel",{"tag":"TypeConstructor","contents":[["Data","Log","Level"],"LogLevel"]},{"tag":"RCons","contents":["walletSpec",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet","Spec"],"WalletSpec"]}]},{"tag":"RCons","contents":["customLogger",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Log","Level"],"LogLevel"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Log","Message"],"Message"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}]},{"tag":"RCons","contents":["suppressLogs",{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]},{"tag":"RCons","contents":["extraConfig",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"RCons","contents":["hooks",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM"],"Hooks"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]}]}]}]}]}]},"arguments":[["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"Options to construct a `ContractEnv` indirectly. `extraConfig`\nholds additional options that will extend the resulting `ContractEnv`.\n\nUse `runContract` to run a `Contract` within an implicity constructed\n`ContractEnv` environment, or use `withContractEnv` if your application\ncontains multiple contracts that can be run in parallel, reusing the same\nenvironment (see `withContractEnv`)\n"}],"tag":"SearchResult"}]