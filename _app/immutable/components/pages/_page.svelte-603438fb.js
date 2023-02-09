import{S as x,i as L,s as P,k as y,q as d,a as q,l as E,m as b,r as g,h as f,c as B,b as p,E as m,C as w,J as C,n as H}from"../../chunks/index-b541d48b.js";function M(r,t,n){const o=r.slice();return o[2]=t[n],o}function S(r){let t,n,o=r[2].metadata.title+"",i,h,_=A(r[2].metadata.date)+"",c,u;return{c(){t=y("li"),n=y("a"),i=d(o),h=d(" ("),c=d(_),u=d(")"),this.h()},l(l){t=E(l,"LI",{});var e=b(t);n=E(e,"A",{href:!0});var s=b(n);i=g(s,o),s.forEach(f),h=g(e," ("),c=g(e,_),u=g(e,")"),e.forEach(f),this.h()},h(){H(n,"href",r[2].slug)},m(l,e){p(l,t,e),m(t,n),m(n,i),m(t,h),m(t,c),m(t,u)},p:w,d(l){l&&f(t)}}}function U(r){let t,n,o,i,h,_,c,u=r[0],l=[];for(let e=0;e<u.length;e+=1)l[e]=S(M(r,u,e));return{c(){t=y("h1"),n=d("My Blog"),o=d(`

My very own blog!

`),i=y("h2"),h=d("Posts"),_=q(),c=y("ul");for(let e=0;e<l.length;e+=1)l[e].c()},l(e){t=E(e,"H1",{});var s=b(t);n=g(s,"My Blog"),s.forEach(f),o=g(e,`

My very own blog!

`),i=E(e,"H2",{});var a=b(i);h=g(a,"Posts"),a.forEach(f),_=B(e),c=E(e,"UL",{});var v=b(c);for(let k=0;k<l.length;k+=1)l[k].l(v);v.forEach(f)},m(e,s){p(e,t,s),m(t,n),p(e,o,s),p(e,i,s),m(i,h),p(e,_,s),p(e,c,s);for(let a=0;a<l.length;a+=1)l[a].m(c,null)},p(e,[s]){if(s&1){u=e[0];let a;for(a=0;a<u.length;a+=1){const v=M(e,u,a);l[a]?l[a].p(v,s):(l[a]=S(v),l[a].c(),l[a].m(c,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=u.length}},i:w,o:w,d(e){e&&f(t),e&&f(o),e&&f(i),e&&f(_),e&&f(c),C(l,e)}}}function A(r){return new Date(r).toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function D(r,t,n){let{data:o}=t;const{pages:i}=o;return r.$$set=h=>{"data"in h&&n(1,o=h.data)},[i,o]}class J extends x{constructor(t){super(),L(this,t,D,U,P,{data:1})}}export{J as default};
