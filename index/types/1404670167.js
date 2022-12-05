// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1404670167"] = [{"values":[{"sourceSpan":{"start":[52,1],"name":"src/Internal/ReindexRedeemers.purs","end":[55,57]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"reindexSpentScriptRedeemers'","moduleName":"Ctl.Internal.ReindexRedeemers","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Transaction"],"TransactionInput"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","ReindexRedeemers"],"RedeemersTxIn"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM"],"QueryM"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","ReindexRedeemers"],"ReindexErrors"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","ReindexRedeemers"],"RedeemersTxIn"]}]}}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[42,1],"name":"src/Internal/ReindexRedeemers.purs","end":[45,54]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"reindexSpentScriptRedeemers","moduleName":"Ctl.Internal.ReindexRedeemers","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Transaction"],"TransactionInput"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","ReindexRedeemers"],"RedeemersTxIn"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM"],"QueryM"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","ReindexRedeemers"],"ReindexErrors"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Redeemer"]}]}}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reindex the `Spend` redeemers. Since we insert to an ordered array, we must\nreindex the redeemers with such inputs. This must be crucially called after\nbalancing when all inputs are in place so they cannot be reordered.\n"}],"tag":"SearchResult"}]