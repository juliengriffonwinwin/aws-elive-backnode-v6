(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{295:function(e,t,r){"use strict";r.r(t);r(13),r(32),r(33);var o={name:"SignupPage",data:function(){return{mandatories:{company:!1,lastname:!1,firstname:!1,email:!1,password1:!1,password2:!1},user:{}}},methods:{adminUserSignup:function(){var e=this;for(var t in Object.keys(this.mandatories).forEach((function(i){return e.mandatories[i]=!1})),this.mandatories)console.log(t),this.user[t]||(this.mandatories[t]=!0);console.log(this.mandatories)}}},n=r(70),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("h1",{staticClass:"text-2xl"},[e._v("\n    "+e._s(e.$t("admin.user.signup.h1"))+"\n  ")]),e._v(" "),r("div",{attrs:{id:"form"}},[r("div",{class:{error:e.mandatories.company}},[r("label",{staticClass:"block",attrs:{for:"company"}},[e._v("\n        company*\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.company,expression:"user.company"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.company},on:{input:function(t){t.target.composing||e.$set(e.user,"company",t.target.value)}}})]),e._v(" "),r("div",{class:{error:e.mandatories.job}},[r("label",{staticClass:"block",attrs:{for:"job"}},[e._v("\n        job\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.job,expression:"user.job"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.job},on:{input:function(t){t.target.composing||e.$set(e.user,"job",t.target.value)}}})]),e._v(" "),r("div",{class:{error:e.mandatories.lastname}},[r("label",{staticClass:"block",attrs:{for:"lastname"}},[e._v("\n        nom*\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastname,expression:"user.lastname"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.lastname},on:{input:function(t){t.target.composing||e.$set(e.user,"lastname",t.target.value)}}})]),e._v(" "),r("div",{class:{error:e.mandatories.firstname}},[r("label",{staticClass:"block",attrs:{for:"firstname"}},[e._v("\n        prénom*\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstname,expression:"user.firstname"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.firstname},on:{input:function(t){t.target.composing||e.$set(e.user,"firstname",t.target.value)}}})]),e._v(" "),r("div",{class:{error:e.mandatories.email}},[r("label",{staticClass:"block",attrs:{for:"email"}},[e._v("\n        email*\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("div",{class:{error:e.mandatories.tel1}},[r("label",{staticClass:"block",attrs:{for:"tel1"}},[e._v("\n        tel1\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.tel1,expression:"user.tel1"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.tel1},on:{input:function(t){t.target.composing||e.$set(e.user,"tel1",t.target.value)}}})]),e._v(" "),r("div",{class:{error:e.mandatories.password1}},[r("label",{staticClass:"block",attrs:{for:"password1"}},[e._v("\n        password1*\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password1,expression:"user.password1"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.password1},on:{input:function(t){t.target.composing||e.$set(e.user,"password1",t.target.value)}}})]),e._v(" "),r("div",{class:{error:e.mandatories.password2}},[r("label",{staticClass:"block",attrs:{for:"password2"}},[e._v("\n        password2*\n      ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password2,expression:"user.password2"}],staticClass:"w-full py-2 px-3 border",attrs:{type:"text",placeholder:""},domProps:{value:e.user.password2},on:{input:function(t){t.target.composing||e.$set(e.user,"password2",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"my-4"},[r("button",{staticClass:"text-white bg-blue-700 px-5 py-2",attrs:{type:"button"},on:{click:function(t){return e.adminUserSignup()}}},[e._v("\n      Créer mon compte\n    ")])]),e._v(" "),r("div",{staticClass:"my-4"},[e._v("\n    *champs obligatoires\n  ")]),e._v(" "),r("div",{staticClass:"my-4"},[r("nuxt-link",{staticClass:"text-blue-700",attrs:{to:"/"+e.$i18n.locale+"/"}},[e._v("\n      Annuler\n    ")])],1),e._v(" "),r("div",{staticClass:"my-4"},[e._v("\n    Vous possédez déjà un compte ?\n    "),r("nuxt-link",{staticClass:"text-blue-700",attrs:{to:"/"+e.$i18n.locale+"/admin/user/login"}},[e._v("\n      Identifiez-vous\n    ")])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);