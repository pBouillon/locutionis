function h(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function M(){return Object.create(null)}function b(t){t.forEach(z)}function H(t){return typeof t=="function"}function I(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return h;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(J(n,e))}function lt(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(n.dirty.length,r.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,l){if(r){const o=B(n,e,i,l);t.p(o,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let w=!1;function K(){w=!0}function Q(){w=!1}function R(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:R(1,r,g=>n[e[g]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],o=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);u>=c;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<l.length&&o[c].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[c],a)}}function V(t,n){if(w){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){w&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function W(t){t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function mt(){return N(" ")}function pt(){return N("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,r=!1){Z(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,n,e,i){return L(t,r=>r.nodeName===n,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(n))}function gt(t,n,e){return tt(t,n,e,X)}function nt(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function xt(t){return nt(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Et(t,n){t.value=n==null?"":n}function wt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function et(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}function kt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let y;function p(t){y=t}function k(){if(!y)throw new Error("Function called outside component initialization");return y}function vt(t){k().$$.on_mount.push(t)}function At(t){k().$$.after_update.push(t)}function St(){const t=k();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const r=et(n,e);i.slice().forEach(l=>{l.call(t,r)})}}}function jt(t,n){k().$$.context.set(t,n)}const m=[],T=[],$=[],A=[],O=Promise.resolve();let S=!1;function P(){S||(S=!0,O.then(D))}function Nt(){return P(),O}function j(t){$.push(t)}function Ct(t){A.push(t)}const v=new Set;let x=0;function D(){const t=y;do{for(;x<m.length;){const n=m[x];x++,p(n),it(n.$$)}for(p(null),m.length=0,x=0;T.length;)T.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];v.has(e)||(v.add(e),e())}$.length=0}while(m.length);for(;A.length;)A.pop()();S=!1,v.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const E=new Set;let d;function qt(){d={r:0,c:[],p:d}}function Mt(){d.r||b(d.c),d=d.p}function rt(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function zt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const c in o)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[l]=u}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Ot(t){t&&t.c()}function Pt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,on_mount:l,on_destroy:o,after_update:u}=t.$$;r&&r.m(n,e),i||j(()=>{const c=l.map(z).filter(H);o?o.push(...c):b(c),t.$$.on_mount=[]}),u.forEach(j)}function ot(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(m.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,r,l,o,u=[-1]){const c=y;p(t);const s=t.$$={fragment:null,ctx:null,props:l,update:h,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...C)=>{const q=C.length?C[0]:g;return s.ctx&&r(s.ctx[f],s.ctx[f]=q)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](q),a&&ut(t,f)),g}):[],s.update(),a=!0,b(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){K();const f=Y(n.target);s.fragment&&s.fragment.l(f),f.forEach(W)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),Q(),D()}p(c)}class Ft{$destroy(){ot(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Ht(t,n=h){let e;const i=new Set;function r(u){if(I(t,u)&&(t=u,e)){const c=!_.length;for(const s of i)s[1](),_.push(s,t);if(c){for(let s=0;s<_.length;s+=2)_[s][0](_[s+1]);_.length=0}}}function l(u){r(u(t))}function o(u,c=h){const s=[u,c];return i.add(s),i.size===1&&(e=n(r)||h),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:r,update:l,subscribe:o}}export{Bt as A,ot as B,F as C,Ht as D,Nt as E,V as F,h as G,yt as H,ht as I,b as J,st as K,lt as L,at as M,dt as N,ft as O,kt as P,Et as Q,St as R,Ft as S,T,Lt as U,Ct as V,Y as a,bt as b,gt as c,W as d,X as e,wt as f,_t as g,nt as h,Dt as i,$t as j,mt as k,pt as l,xt as m,qt as n,Tt as o,Mt as p,rt as q,jt as r,I as s,N as t,At as u,vt as v,Ot as w,Pt as x,ct as y,zt as z};