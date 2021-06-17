(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{603:function(t,e,r){"use strict";r.r(e);var a=r(46),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),r("h2",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("当构建可靠的应用时，测试在个人或团队构建新特性、重构代码、修复 bug 等工作中扮演了关键的角色。尽管测试的流派有很多，它们在 web 应用这个领域里主要有三大类：")]),t._v(" "),r("ul",[r("li",[t._v("单元测试")]),t._v(" "),r("li",[t._v("组件测试")]),t._v(" "),r("li",[t._v("端到端 (E2E，end-to-end) 测试")])]),t._v(" "),r("p",[t._v("本章节致力于引导大家了解测试的生态系统的并为 Vue 应用或组件库选择适合的工具。")]),t._v(" "),r("h2",{attrs:{id:"单元测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),r("h3",{attrs:{id:"介绍-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍-2"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("单元测试允许你将独立单元的代码进行隔离测试，其目的是为开发者提供对代码的信心。通过编写细致且有意义的测试，你能够有信心在构建新特性或重构已有代码的同时，保持应用的功能和稳定。")]),t._v(" "),r("p",[t._v("为一个 Vue 应用做单元测试并没有和为其它类型的应用做测试有什么明显的区别。")]),t._v(" "),r("h3",{attrs:{id:"选择框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择框架"}},[t._v("#")]),t._v(" 选择框架")]),t._v(" "),r("p",[t._v("因为单元测试的建议通常是框架无关的，所以下面只是当你在评估应用的单元测试工具时需要的一些基本指引。")]),t._v(" "),r("h4",{attrs:{id:"一流的错误报告"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一流的错误报告"}},[t._v("#")]),t._v(" 一流的错误报告")]),t._v(" "),r("p",[t._v("当测试失败时，提供有用的错误信息对于单元测试框架来说至关重要。这是断言库应尽的职责。一个具有高质量错误信息的断言能够最小化调试问题所需的时间。除了简单地告诉你什么测试失败了，断言库还应额外提供上下文以及测试失败的原因，例如预期结果 vs 实际得到的结果。")]),t._v(" "),r("p",[t._v("一些诸如 Jest 这样的单元测试框架会包含断言库。另一些诸如 Mocha 需要你单独安装断言库 (通常会用 Chai)。")]),t._v(" "),r("h4",{attrs:{id:"活跃的社区和团队"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#活跃的社区和团队"}},[t._v("#")]),t._v(" 活跃的社区和团队")]),t._v(" "),r("p",[t._v("因为主流的单元测试框架都是开源的，所以对于一些旨在长期维护其测试且确保项目本身保持活跃的团队来说，拥有一个活跃的社区是至关重要的。额外的好处是，在任何时候遇到问题时，一个活跃的社区会为你提供更多的支持。")]),t._v(" "),r("h3",{attrs:{id:"框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#框架"}},[t._v("#")]),t._v(" 框架")]),t._v(" "),r("p",[t._v("尽管生态系统里有很多工具，这里我们列出一些在 Vue 生态系统中常用的单元测试工具。")]),t._v(" "),r("h4",{attrs:{id:"jest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jest"}},[t._v("#")]),t._v(" Jest")]),t._v(" "),r("p",[t._v("Jest 是一个专注于简易性的 JavaScript 测试框架。一个其独特的功能是可以为测试生成快照 (snapshot)，以提供另一种验证应用单元的方法。")]),t._v(" "),r("p",[r("strong",[t._v("资料：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://jestjs.io/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest 官网"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://cli.vuejs.org/core-plugins/unit-jest.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI 官方插件 - Jest"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"mocha"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mocha"}},[t._v("#")]),t._v(" Mocha")]),t._v(" "),r("p",[t._v("Mocha 是一个专注于灵活性的 JavaScript 测试框架。因为其灵活性，它允许你选择不同的库来满足诸如侦听 (如 Sinon) 和断言 (如 Chai) 等其它常见的功能。另一个 Mocha 独特的功能是它不止可以在 Node.js 里运行测试，还可以在浏览器里运行测试。")]),t._v(" "),r("p",[r("strong",[t._v("资料：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://mochajs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mocha 官网"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://cli.vuejs.org/core-plugins/unit-mocha.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI 官方插件 - Mocha"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"组件测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件测试"}},[t._v("#")]),t._v(" 组件测试")]),t._v(" "),r("h3",{attrs:{id:"介绍-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍-3"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("测试大多数 Vue 组件时都必须将它们挂载到 DOM (虚拟或真实) 上，才能完全断言它们正在工作。这是另一个与框架无关的概念。因此组件测试框架的诞生，是为了让用户能够以可靠的方式完成这项工作，同时还提供了 Vue 特有的诸如对 Vuex、Vue Router 和其他 Vue 插件的集成的便利性。")]),t._v(" "),r("h3",{attrs:{id:"选择框架-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择框架-2"}},[t._v("#")]),t._v(" 选择框架")]),t._v(" "),r("p",[t._v("以下章节提供了在评估最适合你的应用的组件测试框架时需要记住的事项。")]),t._v(" "),r("h4",{attrs:{id:"与-vue-生态系统的最佳兼容性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与-vue-生态系统的最佳兼容性"}},[t._v("#")]),t._v(" 与 Vue 生态系统的最佳兼容性")]),t._v(" "),r("p",[t._v("毋容置疑，最重要的标准之一就是组件测试库应该尽可能与 Vue 生态系统兼容。虽然这看起来很全面，但需要记住的一些关键集成领域包括单文件组件 (SFC)、Vuex、Vue Router 以及应用所依赖的任何其他特定于 Vue 的插件。")]),t._v(" "),r("h4",{attrs:{id:"一流的错误报告-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一流的错误报告-2"}},[t._v("#")]),t._v(" 一流的错误报告")]),t._v(" "),r("p",[t._v("当测试失败时，提供有用的错误日志以最小化调试问题所需的时间对于组件测试框架来说至关重要。除了简单地告诉你什么测试失败了，他们还应额外提供上下文以及测试失败的原因，例如预期结果 vs 实际得到的结果。")]),t._v(" "),r("h3",{attrs:{id:"推荐"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推荐"}},[t._v("#")]),t._v(" 推荐")]),t._v(" "),r("h4",{attrs:{id:"vue-testing-library-testing-library-vue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-testing-library-testing-library-vue"}},[t._v("#")]),t._v(" Vue Testing Library (@testing-library/vue)")]),t._v(" "),r("p",[t._v("Vue Testing Library 是一组专注于测试组件而不依赖实现细节的工具。由于在设计时就充分考虑了可访问性，它采用的方案也使重构变得轻而易举。")]),t._v(" "),r("p",[t._v("它的指导原则是，与软件使用方式相似的测试越多，它们提供的可信度就越高。")]),t._v(" "),r("p",[r("strong",[t._v("资料：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://testing-library.com/docs/vue-testing-library/intro",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Testing Library 官网"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"vue-test-utils"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-test-utils"}},[t._v("#")]),t._v(" Vue Test Utils")]),t._v(" "),r("p",[t._v("Vue Test Utils 是官方的偏底层的组件测试库，它是为用户提供对 Vue 特定 API 的访问而编写的。如果你对测试 Vue 应用不熟悉，我们建议你使用 Vue Testing Library，它是 Vue Test Utils 的抽象。")]),t._v(" "),r("p",[r("strong",[t._v("资源：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://vue-test-utils.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Test Utils 官方文档"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://lmiller1990.github.io/vue-testing-handbook/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 测试指南"),r("OutboundLink")],1),t._v(" by Lachlan Miller")])]),t._v(" "),r("h2",{attrs:{id:"端到端-e2e-测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#端到端-e2e-测试"}},[t._v("#")]),t._v(" 端到端 (E2E) 测试")]),t._v(" "),r("h3",{attrs:{id:"介绍-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍-4"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("虽然单元测试为开发者提供了一定程度的信心，但是单元测试和组件测试在部署到生产环境时提供应用整体覆盖的能力是有限的。因此，端到端测试可以说从应用最重要的方面进行测试覆盖：当用户实际使用应用时会发生什么。")]),t._v(" "),r("p",[t._v("换句话说，端到端测试验证应用中的所有层。这不仅包括你的前端代码，还包括所有相关的后端服务和基础设施，它们更能代表你的用户所处的环境。通过测试用户操作如何影响应用，端到端测试通常是提高应用是否正常运行的信心的关键。")]),t._v(" "),r("h3",{attrs:{id:"选择框架-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择框架-3"}},[t._v("#")]),t._v(" 选择框架")]),t._v(" "),r("p",[t._v("虽然 web 上的端到端测试因不可信赖 (片面的) 测试和减慢开发过程而得到负面的声誉，但现代端到端工具在创建更可靠的、交互的和实用的测试方面取得了长足进步。在选择端到端测试框架时，以下章节在你为应用选择测试框架时提供了一些指导。")]),t._v(" "),r("h4",{attrs:{id:"跨浏览器测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#跨浏览器测试"}},[t._v("#")]),t._v(" 跨浏览器测试")]),t._v(" "),r("p",[t._v("端到端测试的一个主要优点是它能够跨多个浏览器测试应用。尽管 100% 的跨浏览器覆盖看上去很诱人，但需要注意的是，因为持续运行这些跨浏览器测试需要额外的时间和机器消耗，它会降低团队的资源回报。因此，在选择应用需要的跨浏览器测试数量时，必须注意这种权衡。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("针对浏览器特定问题的一个最新进展是，针对不常用的浏览器 (如：< IE11、旧版 Safari 等) 使用应用监视和错误报告工具 (如：Sentry、LogRocket 等)。")])]),t._v(" "),r("h4",{attrs:{id:"更快的反馈路径"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更快的反馈路径"}},[t._v("#")]),t._v(" 更快的反馈路径")]),t._v(" "),r("p",[t._v("端到端测试和开发的主要问题之一是运行整个套件需要很长时间。通常，这只在持续集成和部署 (CI/CD) 管道中完成。现代的端到端测试框架通过添加类似并行化的特性来帮助解决这个问题，这使得 CI/CD 管道的运行速度通常比以前快。此外，在本地开发时，有选择地为正在处理的页面运行单个测试的能力，同时还提供测试的热重载，将有助于提高开发者的工作流程和工作效率。")]),t._v(" "),r("h4",{attrs:{id:"一流的调试经验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一流的调试经验"}},[t._v("#")]),t._v(" 一流的调试经验")]),t._v(" "),r("p",[t._v("虽然开发者传统上依赖于在终端窗口中扫描日志来帮助确定测试中出了什么问题，但现代端到端测试框架允许开发者利用他们已经熟悉的工具，例如浏览器开发工具。")]),t._v(" "),r("h3",{attrs:{id:"推荐-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推荐-2"}},[t._v("#")]),t._v(" 推荐")]),t._v(" "),r("p",[t._v("虽然生态系统中有许多工具，但以下是一些 Vue.js 生态系统中常用的端到端测试框架。")]),t._v(" "),r("h4",{attrs:{id:"cypress-io"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cypress-io"}},[t._v("#")]),t._v(" Cypress.io")]),t._v(" "),r("p",[t._v("Cypress.io 是一个测试框架，旨在通过使开发者能够可靠地测试他们的应用，同时提供一流的开发者体验，来提高开发者的生产率。")]),t._v(" "),r("p",[r("strong",[t._v("资料：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.cypress.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cypress 官网"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://cli.vuejs.org/core-plugins/e2e-cypress.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI 官方插件 - Cypress"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/testing-library/cypress-testing-library",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cypress Testing Library"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"nightwatch-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nightwatch-js"}},[t._v("#")]),t._v(" Nightwatch.js")]),t._v(" "),r("p",[t._v("Nightwatch.js 是一个端到端测试框架，可用于测试 web 应用和网站，以及 Node.js 单元测试和集成测试。")]),t._v(" "),r("p",[r("strong",[t._v("资料：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://nightwatchjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nightwatch 官网"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://cli.vuejs.org/core-plugins/e2e-nightwatch.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI 官方插件 - Nightwatch"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"puppeteer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#puppeteer"}},[t._v("#")]),t._v(" Puppeteer")]),t._v(" "),r("p",[t._v("Puppeteer 是一个 Node.js 库，它提供高阶 API 来控制浏览器，并可以与其他测试运行程序 (例如 Jest) 配对来测试应用。")]),t._v(" "),r("p",[r("strong",[t._v("资料：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://pptr.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer 官网"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"testcafe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testcafe"}},[t._v("#")]),t._v(" TestCafe")]),t._v(" "),r("p",[t._v("TestCafe 是一个基于端到端的 Node.js 框架，旨在提供简单的设置，以便开发者能够专注于创建易于编写和可靠的测试。")]),t._v(" "),r("p",[r("strong",[t._v("资料：")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://devexpress.github.io/testcafe/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TestCafe 官网"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);