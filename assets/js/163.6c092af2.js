(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{680:function(t,a,s){"use strict";s.r(a);var n=s(57),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"客户端-hydration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端-hydration"}},[t._v("#")]),t._v(" 客户端 Hydration")]),t._v(" "),s("p",[t._v("Hydration 是在 Vue 在获取静态 HTML，从服务端发出，然后转化为可反应客户端数据变化的动态 DOM 的过程中被引入到客户端的。")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("entry-client.js")]),t._v(" 中，我们通过这行代码简单的挂载应用：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("因为服务端已经渲染出了标记，我们显然不希望将其扔掉并重新创建所有的 DOM 元素。取而代之的是我们想要“hydrate”这些静态标记并使其变得可交互。")]),t._v(" "),s("p",[t._v("Vue 提供了一个 "),s("code",[t._v("createSSRApp")]),t._v(" 方法用来在客户端代码中 (在这个例子中是 "),s("code",[t._v("entry-client.js")]),t._v(") 告诉 Vue hydrate 现有的静态 HTML 而不是重新创建所有的 DOM 元素。")]),t._v(" "),s("h3",{attrs:{id:"hydration-警告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hydration-警告"}},[t._v("#")]),t._v(" Hydration 警告")]),t._v(" "),s("p",[t._v("Vue 会断言客户端生成的虚拟 DOM 树匹配从服务器渲染出来的 DOM 结构。如果不匹配，则它会逃过 hydration 的过程，抛弃已生成的 DOM 并从头开始渲染。这会在浏览器控制台产生一个警告，但是网站还会正常工作。")]),t._v(" "),s("p",[t._v("确保 SSR 工作的第一个关键是确保应用在客户端和服务端的状态一致。密切留意不要依赖浏览器特有的 API (如窗口宽度、设备能力或 localStorage) 或服务器特有的 API (如 Node 内置的)，且留意在不同环境下输出不同结果的代码 (诸如时区、时间戳、规范化 URL 或生成随机数字)。详情参见"),s("RouterLink",{attrs:{to:"/guide/ssr/universal.html"}},[t._v("编写通用的代码")]),t._v("。")],1),t._v(" "),s("p",[t._v("第二个关键是留意 SSR + 客户端 hydration 时 HTML 的有效性会因浏览器不同而不同。例如在 Vue 模板中编写：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hi"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("浏览器会在 "),s("code",[t._v("<table>")]),t._v(" 内自动注入 "),s("code",[t._v("<tbody>")]),t._v("，然而通过 Vue 生成的虚拟 DOM 并不会包含 "),s("code",[t._v("<tbody>")]),t._v("，因此会导致不匹配。为了确保匹配正确，请确保模板中编写的 HTML 是有效的。")]),t._v(" "),s("p",[t._v("你可以考虑在模板的研发过程中使用诸如 "),s("a",{attrs:{href:"https://validator.w3.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C Markup Validation Service"),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://html-validate.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML-validate"),s("OutboundLink")],1),t._v(" 的 HTML 验证器。")])])}),[],!1,null,null,null);a.default=e.exports}}]);