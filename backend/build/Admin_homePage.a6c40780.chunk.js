"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3981],{91550:(L,y,o)=>{o.r(y),o.d(y,{default:()=>me});var e=o(67294),u=o(97132),c=o(27821),H=o(15482),P=o(49656),r=o(95489),n=o(28702);const w=o.p+"7e9af4fb7e723fcebf1f.svg";var R=o(48474);const G=t=>Object.entries(t).every(([,i])=>Object.entries(i).every(([,a])=>a));var d=o(41363),I=o(45697),l=o.n(I),W=o(96392),j=o(89285),p=o(99872);const b=({type:t,title:i,number:a,content:s,hasLine:m})=>{const{formatMessage:g}=(0,u.useIntl)();return e.createElement(n.Box,null,e.createElement(n.Flex,null,e.createElement(n.Box,{minWidth:(0,r.pxToRem)(30),marginRight:5},e.createElement(W.Z,{type:t,number:a})),e.createElement(n.Typography,{variant:"delta",as:"h3"},g(i))),e.createElement(n.Flex,{alignItems:"flex-start"},e.createElement(n.Flex,{justifyContent:"center",minWidth:(0,r.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},m&&e.createElement(j.Z,{type:t,minHeight:t===p.lW?(0,r.pxToRem)(85):(0,r.pxToRem)(65)})),e.createElement(n.Box,{marginTop:2},t===p.lW&&s)))};b.defaultProps={content:void 0,number:void 0,type:p.VM,hasLine:!0},b.propTypes={content:l().node,number:l().number,title:l().shape({id:l().string,defaultMessage:l().string}).isRequired,type:l().oneOf([p.lW,p.hx,p.VM]),hasLine:l().bool};const F=b,D=(t,i)=>t===-1||i<t?p.hx:i>t?p.VM:p.lW,C=({sections:t,currentSectionKey:i})=>{const a=t.findIndex(s=>s.key===i);return e.createElement(n.Box,null,t.map((s,m)=>e.createElement(F,{key:s.key,title:s.title,content:s.content,number:m+1,type:D(a,m),hasLine:m!==t.length-1})))};C.defaultProps={currentSectionKey:void 0},C.propTypes={sections:l().arrayOf(l().shape({key:l().string.isRequired,title:l().shape({id:l().string,defaultMessage:l().string}).isRequired,content:l().node})).isRequired,currentSectionKey:l().string};const O=C;var A=o(64729);const Z=()=>{const{guidedTourState:t,setSkipped:i}=(0,r.useGuidedTour)(),{formatMessage:a}=(0,u.useIntl)(),{trackUsage:s}=(0,r.useTracking)(),m=Object.entries(A.Z).map(([f,h])=>({key:f,title:h.home.title,content:e.createElement(r.LinkButton,{onClick:()=>s(h.home.trackingEvent),to:h.home.cta.target,endIcon:e.createElement(d.ArrowRight,null)},a(h.home.cta.title))})),v=m.map(f=>({isDone:Object.entries(t[f.key]).every(([,h])=>h),...f})).find(f=>!f.isDone)?.key,B=()=>{i(!0),s("didSkipGuidedtour")};return e.createElement(n.Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(n.Stack,{spacing:6},e.createElement(n.Typography,{variant:"beta",as:"h2"},a({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(O,{sections:m,currentSectionKey:v})),e.createElement(n.Flex,{justifyContent:"flex-end"},e.createElement(n.Button,{variant:"tertiary",onClick:B},a({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};var z=o(80994),x=o(36182);const N=(0,c.default)(d.Discord)`
  path {
    fill: #7289da !important;
  }
`,V=(0,c.default)(d.Reddit)`
  > path:first-child {
    fill: #ff4500;
  }
`,T=(0,c.default)(d.Strapi)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,$=(0,c.default)(d.Twitter)`
  path {
    fill: #1da1f2 !important;
  }
`,K=(0,c.default)(d.Discourse)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,U=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(d.Github,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(N,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(V,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement($,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(K,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(T,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(T,null),alt:"career"}],J=(0,c.default)(z.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Q=(0,c.default)(n.Grid)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,X=()=>{const{formatMessage:t}=(0,u.useIntl)(),{communityEdition:i}=(0,r.useAppInfos)(),a=[...U,{icon:e.createElement(T,null),link:i?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(n.Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(n.Box,{paddingBottom:7},e.createElement(n.Stack,{spacing:5},e.createElement(n.Stack,{spacing:3},e.createElement(n.Typography,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(n.Typography,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(x.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(d.ExternalLink,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Q,null,a.map(({icon:s,link:m,name:g})=>e.createElement(n.GridItem,{col:6,s:12,key:g},e.createElement(J,{size:"L",startIcon:s,variant:"tertiary",href:m,isExternal:!0},t(g))))))},Y=(0,c.default)(n.Typography)`
  word-break: break-word;
