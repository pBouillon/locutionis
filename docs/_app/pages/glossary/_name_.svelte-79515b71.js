import{S as Se,i as Oe,s as Pe,e as u,k,t as I,c as _,a as d,d as c,m as q,h as D,b as v,g as Q,F as a,j as F,G as be,w as Ce,x as He,y as Ne,q as ee,o as ue,B as Te,O as Ve,p as Qe,I as ke,n as we}from"../../chunks/vendor-1b59dde5.js";function Be(r){let e,o,s,l,i;return{c(){e=u("blockquote"),o=u("i"),s=k(),l=u("p"),i=I(r[0]),this.h()},l(f){e=_(f,"BLOCKQUOTE",{class:!0});var m=d(e);o=_(m,"I",{class:!0}),d(o).forEach(c),s=q(m),l=_(m,"P",{class:!0});var b=d(l);i=D(b,r[0]),b.forEach(c),m.forEach(c),this.h()},h(){v(o,"class","text-3xl font-extrabold text-gray-400 bi bi-quote"),v(l,"class","text-lg italic text-center text-gray-600 md:max-w-3xl md:text-2xl"),v(e,"class","flex flex-col items-center")},m(f,m){Q(f,e,m),a(e,o),a(e,s),a(e,l),a(l,i)},p(f,[m]){m&1&&F(i,f[0])},i:be,o:be,d(f){f&&c(e)}}}function Le(r,e,o){let{text:s}=e;return r.$$set=l=>{"text"in l&&o(0,s=l.text)},[s]}class Ue extends Se{constructor(e){super();Oe(this,e,Le,Be,Pe,{text:0})}}function qe(r,e,o){const s=r.slice();return s[2]=e[o].name,s[3]=e[o].href,s}function Ie(r,e,o){const s=r.slice();return s[6]=e[o],s}function De(r){let e,o,s;return o=new Ue({props:{text:r[1]}}),{c(){e=u("div"),Ce(o.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var i=d(e);He(o.$$.fragment,i),i.forEach(c),this.h()},h(){v(e,"class","mb-8 md:mb-12 md:mt-5")},m(l,i){Q(l,e,i),Ne(o,e,null),s=!0},p(l,i){const f={};i&2&&(f.text=l[1]),o.$set(f)},i(l){s||(ee(o.$$.fragment,l),s=!0)},o(l){ue(o.$$.fragment,l),s=!1},d(l){l&&c(e),Te(o)}}}function ye(r){let e,o,s=r[6]+"",l;return{c(){e=u("p"),o=I("- "),l=I(s),this.h()},l(i){e=_(i,"P",{class:!0});var f=d(e);o=D(f,"- "),l=D(f,s),f.forEach(c),this.h()},h(){v(e,"class","text-sm")},m(i,f){Q(i,e,f),a(e,o),a(e,l)},p(i,f){f&1&&s!==(s=i[6]+"")&&F(l,s)},d(i){i&&c(e)}}}function $e(r){let e,o,s,l=r[2]+"",i,f,m;return{c(){e=u("p"),o=I("- "),s=u("a"),i=I(l),m=k(),this.h()},l(b){e=_(b,"P",{});var h=d(e);o=D(h,"- "),s=_(h,"A",{href:!0,class:!0});var y=d(s);i=D(y,l),y.forEach(c),m=q(h),h.forEach(c),this.h()},h(){v(s,"href",f=r[3]),v(s,"class","link")},m(b,h){Q(b,e,h),a(e,o),a(e,s),a(s,i),a(e,m)},p(b,h){h&1&&l!==(l=b[2]+"")&&F(i,l),h&1&&f!==(f=b[3])&&v(s,"href",f)},d(b){b&&c(e)}}}function je(r){let e,o,s,l,i,f=r[0].name+"",m,b,h,y,w,te,le,G,K=r[0].description+"",M,se,P,B,ae,ne,z,J=r[0].goal+"",R,oe,C,L,ie,re,H,ce,N,U,fe,he,T,$;document.title=e=`\r
    `+r[0].name+` | Locutionis - Petit r\xE9f\xE9rentiel des figures de style\r
  `;let p=r[1]&&De(r),j=r[0].examples,g=[];for(let t=0;t<j.length;t+=1)g[t]=ye(Ie(r,j,t));let A=r[0].sources,E=[];for(let t=0;t<A.length;t+=1)E[t]=$e(qe(r,A,t));return{c(){o=k(),p&&p.c(),s=k(),l=u("div"),i=u("h1"),m=I(f),b=k(),h=u("div"),y=u("section"),w=u("h2"),te=I("Description"),le=k(),G=u("p"),M=I(K),se=k(),P=u("section"),B=u("h2"),ae=I("Dans quel but ?"),ne=k(),z=u("p"),R=I(J),oe=k(),C=u("section"),L=u("h2"),ie=I("Quelques examples"),re=k(),H=u("div");for(let t=0;t<g.length;t+=1)g[t].c();ce=k(),N=u("section"),U=u("h2"),fe=I("Sources"),he=k(),T=u("div");for(let t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){Ve('[data-svelte="svelte-1754kyp"]',document.head).forEach(c),o=q(t),p&&p.l(t),s=q(t),l=_(t,"DIV",{class:!0});var n=d(l);i=_(n,"H1",{class:!0});var S=d(i);m=D(S,f),S.forEach(c),b=q(n),h=_(n,"DIV",{class:!0});var O=d(h);y=_(O,"SECTION",{});var W=d(y);w=_(W,"H2",{class:!0});var _e=d(w);te=D(_e,"Description"),_e.forEach(c),le=q(W),G=_(W,"P",{});var de=d(G);M=D(de,K),de.forEach(c),W.forEach(c),se=q(O),P=_(O,"SECTION",{});var X=d(P);B=_(X,"H2",{class:!0});var pe=d(B);ae=D(pe,"Dans quel but ?"),pe.forEach(c),ne=q(X),z=_(X,"P",{});var me=d(z);R=D(me,J),me.forEach(c),X.forEach(c),oe=q(O),C=_(O,"SECTION",{});var Y=d(C);L=_(Y,"H2",{class:!0});var ve=d(L);ie=D(ve,"Quelques examples"),ve.forEach(c),re=q(Y),H=_(Y,"DIV",{class:!0});var ge=d(H);for(let V=0;V<g.length;V+=1)g[V].l(ge);ge.forEach(c),Y.forEach(c),ce=q(O),N=_(O,"SECTION",{});var Z=d(N);U=_(Z,"H2",{class:!0});var Ee=d(U);fe=D(Ee,"Sources"),Ee.forEach(c),he=q(Z),T=_(Z,"DIV",{class:!0});var xe=d(T);for(let V=0;V<E.length;V+=1)E[V].l(xe);xe.forEach(c),Z.forEach(c),O.forEach(c),n.forEach(c),this.h()},h(){v(i,"class","title svelte-15py9es"),v(w,"class","subtitle svelte-15py9es"),v(B,"class","subtitle svelte-15py9es"),v(L,"class","subtitle svelte-15py9es"),v(H,"class","flex flex-col gap-3"),v(U,"class","subtitle svelte-15py9es"),v(T,"class","flex flex-col gap-3"),v(h,"class","flex flex-col gap-5"),v(l,"class","container")},m(t,x){Q(t,o,x),p&&p.m(t,x),Q(t,s,x),Q(t,l,x),a(l,i),a(i,m),a(l,b),a(l,h),a(h,y),a(y,w),a(w,te),a(y,le),a(y,G),a(G,M),a(h,se),a(h,P),a(P,B),a(B,ae),a(P,ne),a(P,z),a(z,R),a(h,oe),a(h,C),a(C,L),a(L,ie),a(C,re),a(C,H);for(let n=0;n<g.length;n+=1)g[n].m(H,null);a(h,ce),a(h,N),a(N,U),a(U,fe),a(N,he),a(N,T);for(let n=0;n<E.length;n+=1)E[n].m(T,null);$=!0},p(t,[x]){if((!$||x&1)&&e!==(e=`\r
    `+t[0].name+` | Locutionis - Petit r\xE9f\xE9rentiel des figures de style\r
  `)&&(document.title=e),t[1]?p?(p.p(t,x),x&2&&ee(p,1)):(p=De(t),p.c(),ee(p,1),p.m(s.parentNode,s)):p&&(we(),ue(p,1,1,()=>{p=null}),Qe()),(!$||x&1)&&f!==(f=t[0].name+"")&&F(m,f),(!$||x&1)&&K!==(K=t[0].description+"")&&F(M,K),(!$||x&1)&&J!==(J=t[0].goal+"")&&F(R,J),x&1){j=t[0].examples;let n;for(n=0;n<j.length;n+=1){const S=Ie(t,j,n);g[n]?g[n].p(S,x):(g[n]=ye(S),g[n].c(),g[n].m(H,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=j.length}if(x&1){A=t[0].sources;let n;for(n=0;n<A.length;n+=1){const S=qe(t,A,n);E[n]?E[n].p(S,x):(E[n]=$e(S),E[n].c(),E[n].m(T,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=A.length}},i(t){$||(ee(p),$=!0)},o(t){ue(p),$=!1},d(t){t&&c(o),p&&p.d(t),t&&c(s),t&&c(l),ke(g,t),ke(E,t)}}}function Ae(r,e,o){let s,{definition:l}=e;return r.$$set=i=>{"definition"in i&&o(0,l=i.definition)},r.$$.update=()=>{r.$$.dirty&1&&o(1,s=l.examples.shift())},[l,s]}class Ge extends Se{constructor(e){super();Oe(this,e,Ae,je,Pe,{definition:0})}}export{Ge as default};
