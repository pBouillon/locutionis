import{S as Pe,i as Se,s as Ce,e as h,k,t as I,c as _,a as d,d as c,m as q,h as y,b as m,g as Q,F as a,j as K,G as be,w as Oe,x as He,y as Ne,q as ee,o as he,B as Te,P as Ve,p as Qe,I as ke,n as we}from"../../chunks/vendor-9c6a9d59.js";import{g as Be}from"../../chunks/api-455259be.js";function Le(r){let e,o,s,l,i;return{c(){e=h("blockquote"),o=h("i"),s=k(),l=h("p"),i=I(r[0]),this.h()},l(f){e=_(f,"BLOCKQUOTE",{class:!0});var v=d(e);o=_(v,"I",{class:!0}),d(o).forEach(c),s=q(v),l=_(v,"P",{class:!0});var b=d(l);i=y(b,r[0]),b.forEach(c),v.forEach(c),this.h()},h(){m(o,"class","text-3xl font-extrabold text-gray-400 dark:text-slate-400 bi bi-quote"),m(l,"class","text-lg italic text-center text-gray-600 dark:text-slate-400 md:max-w-3xl md:text-2xl"),m(e,"class","flex flex-col items-center")},m(f,v){Q(f,e,v),a(e,o),a(e,s),a(e,l),a(l,i)},p(f,[v]){v&1&&K(i,f[0])},i:be,o:be,d(f){f&&c(e)}}}function Ue(r,e,o){let{text:s}=e;return r.$$set=l=>{"text"in l&&o(0,s=l.text)},[s]}class je extends Pe{constructor(e){super();Se(this,e,Ue,Le,Ce,{text:0})}}function qe(r,e,o){const s=r.slice();return s[2]=e[o].name,s[3]=e[o].href,s}function Ie(r,e,o){const s=r.slice();return s[6]=e[o],s}function ye(r){let e,o,s;return o=new je({props:{text:r[1]}}),{c(){e=h("div"),Oe(o.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var i=d(e);He(o.$$.fragment,i),i.forEach(c),this.h()},h(){m(e,"class","mb-8 md:mb-12 md:mt-5")},m(l,i){Q(l,e,i),Ne(o,e,null),s=!0},p(l,i){const f={};i&2&&(f.text=l[1]),o.$set(f)},i(l){s||(ee(o.$$.fragment,l),s=!0)},o(l){he(o.$$.fragment,l),s=!1},d(l){l&&c(e),Te(o)}}}function De(r){let e,o,s=r[6]+"",l;return{c(){e=h("p"),o=I("- "),l=I(s),this.h()},l(i){e=_(i,"P",{class:!0});var f=d(e);o=y(f,"- "),l=y(f,s),f.forEach(c),this.h()},h(){m(e,"class","dark:text-slate-300")},m(i,f){Q(i,e,f),a(e,o),a(e,l)},p(i,f){f&1&&s!==(s=i[6]+"")&&K(l,s)},d(i){i&&c(e)}}}function $e(r){let e,o,s,l=r[2]+"",i,f,v;return{c(){e=h("p"),o=I("- "),s=h("a"),i=I(l),v=k(),this.h()},l(b){e=_(b,"P",{class:!0});var u=d(e);o=y(u,"- "),s=_(u,"A",{href:!0,target:!0,class:!0});var D=d(s);i=y(D,l),D.forEach(c),v=q(u),u.forEach(c),this.h()},h(){m(s,"href",f=r[3]),m(s,"target","_blank"),m(s,"class","link"),m(e,"class","dark:text-slate-300")},m(b,u){Q(b,e,u),a(e,o),a(e,s),a(s,i),a(e,v)},p(b,u){u&1&&l!==(l=b[2]+"")&&K(i,l),u&1&&f!==(f=b[3])&&m(s,"href",f)},d(b){b&&c(e)}}}function Ae(r){let e,o,s,l,i,f=r[0].name+"",v,b,u,D,w,te,le,B,z=r[0].description+"",M,se,C,L,ae,ne,U,J=r[0].goal+"",R,oe,O,j,re,ie,H,ce,N,A,fe,ue,T,$;document.title=e=`\r
    `+r[0].name+` | Locutionis - Petit r\xE9f\xE9rentiel des figures de style\r
  `;let p=r[1]&&ye(r),F=r[0].examples,g=[];for(let t=0;t<F.length;t+=1)g[t]=De(Ie(r,F,t));let G=r[0].sources,x=[];for(let t=0;t<G.length;t+=1)x[t]=$e(qe(r,G,t));return{c(){o=k(),p&&p.c(),s=k(),l=h("div"),i=h("h1"),v=I(f),b=k(),u=h("div"),D=h("section"),w=h("h2"),te=I("Description"),le=k(),B=h("p"),M=I(z),se=k(),C=h("section"),L=h("h2"),ae=I("Dans quel but ?"),ne=k(),U=h("p"),R=I(J),oe=k(),O=h("section"),j=h("h2"),re=I("Quelques exemples"),ie=k(),H=h("div");for(let t=0;t<g.length;t+=1)g[t].c();ce=k(),N=h("section"),A=h("h2"),fe=I("Sources"),ue=k(),T=h("div");for(let t=0;t<x.length;t+=1)x[t].c();this.h()},l(t){Ve('[data-svelte="svelte-1754kyp"]',document.head).forEach(c),o=q(t),p&&p.l(t),s=q(t),l=_(t,"DIV",{class:!0});var n=d(l);i=_(n,"H1",{class:!0});var P=d(i);v=y(P,f),P.forEach(c),b=q(n),u=_(n,"DIV",{class:!0});var S=d(u);D=_(S,"SECTION",{});var W=d(D);w=_(W,"H2",{class:!0});var _e=d(w);te=y(_e,"Description"),_e.forEach(c),le=q(W),B=_(W,"P",{class:!0});var de=d(B);M=y(de,z),de.forEach(c),W.forEach(c),se=q(S),C=_(S,"SECTION",{});var X=d(C);L=_(X,"H2",{class:!0});var me=d(L);ae=y(me,"Dans quel but ?"),me.forEach(c),ne=q(X),U=_(X,"P",{class:!0});var pe=d(U);R=y(pe,J),pe.forEach(c),X.forEach(c),oe=q(S),O=_(S,"SECTION",{});var Y=d(O);j=_(Y,"H2",{class:!0});var ve=d(j);re=y(ve,"Quelques exemples"),ve.forEach(c),ie=q(Y),H=_(Y,"DIV",{class:!0});var ge=d(H);for(let V=0;V<g.length;V+=1)g[V].l(ge);ge.forEach(c),Y.forEach(c),ce=q(S),N=_(S,"SECTION",{});var Z=d(N);A=_(Z,"H2",{class:!0});var xe=d(A);fe=y(xe,"Sources"),xe.forEach(c),ue=q(Z),T=_(Z,"DIV",{class:!0});var Ee=d(T);for(let V=0;V<x.length;V+=1)x[V].l(Ee);Ee.forEach(c),Z.forEach(c),S.forEach(c),n.forEach(c),this.h()},h(){m(i,"class","title svelte-15py9es"),m(w,"class","subtitle svelte-15py9es"),m(B,"class","dark:text-slate-300"),m(L,"class","subtitle svelte-15py9es"),m(U,"class","dark:text-slate-300"),m(j,"class","subtitle svelte-15py9es"),m(H,"class","flex flex-col gap-3 text-sm"),m(A,"class","subtitle svelte-15py9es"),m(T,"class","flex flex-col gap-1 text-sm"),m(u,"class","flex flex-col gap-5"),m(l,"class","container")},m(t,E){Q(t,o,E),p&&p.m(t,E),Q(t,s,E),Q(t,l,E),a(l,i),a(i,v),a(l,b),a(l,u),a(u,D),a(D,w),a(w,te),a(D,le),a(D,B),a(B,M),a(u,se),a(u,C),a(C,L),a(L,ae),a(C,ne),a(C,U),a(U,R),a(u,oe),a(u,O),a(O,j),a(j,re),a(O,ie),a(O,H);for(let n=0;n<g.length;n+=1)g[n].m(H,null);a(u,ce),a(u,N),a(N,A),a(A,fe),a(N,ue),a(N,T);for(let n=0;n<x.length;n+=1)x[n].m(T,null);$=!0},p(t,[E]){if((!$||E&1)&&e!==(e=`\r
    `+t[0].name+` | Locutionis - Petit r\xE9f\xE9rentiel des figures de style\r
  `)&&(document.title=e),t[1]?p?(p.p(t,E),E&2&&ee(p,1)):(p=ye(t),p.c(),ee(p,1),p.m(s.parentNode,s)):p&&(we(),he(p,1,1,()=>{p=null}),Qe()),(!$||E&1)&&f!==(f=t[0].name+"")&&K(v,f),(!$||E&1)&&z!==(z=t[0].description+"")&&K(M,z),(!$||E&1)&&J!==(J=t[0].goal+"")&&K(R,J),E&1){F=t[0].examples;let n;for(n=0;n<F.length;n+=1){const P=Ie(t,F,n);g[n]?g[n].p(P,E):(g[n]=De(P),g[n].c(),g[n].m(H,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=F.length}if(E&1){G=t[0].sources;let n;for(n=0;n<G.length;n+=1){const P=qe(t,G,n);x[n]?x[n].p(P,E):(x[n]=$e(P),x[n].c(),x[n].m(T,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=G.length}},i(t){$||(ee(p),$=!0)},o(t){he(p),$=!1},d(t){t&&c(o),p&&p.d(t),t&&c(s),t&&c(l),ke(g,t),ke(x,t)}}}async function ze({params:r}){const[e]=Be(r.name);return{props:{definition:e}}}function Fe(r,e,o){let s,{definition:l}=e;return r.$$set=i=>{"definition"in i&&o(0,l=i.definition)},r.$$.update=()=>{r.$$.dirty&1&&o(1,[s]=l.examples,s)},[l,s]}class Je extends Pe{constructor(e){super();Se(this,e,Fe,Ae,Ce,{definition:0})}}export{Je as default,ze as load};
