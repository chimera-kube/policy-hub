(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{24:function(e,t,i){},25:function(e,t,i){},32:function(e){e.exports=JSON.parse('[{"name":"psp-apparmor","description":"A Pod Security Policy that controls usage of AppArmor profiles","homepage":"https://github.com/chimera-kube/psp-apparmor","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/psp-apparmor:v0.1.1","url":"https://github.com/chimera-kube/psp-apparmor/releases/download/v0.1.1/policy.wasm"},"keywords":["PSP","AppArmor"],"resources":["Pod"],"mutation":false},{"name":"psp-capabilities","description":"A Pod Security Policy that controls Container Capabilities","homepage":"https://github.com/chimera-kube/psp-capabilities","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/psp-capabilities:v0.1.0","url":"https://github.com/chimera-kube/psp-capabilities/releases/download/v0.1.0/policy.wasm"},"keywords":["PSP","Container","Capabilities"],"resources":["Pod"],"mutation":true},{"name":"trusted-repo-source","description":"Restrict what registries, tags and images can be used","homepage":"https://github.com/chimera-kube/trusted-repos-policy","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/trusted-repos:latest"},"keywords":["Image","Registry","Tag"],"resources":["Pod"],"mutation":false},{"name":"psp-allow-privilege-escalation","description":"A Pod Security Policy that controls usage of `allowPrivilegeEscalation`","homepage":"https://github.com/chimera-kube/psp-allow-privilege-escalation","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/psp-allow-privilege-escalation:v0.1.1","url":"https://github.com/chimera-kube/psp-allow-privilege-escalation/releases/download/v0.1.1/policy.wasm"},"keywords":["PSP","Container","Privilege Escalation"],"resources":["Pod"],"mutation":false},{"name":"pod-privileged-policy","description":"Limit the ability to create privileged containers","homepage":"https://github.com/chimera-kube/pod-privileged-policy","author":{"name":"Chimera Org","homepage":"https://github.com/chimera-kube"},"download":{"registry":"ghcr.io/chimera-kube/policies/pod-privileged-policy:v0.1.2","url":"https://github.com/chimera-kube/pod-privileged-policy/releases/download/v0.1.2/policy.wasm"},"keywords":["PSP","Container","Privileged"],"resources":["Pod"],"mutation":false}]')},34:function(e,t,i){"use strict";i.r(t);var r=i(0),a=i.n(r),s=i(7),o=i.n(s),n=(i(24),i(10)),c=i(11),l=i(18),h=i(17),p=(i(25),i(1));function d(e){var t=e.text,i=e.highlight,r=t.toLocaleLowerCase().indexOf(i.toLocaleLowerCase());if(r<0)return Object(p.jsx)("span",{children:t},"hl");var a=t.substring(0,r),s=t.substring(r,r+i.length),o=t.substring(r+i.length,t.length);return a=a?Object(p.jsx)("span",{children:a},"m1"):null,s=s?Object(p.jsx)("span",{style:{borderRadius:"2px"},children:Object(p.jsx)("mark",{children:s})},"m2"):null,o=o?Object(p.jsx)("span",{children:o},"m3"):null,Object(p.jsxs)("span",{children:[a,s,o]},"hl")}var u=i(16),m=i.n(u),b=i(12),g=i.n(b),j=i(14),x=i.n(j),O=i(15),y=i.n(O),v=i(9),f=i.n(v),w=function(e){var t=e.policy;return Object(p.jsxs)("article",{children:[Object(p.jsx)("div",{className:"name",children:t.name}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsxs)("aside",{children:[Object(p.jsxs)("a",{className:"text-light link",href:t.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)(g.a,{}),"Homepage"]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),t.author.homepage?Object(p.jsxs)("a",{className:"text-light link",href:t.author.homepage,target:"_blank",rel:"noopener noreferrer",title:"Author",children:[Object(p.jsx)(f.a,{}),t.author.name]}):Object(p.jsxs)("span",{className:"text-smaller text-light not-a-real-link",children:[Object(p.jsx)(f.a,{}),t.author.name]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"text-light not-a-real-link mutation",title:t.mutation?"Validation + Mutation Policy":"Validation Policy",children:[Object(p.jsx)(x.a,{}),t.mutation?Object(p.jsx)(y.a,{}):null]})]}),Object(p.jsx)("div",{className:"text-light text-bigger",children:Object(p.jsx)(d,{text:t.description,highlight:e.descriptionCriteria})}),Object(p.jsxs)("div",{className:"download",children:[Object(p.jsx)("div",{className:"text-light text-smaller",children:"Registry"}),t.download.registry?Object(p.jsx)("input",{type:"text",className:"text-smaller text-light",value:t.download.registry,readonly:!0}):null,t.download.url?Object(p.jsx)("a",{className:"link download",href:t.download.url,target:"_blank",rel:"noopener noreferrer",title:"Download Policy",children:Object(p.jsx)(m.a,{})}):null]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-light text-smaller",children:"Resources"}),t.resources.map((function(e){return Object(p.jsx)("span",{className:"badge resource text-smaller",children:e},t.name+"-"+e)}))]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-light text-smaller",children:"Keywords"}),t.keywords.map((function(e){return Object(p.jsx)("span",{className:"badge keyword text-smaller",children:e},t.name+"-"+e)}))]})]})]})},k=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={descriptionCriteria:"",dataSet:i(32)},a}return Object(c.a)(r,[{key:"onDescriptionFilterChange",value:function(e){var t=e.target.value;this.setState({descriptionCriteria:t})}},{key:"filter",value:function(){var e=this;return this.state.dataSet?this.state.dataSet.filter((function(t){return t.description.toLowerCase().includes(e.state.descriptionCriteria.toLowerCase())})):[]}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"Hub",children:[Object(p.jsxs)("header",{className:"Hub-header",children:[Object(p.jsx)("a",{href:"/policy-hub",rel:"noopener noreferrer",children:"Policy Hub"}),Object(p.jsx)("input",{className:"filter-box",name:"filter-description",onChange:function(t){return e.onDescriptionFilterChange(t)},placeholder:"Filter by description"},"filter-description")]}),Object(p.jsx)("section",{children:this.filter().map((function(t){return Object(p.jsx)(w,{policy:t,descriptionCriteria:e.state.descriptionCriteria},t.name)}))})]})}}]),r}(r.Component),C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,46)).then((function(t){var i=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),r(e),a(e),s(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),C()}},[[34,1,2]]]);
//# sourceMappingURL=main.a3185f19.chunk.js.map