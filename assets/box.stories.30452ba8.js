var i=Object.defineProperty;var n=(e,c)=>i(e,"name",{value:c,configurable:!0});import{j as t}from"./jsx-runtime.b5fb7c9f.js";import"./iframe.ca388871.js";const o=n(({children:e,color:c})=>t("div",{style:{color:c},children:e}),"Box");try{o.displayName="Box",o.__docgenInfo={description:"",displayName:"Box",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Box/index.tsx#Box"]={docgenInfo:o.__docgenInfo,name:"Box",path:"src/components/Box/index.tsx#Box"})}catch{}const d={parameters:{storySource:{source:`import * as React from 'react';
import Box from './index';

export default {
  title: 'Component/Box',
};

export const WithText = () => (
  <Box>
    <h2>This is a placeholder</h2>
  </Box>
);

export const WithButtons = () => (
  <Box>
    <button onClick={() => alert('You clicked me!')}>Click me</button>
  </Box>
);
`,locationsMap:{"with-text":{startLoc:{col:24,line:8},endLoc:{col:1,line:12},startBody:{col:24,line:8},endBody:{col:1,line:12}},"with-buttons":{startLoc:{col:27,line:14},endLoc:{col:1,line:18},startBody:{col:27,line:14},endBody:{col:1,line:18}}}}},title:"Component/Box"},a=n(()=>t(o,{children:t("h2",{children:"This is a placeholder"})}),"WithText"),x=n(()=>t(o,{children:t("button",{onClick:()=>alert("You clicked me!"),children:"Click me"})}),"WithButtons"),p=["WithText","WithButtons"];export{x as WithButtons,a as WithText,p as __namedExportsOrder,d as default};
//# sourceMappingURL=box.stories.30452ba8.js.map
