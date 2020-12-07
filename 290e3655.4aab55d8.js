(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{241:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),s=n,y=d["".concat(a,".").concat(s)]||d[s]||b[s]||i;return r?o.a.createElement(y,c(c({ref:t},p),{},{components:r})):o.a.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(7),i=(r(0),r(241)),a={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},c={unversionedId:"tutorials/basic/running_your_app/working_directory",id:"tutorials/basic/running_your_app/working_directory",isDocsHomePage:!1,title:"Output/Working directory",description:"Example",source:"@site/docs/tutorials/basic/running_your_app/3_working_directory.md",slug:"/tutorials/basic/running_your_app/working_directory",permalink:"/docs/next/tutorials/basic/running_your_app/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/running_your_app/3_working_directory.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1607379997,sidebar_label:"Output/Working directory",sidebar:"docs",previous:{title:"Multi-run",permalink:"/docs/next/tutorials/basic/running_your_app/multi-run"},next:{title:"Logging",permalink:"/docs/next/tutorials/basic/running_your_app/logging"}},u=[{value:"Disabling output subdir",id:"disabling-output-subdir",children:[]},{value:"Original working directory",id:"original-working-directory",children:[]}],p={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/basic/running_your_hydra_app/3_working_directory"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(i.b)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that working directory."),Object(i.b)("p",null,"The working directory is used to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),Object(i.b)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),Object(i.b)("p",null,"Every time you run the app, a new working directory is created:"),Object(i.b)("p",null,"Python file: ",Object(i.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'import os\nfrom omegaconf import DictConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),Object(i.b)("p",null,"Let's take a look at one of the working directories:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),Object(i.b)("p",null,"We have the Hydra output directory (",Object(i.b)("inlineCode",{parentName:"p"},".hydra")," by default) and the application log file.\nInside the configuration output directory we have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),Object(i.b)("p",null,"And in the main output directory:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),Object(i.b)("h3",{id:"disabling-output-subdir"},"Disabling output subdir"),Object(i.b)("p",null,"You can change the ",Object(i.b)("inlineCode",{parentName:"p"},".hydra")," subdirectory name by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.output_subdir"),".\nYou can disable its creation by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.output_subdir")," to ",Object(i.b)("inlineCode",{parentName:"p"},"null"),". "),Object(i.b)("h3",{id:"original-working-directory"},"Original working directory"),Object(i.b)("p",null,"You can still access the original working directory if you need to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import os\nfrom omegaconf import DictConfig\nimport hydra\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    print(f\"Current working directory : {os.getcwd()}\")\n    print(f\"Orig working directory    : {hydra.utils.get_original_cwd()}\")\n    print(f\"to_absolute_path('foo')   : {hydra.utils.to_absolute_path('foo')}\")\n    print(f\"to_absolute_path('/foo')  : {hydra.utils.to_absolute_path('/foo')}\")\n\nif __name__ == \"__main__\":\n    my_app()\n\n\n$ python examples/tutorial/8_working_directory/original_cwd.py\nCurrent working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path('foo')    : /Users/omry/dev/hydra/foo\nto_absolute_path('/foo')   : /foo\n")),Object(i.b)("p",null,"Working directory can be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/configure_hydra/workdir"}),"customized"),"."))}l.isMDXComponent=!0}}]);