// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["789628709"] = [{"values":[{"sourceSpan":{"start":[107,1],"name":"test/Utils.purs","end":[113,9]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"measure'","moduleName":"Test.Ctl.Utils","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["d",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Effect","Class"],"MonadEffect"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"d"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[199,1],"name":".spago/record/v3.0.0/src/Record.purs","end":[205,15]},"score":7,"packageInfo":{"values":["record"],"tag":"Package"},"name":"disjointUnion","moduleName":"Record","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r3",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Nub"],"constraintArgs":[{"tag":"TypeVar","contents":"r3"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r3"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Merges two records where no labels overlap. This restriction exhibits\nbetter inference than `merge` when the resulting record type is known,\nbut one argument is not.\n\nFor example, hole `?help` is inferred to have type `{ b :: Int }` here:\n\n```purescript\ndisjointUnion { a: 5 } ?help :: { a :: Int, b :: Int }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[182,1],"name":".spago/record/v3.0.0/src/Record.purs","end":[187,15]},"score":7,"packageInfo":{"values":["record"],"tag":"Package"},"name":"union","moduleName":"Record","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r3",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r3"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Merges two records with the first record's labels taking precedence in the\ncase of overlaps. Unlike `merge`, this does not remove duplicate labels\nfrom the resulting record type. This can result in better inference for\nsome pipelines, deferring the need for a `Nub` constraint.\n\nFor example:\n\n```purescript\nunion { x: 1, y: \"y\" } { y: 2, z: true }\n :: { x :: Int, y :: String, y :: Int, z :: Boolean }\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[7,1],"name":".spago/record/v3.0.0/src/Record/Unsafe/Union.purs","end":[7,68]},"score":7,"packageInfo":{"values":["record"],"tag":"Package"},"name":"unsafeUnion","moduleName":"Record.Unsafe.Union","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r3",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r3"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[57,3],"name":".spago/prelude/v5.0.1/src/Data/Show.purs","end":[57,84]},"score":84,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"showRecordFields","moduleName":"Data.Show","info":{"values":[{"typeClassArguments":[["rowlist",null],["row",null]],"typeClass":[["Data","Show"],"ShowRecordFields"],"type":{"tag":"ForAll","contents":["rowlist",{"tag":"ForAll","contents":["row",{"tag":"ForAll","contents":["rlproxy",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"ShowRecordFields"],"constraintArgs":[{"tag":"TypeVar","contents":"rowlist"},{"tag":"TypeVar","contents":"row"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"rlproxy"},{"tag":"TypeVar","contents":"rowlist"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"row"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[106,3],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Encode/Class.purs","end":[106,74]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"gEncodeJson","moduleName":"Data.Argonaut.Encode.Class","info":{"values":[{"typeClassArguments":[["row",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}],["list",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","RowList"],"RowList"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]],"typeClass":[["Data","Argonaut","Encode","Class"],"GEncodeJson"],"type":{"tag":"ForAll","contents":["row",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["list",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","RowList"],"RowList"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["proxy",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Class"],"GEncodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"row"},{"tag":"TypeVar","contents":"list"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"row"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"list"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,1],"name":".spago/prelude/v5.0.1/src/Control/Apply.purs","end":[68,58]},"score":84,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"applySecond","moduleName":"Control.Apply","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Apply"],"Apply"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Combine two effectful actions, keeping only the result of the second.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[62,1],"name":".spago/prelude/v5.0.1/src/Control/Apply.purs","end":[62,57]},"score":84,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"applyFirst","moduleName":"Control.Apply","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Apply"],"Apply"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Combine two effectful actions, keeping only the result of the first.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[850,3],"name":".spago/aeson/bfd8f4dcd0522a076320f9dc710c24817438e02e/src/Aeson.purs","end":[851,65]},"score":0,"packageInfo":{"values":["aeson"],"tag":"Package"},"name":"gEncodeAeson","moduleName":"Aeson","info":{"values":[{"typeClassArguments":[["row",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}],["list",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","RowList"],"RowList"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]}]],"typeClass":[["Aeson"],"GEncodeAeson"],"type":{"tag":"ForAll","contents":["row",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["list",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim","RowList"],"RowList"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["proxy",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Aeson"],"GEncodeAeson"],"constraintArgs":[{"tag":"TypeVar","contents":"row"},{"tag":"TypeVar","contents":"list"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"row"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"proxy"},{"tag":"TypeVar","contents":"list"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]