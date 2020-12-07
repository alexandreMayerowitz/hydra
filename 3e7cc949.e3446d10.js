(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(7),a=(r(0),r(241)),i={id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},c={unversionedId:"tutorials/structured_config/intro",id:"version-1.0/tutorials/structured_config/intro",isDocsHomePage:!1,title:"Introduction to Structured Configs",description:"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the Basic Tutorial.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/0_intro.md",slug:"/tutorials/structured_config/intro",permalink:"/docs/tutorials/structured_config/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/structured_config/0_intro.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1607379997,sidebar_label:"Introduction to Structured Configs",sidebar:"version-1.0/docs",previous:{title:"Tab completion",permalink:"/docs/tutorials/basic/running_your_app/tab_completion"},next:{title:"Minimal example",permalink:"/docs/tutorials/structured_config/minimal_example"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tutorials/basic/your_first_app/simple_cli"}),"Basic Tutorial"),".\nThe examples in this tutorial are available ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/structured_configs"}),"here"),"."),Object(a.b)("p",null,"Structured Configs use Python ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3.7/library/dataclasses.html"}),"dataclasses")," to\ndescribe your configuration structure and types. They enable:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Runtime type checking")," as you compose or mutate your config "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Static type checking")," when using static type checkers (mypy, PyCharm, etc.)")),Object(a.b)("h4",{id:"structured-configs-supports"},"Structured Configs supports:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Primitive types (",Object(a.b)("inlineCode",{parentName:"li"},"int"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bool"),", ",Object(a.b)("inlineCode",{parentName:"li"},"float"),", ",Object(a.b)("inlineCode",{parentName:"li"},"str"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Enums"),") "),Object(a.b)("li",{parentName:"ul"},"Nesting of Structured Configs"),Object(a.b)("li",{parentName:"ul"},"Containers (List and Dict) containing primitives or Structured Configs"),Object(a.b)("li",{parentName:"ul"},"Optional fields")),Object(a.b)("h4",{id:"structured-configs-limitations"},"Structured Configs Limitations:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Union")," types are not supported (except ",Object(a.b)("inlineCode",{parentName:"li"},"Optional"),")"),Object(a.b)("li",{parentName:"ul"},"User methods are not supported")),Object(a.b)("h4",{id:"there-are-two-primary-patterns-for-using-structured-configs"},"There are two primary patterns for using Structured configs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"As a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/tutorials/structured_config/minimal_example"}),"config"),", in place of configuration files (often a starting place)"),Object(a.b)("li",{parentName:"ul"},"As a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/tutorials/structured_config/schema"}),"config schema")," validating configuration files (better for complex use cases)")),Object(a.b)("p",null,"With both patterns, you still get everything Hydra has to offer (config composition, Command line overrides etc).\nThis tutorial covers both. ","*",Object(a.b)("strong",{parentName:"p"},"Read it in order"),"*","."),Object(a.b)("p",null,"Hydra supports OmegaConf's Structured Configs via the ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigStore")," API.\nThis tutorial does not assume any knowledge of them.\nIt is recommended that you visit the ",Object(a.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html",target:"_blank"},"OmegaConf Structured Configs page")," to learn more later."),Object(a.b)("div",{class:"alert alert--info",role:"alert"},"1. The ConfigStore API is new and subject to change.",Object(a.b)("br",null),"2. OmegaConf's Structured Configs are new.",Object(a.b)("br",null),"Please report any issues.",Object(a.b)("br",null)),Object(a.b)("br",null))}l.isMDXComponent=!0},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);