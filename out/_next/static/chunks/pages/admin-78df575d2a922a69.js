(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{13379:function(t,e,n){"use strict";var i=n(64836);e.Z=void 0;var a=i(n(64938)),r=n(85893),u=(0,a.default)((0,r.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");e.Z=u},64938:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.createSvgIcon}});var i=n(33875)},88169:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var i=n(67294),a=n(86010),r=n(94780),u=n(98216),o=n(27623),s=n(11496),l=n(1588),c=n(34867);function d(t){return(0,c.Z)("MuiSvgIcon",t)}(0,l.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=n(85893);let f=t=>{let{color:e,fontSize:n,classes:i}=t,a={root:["root","inherit"!==e&&`color${(0,u.Z)(e)}`,`fontSize${(0,u.Z)(n)}`]};return(0,r.Z)(a,d,i)},y=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:n}=t;return[e.root,"inherit"!==n.color&&e[`color${(0,u.Z)(n.color)}`],e[`fontSize${(0,u.Z)(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,i,a,r,u,o,s,l,c,d,p,f,y,m,v,h,b;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=t.transitions)?void 0:null==(i=n.create)?void 0:i.call(n,"fill",{duration:null==(a=t.transitions)?void 0:null==(r=a.duration)?void 0:r.shorter}),fontSize:({inherit:"inherit",small:(null==(u=t.typography)?void 0:null==(o=u.pxToRem)?void 0:o.call(u,20))||"1.25rem",medium:(null==(s=t.typography)?void 0:null==(l=s.pxToRem)?void 0:l.call(s,24))||"1.5rem",large:(null==(c=t.typography)?void 0:null==(d=c.pxToRem)?void 0:d.call(c,35))||"2.1875rem"})[e.fontSize],color:null!=(p=null==(f=(t.vars||t).palette)?void 0:null==(y=f[e.color])?void 0:y.main)?p:({action:null==(m=(t.vars||t).palette)?void 0:null==(v=m.action)?void 0:v.active,disabled:null==(h=(t.vars||t).palette)?void 0:null==(b=h.action)?void 0:b.disabled,inherit:void 0})[e.color]}}),m=i.forwardRef(function(t,e){let n=(0,o.Z)({props:t,name:"MuiSvgIcon"}),{children:i,className:r,color:u="inherit",component:s="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:d=!1,titleAccess:m,viewBox:v="0 0 24 24",...h}=n,b={...n,color:u,component:s,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:d,viewBox:v},g={};d||(g.viewBox=v);let x=f(b);return(0,p.jsxs)(y,{as:s,className:(0,a.default)(x.root,r),focusable:"false",color:c,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:e,...g,...h,ownerState:b,children:[i,m?(0,p.jsx)("title",{children:m}):null]})});function v(t,e){function n(n,i){return(0,p.jsx)(m,{"data-testid":`${e}Icon`,ref:i,...n,children:t})}return n.muiName=m.muiName,i.memo(i.forwardRef(n))}m.muiName="SvgIcon"},57144:function(t,e,n){"use strict";var i=n(87596);e.Z=i.Z},33875:function(t,e,n){"use strict";n.r(e),n.d(e,{capitalize:function(){return a.Z},createChainedFunction:function(){return r},createSvgIcon:function(){return u.Z},debounce:function(){return o.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return l.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return y.Z},unstable_useId:function(){return m},unsupportedProp:function(){return v},useControlled:function(){return h.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return x.Z}});var i=n(37078),a=n(98216),r=n(49064).Z,u=n(88169),o=n(57144),s=function(t,e){return()=>null},l=n(71579),c=n(8038),d=n(5340),p=function(t,e){return()=>null},f=n(7960).Z,y=n(58974),m=n(57579).Z,v=function(t,e,n,i,a){return null},h=n(22627),b=n(2068),g=n(51705),x=n(18791);let Z={configure:t=>{i.Z.configure(t)}}},71579:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(67294),a=function(t,e){return i.isValidElement(t)&&-1!==e.indexOf(t.type.muiName)}},8038:function(t,e,n){"use strict";var i=n(57094);e.Z=i.Z},5340:function(t,e,n){"use strict";var i=n(58290);e.Z=i.Z},22627:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(67294),a=function({controlled:t,default:e,name:n,state:a="value"}){let{current:r}=i.useRef(void 0!==t),[u,o]=i.useState(e),s=i.useCallback(t=>{r||o(t)},[]);return[r?t:u,s]}},58974:function(t,e,n){"use strict";var i=n(16600);e.Z=i.Z},87596:function(t,e,n){"use strict";function i(t,e=166){let n;function i(...i){let a=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(a,e)}return i.clear=()=>{clearTimeout(n)},i}n.d(e,{Z:function(){return i}})},37207:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(96391)}])},33668:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var i=n(85893);n(67294);var a=n(83321),r=n(50657),u=n(31425),o=n(6514),s=n(58951),l=n(37645);function c(t){let{open:e,result:n,handleClose:c,onClickClose:d}=t;return(0,i.jsx)("div",{children:(0,i.jsxs)(r.Z,{open:e,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"sm",fullWidth:!0,children:[(0,i.jsx)(l.Z,{id:"alert-dialog-title",children:"Transaction Result"}),(0,i.jsx)(o.Z,{children:0!=Object.entries(n).length?(0,i.jsxs)(s.Z,{id:"alert-dialog-description",children:[(0,i.jsx)("div",{children:"트랜잭션 결과 : ".concat(n.status)}),(0,i.jsx)("div",{children:n.message})]}):(0,i.jsx)(s.Z,{id:"alert-dialog-description",children:"트랜잭션 진행 중"})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(a.Z,{onClick:d,children:"닫기"})})]})})}},96391:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var i=n(85893),a=n(67294),r=n(7297),u=n(11496),o=n(15861),s=n(83321);function l(){let t=(0,r.Z)(["\n  variant: h1;\n  align: center;\n  color: white;\n  font-size: 25px;\n  margin: 40px;\n"]);return l=function(){return t},t}function c(){let t=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 50vh;\n"]);return c=function(){return t},t}function d(){let t=(0,r.Z)(["\n  border: 1px solid #42a5f5;\n  background-color: rgba(25, 118, 210, 0.5);\n  border-radius: 30px;\n  padding: 15px;\n  color: white;\n"]);return d=function(){return t},t}let p=(0,u.ZP)(o.Z)(l()),f=(0,u.ZP)("div")(c());(0,u.ZP)(s.Z)(d());var y=n(69077),m=n(11163),v=n(89917),h=n(33668),b=n(90629);function g(){let t=(0,r.Z)(["\n  variant: h1;\n  color: white;\n  font-size: 20px;\n"]);return g=function(){return t},t}function x(){let t=(0,r.Z)(["\n  color: white;\n  font-size: 15px;\n  margin-top: 5px;\n  margin-bottom: 5px\n"]);return x=function(){return t},t}function Z(){let t=(0,r.Z)(["\n  color: black;\n  font-size: 15px;\n"]);return Z=function(){return t},t}function T(){let t=(0,r.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);return T=function(){return t},t}function w(){let t=(0,r.Z)(["\n  border: 1px solid #1976d2;\n  margin-top: 20px;\n"]);return w=function(){return t},t}function j(){let t=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: left;\n  padding: 20px;\n"]);return j=function(){return t},t}function C(){let t=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: left;\n  padding: 10px;\n  margin-top: 10px;\n"]);return C=function(){return t},t}let S=(0,u.ZP)(o.Z)(g()),M=(0,u.ZP)(o.Z)(x()),N=(0,u.ZP)(o.Z)(Z()),E=(0,u.ZP)("div")(t=>({borderWidth:1,borderRadius:20,borderColor:t.disabled?"grey":"#1976d2",color:t.disabled?"grey":"#1976d2"})),_=(0,u.ZP)("div")(T()),k=(0,u.ZP)(s.Z)(w()),I=(0,u.ZP)("div")(j()),P=(0,u.ZP)(b.Z)(C());var z=n(13379);let R=t=>{let{address:e}=t,[n,r]=(0,a.useState)(null),[u,o]=(0,a.useState)([]),[s,l]=(0,a.useState)(),[c,d]=(0,a.useState)(),[p,f]=(0,a.useState)({}),[y,m]=(0,a.useState)(!1),b=()=>{0!=Object.entries(f).length&&m(!1)},g=()=>{m(!1)};(0,a.useEffect)(()=>{async function t(){let t=await (0,v.yr)();isNaN(t)||r(Number(t))}async function n(){let t=await (0,v.Zq)(e);isNaN(t)||d(Number(t))}(async function(){let t=await (0,v.M3)();isNaN(t)||l(Number(t))})(),t(),n()},[]),(0,a.useEffect)(()=>{async function t(t){let i=await (0,v.o5)(e,t);var a="-";3==n&&(a=await (0,v.BF)(e,t)),o(t=>[...t,{name:i,voteCount:a}])}for(let i=0;i<s;i++)o([]),t(i)},[s]);let x=async()=>{if(m(!0),0==n){let t=await (0,v.l4)(e);f(t)}else if(1==n){let i=await (0,v.sj)(e);f(i)}else if(2==n){let a=await (0,v.Tx)(e);f(a)}};return(0,i.jsxs)(I,{children:[(0,i.jsx)(S,{children:" 현재 투표 정보"}),(0,i.jsx)(M,{children:"현재 투표 status"}),(0,i.jsxs)(_,{children:[(0,i.jsx)(E,{disabled:0!=n,children:"후보자 등록 진행중"}),(0,i.jsx)(z.Z,{sx:{color:"grey"}}),(0,i.jsx)(E,{disabled:1!=n,children:"후보자 등록 완료"}),(0,i.jsx)(z.Z,{sx:{color:"grey"}}),(0,i.jsx)(E,{disabled:2!=n,children:"Vote 시작"}),(0,i.jsx)(z.Z,{sx:{color:"grey"}}),(0,i.jsx)(E,{disabled:3!=n,children:"Vote 완료"})]}),(0,i.jsxs)(M,{children:["현재 등록된 후보자 수: ",s]}),(0,i.jsxs)(M,{children:["현재까지 총 투표 수: ",c]}),(0,i.jsx)(M,{children:"현재 등록된 후보자 정보"}),u.map((t,e)=>(0,i.jsxs)(P,{children:[(0,i.jsxs)(N,{children:["후보자 이름 : ",t.name]}),(0,i.jsxs)(N,{children:["현재 득표수 : ",t.voteCount]})]},e)),(0,i.jsx)(k,{disabled:3==n,onClick:x,children:"다음 투표 과정으로 넘어가기"}),(0,i.jsx)(h.Z,{open:y,result:p,handleClose:b,onClickClose:g})]})};function A(){let t=(0,m.useRouter)();(0,y.mA)({onConnect(e){let{address:n,connector:i,isReconnected:a}=e;a?u(n):t.reload()}});let[e,n]=(0,a.useState)(!1),[r,u]=(0,a.useState)(""),[o,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)({});(0,a.useEffect)(()=>{(async function(){if(""!=r){let t=await (0,v.TT)(r);console.log(t),n(t)}})(),console.log("address: ",r)},[r]);let d=()=>{0!=Object.entries(c).length&&s(!1)},b=()=>{s(!1)};return(0,i.jsxs)(f,{children:[e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{children:"관리자 페이지에 오신 것을 환영합니다"}),(0,i.jsx)(R,{address:r})]}):(0,i.jsx)(p,{children:"관리자가 아닙니다"}),(0,i.jsx)(h.Z,{open:o,result:l,handleClose:d,onClickClose:b})]})}},89917:function(t,e,n){"use strict";n.d(e,{l4:function(){return s},Tx:function(){return c},o5:function(){return y},BF:function(){return m},yr:function(){return x},TT:function(){return h},Uu:function(){return g},M$:function(){return b},M3:function(){return f},Zq:function(){return v},fR:function(){return d},sj:function(){return l},s4:function(){return p}});var i=n(1117),a=JSON.parse('[{"inputs":[{"internalType":"address","name":"_NFTTokenCA","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"candRegisteredEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum Election_step2.ElectionStatus","name":"prev","type":"uint8"},{"indexed":false,"internalType":"enum Election_step2.ElectionStatus","name":"end","type":"uint8"}],"name":"statusChangedEvent","type":"event"},{"anonymous":false,"inputs":[],"name":"voteDoneEvent","type":"event"},{"inputs":[],"name":"NFTTokenCA","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VoteNFT","outputs":[{"internalType":"contract NFTToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"electionStatus","outputs":[{"internalType":"enum Election_step2.ElectionStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endRegisterCandSession","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endVoteSession","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getCandidateName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getCandidateVoteCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getElectionStatus","outputs":[{"internalType":"enum Election_step2.ElectionStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getHasVoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getIsAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNFTTokenCA","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalCandidateNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalVoteCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"registerCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"restartVoteSession","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startVoteSession","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalCandidateNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVoteCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"candidateId","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"candidateId","type":"uint256"}],"name":"voteAndGetNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"votersToToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');let r=(0,i.gL)("wss://eth-goerli.g.alchemy.com/v2/tzC7BEXGGRYsQDD6Qw8XkCYRNx3Ve4EL"),u="0x03dEbe046471Cb09662D26cE5E29cbCe2d32645e",o=new r.eth.Contract(a,u),s=async t=>{let e=o.methods.endRegisterCandSession().encodeABI(),n=await Z(t,e);return n},l=async t=>{let e=o.methods.startVoteSession().encodeABI(),n=await Z(t,e);return n},c=async t=>{let e=o.methods.endVoteSession().encodeABI(),n=await Z(t,e);return n},d=async(t,e)=>{let n=o.methods.registerCandidate(e).encodeABI(),i=await Z(t,n);return i},p=async(t,e)=>{let n=o.methods.voteAndGetNFT(e).encodeABI(),i=await Z(t,n);return i},f=async()=>{let t=await o.methods.getTotalCandidateNum().call();return t},y=async(t,e)=>{let n=await o.methods.getCandidateName(e).call({from:t});return n},m=async(t,e)=>{let n=await o.methods.getCandidateVoteCount(e).call({from:t});return n},v=async t=>{let e=await o.methods.getTotalVoteCount().call({from:t});return e},h=async t=>{let e=await o.methods.getIsAdmin(t).call();return e},b=async t=>{let e=await o.methods.getTokenId(t).call();return console.log(e),e},g=async()=>{let t=await o.methods.getNFTTokenCA().call();return console.log(t),t},x=async()=>{let t=await o.methods.getElectionStatus().call();return t};async function Z(t,e){if(""==t)return{status:"fail",message:"\uD83D\uDCA1 Connect your Metamask wallet to vote on the blockchain."};try{let n=await window.ethereum.request({method:"eth_sendTransaction",params:[{to:u,from:t,data:e}]});return{status:"success",message:n}}catch(i){return{status:"fail",message:"\uD83D\uDE25 "+i.message}}}},89214:function(){},85568:function(){},52361:function(){},94616:function(){},64836:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},7297:function(t,e,n){"use strict";function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,{Z:function(){return i}})}},function(t){t.O(0,[8543,8764,33,2520,4027,9774,2888,179],function(){return t(t.s=37207)}),_N_E=t.O()}]);