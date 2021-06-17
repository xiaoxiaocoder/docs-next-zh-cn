(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{529:function(t,e,s){"use strict";s.r(e);var n=s(46),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"生命周期钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子"}},[t._v("#")]),t._v(" 生命周期钩子")]),t._v(" "),s("blockquote",[s("p",[t._v("本指南假定你已经阅读了 "),s("RouterLink",{attrs:{to:"/guide/composition-api-introduction.html"}},[t._v("组合式 API 简介")]),t._v("和"),s("RouterLink",{attrs:{to:"/guide/reactivity-fundamentals.html"}},[t._v("响应性基础")]),t._v("。如果你不熟悉组合式 API，请先阅读这篇文章。")],1)]),t._v(" "),s("VideoLesson",{attrs:{href:"https://www.vuemastery.com/courses/vue-3-essentials/lifecycle-hooks",title:"Learn about how Lifecycle Hooks work with Vue Mastery"}},[t._v("在 Vue Mastery 上观看关于生命周期钩子的免费视频")]),t._v(" "),s("p",[t._v("你可以通过在生命周期钩子前面加上 “on” 来访问组件的生命周期钩子。")]),t._v(" "),s("p",[t._v("下表包含如何在 "),s("RouterLink",{attrs:{to:"/guide/composition-api-setup.html"}},[t._v("setup ()")]),t._v(" 内部调用生命周期钩子：")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项式 API")]),t._v(" "),s("th",[t._v("Hook inside "),s("code",[t._v("setup")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("beforeCreate")])]),t._v(" "),s("td",[t._v("Not needed*")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("created")])]),t._v(" "),s("td",[t._v("Not needed*")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("beforeMount")])]),t._v(" "),s("td",[s("code",[t._v("onBeforeMount")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("mounted")])]),t._v(" "),s("td",[s("code",[t._v("onMounted")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("beforeUpdate")])]),t._v(" "),s("td",[s("code",[t._v("onBeforeUpdate")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("updated")])]),t._v(" "),s("td",[s("code",[t._v("onUpdated")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("beforeUnmount")])]),t._v(" "),s("td",[s("code",[t._v("onBeforeUnmount")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("unmounted")])]),t._v(" "),s("td",[s("code",[t._v("onUnmounted")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("errorCaptured")])]),t._v(" "),s("td",[s("code",[t._v("onErrorCaptured")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("renderTracked")])]),t._v(" "),s("td",[s("code",[t._v("onRenderTracked")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("renderTriggered")])]),t._v(" "),s("td",[s("code",[t._v("onRenderTriggered")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("activated")])]),t._v(" "),s("td",[s("code",[t._v("onActivated")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("deactivated")])]),t._v(" "),s("td",[s("code",[t._v("onDeactivated")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("因为 "),s("code",[t._v("setup")]),t._v(" 是围绕 "),s("code",[t._v("beforeCreate")]),t._v(" 和 "),s("code",[t._v("created")]),t._v(" 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 "),s("code",[t._v("setup")]),t._v(" 函数中编写。")])]),t._v(" "),s("p",[t._v("这些函数接受一个回调函数，当钩子被组件调用时将会被执行:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MyBook.vue")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mounted")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Component is mounted!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);