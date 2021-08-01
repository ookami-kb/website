(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2147],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,d=p["".concat(s,".").concat(g)]||p[g]||u[g]||l;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5531:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=n(2122),i=n(9756),l=(n(7294),n(3905)),a=["components"],o={},s="Prefer Intl name",c={unversionedId:"rules/intl/prefer-intl-name",id:"rules/intl/prefer-intl-name",isDocsHomePage:!1,title:"Prefer Intl name",description:"Has auto-fix",source:"@site/docs/rules/intl/prefer-intl-name.md",sourceDirName:"rules/intl",slug:"/rules/intl/prefer-intl-name",permalink:"/docs/rules/intl/prefer-intl-name",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/intl/prefer-intl-name.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prefer single widget per file",permalink:"/docs/rules/flutter/prefer-single-widget-per-file"},next:{title:"Provide correct intl args",permalink:"/docs/rules/intl/provide-correct-intl-args"}},m=[{value:"Rule id",id:"rule-id",children:[]},{value:"Description",id:"description",children:[{value:"Example",id:"example",children:[]}]}],u={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"prefer-intl-name"},"Prefer Intl name"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,l.kt)("h2",{id:"rule-id"},"Rule id"),(0,l.kt)("p",null,"prefer-intl-name"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Recommends to use ",(0,l.kt)("inlineCode",{parentName:"p"},"${ClassName}_${ClassMemberName}")," pattern for ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," argument in ",(0,l.kt)("inlineCode",{parentName:"p"},"Intl.message()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Intl.plural()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Intl.gender()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Intl.select()")," methods."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Bad:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';\n\nclass SomeButtonI18n {\n  static final String title1 = Intl.message(\n    'One Title',\n    name: 'SomeButtonI18n_titleOne'\n  );\n\n  final String title2 = Intl.message(\n    'Two Title',\n    name: 'titleTwo'\n  );  \n\n  String get title3 => Intl.message(\n    'Three Title',\n    name: 'SomeButtonI18n_titleThree'\n  );  \n  \n  static String get title4 => Intl.message(\n    'Four Title',\n    name: 'SomeButtonI18n_titleFour'\n  ); \n  \n  String title5() => Intl.message(\n    'Five Title',\n    name: 'SomeButtonI18n_titleFive'\n  );  \n  \n  static String title6() {\n    return Intl.message(\n      'Six Title',\n      name: 'SomeButtonI18n_titleSix'\n     );\n  } \n}\n\nString title7() {\n  return Intl.message(\n    'Seven Title',\n    name: 'SomeButtonI18n_titleSeven'\n  );\n}\n\nString title8() => Intl.message(\n  'Eight Title',\n  name: 'titleEight'\n);\n")),(0,l.kt)("p",null,"Good:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';\n\nclass SomeButtonCorrectI18n {\n  static final int number = int.parse('1');\n\n  static final String title1 = Intl.message(\n    'One Title',\n    name: 'SomeButtonCorrectI18n_title1'\n  );\n\n  final String title2 = Intl.message(\n    'Two Title',\n    name: 'SomeButtonCorrectI18n_title2'\n  );  \n\n  String get title3 => Intl.message(\n    'Three Title',\n    name: 'SomeButtonCorrectI18n_title3'\n  );  \n  \n  static String get title4 => Intl.message(\n    'Four Title',\n    name: 'SomeButtonCorrectI18n_title4'\n  );   \n\n  String get title5 => Intl.message(\n    'Three Title',\n    name: 'SomeButtonCorrectI18n_title5'\n  );  \n  \n  static String get title6 => Intl.message(\n    'Four Title',\n    name: 'SomeButtonCorrectI18n_title6'\n  ); \n}\n  \nString title77() {\n  return Intl.message(\n    'Seven seven Title',\n    name: 'title77'\n   );\n}\n\nString title8() => Intl.message(\n  'Eight Title',\n  name: 'title8'\n);\n")))}p.isMDXComponent=!0}}]);