(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[7287],{2569:function(e){e.exports=function(e){var n="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",a="\\|[^]*?\\|",i="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",b={className:"literal",begin:"\\b(t{1}|nil)\\b"},s={className:"number",variants:[{begin:i,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+i+" +"+i,end:"\\)"}]},l=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),g=e.COMMENT(";","$",{relevance:0}),t={begin:"\\*",end:"\\*"},c={className:"symbol",begin:"[:&]"+n},r={begin:n,relevance:0},d={begin:a},o={contains:[s,l,t,c,{begin:"\\(",end:"\\)",contains:["self",b,l,s,r]},r],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+a}]},u={variants:[{begin:"'"+n},{begin:"#'"+n+"(::"+n+")*"}]},v={begin:"\\(\\s*",end:"\\)"},m={endsWithParent:!0,relevance:0};return v.contains=[{className:"name",variants:[{begin:n,relevance:0},{begin:a}]},m],m.contains=[o,u,v,b,s,l,g,t,c,d,r],{name:"Lisp",illegal:/\S/,contains:[s,e.SHEBANG(),b,l,g,o,u,v,r]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_lisp.d689a624.chunk.js.map