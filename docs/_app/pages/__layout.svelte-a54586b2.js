import{S as oe,i as ie,s as ne,e as n,t as B,k as A,c,a as u,d as a,h as C,m as N,b as o,g as F,F as s,G as J,D as we,H as K,I as $e,J as Ie,K as Te,L as De,w as me,x as be,y as pe,M as Ve,N as Se,O as Le,q as se,o as re,B as ve}from"../chunks/vendor-9c6a9d59.js";import{b as ae}from"../chunks/paths-396f020f.js";function Ae(i){let e,t,l,r,m,_,h,y,d,f,b,x,$;return{c(){e=n("footer"),t=n("p"),l=n("a"),r=n("i"),m=B(`\r
      Voir sur GitHub`),_=B(`\r
\r
    -\r
\r
    `),h=n("a"),y=B("Signaler une erreur"),d=A(),f=n("p"),b=B("Cr\xE9\xE9 par "),x=n("a"),$=B("Pierre Bouillon"),this.h()},l(O){e=c(O,"FOOTER",{class:!0});var S=u(e);t=c(S,"P",{class:!0});var I=u(t);l=c(I,"A",{href:!0,class:!0});var w=u(l);r=c(w,"I",{class:!0}),u(r).forEach(a),m=C(w,`\r
      Voir sur GitHub`),w.forEach(a),_=C(I,`\r
\r
    -\r
\r
    `),h=c(I,"A",{href:!0,class:!0});var q=u(h);y=C(q,"Signaler une erreur"),q.forEach(a),I.forEach(a),d=N(S),f=c(S,"P",{class:!0});var G=u(f);b=C(G,"Cr\xE9\xE9 par "),x=c(G,"A",{href:!0,class:!0});var U=u(x);$=C(U,"Pierre Bouillon"),U.forEach(a),G.forEach(a),S.forEach(a),this.h()},h(){o(r,"class","bi bi-github"),o(l,"href","https://github.com/pbouillon/locutionis"),o(l,"class","text-primary"),o(h,"href","https://github.com/pBouillon/locutionis/issues/new/choose"),o(h,"class","text-primary"),o(t,"class","flex gap-1 text-xs text-slate-600 dark:text-slate-300"),o(x,"href","pbouillon.github.io"),o(x,"class","text-primary"),o(f,"class","text-xs text-slate-600 dark:text-slate-300"),o(e,"class","flex flex-col items-center gap-2 py-3 border-t md:mx-80 dark:border-slate-600")},m(O,S){F(O,e,S),s(e,t),s(t,l),s(l,r),s(l,m),s(t,_),s(t,h),s(h,y),s(e,d),s(e,f),s(f,b),s(f,x),s(x,$)},p:J,i:J,o:J,d(O){O&&a(e)}}}class Ne extends oe{constructor(e){super();ie(this,e,null,Ae,ne,{})}}function Oe(){var l;const i=(l=localStorage.theme)!=null?l:"light";Z(i);const{subscribe:e,update:t}=we(i);return{subscribe:e,setDark:()=>t(()=>Z("dark")),setLight:()=>t(()=>Z("light")),toggle:()=>t(r=>Z(r==="light"?"dark":"light"))}}function Z(i){return localStorage.theme=i,i==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),i}const ee=Oe();function ge(i,e,t){const l=i.slice();return l[6]=e[t].href,l[7]=e[t].label,l}function ke(i,e,t){const l=i.slice();return l[6]=e[t].href,l[7]=e[t].label,l}function xe(i){let e,t=i[7]+"",l,r;return{c(){e=n("a"),l=B(t),this.h()},l(m){e=c(m,"A",{href:!0,class:!0});var _=u(e);l=C(_,t),_.forEach(a),this.h()},h(){o(e,"href",r=i[6]),o(e,"class","navbar-link dark:text-slate-300 svelte-1vsnrbq")},m(m,_){F(m,e,_),s(e,l)},p:J,d(m){m&&a(e)}}}function Ee(i){let e,t,l,r,m,_,h,y,d,f,b,x,$,O,S,I,w,q,G,U,M,L,T,p,v,D,k,j=i[2],V=[];for(let g=0;g<j.length;g+=1)V[g]=ye(ge(i,j,g));function R(g,P){return g[1]==="light"?Be:Pe}let z=R(i),H=z(i);return{c(){e=n("div"),t=n("div"),l=A(),r=n("div"),m=n("div"),_=n("button"),h=n("i"),y=A(),d=n("ul");for(let g=0;g<V.length;g+=1)V[g].c();f=A(),b=n("div"),x=n("div"),$=n("label"),O=B("Th\xE8me"),S=A(),I=n("div"),w=n("span"),H.c(),q=A(),G=n("i"),U=A(),M=n("select"),L=n("option"),T=B("Clair"),p=n("option"),v=B("Sombre"),this.h()},l(g){e=c(g,"DIV",{class:!0});var P=u(e);t=c(P,"DIV",{class:!0}),u(t).forEach(a),l=N(P),r=c(P,"DIV",{class:!0});var E=u(r);m=c(E,"DIV",{class:!0});var Q=u(m);_=c(Q,"BUTTON",{type:!0});var ce=u(_);h=c(ce,"I",{class:!0}),u(h).forEach(a),ce.forEach(a),Q.forEach(a),y=N(E),d=c(E,"UL",{class:!0});var ue=u(d);for(let le=0;le<V.length;le+=1)V[le].l(ue);ue.forEach(a),f=N(E),b=c(E,"DIV",{class:!0});var fe=u(b);x=c(fe,"DIV",{class:!0});var W=u(x);$=c(W,"LABEL",{class:!0,for:!0});var he=u($);O=C(he,"Th\xE8me"),he.forEach(a),S=N(W),I=c(W,"DIV",{class:!0});var X=u(I);w=c(X,"SPAN",{class:!0});var Y=u(w);H.l(Y),q=N(Y),G=c(Y,"I",{class:!0}),u(G).forEach(a),Y.forEach(a),U=N(X),M=c(X,"SELECT",{id:!0,class:!0});var te=u(M);L=c(te,"OPTION",{});var de=u(L);T=C(de,"Clair"),de.forEach(a),p=c(te,"OPTION",{});var _e=u(p);v=C(_e,"Sombre"),_e.forEach(a),te.forEach(a),X.forEach(a),W.forEach(a),fe.forEach(a),E.forEach(a),P.forEach(a),this.h()},h(){o(t,"class","fixed inset-0 bg-black/20 backdrop-blur-sm"),o(h,"class","text-xl text-gray-400 dark:text-slate-300 dark:hover:text-slate-200 bi bi-x-lg"),o(_,"type","button"),o(m,"class","absolute top-5 right-5"),o(d,"class","space-y-5"),o($,"class","text-lg tracking-wide dark:text-slate-300 dark:hover:text-slate-200"),o($,"for","theme"),o(G,"class","bi bi-chevron-down"),o(w,"class","flex gap-3 px-2 dark:text-slate-300 dark:hover:text-slate-200"),L.__value="light",L.value=L.__value,p.__value="dark",p.value=p.__value,o(M,"id","theme"),o(M,"class","absolute inset-0 w-full h-full opacity-0 appearance-none"),o(I,"class","relative flex items-center p-2 font-semibold rounded-lg shadow-sm ring-1 ring-gray-400"),o(x,"class","flex items-center justify-between"),o(b,"class","pt-6 mt-6 border-t border-gray-400"),o(r,"class","fixed w-full max-w-xs p-6 text-base font-semibold bg-white rounded-lg shadow-lg top-4 right-4 dark:bg-gray-900 text-slate-900"),o(e,"class","fixed inset-0 z-50 md:hidden")},m(g,P){F(g,e,P),s(e,t),s(e,l),s(e,r),s(r,m),s(m,_),s(_,h),s(r,y),s(r,d);for(let E=0;E<V.length;E+=1)V[E].m(d,null);s(r,f),s(r,b),s(b,x),s(x,$),s($,O),s(x,S),s(x,I),s(I,w),H.m(w,null),s(w,q),s(w,G),s(I,U),s(I,M),s(M,L),s(L,T),s(M,p),s(p,v),D||(k=[K(t,"click",i[4]),K(_,"click",i[5]),K(L,"click",ee.setLight),K(p,"click",ee.setDark)],D=!0)},p(g,P){if(P&4){j=g[2];let E;for(E=0;E<j.length;E+=1){const Q=ge(g,j,E);V[E]?V[E].p(Q,P):(V[E]=ye(Q),V[E].c(),V[E].m(d,null))}for(;E<V.length;E+=1)V[E].d(1);V.length=j.length}z!==(z=R(g))&&(H.d(1),H=z(g),H&&(H.c(),H.m(w,q)))},d(g){g&&a(e),$e(V,g),H.d(),D=!1,Ie(k)}}}function ye(i){let e,t,l=i[7]+"",r,m,_;return{c(){e=n("li"),t=n("a"),r=B(l),_=A(),this.h()},l(h){e=c(h,"LI",{});var y=u(e);t=c(y,"A",{href:!0,class:!0});var d=u(t);r=C(d,l),d.forEach(a),_=N(y),y.forEach(a),this.h()},h(){o(t,"href",m=i[6]),o(t,"class","navbar-link dark:text-slate-300 dark:hover:text-slate-200 svelte-1vsnrbq")},m(h,y){F(h,e,y),s(e,t),s(t,r),s(e,_)},p:J,d(h){h&&a(e)}}}function Pe(i){let e,t;return{c(){e=n("i"),t=B(`\r
                  Sombre`),this.h()},l(l){e=c(l,"I",{class:!0}),u(e).forEach(a),t=C(l,`\r
                  Sombre`),this.h()},h(){o(e,"class","bi bi-moon-stars")},m(l,r){F(l,e,r),F(l,t,r)},d(l){l&&a(e),l&&a(t)}}}function Be(i){let e,t;return{c(){e=n("i"),t=B(`\r
                  Clair`),this.h()},l(l){e=c(l,"I",{class:!0}),u(e).forEach(a),t=C(l,`\r
                  Clair`),this.h()},h(){o(e,"class","bi bi-sun")},m(l,r){F(l,e,r),F(l,t,r)},d(l){l&&a(e),l&&a(t)}}}function Ce(i){let e,t,l,r,m,_,h,y,d,f,b,x,$,O,S,I,w,q,G,U,M,L=i[2],T=[];for(let v=0;v<L.length;v+=1)T[v]=xe(ke(i,L,v));let p=i[0]&&Ee(i);return{c(){e=n("nav"),t=n("div"),l=n("a"),r=n("i"),m=B(`\r
      Locutionis`),_=A(),h=n("p"),y=B("Petit r\xE9f\xE9rentiel des figures de style"),d=A(),f=n("button"),b=n("i"),x=A(),$=n("div");for(let v=0;v<T.length;v+=1)T[v].c();O=A(),S=n("div"),I=n("button"),w=n("i"),G=A(),p&&p.c(),this.h()},l(v){e=c(v,"NAV",{class:!0});var D=u(e);t=c(D,"DIV",{class:!0});var k=u(t);l=c(k,"A",{href:!0,class:!0});var j=u(l);r=c(j,"I",{class:!0}),u(r).forEach(a),m=C(j,`\r
      Locutionis`),j.forEach(a),_=N(k),h=c(k,"P",{class:!0});var V=u(h);y=C(V,"Petit r\xE9f\xE9rentiel des figures de style"),V.forEach(a),k.forEach(a),d=N(D),f=c(D,"BUTTON",{type:!0,class:!0});var R=u(f);b=c(R,"I",{class:!0}),u(b).forEach(a),R.forEach(a),x=N(D),$=c(D,"DIV",{class:!0});var z=u($);for(let P=0;P<T.length;P+=1)T[P].l(z);O=N(z),S=c(z,"DIV",{class:!0});var H=u(S);I=c(H,"BUTTON",{});var g=u(I);w=c(g,"I",{class:!0}),u(w).forEach(a),g.forEach(a),H.forEach(a),z.forEach(a),G=N(D),p&&p.l(D),D.forEach(a),this.h()},h(){o(r,"class","bi bi-journal-text"),o(l,"href",ae+"/"),o(l,"class","text-2xl font-bold tracking-wide text-transparent md:text-4xl bg-clip-text bg-gradient-to-br from-indigo-600 to-primary"),o(h,"class","hidden font-medium tracking-tight lg:block text-primary"),o(t,"class","flex items-baseline gap-3"),o(b,"class","px-1 text-3xl bi bi-list dark:text-slate-300"),o(f,"type","button"),o(f,"class","flex items-center justify-center rounded md:hidden focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 focus:ring-offset-slate-50"),o(w,"class",q="bi "+(i[1]==="light"?"bi-sun":"bi-moon-stars")+" text-lg dark:text-slate-300 hover:text-primary"),o(S,"class","pl-5 border-l"),o($,"class","hidden gap-5 md:flex"),o(e,"class","flex items-baseline justify-between p-5")},m(v,D){F(v,e,D),s(e,t),s(t,l),s(l,r),s(l,m),s(t,_),s(t,h),s(h,y),s(e,d),s(e,f),s(f,b),s(e,x),s(e,$);for(let k=0;k<T.length;k+=1)T[k].m($,null);s($,O),s($,S),s(S,I),s(I,w),s(e,G),p&&p.m(e,null),U||(M=[K(f,"click",i[3]),K(I,"click",ee.toggle)],U=!0)},p(v,[D]){if(D&4){L=v[2];let k;for(k=0;k<L.length;k+=1){const j=ke(v,L,k);T[k]?T[k].p(j,D):(T[k]=xe(j),T[k].c(),T[k].m($,O))}for(;k<T.length;k+=1)T[k].d(1);T.length=L.length}D&2&&q!==(q="bi "+(v[1]==="light"?"bi-sun":"bi-moon-stars")+" text-lg dark:text-slate-300 hover:text-primary")&&o(w,"class",q),v[0]?p?p.p(v,D):(p=Ee(v),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i:J,o:J,d(v){v&&a(e),$e(T,v),p&&p.d(),U=!1,Ie(M)}}}function Ge(i,e,t){let l;Te(i,ee,d=>t(1,l=d));let r=!1;const m=[{href:`${ae}/`,label:"Accueil"},{href:`${ae}/glossary`,label:"Glossaire"},{href:"https://github.com/pbouillon/locutionis",label:"GitHub"}];return[r,l,m,()=>t(0,r=!0),()=>t(0,r=!1),()=>t(0,r=!1)]}class je extends oe{constructor(e){super();ie(this,e,Ge,Ce,ne,{})}}function qe(i){let e,t,l,r,m,_,h;t=new je({});const y=i[1].default,d=De(y,i,i[0],null);return _=new Ne({}),{c(){e=n("div"),me(t.$$.fragment),l=A(),r=n("main"),d&&d.c(),m=A(),me(_.$$.fragment),this.h()},l(f){e=c(f,"DIV",{class:!0});var b=u(e);be(t.$$.fragment,b),l=N(b),r=c(b,"MAIN",{class:!0});var x=u(r);d&&d.l(x),x.forEach(a),m=N(b),be(_.$$.fragment,b),b.forEach(a),this.h()},h(){o(r,"class","flex-grow px-5 pt-2 my-5"),o(e,"class","flex flex-col min-h-screen dark:bg-gray-900")},m(f,b){F(f,e,b),pe(t,e,null),s(e,l),s(e,r),d&&d.m(r,null),s(e,m),pe(_,e,null),h=!0},p(f,[b]){d&&d.p&&(!h||b&1)&&Ve(d,y,f,f[0],h?Le(y,f[0],b,null):Se(f[0]),null)},i(f){h||(se(t.$$.fragment,f),se(d,f),se(_.$$.fragment,f),h=!0)},o(f){re(t.$$.fragment,f),re(d,f),re(_.$$.fragment,f),h=!1},d(f){f&&a(e),ve(t),d&&d.d(f),ve(_)}}}function He(i,e,t){let{$$slots:l={},$$scope:r}=e;return i.$$set=m=>{"$$scope"in m&&t(0,r=m.$$scope)},[r,l]}class Fe extends oe{constructor(e){super();ie(this,e,He,qe,ne,{})}}export{Fe as default};