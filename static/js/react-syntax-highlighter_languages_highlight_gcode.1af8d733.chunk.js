(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[7609],{7285:function(e){e.exports=function(e){var a={$pattern:"[A-Z_][A-Z0-9_.]*",keyword:"IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR"},n=e.inherit(e.C_NUMBER_MODE,{begin:"([-+]?((\\.\\d+)|(\\d+)(\\.\\d*)?))|"+e.C_NUMBER_RE}),s=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT(/\(/,/\)/),n,e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"name",begin:"([G])([0-9]+\\.?[0-9]?)"},{className:"name",begin:"([M])([0-9]+\\.?[0-9]?)"},{className:"attr",begin:"(VC|VS|#)",end:"(\\d+)"},{className:"attr",begin:"(VZOFX|VZOFY|VZOFZ)"},{className:"built_in",begin:"(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",contains:[n],end:"\\]"},{className:"symbol",variants:[{begin:"N",end:"\\d+",illegal:"\\W"}]}];return{name:"G-code (ISO 6983)",aliases:["nc"],case_insensitive:!0,keywords:a,contains:[{className:"meta",begin:"%"},{className:"meta",begin:"([O])([0-9]+)"}].concat(s)}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_gcode.1af8d733.chunk.js.map