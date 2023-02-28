"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5905],{57134:(Ve,J,d)=>{d.r(J),d.d(J,{default:()=>ze});var e=d(67294),c=d(95489),b=d(41363),n=d(28702),de=d(27361),C=d.n(de),pe=d(18721),me=d.n(pe),ue=d(18446),Q=d.n(ue),ge=d(11700),Y=d.n(ge),D=d(97132),N=d(49656),fe=d(45697),o=d.n(fe),q=d(26478),L=d(13588),h=d(27821),y=d(5002);const ye=(0,h.default)(n.Flex)`
  border-radius: 50%;
  color: ${({theme:t,isActive:a})=>a?t.colors.primary600:t.colors.neutral600};
  height: ${({theme:t})=>t.spaces[8]};
  width: ${({theme:t})=>t.spaces[8]};

  svg {
    height: ${({theme:t})=>t.spaces[5]};
    width: ${({theme:t})=>t.spaces[5]};
  }
`;function U({isActive:t}){return e.createElement(ye,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",isActive:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}U.defaultProps={isActive:!1},U.propTypes={isActive:o().bool};const _=(0,h.default)(n.Box)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,c.pxToRem)(8)};

  svg {
    width: ${(0,c.pxToRem)(10)};
    height: ${(0,c.pxToRem)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,he=(0,h.default)(n.Flex)`
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${_} {
      display: block;
    }

    ${n.Typography} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function z({component:t,dzName:a,index:l,isActive:i,isInDevelopmentMode:p,onClick:r}){const{modifiedData:u,removeComponentFromDynamicZone:x}=(0,L.Z)(),{schema:{displayName:T}}=C()(u,["components",t],{schema:{}}),E=g=>{g.stopPropagation(),x(a,l)};return e.createElement(he,{as:"button",alignItems:"center",direction:"column",className:i?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:r},e.createElement(U,{isActive:i}),e.createElement(n.Box,{marginTop:1,maxWidth:"100%"},e.createElement(n.Typography,{variant:"pi",fontWeight:"bold",ellipsis:!0},T)),p&&e.createElement(_,{as:"button",onClick:E,type:"button"},e.createElement(b.Cross,null)))}z.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},z.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const be=z,ee=h.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,c.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,c.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:l})=>a?`background-color: ${l.colors.primary200};`:t?`background-color: ${l.colors.primary200};`:`background: ${l.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function W({customRowComponent:t,component:a,isFromDynamicZone:l,isNestedInDZComponent:i,firstLoopComponentUid:p}){const{modifiedData:r}=(0,L.Z)(),{schema:{attributes:u}}=C()(r,["components",a],{schema:{attributes:[]}});return e.createElement(ee,{isChildOfDynamicZone:l,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(oe,{customRowComponent:t,items:u,targetUid:a,firstLoopComponentUid:p||a,editTarget:"components",isFromDynamicZone:l,isNestedInDZComponent:i,isSub:!0,secondLoopComponentUid:p?a:null})))}W.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},W.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const te=W,Ee=(0,h.default)(b.Plus)`
  width: ${(0,c.pxToRem)(32)};
  height: ${(0,c.pxToRem)(32)};
  padding: ${(0,c.pxToRem)(9)};
  border-radius: ${(0,c.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Te=(0,h.default)(n.Box)`
  height: ${(0,c.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Ce=(0,h.default)(n.Stack)`
  width: 100%;
  overflow-x: auto;
`,xe=(0,h.default)(n.Box)`
  padding-top: ${(0,c.pxToRem)(90)};
`,ve=(0,h.default)(n.Stack)`
  flex-shrink: 0;
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function V({customRowComponent:t,components:a,addComponent:l,name:i,targetUid:p}){const{isInDevelopmentMode:r}=(0,L.Z)(),[u,x]=(0,e.useState)(0),{formatMessage:T}=(0,D.useIntl)(),E=s=>{u!==s&&x(s)},g=()=>{l(i)};return e.createElement(ee,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Te,{paddingLeft:8},e.createElement(Ce,{horizontal:!0,spacing:2},r&&e.createElement("button",{type:"button",onClick:g},e.createElement(ve,{spacing:1},e.createElement(Ee,null),e.createElement(n.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600"},T({id:(0,y.Z)("button.component.add"),formatMessage:"Add a component"})))),a.map((s,m)=>e.createElement(be,{key:s,dzName:i,index:m,component:s,isActive:u===m,isInDevelopmentMode:r,onClick:()=>E(m)})))),e.createElement(xe,null,a.map((s,m)=>{const f={customRowComponent:t,component:s};return e.createElement(n.Box,{tabId:`${m}`,key:s,style:{display:u===m?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(te,{...f,isFromDynamicZone:!0,targetUid:p,key:s}))))}))))}V.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},V.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const $e=V,ke=(0,h.default)(n.Box)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,Me=(0,h.default)(n.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,we=(0,h.default)(n.Box)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,ne=({children:t,icon:a,color:l,...i})=>e.createElement(we,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...i},e.createElement(n.Flex,null,e.createElement(Me,{color:l,"aria-hidden":!0,background:`${l}200`},a),e.createElement(n.Box,{paddingLeft:3},e.createElement(n.Typography,{variant:"pi",fontWeight:"bold",textColor:`${l}600`},t))));ne.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const Re=ne;function O({addComponentToDZ:t,customRowComponent:a,editTarget:l,firstLoopComponentUid:i,isFromDynamicZone:p,isMain:r,isNestedInDZComponent:u,isSub:x,items:T,secondLoopComponentUid:E,targetUid:g}){const{formatMessage:s}=(0,D.useIntl)(),{trackUsage:m}=(0,c.useTracking)(),{isInDevelopmentMode:f,modifiedData:B,isInContentTypeView:k}=(0,L.Z)(),{onOpenModalAddField:w}=(0,q.Z)(),v=()=>{m("hasClickedCTBAddFieldBanner"),w({forTarget:l,targetUid:g})};return g?T.length===0&&r?e.createElement(n.Table,{colCount:2,rowCount:2},e.createElement(n.Thead,null,e.createElement(n.Tr,null,e.createElement(n.Th,null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(n.Th,null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},s({id:"global.type",defaultMessage:"Type"}))))),e.createElement(c.EmptyBodyTable,{action:e.createElement(n.Button,{onClick:v,size:"L",startIcon:e.createElement(b.Plus,null),variant:"secondary"},s({id:(0,y.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:k?{id:(0,y.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,y.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(ke,null,e.createElement(n.Box,{paddingLeft:6,paddingRight:r?6:0,...r&&{style:{overflowX:"auto"}}},e.createElement("table",null,r&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},s({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,T.map(M=>{const{type:Z}=M,I=a;return e.createElement(e.Fragment,{key:M.name},e.createElement(I,{...M,isNestedInDZComponent:u,targetUid:g,editTarget:l,firstLoopComponentUid:i,isFromDynamicZone:p,secondLoopComponentUid:E}),Z==="component"&&e.createElement(te,{...M,customRowComponent:a,targetUid:g,isNestedInDZComponent:p,editTarget:l,firstLoopComponentUid:i}),Z==="dynamiczone"&&e.createElement($e,{...M,customRowComponent:a,addComponent:t,targetUid:g}))})))),r&&f&&e.createElement(n.TFooter,{icon:e.createElement(b.Plus,null),onClick:v},s({id:(0,y.Z)(`form.button.add.field.to.${B.contentType?B.contentType.schema.kind:l||"collectionType"}`),defaultMessage:"Add another field"})),x&&f&&e.createElement(Re,{icon:e.createElement(b.Plus,null),onClick:v,color:p?"primary":"neutral"},s({id:(0,y.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(n.Table,{colCount:2,rowCount:2},e.createElement(n.Thead,null,e.createElement(n.Tr,null,e.createElement(n.Th,null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(n.Th,null,e.createElement(n.Typography,{variant:"sigma",textColor:"neutral600"},s({id:"global.type",defaultMessage:"Type"}))))),e.createElement(c.EmptyBodyTable,{colSpan:2,content:{id:(0,y.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}O.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},O.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const oe=O,Be=(0,h.default)(n.Box)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,Ze=h.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,ae=t=>e.createElement(Be,null,e.createElement(Ze,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));ae.propTypes={color:o().string.isRequired};const De=ae,j=({content:t})=>Y()(t);j.defaultProps={content:null},j.propTypes={content:o().string};const Le=j,Ie=(0,h.default)(n.Box)`
  position: relative;
`;var Fe=d(68314);const H=({type:t,customField:a,repeatable:l})=>{const{formatMessage:i}=(0,D.useIntl)();let p=t;return["integer","biginteger","float","decimal"].includes(t)?p="number":["string"].includes(t)&&(p="text"),a?e.createElement(n.Typography,null,i({id:(0,y.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(n.Typography,null,i({id:(0,y.Z)(`attribute.${p}`),defaultMessage:t}),"\xA0",l&&i({id:(0,y.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};H.defaultProps={customField:null,repeatable:!1},H.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const Ae=H;function K({configurable:t,customField:a,editTarget:l,firstLoopComponentUid:i,isFromDynamicZone:p,name:r,onClick:u,relation:x,repeatable:T,secondLoopComponentUid:E,target:g,targetUid:s,type:m}){const{contentTypes:f,isInDevelopmentMode:B,removeAttribute:k}=(0,L.Z)(),{formatMessage:w}=(0,D.useIntl)(),v=m==="relation"&&x.includes("morph"),M=["integer","biginteger","float","decimal"].includes(m)?"number":m,Z=C()(f,[g],{}),I=C()(Z,["schema","displayName"],""),F=C()(Z,"plugin"),G=g?"relation":M,A=()=>{v||t!==!1&&u(l,E||i||s,r,m,a)};let R;return E&&i?R=2:i?R=1:R=0,e.createElement(Ie,{as:"tr",...(0,c.onRowClick)({fn:A,condition:B&&t&&!v})},e.createElement("td",{style:{position:"relative"}},R!==0&&e.createElement(De,{color:p?"primary200":"neutral150"}),e.createElement(n.Stack,{paddingLeft:2,spacing:4,horizontal:!0},e.createElement(Fe.Z,{type:G,customField:a}),e.createElement(n.Typography,{fontWeight:"bold"},r))),e.createElement("td",null,g?e.createElement(n.Typography,null,w({id:(0,y.Z)(`modelPage.attribute.${v?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(Le,{content:I}),"\xA0",F&&`(${w({id:(0,y.Z)("from"),defaultMessage:"from"})}: ${F})`)):e.createElement(Ae,{type:m,customField:a,repeatable:T})),e.createElement("td",null,B?e.createElement(n.Flex,{justifyContent:"flex-end",...c.stopPropagation},t?e.createElement(n.Stack,{horizontal:!0,spacing:1},!v&&e.createElement(n.IconButton,{onClick:A,label:`${w({id:"app.utils.edit",defaultMessage:"Edit"})} ${r}`,noBorder:!0,icon:e.createElement(b.Pencil,null)}),e.createElement(n.IconButton,{onClick:S=>{S.stopPropagation(),k(l,r,E||i||"")},label:`${w({id:"global.delete",defaultMessage:"Delete"})} ${r}`,noBorder:!0,icon:e.createElement(b.Trash,null)})):e.createElement(b.Lock,null)):e.createElement(n.Box,{height:(0,c.pxToRem)(32)})))}K.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},K.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const Se=(0,e.memo)(K),Pe=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a},Ne={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},X=({disabled:t,isTemporary:a,isInContentTypeView:l,contentTypeKind:i,targetUid:p})=>{const{formatMessage:r}=(0,D.useIntl)(),{push:u}=(0,N.useHistory)(),{collectionTypesConfigurations:x,componentsConfigurations:T,singleTypesConfigurations:E}=Ne,g=r({id:"content-type-builder.form.button.configure-view"});let s=x;const m=()=>(a||u(l?`/content-manager/collectionType/${p}/configurations/edit`:`/content-manager/components/${p}/configurations/edit`),!1);return l&&i==="singleType"&&(s=E),l||(s=T),e.createElement(c.CheckPermissions,{permissions:s},e.createElement(n.Button,{startIcon:e.createElement(b.Layer,null),variant:"tertiary",onClick:m,disabled:a||t},g))};X.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},X.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const Ue=(0,e.memo)(X),ze=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:l,isInContentTypeView:i,submitData:p}=(0,L.Z)(),{formatMessage:r}=(0,D.useIntl)(),{trackUsage:u}=(0,c.useTracking)(),x=(0,N.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:T,onOpenModalAddField:E,onOpenModalEditField:g,onOpenModalEditSchema:s,onOpenModalEditCustomField:m}=(0,q.Z)(),f=i?"contentType":"component",B=[f,"schema","attributes"],k=C()(a,[f,"uid"]),w=C()(a,[f,"isTemporary"],!1),v=C()(a,[f,"schema","kind"],null),M=C()(a,B,[]),Z=me()(t,[f,"plugin"]),I=!Q()(a,t),F=i?"contentType":"component",G=$=>{T({dynamicZoneTarget:$,targetUid:k})},A=async($,le,re,ie,se)=>{const ce=Pe(ie);se?m({forTarget:$,targetUid:le,attributeName:re,attributeType:ce,customFieldUid:se}):g({forTarget:$,targetUid:le,attributeName:re,attributeType:ce,step:ie==="component"?"2":null})};let R=C()(a,[f,"schema","displayName"],"");const S=C()(a,[f,"schema","kind"],""),P=x?.params.currentUID==="create-content-type";!R&&P&&(R=r({id:(0,y.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const We=()=>{const $=S||f;$==="collectionType"&&u("willEditNameOfContentType"),$==="singleType"&&u("willEditNameOfSingleType"),s({modalType:f,forTarget:f,targetUid:k,kind:$})};return e.createElement(e.Fragment,null,e.createElement(N.Prompt,{message:r({id:(0,y.Z)("prompt.unsaved")}),when:I}),e.createElement(n.HeaderLayout,{id:"title",primaryAction:l&&e.createElement(n.Stack,{horizontal:!0,spacing:2},!P&&e.createElement(n.Button,{startIcon:e.createElement(b.Plus,null),variant:"secondary",onClick:()=>{E({forTarget:F,targetUid:k})}},r({id:(0,y.Z)("button.attributes.add.another")})),e.createElement(n.Button,{startIcon:e.createElement(b.Check,null),onClick:()=>p(),type:"submit",disabled:Q()(a,t)},r({id:"global.save",defaultMessage:"Save"}))),secondaryAction:l&&!Z&&!P&&e.createElement(n.Button,{startIcon:e.createElement(b.Pencil,null),variant:"tertiary",onClick:We},r({id:"app.utils.edit",defaultMessage:"Edit"})),title:Y()(R),subtitle:r({id:(0,y.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(c.Link,{startIcon:e.createElement(b.ArrowLeft,null),to:"/plugins/content-type-builder/"},r({id:"global.back",defaultMessage:"Back"}))}),e.createElement(n.ContentLayout,null,e.createElement(n.Stack,{spacing:4},e.createElement(n.Flex,{justifyContent:"flex-end"},e.createElement(n.Stack,{horizontal:!0,spacing:2},e.createElement(Ue,{key:"link-to-cm-settings-view",targetUid:k,isTemporary:w,isInContentTypeView:i,contentTypeKind:v,disabled:P}))),e.createElement(n.Box,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(oe,{items:M,customRowComponent:$=>e.createElement(Se,{...$,onClick:A}),addComponentToDZ:G,targetUid:k,editTarget:F,isMain:!0})))))}}}]);
