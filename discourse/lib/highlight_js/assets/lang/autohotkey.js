hljs.registerLanguage("autohotkey",function(e){var r={cN:"escape",b:"`[\\s\\S]"},c=e.C(";","$",{r:0}),n=[{cN:"built_in",b:"A_[a-zA-Z0-9]+"},{cN:"built_in",bK:"ComSpec Clipboard ClipboardAll ErrorLevel"}];return{cI:!0,k:{keyword:"Break Continue Else Gosub If Loop Return While",literal:"A true false NOT AND OR"},c:n.concat([r,e.inherit(e.QSM,{c:[r]}),c,{cN:"number",b:e.NR,r:0},{cN:"var_expand",b:"%",e:"%",i:"\\n",c:[r]},{cN:"label",c:[r],v:[{b:'^[^\\n";]+::(?!=)'},{b:'^[^\\n";]+:(?!=)',r:0}]},{b:",\\s*,",r:10}])}});