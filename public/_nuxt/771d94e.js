(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{257:function(n,e,t){"use strict";t.r(e);var o={name:"IndexPage",mounted:function(){this.hello()},methods:{hello:function(){this.$store.dispatch("admin/user/hello").then((function(n){console.log(n.data)})).catch((function(n){console.log(n)}))}}},c=t(56),component=Object(c.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("main",[t("h1",{staticClass:"text-2xl"},[n._v("\n    Nuxt IndexPage\n  ")]),n._v(" "),t("p",[n._v("\n    apiClientSecret :\n    "+n._s(n.$config.apiClientSecret)+"\n    "),t("br"),n._v("\n    apiProjectSecret :\n    "+n._s(n.$config.apiProjectSecret)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);