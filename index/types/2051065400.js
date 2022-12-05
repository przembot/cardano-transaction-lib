// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2051065400"] = [{"values":[{"sourceSpan":{"start":[130,1],"name":".spago/profunctor-lenses/v7.0.1/src/Data/Lens/Prism.purs","end":[130,57]},"score":1,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"nearly","moduleName":"Data.Lens.Prism","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Prism'"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`nearly` is a variant of `only`. Like `only`, `nearly` produces\na prism that matches\na single value. Unlike `only`, it uses a predicate you supply\ninstead of depending on `class Eq`: \n\n```purescript\nsolidWhiteFocus :: Prism' Fill Unit\nsolidWhiteFocus = nearly (Solid Color.white) predicate\n  where\n    predicate candidate =\n      color.toHexString == Color.white.toHexString\n```\n"}],"tag":"SearchResult"}]