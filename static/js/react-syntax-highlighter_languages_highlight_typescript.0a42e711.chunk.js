(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[460],{4888:function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",a=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function s(e){return i("(?=",e,")")}function i(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return n.map((function(e){return(n=e)?"string"===typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){var c=n,o={$pattern:n,keyword:a.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]),literal:t,built_in:r.concat(["any","void","number","boolean","string","object","never","enum"])},l={className:"meta",begin:"@"+c},b=function(e,n,a){var t=e.contains.findIndex((function(e){return e.label===n}));if(-1===t)throw new Error("can not find mode to replace");e.contains.splice(t,1,a)},d=function(e){var c=n,o="<>",l="</>",b={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:function(e,n){var a=e[0].length+e.index,t=e.input[a];"<"!==t?">"===t&&(function(e,n){var a=n.after,t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,a)}(e,{after:a})||n.ignoreMatch()):n.ignoreMatch()}},d={$pattern:n,keyword:a,literal:t,built_in:r},g="[0-9](_?[0-9])*",u="\\.(".concat(g,")"),E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:"(\\b(".concat(E,")((").concat(u,")|\\.)?|(").concat(u,"))")+"[eE][+-]?(".concat(g,")\\b")},{begin:"\\b(".concat(E,")\\b((").concat(u,")\\b|\\.)?|(").concat(u,")\\b")},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:d,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"css"}},_={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,m]},N={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},A=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,y,_,f,e.REGEXP_MODE];m.contains=A.concat({begin:/\{/,end:/\}/,keywords:d,contains:["self"].concat(A)});var v=[].concat(N,m.contains),w=v.concat([{begin:/\(/,end:/\)/,keywords:d,contains:["self"].concat(v)}]),O={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:w};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:d,exports:{PARAMS_CONTAINS:w},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,y,_,N,f,{begin:i(/[{,\n]\s*/,s(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,c+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:c+s("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[N,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:w}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:o,end:l},{begin:b.begin,"on:begin":b.isTrulyOpeningTag,end:b.end}],subLanguage:"xml",contains:[{begin:b.begin,end:b.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:d,contains:["self",e.inherit(e.TITLE_MODE,{begin:c}),O],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[O,e.inherit(e.TITLE_MODE,{begin:c})]},{variants:[{begin:"\\."+c},{begin:"\\$"+c}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:c}),"self",O]},{begin:"(get|set)\\s+(?="+c+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:c}),{begin:/\(\)/},O]},{begin:/\$[(.]/}]}}(e);return Object.assign(d.keywords,o),d.exports.PARAMS_CONTAINS.push(l),d.contains=d.contains.concat([l,{beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"}]),b(d,"shebang",e.SHEBANG()),b(d,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),d.contains.find((function(e){return"function"===e.className})).relevance=0,Object.assign(d,{name:"TypeScript",aliases:["ts","tsx"]}),d}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_typescript.0a42e711.chunk.js.map