(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(7),r=(n(0),n(241)),s={id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},o={unversionedId:"patterns/instantiate_objects/overview",id:"patterns/instantiate_objects/overview",isDocsHomePage:!1,title:"Instantiating objects with Hydra",description:"Example applications",source:"@site/docs/patterns/instantiate_objects/overview.md",slug:"/patterns/instantiate_objects/overview",permalink:"/docs/next/patterns/instantiate_objects/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/instantiate_objects/overview.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1607379997,sidebar_label:"Overview",sidebar:"docs",previous:{title:"Config Store API",permalink:"/docs/next/tutorials/structured_config/config_store"},next:{title:"Config files example",permalink:"/docs/next/patterns/instantiate_objects/config_files"}},l=[{value:"Simple usage",id:"simple-usage",children:[]},{value:"Recursive instantiation",id:"recursive-instantiation",children:[]},{value:"Disable recursive instantiation",id:"disable-recursive-instantiation",children:[]},{value:"Parameter conversion strategies",id:"parameter-conversion-strategies",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/instantiate"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20applications-informational",alt:"Example applications"})))),Object(r.b)("p",null,"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),Object(r.b)("p",null,"Hydra provides ",Object(r.b)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()")," (and its alias ",Object(r.b)("inlineCode",{parentName:"p"},"hydra.utils.call()"),") for instantiating objects and calling functions. Prefer ",Object(r.b)("inlineCode",{parentName:"p"},"instantiate")," for creating objects and ",Object(r.b)("inlineCode",{parentName:"p"},"call")," for invoking functions."),Object(r.b)("p",null,"Call/instantiate supports:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Constructing an object by calling the ",Object(r.b)("inlineCode",{parentName:"li"},"__init__")," method"),Object(r.b)("li",{parentName:"ul"},"Calling functions, static functions, class methods and other callable global objects")),Object(r.b)("details",null,Object(r.b)("summary",null,"Instantiate API (Expand for details)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'def instantiate(config: Any, *args: Any, **kwargs: Any) -> Any:\n    """\n    :param config: An config object describing what to call and what params to use.\n                   In addition to the parameters, the config must contain:\n                   _target_ : target class or callable name (str)\n                   And may contain:\n                   _recursive_: Construct nested objects as well (bool).\n                                True by default.\n                                may be overridden via a _recursive_ key in\n                                the kwargs\n                   _convert_: Conversion strategy\n                        none    : Passed objects are DictConfig and ListConfig, default\n                        partial : Passed objects are converted to dict and list, with\n                                  the exception of Structured Configs (and their fields).\n                        all     : Passed objects are dicts, lists and primitives without\n                                  a trace of OmegaConf containers\n    :param args: Optional positional parameters pass-through\n    :param kwargs: Optional named parameters to override\n                   parameters in the config object. Parameters not present\n                   in the config objects are being passed as is to the target.\n    :return: if _target_ is a class name: the instantiated object\n             if _target_ is a callable: the return value of the call\n    """\n\n# Alias for instantiate\ncall = instantiate\n'))),Object(r.b)("br",null),Object(r.b)("p",null,"The config passed to these functions must have a key called ",Object(r.b)("inlineCode",{parentName:"p"},"_target_"),", with the value of a fully qualified class name, class method, static method or callable.",Object(r.b)("br",{parentName:"p"}),"\n","Any additional parameters are passed as keyword arguments to the target.\nFor convenience, ",Object(r.b)("inlineCode",{parentName:"p"},"None")," config results in a ",Object(r.b)("inlineCode",{parentName:"p"},"None")," object."),Object(r.b)("h3",{id:"simple-usage"},"Simple usage"),Object(r.b)("p",null,"Your application might have an Optimizer class:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Example class"',title:'"Example','class"':!0}),"class Optimizer:\n    algo: str\n    lr: float\n\n    def __init__(self, algo: str, lr: float) -> None:\n        self.algo = algo\n        self.lr = lr\n")),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Config"',title:'"Config"'}),"optimizer:\n  _target_: my_app.Optimizer\n  algo: SGD\n  lr: 0.01\n\n\n\n\n"))),Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'}),"opt = instantiate(cfg.optimizer)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.01)\n\n# override parameters on the call-site\nopt = instantiate(cfg.optimizer, lr=0.2)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.2)\n")))),Object(r.b)("h3",{id:"recursive-instantiation"},"Recursive instantiation"),Object(r.b)("p",null,"Let's add a Dataset and a Trainer class. The trainer holds a Dataset and an Optimizer instances."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Additional classes"',title:'"Additional','classes"':!0}),"class Dataset:\n    name: str\n    path: str\n\n    def __init__(self, name: str, path: str) -> None:\n        self.name = name\n        self.path = path\n\n\nclass Trainer:\n    def __init__(self, optimizer: Optimizer, dataset: Dataset) -> None:\n        self.optimizer = optimizer\n        self.dataset = dataset\n")),Object(r.b)("p",null,"With the following config, you can instantiate the whole thing with a single call:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Example config"',title:'"Example','config"':!0}),"trainer:\n  _target_: my_app.Trainer\n  optimizer:\n    _target_: my_app.Optimizer\n    algo: SGD\n    lr: 0.01\n  dataset:\n    _target_: my_app.Dataset\n    name: Imagenet\n    path: /datasets/imagenet\n")),Object(r.b)("p",null,"Hydra will instantiate nested objects recursively by default."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"trainer = instantiate(cfg.trainer)\nprint(trainer)\n# Trainer(\n#  optimizer=Optimizer(algo=SGD,lr=0.01),\n#  dataset=Dataset(name=Imagenet, path=/datasets/imagenet)\n# )\n")),Object(r.b)("p",null,"You can override parameters for nested objects:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'trainer = instantiate(\n    cfg.trainer,\n    optimizer={"lr": 0.3},\n    dataset={"name": "cifar10", "path": "/datasets/cifar10"},\n)\nprint(trainer)\n# Trainer(\n#   optimizer=Optimizer(algo=SGD,lr=0.3),\n#   dataset=Dataset(name=cifar10, path=/datasets/cifar10)\n# )\n')),Object(r.b)("h3",{id:"disable-recursive-instantiation"},"Disable recursive instantiation"),Object(r.b)("p",null,"You can disable recursive instantiation by setting ",Object(r.b)("inlineCode",{parentName:"p"},"_recursive_")," to ",Object(r.b)("inlineCode",{parentName:"p"},"False")," in the config node or in the call-site\nIn that case the Trainer object will receive an OmegaConf DictConfig for nested dataset and optimizer instead of the instantiated objects."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"optimizer = instantiate(cfg.trainer, _recursive_=False)\nprint(optimizer)\n")),Object(r.b)("p",null,"Output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Trainer(\n  optimizer={\n    '_target_': 'my_app.Optimizer', 'algo': 'SGD', 'lr': 0.01\n  },\n  dataset={\n    '_target_': 'my_app.Dataset', 'name': 'Imagenet', 'path': '/datasets/imagenet'\n  }\n)\n")),Object(r.b)("h2",{id:"parameter-conversion-strategies"},"Parameter conversion strategies"),Object(r.b)("p",null,"By default, the parameters passed to the target are either primitives (int, float, bool etc) or",Object(r.b)("br",{parentName:"p"}),"\n","OmegaConf containers (DictConfig, ListConfig).\nOmegaConf containers have many advantages over primitive dicts and lists but in some cases\nit's desired to pass a real dicts and lists (for example, for performance reasons)."),Object(r.b)("p",null,"You can change the parameter conversion strategy using the ",Object(r.b)("inlineCode",{parentName:"p"},"_convert_")," parameter (in your config or the call-site).\nSupported values are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"none")," : Default behavior, Use OmegaConf containers"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"partial")," : Convert OmegaConf containers to dict and list, except Structured Configs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"all")," : Convert everything to primitive containers")),Object(r.b)("p",null,"Note that the conversion strategy applies to all the parameters passed to the target."))}p.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(s,".").concat(d)]||b[d]||m[d]||r;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);