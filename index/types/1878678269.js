// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1878678269"] = [{"values":[{"sourceSpan":{"start":[26,3],"name":".spago/untagged-union/v0.3.0/src/Untagged/TypeCheck.purs","end":[26,50]},"score":0,"packageInfo":{"values":["untagged-union"],"tag":"Package"},"name":"hasRuntimeType","moduleName":"Untagged.TypeCheck","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Untagged","TypeCheck"],"HasRuntimeType"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Untagged","TypeCheck"],"HasRuntimeType"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[232,1],"name":".spago/quickcheck/v7.1.0/src/Test/QuickCheck/Gen.purs","end":[232,44]},"score":17,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"evalGen","moduleName":"Test.QuickCheck.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"GenState"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a random generator, keeping only the randomly-generated result\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[10,1],"name":".spago/foreign-object/v3.0.0/src/Foreign/Object/Unsafe.purs","end":[10,64]},"score":10,"packageInfo":{"values":["foreign-object"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Foreign.Object.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely get the value for a key in a object.\n\nThis function does not check whether the key exists in the object.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[111,1],"name":".spago/sequences/v3.0.2/src/Data/FingerTree/Digit.purs","end":[111,56]},"score":0,"packageInfo":{"values":["sequences"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Data.FingerTree.Digit","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","FingerTree","Digit"],"Digit"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[1288,1],"name":".spago/arrays/v6.0.1/src/Data/Array.purs","end":[1288,56]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Find the element of an array at the specified index.\n\n```purescript\nunsafePartial $ unsafeIndex [\"a\", \"b\", \"c\"] 1 = \"b\"\n```\n\nUsing `unsafeIndex` with an out-of-range index will not immediately raise a runtime error.\nInstead, the result will be undefined. Most attempts to subsequently use the result will\ncause a runtime error, of course, but this is not guaranteed, and is dependent on the backend;\nsome programs will continue to run as if nothing is wrong. For example, in the JavaScript backend,\nthe expression `unsafePartial (unsafeIndex [true] 1)` has type `Boolean`;\nsince this expression evaluates to `undefined`, attempting to use it in an `if` statement will cause\nthe else branch to be taken.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[558,1],"name":".spago/arrays/v6.0.1/src/Data/Array/NonEmpty.purs","end":[558,64]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[354,1],"name":".spago/aeson/bfd8f4dcd0522a076320f9dc710c24817438e02e/src/Aeson.purs","end":[358,7]},"score":0,"packageInfo":{"values":["aeson"],"tag":"Package"},"name":"caseAeson","moduleName":"Aeson","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Aeson"],"AesonCases"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]