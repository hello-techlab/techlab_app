(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"++HY":function(e,t,n){"use strict";var a=n("wx14"),o=n("q1tI"),r=n("H2TA"),i=n("ofer"),l=o.forwardRef((function(e,t){return o.createElement(i.a,Object(a.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(r.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(l)},"+QRC":function(e,t,n){"use strict";n("pIFo");var a=n("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,r,i,l,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=a(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),void 0===a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},"6RE4":function(e,t,n){e.exports=n.p+"static/terapia-7921a8834731a4cbcf044399a5371680.jpg"},E9nw:function(e,t,n){n("8+KV"),e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},EQI2:function(e,t,n){"use strict";var a=n("wx14"),o=n("Ff2n"),r=n("q1tI"),i=n("iuhU"),l=n("H2TA"),c=r.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.dividers,s=void 0!==c&&c,u=Object(o.a)(e,["classes","className","dividers"]);return r.createElement("div",Object(a.a)({className:Object(i.a)(n.root,l,s&&n.dividers),ref:t},u))}));t.a=Object(l.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(c)},"bF/R":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("YwZP"),i=n("vOnD"),l=n("6RE4"),c=n.n(l);function s(){var e=f(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(236, 121, 15, 0.3);\n  z-index: 2;\n"]);return s=function(){return e},e}function u(){var e=f(["\n  max-width: 100%;\n  max-heigh: 50%;\n  height: 100%;\n  z-index: 1;\n"]);return u=function(){return e},e}function d(){var e=f(["\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n"]);return d=function(){return e},e}function m(){var e=f(["\n  height: auto;\n  max-height: 110px;\n  overflow-x: hidden;\n"]);return m=function(){return e},e}function p(){var e=f(["\n  && {\n    position: absolute;\n    top: 40%;\n    left: 20%;\n    right: 0;\n    bottom: 0;\n    width: auto;\n    height: auto;\n    background: rgba(65, 134, 148, 0.8);\n    box-sizing: border-box;\n    border-radius: 10px 0 0 0;\n    padding: 2%;\n    z-index: 3;\n  }\n"]);return p=function(){return e},e}function g(){var e=f(["\n  && {\n    position: relative;\n    min-height: 40%;\n    z-index: 1;\n    background-color: black;\n    background-position: center;\n    background-size: cover;\n    max-height: 300px;\n  }\n"]);return g=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),e.raw=t,e}var v=i.a.div(g()),h=i.a.div(p()),b=i.a.div(m()),x=i.a.span(d()),E=i.a.img(u()),k=i.a.div(s());t.a=function(e){var t=e.title,n=e.text;return o.a.createElement(v,{onClick:function(){"Questionários Sobre Saúde Mental"!==t&&Object(r.navigate)("/formpage?form="+t)}},o.a.createElement(k,null),o.a.createElement(E,{src:c.a}),o.a.createElement(h,null,o.a.createElement(x,null,t),o.a.createElement(b,null,o.a.createElement("div",{style:{color:"white",fontSize:"0.8em",marginTop:"0.2em"}},n))))}},nEMh:function(e,t,n){"use strict";n.r(t);n("VRzm"),n("Btvt"),n("tUrg");var a=n("o0o1"),o=n.n(a),r=(n("ls82"),n("q1tI")),i=n.n(r),l=n("kfFl"),c=n("EQI2"),s=n("++HY"),u=n("yv+Y"),d=(n("bF/R"),n("i8ne")),m=n("vDqi"),p=n.n(m),g=n("+QRC"),f=n.n(g),v=n("Wbzz"),h=n("qBaP"),b=n.n(h);n("6RE4");function x(e,t,n,a,o,r,i){try{var l=e[r](i),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(a,o)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){x(r,a,o,i,l,"next",e)}function l(e){x(r,a,o,i,l,"throw",e)}i(void 0)}))}}var k=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).componentDidMount=E(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"techlab-oauth.mooo.com",e.prev=1,e.next=4,p.a.get("http://techlab-oauth.mooo.com/usuarios/instituto",{headers:{"x-access-token":window.localStorage.getItem("TOKEN")}});case 4:t=e.sent,n.setState({institutos:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:n.setState({options:n.state.institutos.map((function(e){return i.a.createElement("option",{key:e.siglainstituto,value:e.siglainstituto},e.siglainstituto)}))});case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.handleAddingClick=E(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"techlab-oauth.mooo.com",e.prev=1,e.next=4,p.a.post("http://techlab-oauth.mooo.com/usuarios/gapsi/",{nomeatendente:n.state.nome,emailatendente:n.state.email,institutoatendente:n.state.instituto,imgatendente:n.state.imagem,linkagenda:n.state.link},{headers:{"x-access-token":window.localStorage.getItem("TOKEN")}});case 4:t=e.sent,console.log(t.data),a=t.data.authUrl,n.setState({calendarLinkDialogOpen:!0,responseLink:a}),e.next=16;break;case 10:if(e.prev=10,e.t0=e.catch(1),401!=e.t0.response.status){e.next=15;break}return Object(v.navigate)("/loginpage"),e.abrupt("return");case 15:n.setState({errorDialogOpen:!1});case 16:case"end":return e.stop()}}),e,null,[[1,10]])}))),n.handleCopyClick=function(){f()(n.state.responseLink)},n.handleCloseDialog=function(){n.setState({calendarLinkDialogOpen:!1}),Object(v.navigate)("/Atendents")},n.handleCloseErrorDialog=function(){n.setState({errorDialogOpen:!1})},n.state={nome:"",email:"",instituto:"",link:"",imagem:"",calendarLinkDialogOpen:!1,errorDialogOpen:!1,responseLink:"",institutos:["-","ICMC","EESC","IFSC","IQSC"]},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this;return i.a.createElement(d.a,{pageNeedsAuth:"true",pageTitle:"Adicionar Atendente",lastPage:"/Atendents"},i.a.createElement(l.a,{open:this.state.errorDialogOpen},i.a.createElement(u.a,null,"Instituto Inválido"),i.a.createElement(c.a,null,i.a.createElement(s.a,null,"Só é possível adicionar um único atendente por instituto.")),i.a.createElement("div",{className:b.a.ButtonBox},i.a.createElement("button",{className:b.a.Button,onClick:function(){return e.handleCloseErrorDialog()}},"Fechar"))),i.a.createElement(l.a,{open:this.state.calendarLinkDialogOpen},i.a.createElement(u.a,null,"Atendente Parcialmente Cadastrado"),i.a.createElement(c.a,null,i.a.createElement(s.a,null,"Para finalizar e confirmar o cadastro do atendente copie esse link e peça para o atendente acessá-lo e enviar ao administrador o código gerado após o login."),i.a.createElement("div",{className:b.a.LinkBox},i.a.createElement("a",{className:b.a.LinkText},this.state.responseLink))),i.a.createElement("div",{className:b.a.ButtonBox},i.a.createElement("button",{className:b.a.Button,onClick:function(){return e.handleCopyClick()}},"Copiar"),i.a.createElement("button",{className:b.a.Button,onClick:function(){return e.handleCloseDialog()}},"Fechar"))),i.a.createElement("div",{className:b.a.Form},i.a.createElement("div",{className:b.a.InputBox},i.a.createElement("span",{className:b.a.InputLabel},"Nome"),i.a.createElement("input",{className:b.a.InputField,placeholder:"Nome",type:"text",onChange:function(t){return e.setState({nome:t.target.value})}})),i.a.createElement("div",{className:b.a.InputBox},i.a.createElement("span",{className:b.a.InputLabel},"Email"),i.a.createElement("input",{className:b.a.InputField,placeholder:"Email",type:"email",onChange:function(t){return e.setState({email:t.target.value})}})),i.a.createElement("div",{className:b.a.InputBox},i.a.createElement("span",{className:b.a.InputLabel},"Link da Agenda"),i.a.createElement("input",{className:b.a.InputField,placeholder:"Link",type:"text",onChange:function(t){return e.setState({link:t.target.value})}})),i.a.createElement("div",{className:b.a.InputBox},i.a.createElement("span",{className:b.a.InputLabel},"Link para Foto de Perfil"),i.a.createElement("input",{className:b.a.InputField,placeholder:"Link da Foto",type:"text",onChange:function(t){return e.setState({imagem:t.target.value})}})),i.a.createElement("div",{className:b.a.InputBox},i.a.createElement("span",{className:b.a.InputLabel},"Instituto"),i.a.createElement("div",{className:b.a.wrapper},i.a.createElement("select",{className:b.a.InputField,placeholder:"Instituto",onChange:function(t){console.log(t.target),e.setState({instituto:t.target.value})}},this.state.options)))),i.a.createElement("div",{className:b.a.ButtonBox},i.a.createElement("button",{className:b.a.AddButton,onClick:function(){return e.handleAddingClick()}},"ADICIONAR"),i.a.createElement("a",{className:b.a.Link,href:"/Atendents"},i.a.createElement("button",{className:b.a.CancelButton},"CANCELAR"))))},a}(i.a.Component);t.default=k},qBaP:function(e,t,n){e.exports={BackgroundWhite:"#F9F9F9",MainBlue:"#72849d",LightBlue:"#c6ceda",MainOrange:"#f6aa41",LightOrange:"#ffd874",MainGrey:"#727376",LightGrey:"#dcd6cd",Font:"Roboto,sans-serif",FontColorDark:"#212121",FontColorLight:"#F9F9F9",container:"AddingAtendent-module--container--2vwop",Form:"AddingAtendent-module--Form--3K1WK",Link:"AddingAtendent-module--Link--avbIB",LinkText:"AddingAtendent-module--LinkText--pm3-9",InputBox:"AddingAtendent-module--InputBox--2RpDh",InputLabel:"AddingAtendent-module--InputLabel--3udWw",LinkBox:"AddingAtendent-module--LinkBox--1ICIq",InputField:"AddingAtendent-module--InputField--1vka4",ButtonBox:"AddingAtendent-module--ButtonBox--1bkpL",AddButton:"AddingAtendent-module--AddButton--1ZQaQ",CancelButton:"AddingAtendent-module--CancelButton--3Mjjv",ConfirmationText:"AddingAtendent-module--ConfirmationText--3ZDmb",Button:"AddingAtendent-module--Button--fe4NI"}},"yv+Y":function(e,t,n){"use strict";var a=n("wx14"),o=n("Ff2n"),r=n("q1tI"),i=n("iuhU"),l=n("H2TA"),c=n("ofer"),s=r.forwardRef((function(e,t){var n=e.children,l=e.classes,s=e.className,u=e.disableTypography,d=void 0!==u&&u,m=Object(o.a)(e,["children","classes","className","disableTypography"]);return r.createElement("div",Object(a.a)({className:Object(i.a)(l.root,s),ref:t},m),d?n:r.createElement(c.a,{component:"h2",variant:"h6"},n))}));t.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)}}]);
//# sourceMappingURL=component---src-pages-adding-atendent-js-9156de891dee948ecdc3.js.map