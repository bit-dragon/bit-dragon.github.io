(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(e,a,t){"use strict";t.r(a);t(70),t(13),t(139),t(140);var n=t(0),i=t.n(n),r=(t(50),function(e){var a=e.name,t=void 0===a?"experience":a,n=e.children;return i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"content"},i.a.createElement("h2",{className:"title is-2"},t),n))}),o=function(e){var a=e.name,t=void 0===a?"Wizeline":a,n=e.timeFrame,r=void 0===n?"2014 to present":n,o=e.jobPosition,s=void 0===o?"Software Engineer":o,c=e.description,l=e.children;return i.a.createElement("li",{style:{marginTop:"1.5rem"}},i.a.createElement("h3",{className:"title is-3 has-text-primary"},t," ",i.a.createElement("span",{className:"has-text-grey-lighter"},r)),i.a.createElement("h4",{className:"subtitle is-4 has-text-grey"},s),i.a.createElement("p",null,c),l)},s=function(e){var a=e.children;return i.a.createElement("div",null,a)},c=function(e){var a=e.condition,t=e.children;return a?null:t},l=function(e){var a=e.name,t=void 0===a?"Project name":a,n=e.client,r=void 0===n?"amazon":n,o=e.hidden,s=void 0===o||o,l=e.children;return i.a.createElement(c,{condition:s},i.a.createElement("div",{className:"card"},i.a.createElement("header",{className:"card-header"},i.a.createElement("div",{className:"media",style:{margin:"1rem 0"}},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48 is-hidden-touch"},i.a.createElement("img",{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-4"},t),i.a.createElement("p",{className:"subtitle is-6 has-text-grey"},r)))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"content"},l)),i.a.createElement("footer",{className:"card-footer"})))},m=t(217),d=t.n(m),p=function(e){var a=e.data,t=e.extended;return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-one-fifth is-hidden-touch"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-content"},i.a.createElement("div",{className:"has-text-centered"},i.a.createElement("figure",{className:"image is-128x128 is-inline-block"},i.a.createElement("img",{className:"is-rounded",src:d.a}))),i.a.createElement("article",{className:"media has-text-centered"},i.a.createElement("div",{className:"media-left"},i.a.createElement("span",{className:"icon has-text-info"},i.a.createElement("i",{className:"ion-ios-mail"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("span",{className:"is-size-7"},i.a.createElement("a",{className:"is-italic",href:"mailto:"+a.email},a.email))))))),i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"content"},i.a.createElement("div",null,i.a.createElement("h1",{className:"title"},"Hey there, I'm ",i.a.createElement("span",{className:"has-text-info"},a.name)),i.a.createElement("h2",{className:"title is-5"},"Senior Software Engineer")),i.a.createElement("div",{className:"content"},a.about_me.map(function(e){return i.a.createElement("p",null,e)})))))),i.a.createElement(r,{name:"Experience"},i.a.createElement("ul",null,a.companies.map(function(e){return i.a.createElement(o,{name:e.name,description:e.description,jobPosition:e.role,timeFrame:e.period},i.a.createElement(s,null,e.projects.map(function(e){return i.a.createElement(l,{name:e.name,client:e.client,hidden:!t},e.description.map(function(e){return i.a.createElement("p",null,e)}),i.a.createElement("div",{className:"tags"},i.a.createElement("span",{className:"tag is-info"},"Tech Stack:"),e.stack.map(function(e){return i.a.createElement("span",{className:"tag is-info is-light"},e)})))})))}))))},u=t(205),h=t(209),f=t(252);a.default=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return Object(n.useEffect)(function(){t(document.location.toString().includes("extended"))},[]),i.a.createElement(h.a,null,i.a.createElement(u.a,{title:"Curriculum"}),i.a.createElement(p,{data:f,extended:a}))}},201:function(e,a,t){var n;e.exports=(n=t(204))&&n.default||n},202:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(66),o=t.n(r);t.d(a,"a",function(){return o.a});t(201),t(9).default.enqueue,i.a.createContext({})},203:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(202);t(191);a.a=function(){return i.a.createElement("nav",{className:"custom-nav navbar is-primary",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(r.a,{className:"navbar-item is-italic has-text-black-bis has-text-weight-bold",to:"/"},"bit-dragon"),i.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{className:"navbar-menu"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(r.a,{className:"navbar-item",to:"/"},"Home"),i.a.createElement(r.a,{className:"navbar-item is-hidden-mobile",to:"/map"},"My scratch map"),i.a.createElement(r.a,{className:"navbar-item",to:"/curriculum"},"Curriculum"),i.a.createElement(r.a,{className:"navbar-item is-hidden-mobile is-hidden-desktop",to:"/gallery-360"},"360 Pictures"))))}},204:function(e,a,t){"use strict";t.r(a);t(22);var n=t(0),i=t.n(n),r=t(90);a.default=function(e){var a=e.location,t=e.pageResources;return t?i.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},205:function(e,a,t){"use strict";var n=t(206),i=t(0),r=t.n(i),o=t(211),s=t.n(o);function c(e){var a=e.description,t=e.lang,i=e.meta,o=e.title,c=n.data.site,l=a||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},a.a=c},206:function(e){e.exports={data:{site:{siteMetadata:{title:"Bit-Dragon website",description:"Here you can find part of my work and expertise.",author:"@bdragon_"}}}}},209:function(e,a,t){"use strict";var n=t(210),i=t(0),r=t.n(i),o=t(203);t(192);a.a=function(e){var a=e.children;n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement("div",{className:"container is-fluid"},r.a.createElement("main",null,a),r.a.createElement("div",{className:"hero-foot"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"bit-dragon - 2019")))))}},210:function(e){e.exports={data:{site:{siteMetadata:{title:"Bit-Dragon website"}}}}},217:function(e,a,t){e.exports=t.p+"static/me-and-kishka-61146a99a8e2a239ffc81abb75b08889.jpg"},252:function(e){e.exports={name:"Jorge Garcia Miguel",email:"jorge.em223@gmail.com",about_me:["I am Senior Software Engineer with a passion for good design, team focused, clear communicator, good practices, emphasizing cross team collaboration and transparency.","I'm currently a Technical Lead that loves to share my knowledge and learn from everyone in my team, focusing in having well defined task and help to anyone to unblock any issue if appears."],companies:[{name:"Wizeline",period:"2014 to present",role:"Senior Software Engineer III",description:"Wizeline is a software development and design services company founded in San Francisco with operations in Mexico, Vietnam, Thailand, Australia, and Spain. Wizeline helps technology leaders build innovative end-to-end products that capture new markets, disrupt business models, and leverage data. Over 10M people use Wizeline-designed and developed products every day. With Silicon Valley DNA and exceptional global talent, Wizeline has built a practice uniquely equipped to this task.",projects:[{name:"Interactive Pipeline Builder",client:"JDPower (Services)",description:["As a tech lead I help to the team to achieve our goals and expectations, design funcionality, mentoring junior devs, define and estimate task.","I'm in charge in design and build an interactive ETL interface to help no technical users to transform any dataset in a easy and friendly way by just drawing into a canvas avoiding to write SQL queries."],stack:["Serverles Framework","AWS","Kotlin","JointJS","AngularJS","NodeJS","Gitlab","CI/CD","Scrum","REST"]},{name:"Referal Engine",client:"Google (Services)",description:["Design and develop a PWA (Progressive Web App) for be able to create/share rewards through a social network (Whatsapp, Facebook and Twitter).","Adding support for iOS (11 version at that time) to be able to have the PWA funcionality that wasn't available in that moment","Develop functionality to be able to have a custom preview for a shared reward based on the Google My Bussines API data."],stack:["ReactJS","Firebase","MaterialUI","Cloud Functions","Twilio","Jest","GCP","Google Repository","CI/CD","Scrum"]},{name:"E Learning Platform",client:"Unity (Services)",description:["Design and develop a Unity E Learning Platform that is connected to a custom CMS. The E Learning Platform provides a way to keep track and continue larning any new topic from desing to development.","Design and develop a Unity CMS for the E Learning Platform with a friendly interface to help to the content editors be able to create/edit his content.","During the development process it was required to be in sync with different stake holders and divisions that were located in three diferent timezones (China Central Time, Pacific Time and Greenwich Mean Time)"],stack:["ReactJS","Sequelize","MariaDB","Jest","Material-UI"]},{name:"Roadmap",client:"Wizeline (Product)",description:["Roadmap is a product to help companies to collaborate and plan anything by using a Gantt Chart by integrating ability to comment, collaborate with specific users/groups.","My focus was to add any new feature to chart that was develop using D3 and implement new funcionality like the comments section."],stack:["ReactJS","StylesComponents","CD/CI","Redux","Sagas","D3","GruntJS","Webpack"]},{name:"Self Service",client:"Downjones (Services)",description:["Self Service is a product to help customers to manage his news paper subscriptions (digital/physical)","Develop a component library to avoid component duplication and reduce the amount of bugs by duplicate components","Integrate the component library to the Self Service platform"],stack:["ReactJS","Reflux","CSS Modules","CI"]},{name:"Wizeline Platform",client:"Wizeline (Product)",description:["Wizeline is a product to help companies use data to build winning technology products that their customers love.","In charge to develop any requested feature or integration, mostly focus in front-end development and sometimes in backend development by doing some query optimizations (django framework related)"],stack:["ReactJS","Angular 1.6","JIRA OnPrem","JIRA Cloud","Python","django","Salesforce Apex","Salesforce Canvas SDK","Grunt"]}]},{name:"Nearsoft",period:"2012 to 2014",role:"Software Engineer",description:"Nearsoft is a software product development service, with operations in Mexico. We work as innovation partners to our clients, helping them build world-class products. For the last four years the company has been recognized as a Great Place to Work and Most Democratic Workplace.",projects:[{name:"Agent Desktop Tool",client:"Switchfly (services)",description:["The Agen Desktop Tool is a single page application to help agents to book any flight, car or hotel with a user friendly interface.","Encore Release 1 initiative (Hotel) and Encore Release 2 initiative (Air). Agile Java Backend and Frontend development with spring 3 and EmberJS"],stack:["EmberJS","Javascript","Sprint MVC 3","Mocha","Chai","Gulp"]},{name:"Switchfly Platform",client:"Switchfly (services)",description:["I created an automation framework for some specific test cases using Selenium."],stack:["Selenium","Java"]},{name:"Coyalla",client:"Coyalla (services)",description:["Coyalla is a product to help people to schedule and organize an event by integrating different calendar platforms","Desing and implement a proof of concept by using Ruby on Rails along with CoffeeScript."],stack:["Ruby on Rails","CoffeeScript","Capybara","Cucumber"]}]},{name:"LogicalBricks Solutions",period:2012,role:"Web developer",description:"LogicalBricks solutions is a service company that provides web development services.",projects:[{name:"Mixteca region stadistics",client:"UTM - Universidad Tecnologica de la Mixteca (Consulting)",description:["Design, development and implementation of a system that provides information about population of the Mixteca region of Mexico by consuming data from different sources."],stack:["Ruby on Rails","Bootstrap"]},{name:"Token Generation",client:"CBFactura (Product)",description:["Desing and implement a library to create a link between PAC (Provedor Autorizado de Certificacion for Spanish Abbreviations) and a Ruby on Rails application to stamp a file with a token given for SAT (Servicio de Administracion Tributaria for Spanish Abbreviations)."],stack:["Ruby on Rails","Bootstrap","HAML","SASS","Capybara"]}]},{name:"CFE - Comisión Federal de Electricidad",period:"2011 to 2012",role:"Web developer",description:"The Comisión Federal de Electricidad (English: Federal Electricity Commission) is the state-owned electric utility of Mexico, widely known as CFE. It is the country's dominant electric company, and the country's second most powerful state-owned company after Pemex.",projects:[{name:"SMGTG (Sistema de Monitoreo de la Gestión del Talento Gerencial for Spanish Abbreviations)",client:"CFE (Intership)",description:["Design, development and implementation of Web System at UTEC (Universidad Tecnologica for Spanish Abbreviation) to manage the profesional careers for all his employees on CFE (South east division)"],stack:["ASP.NET MVC 3","IIS","SQL Server","javascript","jQuery"]}]}]}}}]);
//# sourceMappingURL=component---src-pages-curriculum-js-11f47bee83e7f86ff2ad.js.map