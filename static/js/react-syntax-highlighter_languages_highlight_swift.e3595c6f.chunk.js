(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[3180],{7689:function(e,n,t){var a=t(4704).default,r=t(861).default;function o(e){return e?"string"===typeof e?e:e.source:null}function i(e){return c("(?=",e,")")}function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.map((function(e){return o(e)})).join("")}function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return"("+n.map((function(e){return o(e)})).join("|")+")"}var s=function(e){return c(/\b/,e,/\w$/.test(e)?/\b/:/\B/)},l=["Protocol","Type"].map(s),p=["init","self"].map(s),d=["Any","Self"],f=["associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],m=["false","nil","true"],b=["assignment","associativity","higherThan","left","lowerThan","none","right"],y=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],h=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],F=u(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),v=u(F,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),w=c(F,v,"*"),g=u(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),x=u(g,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),A=c(g,x,"*"),E=c(/[A-Z]/,x,"*"),_=["autoclosure",c(/convention\(/,u("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",c(/objc\(/,A,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],N=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];e.exports=function(e){var n={match:/\s+/,relevance:0},t=e.COMMENT("/\\*","\\*/",{contains:["self"]}),o=[e.C_LINE_COMMENT_MODE,t],F={className:"keyword",begin:c(/\./,i(u.apply(void 0,r(l).concat(r(p))))),end:u.apply(void 0,r(l).concat(r(p))),excludeBegin:!0},g={match:c(/\./,u.apply(void 0,f)),relevance:0},C=f.filter((function(e){return"string"===typeof e})).concat(["_|0"]),M=f.filter((function(e){return"string"!==typeof e})).concat(d).map(s),S={variants:[{className:"keyword",match:u.apply(void 0,r(M).concat(r(p)))}]},k={$pattern:u(/\b\w+/,/#\w+/),keyword:C.concat(y),literal:m},D=[F,g,S],B=[{match:c(/\./,u.apply(void 0,h)),relevance:0},{className:"built_in",match:c(/\b/,u.apply(void 0,h),/(?=\()/)}],I={match:/->/,relevance:0},O=[I,{className:"operator",relevance:0,variants:[{match:w},{match:"\\.(\\.|".concat(v,")+")}]}],T="([0-9]_*)+",L="([0-9a-fA-F]_*)+",P={className:"number",relevance:0,variants:[{match:"\\b(".concat(T,")(\\.(").concat(T,"))?")+"([eE][+-]?(".concat(T,"))?\\b")},{match:"\\b0x(".concat(L,")(\\.(").concat(L,"))?")+"([pP][+-]?(".concat(T,"))?\\b")},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{className:"subst",variants:[{match:c(/\\/,e,/[0\\tnr"']/)},{match:c(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}},j=function(){return{className:"subst",match:c(/\\/,arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",/[\t ]*(?:[\r\n]|\r\n)/)}},$=function(){return{className:"subst",label:"interpol",begin:c(/\\/,arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",/\(/),end:/\)/}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{begin:c(e,/"""/),end:c(/"""/,e),contains:[K(e),j(e),$(e)]}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{begin:c(e,/"/),end:c(/"/,e),contains:[K(e),$(e)]}},q={className:"string",variants:[z(),z("#"),z("##"),z("###"),U(),U("#"),U("##"),U("###")]},Z={match:c(/`/,A,/`/)},G=[Z,{className:"variable",match:/\$\d+/},{className:"variable",match:"\\$".concat(x,"+")}],H=[{match:/(@|#)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:N,contains:[].concat(O,[P,q])}]}},{className:"keyword",match:c(/@/,u.apply(void 0,_))},{className:"meta",match:c(/@/,A)}],R={match:i(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:c(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,x,"+")},{className:"type",match:E,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:c(/\s+&\s+/,i(E)),relevance:0}]},V={begin:/</,end:/>/,keywords:k,contains:[].concat(o,D,H,[I,R])};R.contains.push(V);var W,X={begin:/\(/,end:/\)/,relevance:0,keywords:k,contains:["self",{match:c(A,/\s*:/),keywords:"_|0",relevance:0}].concat(o,D,B,O,[P,q],G,H,[R])},J={beginKeywords:"func",contains:[{className:"title",match:u(Z.match,A,w),endsParent:!0,relevance:0},n]},Q={begin:/</,end:/>/,contains:[].concat(o,[R])},Y={begin:/\(/,end:/\)/,keywords:k,contains:[{begin:u(i(c(A,/\s*:/)),i(c(A,/\s+/,A,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:A}]}].concat(o,D,O,[P,q],H,[R,X]),endsParent:!0,illegal:/["']/},ee={className:"function",match:i(/\bfunc\b/),contains:[J,Q,Y,n],illegal:[/\[/,/%/]},ne={className:"function",match:/\b(subscript|init[?!]?)\s*(?=[<(])/,keywords:{keyword:"subscript init init? init!",$pattern:/\w+[?!]?/},contains:[Q,Y,n],illegal:/\[|%/},te={beginKeywords:"operator",end:e.MATCH_NOTHING_RE,contains:[{className:"title",match:w,endsParent:!0,relevance:0}]},ae={beginKeywords:"precedencegroup",end:e.MATCH_NOTHING_RE,contains:[{className:"title",match:E,relevance:0},{begin:/{/,end:/}/,relevance:0,endsParent:!0,keywords:[].concat(b,m),contains:[R]}]},re=a(q.variants);try{for(re.s();!(W=re.n()).done;){var oe=W.value.contains.find((function(e){return"interpol"===e.label}));oe.keywords=k;var ie=[].concat(D,B,O,[P,q],G);oe.contains=[].concat(r(ie),[{begin:/\(/,end:/\)/,contains:["self"].concat(r(ie))}])}}catch(ce){re.e(ce)}finally{re.f()}return{name:"Swift",keywords:k,contains:[].concat(o,[ee,ne,{className:"class",beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,keywords:k,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})].concat(D)},te,ae,{beginKeywords:"import",end:/$/,contains:[].concat(o),relevance:0}],D,B,O,[P,q],G,H,[R,X])}}},3897:function(e){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,n,t){var a=t(3897);e.exports=function(e){if(Array.isArray(e))return a(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4704:function(e,n,t){var a=t(6116);e.exports=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=a(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw i}}}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,n,t){var a=t(3405),r=t(9498),o=t(6116),i=t(2281);e.exports=function(e){return a(e)||r(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,n,t){var a=t(3897);e.exports=function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_swift.e3595c6f.chunk.js.map