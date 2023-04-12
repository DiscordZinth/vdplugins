(function(r,o,c,a,e,g,R,i){"use strict";function h(s){const t=JSON.parse(JSON.stringify(s));for(const n in t.author)switch(n){case"id":case"username":case"usernameNormalized":case"discriminator":case"avatar":case"bot":case"system":case"publicFlags":break;default:delete t.author[n]}return t}const{ScrollView:y,Text:B,TextInput:E,Platform:S}=e.ReactNative,{OS:b}=S,C=a.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default,l=e.stylesheet.createThemedStyleSheet({codeBlock:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,fontSize:12,backgroundColor:i.semanticColors.BACKGROUND_SECONDARY,color:i.semanticColors.TEXT_NORMAL,marginTop:10,borderRadius:3,padding:10}});function N(s){let{message:t}=s;const n=e.React.useMemo(function(){return JSON.stringify(h(t),null,4)},[t.id]);return e.React.createElement(e.React.Fragment,null,e.React.createElement(y,{style:{flex:1,marginHorizontal:13,marginVertical:10}},e.React.createElement(C,{text:"Copy Raw Data",color:"brand",size:"small",onPress:function(){e.clipboard.setString(n),R.showToast("Copied data to clipboard",c.getAssetIDByName("toast_copy_link"))}}),b=="ios"?e.React.createElement(E,{style:l.codeBlock,onChange:function(){},multiline:!0,value:n}):e.React.createElement(B,{selectable:!0,style:l.codeBlock},n)))}const u=a.findByProps("openLazy","hideActionSheet"),d=a.findByProps("push","pushLazy","pop"),v=a.findByProps("getRenderCloseButton"),{default:w,getRenderCloseButton:P}=v,O=a.findByName("Icon"),{FormRow:k}=g.Forms,A=o.before("openLazy",u,function(s){const[t,n,z]=s;n==="MessageLongPressActionSheet"&&t.then(function(_){const m=o.after("default",_,function(I,D){e.React.useEffect(function(){return function(){m()}},[]);let[T,f]=D.props?.children?.props?.children?.props?.children;const p=T?.props?.message??z?.message;if(!f||!p)return;const F=function(){return e.React.createElement(w,{initialRouteName:"RawPage",goBackOnBackPress:!0,screens:{RawPage:{title:"ViewRaw",headerLeft:P(function(){return d.pop()}),render:function(){return e.React.createElement(N,{message:p})}}}})};f.push(e.React.createElement(k,{label:"View Raw",leading:e.React.createElement(O,{source:c.getAssetIDByName("ic_chat_bubble_16px")}),onPress:function(){u.hideActionSheet(),d.push(F)}}))})})}),L=function(){return A()};return r.onUnload=L,r})({},vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.metro.common,vendetta.ui.components,vendetta.ui.toasts,vendetta.ui);