import{j as r}from"./jsx-runtime-BFL-paBb.js";import{importShared as n}from"./__federation_fn_import-BdgSArk1.js";const t=await n("styled-components"),e=t.li`
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--color-surface);
  padding: 14px;
  box-shadow: var(--shadow-lg);
`,i=t.div`
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
`,a=t.div`
  color: var(--color-muted);
`,s=t.button`
  margin-top: 12px;
  padding: 8px 12px;
  background: var(--btn-bg);
  color: var(--btn-fg);
  border: none;
  border-radius: var(--radius);
`;function c({name:d,price:o}){return r.jsxs(e,{children:[r.jsx(i,{children:d}),r.jsxs(a,{children:["$",o.toFixed(2)]}),r.jsx(s,{children:"Agregar"})]})}const p=await n("styled-components"),u=p.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;function l({products:d}){return r.jsx(u,{children:d.map(o=>r.jsx(c,{name:o.name,price:o.price},o.id))})}const m=[{id:1,name:"Producto A",price:12.99},{id:2,name:"Producto B",price:8.5},{id:3,name:"Producto C",price:22}];function b(){return r.jsx(l,{products:m})}export{b as default};
