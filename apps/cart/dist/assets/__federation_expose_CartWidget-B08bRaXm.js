import{importShared as u}from"./__federation_fn_import-BdgSArk1.js";import{r as f}from"./index-CtmpQeow.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=f,m=Symbol.for("react.element"),_=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,y=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function x(o,r,n){var e,s={},d=null,c=null;n!==void 0&&(d=""+n),r.key!==void 0&&(d=""+r.key),r.ref!==void 0&&(c=r.ref);for(e in r)b.call(r,e)&&!h.hasOwnProperty(e)&&(s[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)s[e]===void 0&&(s[e]=r[e]);return{$$typeof:m,type:o,key:d,ref:c,props:s,_owner:y.current}}i.Fragment=_;i.jsx=x;i.jsxs=x;p.exports=i;var t=p.exports;const a=await u("styled-components"),j=a.div`
  display: grid;
  gap: 12px;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--color-surface);
  padding: 16px;
  box-shadow: var(--shadow-lg);
`,g=a.h2`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
`,w=a.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-muted);
`,l=a.button`
  padding: 8px 12px;
  background: var(--btn-bg);
  color: var(--btn-fg);
  border: none;
  border-radius: var(--radius);
`,{useState:k}=await u("react");function R(){const[o,r]=k(0);return t.jsxs(j,{children:[t.jsx(g,{children:"Carrito"}),t.jsxs(w,{children:[t.jsx("div",{children:"Items"}),t.jsx("div",{children:o})]}),t.jsx(l,{onClick:()=>r(n=>n+1),children:"Sumar"}),t.jsx(l,{onClick:()=>r(0),children:"Vaciar"})]})}export{R as default,t as j};
