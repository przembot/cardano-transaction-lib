// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["135774306"] = [{"values":[{"sourceSpan":{"start":[53,1],"name":"src/Contract/Test/Blockfrost.purs","end":[59,4]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"BlockfrostKeySetup","moduleName":"Contract.Test.Blockfrost","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["privateKeySources",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["payment",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet","Spec"],"PrivatePaymentKeySource"]},{"tag":"RCons","contents":["stake",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet","Spec"],"PrivateStakeKeySource"]}]},{"tag":"REmpty","contents":{}}]}]}]},{"tag":"RCons","contents":["testKeysDirectory",{"tag":"TypeConstructor","contents":[["Prim"],"String"]},{"tag":"REmpty","contents":{}}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"All parameters that are needed to run Contract tests using\nBlockfrost API.\n\nIncludes:\n\n- Private payment and (optionally) stake keys\n- A directory to store temporary private keys that will be used in tests.\n  In case of a sudden test interruption, funds will not be lost because\n  the private keys will be saved to files.\n"}],"tag":"SearchResult"}]