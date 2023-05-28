(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1393:function(e,t,i){Promise.resolve().then(i.bind(i,4985))},4985:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ef}});var a=i(9268),s=i(6394),o=i.n(s),n=[{id:1,link:"#",title:"Home"},{id:2,link:"#about",title:"About"},{id:3,link:"#services",title:"Services"},{id:4,link:"#portfolio",title:"Portfolio"},{id:5,link:"#contact",title:"Contact"}],r=i(6338),l=i(6006);let c=(0,l.createContext)(),d=e=>{let{children:t}=e,[i,s]=(0,l.useState)(!1),o=()=>{s(!0)},n=()=>{s(!1)};return(0,a.jsx)(c.Provider,{value:{showModal:i,showModalHandler:o,closeModalHandler:n},children:t})},u=()=>(0,l.useContext)(c);i(6973);let m=()=>{let{showModalHandler:e}=u();return(0,a.jsx)("nav",{children:(0,a.jsxs)("div",{className:"container nav__container",children:[(0,a.jsx)("a",{href:"",className:"nav__logo",children:(0,a.jsx)(o(),{src:"/assets/logo.jpg",alt:"Logo",width:40,height:40,className:"nav__logo"})}),(0,a.jsx)("ul",{className:"nav__menu",children:n.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.link,children:e.title})},e.id))}),(0,a.jsx)("button",{id:"theme__icon",onClick:e,children:(0,a.jsx)(r.EI4,{})})]})})};var h=i(1033),p=i(2801);let j=[{id:1,link:"https://www.linkedin.com/in/mansourlotfi",icon:(0,a.jsx)(h._iD,{})},{id:2,link:"https://stackoverflow.com/users/12311697/mansour-lotfi",icon:(0,a.jsx)(p.Hjm,{})},{id:3,link:"https://gitlab.com/mansourlotfi",icon:(0,a.jsx)(h._9v,{})},{id:4,link:"https://github.com/mansourlotfi",icon:(0,a.jsx)(h.RrF,{})}];var f=i(9768),g=i.n(f);i(1700);let x=["Don't let your website or web app idea go to waste. Contact me and get a sleek, fast, and mobile-friendly website or web app for your project."];function v(){let[e,t]=(0,l.useState)(0),[i,s]=(0,l.useState)(0),[o,n]=(0,l.useState)(!0),[r,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{if(e===x.length-1&&i===x[e].length)return;if(i===x[e].length+1&&e!==x.length-1&&!r){c(!0);return}if(0===i&&r){c(!1),t(e=>e+1);return}let a=setTimeout(()=>{s(e=>e+(r?-1:1))},Math.max(r?75:i===x[e].length?1e3:150,parseInt((350*Math.random()).toString())));return()=>clearTimeout(a)},[i,e,r]),(0,l.useEffect)(()=>{let e=setTimeout(()=>{n(e=>!e)},500);return()=>clearTimeout(e)},[o]),(0,a.jsx)("p",{"data-aos":"fade-up",children:"".concat(x[e].substring(0,i)).concat(o?"|":" ")})}i(2929);let b=()=>((0,l.useEffect)(()=>{g().init({duration:2e3})},[]),(0,a.jsx)("header",{id:"header",children:(0,a.jsxs)("div",{className:"container header__container",children:[(0,a.jsxs)("div",{className:"header__item",children:[(0,a.jsx)("h3",{"data-aos":"fade-up",children:"Mansour Lotfi"}),(0,a.jsx)("p",{className:"header_explain","data-aos":"fade-up",children:"I am a full-stack developer. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer."}),(0,a.jsx)("div",{className:"typeWriter",children:(0,a.jsx)(v,{})}),(0,a.jsxs)("div",{className:"header__cta","data-aos":"fade-up",children:[(0,a.jsx)("a",{href:"#contact",className:"btn primary",children:"Let's Talk"}),(0,a.jsx)("a",{href:"#portfolio",className:"btn light",children:"My Work"})]})]}),(0,a.jsx)("div",{className:"header__item",children:(0,a.jsx)("div",{className:"homepage-first-area-right-side",children:(0,a.jsx)("div",{className:"header__profile","data-aos":"fade-in",children:(0,a.jsx)("div",{className:"homepage-image-wrapper",children:(0,a.jsx)(o(),{src:"/assets/header.jpg",alt:"Header Portait",fill:!0,className:"homepage-image"})})})})}),(0,a.jsx)("div",{className:"header__socials","data-aos":"fade-in",children:j.map(e=>(0,a.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.icon},e.id))})]})}));var y=i(21),_=i(9725),k=i(6758);let w=[{id:1,icon:(0,a.jsx)(p.MtH,{}),title:"Experience",desc:"7+ Years Working"},{id:2,icon:(0,a.jsx)(_.T0P,{}),title:"Projects",desc:"30+ Completed"},{id:3,icon:(0,a.jsx)(k.DAL,{}),title:"Clients",desc:"10+ happy clients"}];i(9695);let N=e=>{let{children:t,className:i,onClick:s}=e;return(0,a.jsx)("article",{className:"card ".concat(i),onClick:s,children:t})};i(3050);let q=()=>(0,a.jsx)("section",{id:"about","data-aos":"fade-in",children:(0,a.jsxs)("div",{className:"container about__container",children:[(0,a.jsx)("div",{className:"about__left",children:(0,a.jsx)("div",{className:"about__portrait",children:(0,a.jsx)(o(),{src:"/assets/about.jpg",alt:"About Image",height:600,width:200})})}),(0,a.jsxs)("div",{className:"about__right",children:[(0,a.jsx)("h2",{children:"About Me"}),(0,a.jsx)("div",{className:"about__cards",children:w.map(e=>(0,a.jsxs)(N,{className:"about__card",children:[(0,a.jsx)("span",{className:"about__card-icon",children:e.icon}),(0,a.jsx)("h5",{children:e.title}),(0,a.jsx)("small",{children:e.desc})]},e.id))}),(0,a.jsx)("p",{children:"Hi, I'm Mansour Lotfi from Tehran, Iran. I'm a full-stack web developer and a master degree student in Computer Science. I can build you a website or web app that meets your business needs, with a high-quality design and all the functionality you need to run smoothly online. Contact me today with your project details and let's get to work! You can see my resume below!"}),(0,a.jsxs)("a",{href:"/assets/mansour lotfi.pdf",download:!0,className:"btn primary",children:["Download CV ",(0,a.jsx)(y.H_7,{})]})]})]})});var I=i(4537),P=i(2341),C=i(198);let S=[{id:1,icon:(0,a.jsx)(h.Lrr,{}),title:"UI/UX design and testing",desc:"My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product."},{id:2,icon:(0,a.jsx)(P.Ueg,{}),title:"Frontend Development",desc:"Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop."},{id:3,icon:(0,a.jsx)(I.RM8,{}),title:"Responsive web design and accessibility",desc:"My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product."},{id:4,icon:(0,a.jsx)(p.Els,{}),title:"Backend Development",desc:"The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks."},{id:5,icon:(0,a.jsx)(h.sF$,{}),title:"Server setup, deployment and maintenance",desc:"Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you."},{id:6,icon:(0,a.jsx)(C.qvZ,{}),title:"Performance optimization and security",desc:"Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you."},{id:7,icon:(0,a.jsx)(h.zax,{}),title:"Debugging and troubleshooting",desc:"Unlike other developers in the market, I will building an app that runs on both IOS and Android devices without any extra cost to you."}];i(3764);let T=()=>(0,a.jsxs)("section",{id:"services",children:[(0,a.jsx)("h2",{children:"My Services"}),(0,a.jsx)("p",{children:"You can expect the highest quality from me in all the services I offer."}),(0,a.jsx)("div",{className:"container services__container","data-aos":"fade-up",children:S.map(e=>(0,a.jsxs)(N,{className:"service light",children:[(0,a.jsx)("div",{className:"service__icon",children:e.icon}),(0,a.jsxs)("div",{className:"service__details",children:[(0,a.jsx)("h4",{children:e.title}),(0,a.jsx)("p",{children:e.desc})]})]},e.id))})]});i(8208);let H=e=>{let{project:t}=e;return(0,a.jsxs)(N,{className:"portfolio__project",children:[(0,a.jsx)("div",{className:"portfolio__project-image",children:(0,a.jsx)(o(),{src:t.image,alt:"Portfolio Project Image",className:"portfolio__project-image",width:40,height:40})}),(0,a.jsx)("h4",{children:t.title}),(0,a.jsx)("p",{children:t.desc}),(0,a.jsxs)("div",{className:"portfolio__project-cta",children:[(0,a.jsx)("a",{href:t.demo,className:"btn sm",target:"_blank",rel:"noopener noreferrer",children:"Demo"}),(0,a.jsx)("a",{href:t.github,className:"btn sm primary",target:"_blank",rel:"noopner noreferrer",children:"GitHub"})]})]})},M=e=>{let{projects:t}=e;return(0,a.jsx)("div",{className:"portfolio__projects","data-aos":"fade-in",children:t.map(e=>(0,a.jsx)(H,{project:e},e.id))})},A=e=>{let{category:t,className:i,onChangeCategory:s}=e;return(0,a.jsx)("button",{className:i,onClick:()=>s(t),children:t})},F=e=>{let{categories:t,onFilterProjects:i}=e,[s,o]=(0,l.useState)("all"),n=e=>{o(e),i(e)};return(0,a.jsx)("div",{className:"portfolio__categories",children:t.map(e=>(0,a.jsx)(A,{category:e,onChangeCategory:()=>n(e),className:"btn cat__btn ".concat(s==e?"primary":"white")},e))})};var E=[{id:1,category:"uiux",image:"/assets/project1.jpg",title:"Project Title One (UIUX)",desc:"Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",demo:"https://github.com/mansourlotfi",github:"https://github.com/mansourlotfi"},{id:2,category:"frontend",image:"/assets/project2.jpg",title:"Project Title Two (Frontend)",desc:"Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",demo:"https://github.com/mansourlotfi",github:"https://github.com/mansourlotfi"},{id:3,category:"frontend",image:"/assets/project3.jpg",title:"Project Title Three (Frontend)",desc:"Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",demo:"https://github.com/mansourlotfi",github:"https://github.com/mansourlotfi"},{id:4,category:"uiux",image:"/assets/project4.jpg",title:"Project Title Four (UIUX)",desc:"Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",demo:"https://github.com/mansourlotfi",github:"https://github.com/mansourlotfi"},{id:5,category:"uiux",image:"/assets/project5.jpg",title:"Project Title Five (UIUX)",desc:"Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! ",demo:"https://github.com/mansourlotfi",github:"https://github.com/mansourlotfi"},{id:6,category:"frontend",image:"/assets/project6.jpg",title:"Project Title Six (Frontend)",desc:"Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",demo:"https://github.com/mansourlotfi",github:"https://github.com/mansourlotfi"},{id:7,category:"frontend",image:"/assets/project7.jpg",title:"Project Title Seven (Frontend)",desc:"Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",demo:"https://github.com/mansourlotfi",github:"https://github.com/mansourlotfi"},{id:8,category:"backend",image:"/assets/project8.jpg",title:"Project Title Eight (Backend)",desc:"Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",demo:"https://github.com/mansourlotfi",github:"https://github.com/mansourlotfi"},{id:9,category:"frontend",image:"/assets/project9.jpg",title:"Project Title Nine (Frontend)",desc:"Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",demo:"https://github.com/mansourlotfi",github:"https://github.com/mansourlotfi"}];let V=()=>{let[e,t]=(0,l.useState)(E),i=E.map(e=>e.category),s=["all",...new Set(i)],o=e=>{if("all"===e){t(E);return}let i=E.filter(t=>t.category===e);t(i)};return(0,a.jsxs)("section",{id:"portfolio",children:[(0,a.jsx)("h2",{children:"Recent Projects"}),(0,a.jsx)("p",{children:"Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories."}),(0,a.jsxs)("div",{className:"container portfolio__container",children:[(0,a.jsx)(F,{categories:s,onFilterProjects:o}),(0,a.jsx)(M,{projects:e})]})]})};var U=i(9321),B=i(143);i(6888),i(103),i(276);var D=[{id:1,quote:"It's truly amazing how you did exactly what I want with the little information I gave. You'll be my go-to developer from today. Highly recommend!",avatar:"/assets/avatar1.jpg",name:"Nana Ama McBrown",profession:"Actress"},{id:2,quote:"Good job, Hajia! Right on time! I really like how the project turned out, and my customers like it as well. It was fun collaborating with you.",avatar:"/assets/avatar2.jpg",name:"Ernest Achiever",profession:"Web Developer"},{id:3,quote:"Impressive work, buddy. Highly recommend!",avatar:"/assets/avatar3.jpg",name:"Daniel Vinyo",profession:"Graphic Designer"},{id:4,quote:"Wow. You finished earlier than you said. Everything's modern and beautifully done to the T. Great profession!",avatar:"/assets/avatar4.jpg",name:"Diana Ayi",profession:"Singer"},{id:5,quote:"I like how the app turned out. You are incredible, Hajia.",avatar:"/assets/avatar5.jpg",name:"Vivian Mensah",profession:"Street Photographer"},{id:6,quote:"Best developer in the world!",avatar:"/assets/avatar6.jpg",name:"Hajia Bintu",profession:"Brand Influencer"},{id:7,quote:"Keep doing great stuff, dear! Nicely executed!",avatar:"/assets/avatar7.jpg",name:"Nicki Nyarko",profession:"Makeup Artist"}];let R=e=>{let{testimonial:t}=e;return(0,a.jsxs)(N,{className:"light",children:[(0,a.jsx)("p",{children:t.quote}),(0,a.jsxs)("div",{className:"testimonial__client",children:[(0,a.jsx)("div",{className:"testimonial__client-avatar",children:(0,a.jsx)(o(),{src:t.avatar,alt:"Testimonial Avatar",className:"testimonial__client-avatar",width:40,height:40})}),(0,a.jsxs)("div",{className:"testimonial__client-details",children:[(0,a.jsx)("h6",{children:t.name}),(0,a.jsx)("small",{children:t.profession})]})]})]})};i(8263);let Y=()=>(0,a.jsxs)("section",{id:"testimonials",children:[(0,a.jsx)("h2",{children:"What My Clients Say"}),(0,a.jsx)("p",{children:"These are unbiased testmonials from some of my clients"}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(U.tq,{slidesPerView:1,spaceBetween:30,breakpoints:{601:{slidesPerView:2},1025:{slidesPerView:3}},pagination:{clickable:!0},modules:[B.tl,B.pt],autoplay:!0,className:"mySwiper",children:D.map(e=>(0,a.jsx)(U.o5,{children:(0,a.jsx)(R,{testimonial:e})},e.id))})})]});var W=[{id:1,question:"What do you need to start working on my project?",answer:"It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there."},{id:2,question:"How long will my project take to complete?",answer:"This depends on the complexity of the project, your available, and your payment. Once you have this sorted out, I will give you a completion date."},{id:5,question:"Is hosting and domain registration inclusive in your pricing?",answer:"No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to."},{id:4,question:"How much do you charge for an average website or app?",answer:"Once again, this depends. But my prices are affordable so you're good."},{id:3,question:"What's your payment plan?",answer:"Payment is divided into 3. An initial 30% upfront payment to get me started once all the details of the projec is set, 40% once the project is completed, and 30% once the project is delivered."},{id:6,question:"What if the project doesn't turn out good?",answer:"You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best."}];let L=e=>{let{faq:t}=e,[i,s]=(0,l.useState)(!1);return(0,a.jsxs)(N,{className:"faq",onClick:()=>s(e=>!e),children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"faq__question",children:t.question}),(0,a.jsx)("button",{className:"faq__icon",children:i?(0,a.jsx)(h.ywL,{}):(0,a.jsx)(h.Lfi,{})})]}),i&&(0,a.jsx)("p",{className:"faq__answer",children:t.answer})]})};i(4757);let O=()=>((0,l.useEffect)(()=>{g().init({duration:2e3})}),(0,a.jsxs)("section",{id:"faqs",children:[(0,a.jsx)("h2",{children:"Frequently Asked Questions"}),(0,a.jsx)("p",{children:"Here are some questions I usually get. Click to toggle the answer, and if you still have some more questions, shoot me a message from the contact section!"}),(0,a.jsx)("div",{className:"container faqs__container","data-aos":"fade-in",children:W.map(e=>(0,a.jsx)(L,{faq:e},e.id))})]})),G=[{id:1,icon:(0,a.jsx)(y.Zuw,{}),link:"mailto:mansourlotfi@gmail.com"},{id:2,icon:(0,a.jsx)(p.Ww5,{}),link:"https://telegram.me/mansourlotfi"},{id:3,icon:(0,a.jsx)(p.xpo,{}),link:"https://wa.me/+989113360715"}];i(7693);let Z=()=>(0,a.jsxs)("section",{id:"contact",children:[(0,a.jsx)("h2",{children:"Get In Touch"}),(0,a.jsx)("p",{children:"Feel free to contact me through any of the links below!"}),(0,a.jsx)("div",{className:"container contact__container","data-aos":"fade-up",children:G.map(e=>(0,a.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.icon},e.id))})]}),z=[{id:1,link:"#",title:"Home"},{id:2,link:"#about",title:"About"},{id:3,link:"#services",title:"Services"},{id:4,link:"#portfolio",title:"Portfolio"},{id:5,link:"#contact",title:"Contact"}],X=[{id:1,link:"https://www.linkedin.com/in/mansourlotfi",icon:(0,a.jsx)(h._iD,{})},{id:2,link:"https://stackoverflow.com/users/12311697/mansour-lotfi",icon:(0,a.jsx)(p.Hjm,{})},{id:3,link:"https://gitlab.com/mansourlotfi",icon:(0,a.jsx)(h._9v,{})},{id:4,link:"https://github.com/mansourlotfi",icon:(0,a.jsx)(h.RrF,{})}];i(652);let $=()=>(0,a.jsxs)("footer",{children:[(0,a.jsxs)("div",{className:"container footer__container",children:[(0,a.jsx)("ul",{className:"nav__menu",children:z.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:e.link,children:e.title})},e.id))}),(0,a.jsx)("div",{className:"footer__socials",children:X.map(e=>(0,a.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.icon},e.id))})]}),(0,a.jsx)("div",{className:"footer__copyright",children:(0,a.jsx)("small",{children:"May 2023, Mansour Lotfi"})})]});var J=i(8136),K=i(4821);let Q=[{id:1,link:"#",icon:(0,a.jsx)(h.V9Z,{})},{id:2,link:"#about",icon:(0,a.jsx)(J.RPM,{})},{id:3,link:"#services",icon:(0,a.jsx)(K.J0U,{})},{id:4,link:"#portfolio",icon:(0,a.jsx)(h.sF$,{})},{id:5,link:"#contact",icon:(0,a.jsx)(h.Zs0,{})}];var ee=i(3282);let et=e=>{let{className:t,item:i}=e;return(0,a.jsx)("li",{className:t,children:(0,a.jsx)("a",{href:i.link,children:i.icon})})};i(8086);let ei=()=>(0,a.jsx)("ul",{id:"floating__nav",children:(0,a.jsx)(ee.Z,{offset:-200,className:"scrollspy",items:["header","about","services","portfolio","contact"],currentClassName:"active",children:Q.map(e=>(0,a.jsx)(et,{item:e},e.id))})});var ea=i(8431);i(653);let es=e=>{let{className:t,children:i}=e,s=(0,l.useRef)(),[o,n]=(0,l.useState)(!1),{showModal:r,closeModalHandler:c}=u();return(0,l.useEffect)(()=>{s.current=document.querySelector("#overlays"),n(!0)},[]),(0,a.jsx)(l.Fragment,{children:r&&o?ea.createPortal((0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{id:"backdrop",onClick:c}),(0,a.jsx)(N,{className:t,children:i})]}),document.querySelector("#overlays")):null})},eo=[{className:"color-1"},{className:"color-2"},{className:"color-3"},{className:"color-4"},{className:"color-5"},{className:"color-6"}],en=[{className:"bg-1"},{className:"bg-2"}],er=(e,t)=>"color-1"===t.type?{...e,primary:"color-1"}:"color-2"===t.type?{...e,primary:"color-2"}:"color-3"===t.type?{...e,primary:"color-3"}:"color-4"===t.type?{...e,primary:"color-4"}:"color-5"===t.type?{...e,primary:"color-5"}:"color-6"===t.type?{...e,primary:"color-6"}:"bg-1"===t.type?{...e,background:"bg-1"}:"bg-2"===t.type?{...e,background:"bg-2"}:void 0,el=(0,l.createContext)(),ec={primary:"color-1",background:"bg-1"},ed=e=>{let{children:t}=e,[i,s]=(0,l.useReducer)(er,ec),o=e=>{s({type:e})};return(0,l.useEffect)(()=>{},[i]),(0,a.jsx)(el.Provider,{value:{themeState:i,themeHandler:o},children:t})},eu=()=>(0,l.useContext)(el),em=e=>{let{className:t}=e,{themeHandler:i}=eu();return(0,a.jsx)("button",{className:t,onClick:()=>i(t)})},eh=e=>{let{className:t}=e,{themeHandler:i}=eu();return(0,a.jsx)("button",{className:t,onClick:()=>i(t)})};i(5242);let ep=()=>(0,a.jsxs)(es,{className:"theme__modal",children:[(0,a.jsx)("h3",{children:"Customize Your Theme"}),(0,a.jsx)("small",{children:"Change the primary and background color to your preference."}),(0,a.jsxs)("div",{className:"theme__primary-wrapper",children:[(0,a.jsx)("h5",{children:"Primary Color"}),(0,a.jsx)("div",{className:"theme__primary-colors",children:eo.map(e=>(0,a.jsx)(em,{className:e.className},e.className))})]}),(0,a.jsxs)("div",{className:"theme__background-wrapper",children:[(0,a.jsx)("h5",{children:"Background Color"}),(0,a.jsx)("div",{className:"theme__background-colors",children:en.map(e=>(0,a.jsx)(eh,{className:e.className},e.className))})]})]}),ej=()=>{let{themeState:e}=eu(),t=(0,l.useRef)(null),[i,s]=(0,l.useState)(!0),[o,n]=(0,l.useState)(0),r=()=>{s(!0)},c=()=>{s(!1)};return(0,l.useEffect)(()=>{let e=()=>{if(null==t?void 0:t.current){var e,i,a;o<(null==t?void 0:null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect().y)-20||o>(null==t?void 0:null===(i=t.current)||void 0===i?void 0:i.getBoundingClientRect().y)+20?r():c(),n(null==t?void 0:null===(a=t.current)||void 0===a?void 0:a.getBoundingClientRect().y)}},i=setInterval(e,2e3);return()=>clearInterval(i)},[o]),(0,a.jsxs)("main",{className:"".concat(e.primary," ").concat(e.background),ref:t,children:[(0,a.jsx)(m,{}),(0,a.jsx)(b,{}),(0,a.jsx)(q,{}),(0,a.jsx)(T,{}),(0,a.jsx)(V,{}),(0,a.jsx)(Y,{}),(0,a.jsx)(O,{}),(0,a.jsx)(Z,{}),(0,a.jsx)($,{}),(0,a.jsx)(ep,{}),i&&(0,a.jsx)(ei,{})]})};function ef(){return(0,a.jsx)(ed,{children:(0,a.jsx)(d,{children:(0,a.jsx)(ej,{})})})}},9695:function(){},653:function(){},3050:function(){},7693:function(){},4757:function(){},8086:function(){},652:function(){},1700:function(){},6973:function(){},8208:function(){},3764:function(){},8263:function(){},5242:function(){}},function(e){e.O(0,[961,615,11,739,266,772,132,36,141,855,776,684,667,139,744],function(){return e(e.s=1393)}),_N_E=e.O()}]);