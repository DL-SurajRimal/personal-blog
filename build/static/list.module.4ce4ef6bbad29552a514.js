(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n.n(c),s=n(2),u=n(6),i=n(27),a=n(24);function l(){const e=O(["\n  text-decoration:none;\n"]);return l=function(){return e},e}function j(){const e=O(["\n  --margin-bottom: 3;\n"]);return j=function(){return e},e}function f(){const e=O(["\n  --margin-bottom: 0;\n"]);return f=function(){return e},e}function b(){const e=O(["\n  --margin-bottom: 1;\n  --fs-size: -1;\n  opacity: .7;\n"]);return b=function(){return e},e}function O(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=Object(s.connect)(e=>{let{state:t,item:n}=e;const c=t.source.author[n.author],o=new Date(n.date);return Object(r.jsx)(m,null,Object(r.jsx)(y,{link:n.link},Object(r.jsx)(x,{dangerouslySetInnerHTML:{__html:n.title.rendered}})),Object(r.jsx)(p,null,"Por ",c.name," publicado el ",Object(r.jsx)(a.a,{date:o})),t.theme.featured.showOnList&&Object(r.jsx)(i.a,{id:n.featured_media}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:n.excerpt.rendered}}))});const p=s.styled.p(b()),x=s.styled.h2(f()),m=s.styled.article(j()),y=Object(s.styled)(u.a)(l());function h(){const e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: inline-block;\n  margin-top: 16px;\n"]);return h=function(){return e},e}var g=Object(s.connect)(e=>{let{state:t,actions:n,libraries:o}=e;const{totalPages:s}=t.source.get(t.router.link),{path:i,page:a,query:l}=o.source.parse(t.router.link),j=a<s,f=a>1,b=o.source.stringify({path:i,page:a+1,query:l}),O=o.source.stringify({path:i,page:a-1,query:l});return Object(c.useEffect)(()=>{j&&n.source.fetch(b)},[]),Object(r.jsx)("div",null,j&&Object(r.jsx)(u.a,{link:b},Object(r.jsx)(_,null,"← Older posts")),f&&j&&" - ",f&&Object(r.jsx)(u.a,{link:O},Object(r.jsx)(_,null,"Newer posts →")))});const _=s.styled.em(h());function w(){const e=v(["\n  text-transform: uppercase;\n  --fs-size: 3;\n  opacity: .3;\n"]);return w=function(){return e},e}function k(){const e=v(["\n  font-weight: 300;\n  text-transform: capitalize;\n  color: rgba(12, 17, 43, 0.9);\n"]);return k=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.default=Object(s.connect)(e=>{let{state:t}=e;const n=t.source.get(t.router.link);return Object(r.jsx)(o.a.Fragment,null,n.isPostArchive&&Object(r.jsx)(A,null,"Blog"),n.isTaxonomy&&Object(r.jsx)(z,null,n.taxonomy,": ",t.source[n.taxonomy][n.id].name),n.isAuthor&&Object(r.jsx)(z,null,"Author: ",t.source.author[n.id].name),n.items.map(e=>{let{type:n,id:c}=e;const o=t.source[n][c];return Object(r.jsx)(d,{key:o.id,item:o})}),Object(r.jsx)(g,null))});const z=s.styled.h3(k()),A=s.styled.h1(w())}}]);