`,q=(0,c.default)(n.Stack)`
  align-items: flex-start;
`,S=({hasCreatedContentType:t,onCreateCT:i})=>{const{formatMessage:a}=(0,u.useIntl)();return e.createElement("div",null,e.createElement(n.Box,{paddingLeft:6,paddingBottom:10},e.createElement(q,{spacing:5},e.createElement(n.Typography,{as:"h1",variant:"alpha"},a(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(Y,{textColor:"neutral600",variant:"epsilon"},a(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(x.r,{isExternal:!0,href:"https://strapi.io/blog"},a({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(n.Button,{size:"L",onClick:i,endIcon:e.createElement(d.ArrowRight,null)},a({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};S.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},S.propTypes={hasCreatedContentType:l().bool,onCreateCT:l().func};const _=S,ee=o.p+"27d16aefee06412db90a.png",te=o.p+"bb3108f7fd1e6179bde1.svg",ne=o.p+"bb4d0d527bdfb161bc5a.svg",oe=c.default.a`
  text-decoration: none;
`,ae=(0,c.default)(n.Box)`
  background-image: url(${({backgroundImage:t})=>t});
`,ie=(0,c.default)(n.Flex)`
  background: rgba(255, 255, 255, 0.3);
`,re=()=>{const{formatMessage:t}=(0,u.useIntl)(),{trackUsage:i}=(0,r.useTracking)();return e.createElement(oe,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{i("didClickOnTryStrapiCloudSection")}},e.createElement(n.Flex,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(ae,{backgroundImage:ee,hasRadius:!0,padding:3},e.createElement(ie,{width:(0,r.pxToRem)(32),height:(0,r.pxToRem)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:te,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(n.Flex,{gap:1,direction:"column",alignItems:"start"},e.createElement(n.Flex,null,e.createElement(n.Typography,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(n.Typography,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(n.Box,{src:ne,position:"absolute",top:0,right:0,as:"img"}))))},E=c.default.a`
  text-decoration: none;
`,le=()=>{const{formatMessage:t}=(0,u.useIntl)(),{trackUsage:i}=(0,r.useTracking)(),a=s=>{i(s)};return e.createElement(n.Stack,{spacing:5},e.createElement(re,null),e.createElement(E,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonReadTheDocumentationSection")},e.createElement(r.ContentBox,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(d.InformationSquare,null),iconBackground:"primary100"})),e.createElement(E,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonCodeExampleSection")},e.createElement(r.ContentBox,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(d.CodeSquare,null),iconBackground:"warning100"})),e.createElement(E,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonTutorialSection")},e.createElement(r.ContentBox,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(d.PlaySquare,null),iconBackground:"secondary100"})),e.createElement(E,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonBlogSection")},e.createElement(r.ContentBox,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(d.FeatherSquare,null),iconBackground:"alternative100"})))};var se=function(){return window&&window.strapi&&window.strapi.isEE?o(94018).Z:o(67875).Z}(),ce=(0,c.default)(n.Box).withConfig({displayName:"HomePage__LogoContainer",componentId:"sc-1md9zz4-0"})(["position:absolute;top:0;right:0;img{width:","rem;}"],150/16),de=function(){var i=(0,R.bP)(),a=i.collectionTypes,s=i.singleTypes,m=i.isLoading,g=(0,r.useGuidedTour)(),v=g.guidedTourState,B=g.isGuidedTourVisible,f=g.isSkipped;se();var h=!G(v)&&B&&!f,pe=(0,P.useHistory)(),ue=pe.push,ge=function(M){M.preventDefault(),ue("/plugins/content-type-builder/content-types/create-content-type")},fe=(0,e.useMemo)(function(){var k=function(he){return he.filter(function(ke){return ke.isDisplayed})};return k(a).length>1||k(s).length>0},[a,s]);return m?e.createElement(r.LoadingIndicatorPage,null):e.createElement(n.Layout,null,e.createElement(u.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},function(k){return e.createElement(H.Helmet,{title:k[0]})}),e.createElement(n.Main,null,e.createElement(ce,null,e.createElement("img",{alt:"","aria-hidden":!0,src:w})),e.createElement(n.Box,{padding:10},e.createElement(n.Grid,null,e.createElement(n.GridItem,{col:8,s:12},e.createElement(_,{onCreateCT:ge,hasCreatedContentType:fe}))),e.createElement(n.Grid,{gap:6},e.createElement(n.GridItem,{col:8,s:12},h?e.createElement(Z,null):e.createElement(le,null)),e.createElement(n.GridItem,{col:4,s:12},e.createElement(X,null))))))};const me=(0,e.memo)(de)},67875:(L,y,o)=>{o.d(y,{Z:()=>u});const u=()=>null}}]);
