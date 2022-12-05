// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["953928661"] = [{"values":[{"sourceSpan":{"start":[425,1],"name":".spago/foldable-traversable/v5.0.1/src/Data/Foldable.purs","end":[425,72]},"score":24,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"findMap","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Try to find an element in a data structure which satisfies a predicate mapping.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[59,1],"name":".spago/safely/v4.0.1/src/Control/Safely.purs","end":[59,86]},"score":0,"packageInfo":{"values":["safely"],"tag":"Package"},"name":"traverse_","moduleName":"Control.Safely","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Safely traverse a foldable container.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[60,1],"name":".spago/prelude/v5.0.1/src/Control/Bind.purs","end":[60,64]},"score":83,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"bindFlipped","moduleName":"Control.Bind","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Bind"],"Bind"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`bindFlipped` is `bind` with its arguments reversed. For example:\n\n```purescript\nprint =<< random\n```\n"}],"tag":"SearchResult"}]