(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{304:function(e,t,r){"use strict";r.r(t);var n={name:"SetupIndexPage",data:function(){return{codeError1:null,codeSuccess1:null,codeError2:null,codeSuccess2:null,user:{email:"julien.griffon@win-win.com",password:""}}},methods:{adminSetupCreateTables:function(){var e=this;console.log("admin > setup > createTables"),this.codeError1=this.codeSuccess1=null,this.$store.dispatch("admin/setup/createTables").then((function(t){console.log("admin > setup > createTables > success"),console.log(t.data),e.codeSuccess1=t.data.codeSuccess})).catch((function(t){console.log("admin > setup > createTables > error"),e.codeError1=t.response.data.codeError}))},adminSetupCreateSuperAdmin:function(){var e=this;console.log("admin > setup > createSuperAdmin"),this.codeError2=this.codeSuccess2=null,this.$store.dispatch("admin/setup/createSuperAdmin",{user:this.user}).then((function(t){console.log("admin > setup > createSuperAdmin > success"),console.log(t.data),e.codeSuccess2=t.data.codeSuccess})).catch((function(t){console.log("admin > setup > createSuperAdmin > error"),e.codeError2=t.response.data.codeError}))}}},o=r(44),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("h1",{staticClass:"text-2xl"},[e._v("\n    "+e._s(e.$t("admin.setup.index.h1"))+"\n  ")]),e._v(" "),r("div",{staticClass:"p-5"},[r("span",[e._v("\n      Créer la base de données elive_admin\n    ")]),e._v(" "),r("br"),e._v(" "),r("button",{staticClass:"text-white bg-blue-700 px-5 py-2",attrs:{type:"button"},on:{click:function(t){return e.adminSetupCreateTables()}}},[e._v("\n      Créer les tables\n    ")]),e._v(" "),e.codeError1?r("div",{staticClass:"error"},[r("p",[e._v("\n        "+e._s(e.$t(e.codeError1))+"\n      ")])]):e._e(),e._v(" "),e.codeSuccess1?r("div",{staticClass:"success"},[r("p",[e._v("\n        "+e._s(e.$t(e.codeSuccess1))+"\n      ")])]):e._e()]),e._v(" "),r("div",{staticClass:"p-5"},[r("span",[e._v("\n      Créer le superadmin\n    ")]),e._v(" "),r("div",[r("label",{staticClass:"block",attrs:{for:"email"}},[e._v("\n        email*\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("div",[r("label",{staticClass:"block",attrs:{for:"password"}},[e._v("\n        password*\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"text-white bg-blue-700 px-5 py-2",attrs:{type:"button"},on:{click:function(t){return e.adminSetupCreateSuperAdmin()}}},[e._v("\n      Créer le superadmin\n    ")]),e._v(" "),e.codeError2?r("div",{staticClass:"error"},[r("p",[e._v("\n        "+e._s(e.$t(e.codeError2))+"\n      ")])]):e._e(),e._v(" "),e.codeSuccess2?r("div",{staticClass:"success"},[r("p",[e._v("\n        "+e._s(e.$t(e.codeSuccess2))+"\n      ")])]):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);