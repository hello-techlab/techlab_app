(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{CuAr:function(e,a,o){"use strict";var t=o("q1tI"),n=o.n(t),s=o("NTaH"),r=o.n(s),i=o("PsDL"),c=o("umzb"),l=o.n(c),u=o("uJt2"),d=o.n(u);var m="https://gapsi.icmc.usp.br/",p=[{Id:"whatsapp-share",Icon:n.a.createElement(l.a,null),Color:"#0CC243",Endpoint:"https://api.whatsapp.com/send",DefaultText:"O Grupo de Apoio Psicopedagógico do ICMC/USP - São Carlos acolhe estudantes e direciona-os a um atendimento especial. Venha nos conhecer!",get Url(){return this.Endpoint+"?text="+encodeURI(m+"\n"+this.DefaultText)}},{Id:"facebook-share",Icon:n.a.createElement(d.a,null),Color:"#4267B2",Endpoint:"https://www.facebook.com/sharer/sharer.php",DefaultText:"O Grupo de Apoio Psicopedagógico do ICMC/USP - São Carlos acolhe estudantes e direciona-os a um atendimento especial. Venha nos conhecer!",get Url(){return this.Endpoint+"?u="+encodeURI(m)}}],f=function(e){var a,o;function t(a){var o;return(o=e.call(this,a)||this).button=a.myButton,o}return o=e,(a=t).prototype=Object.create(o.prototype),a.prototype.constructor=a,a.__proto__=o,t.prototype.render=function(){var e=this.button;return n.a.createElement("div",{className:r.a.ShareButton,style:{backgroundColor:e.Color}},n.a.createElement("a",{href:e.Url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(i.a,{style:{width:"100%"}},e.Icon)))},t}(n.a.Component);a.a=function(){return n.a.createElement("div",{className:r.a.sharebox},n.a.createElement("h2",null,"\nNos compartilhe nas redes sociais!\n"),n.a.createElement("div",{className:r.a.ButtonsContainer},p.map((function(e,a){return n.a.createElement(f,{myButton:e,key:a},e.Icon)}))))}},NTaH:function(e,a,o){e.exports={BackgroundWhite:"#F9F9F9",MainBlue:"#72849d",LightBlue:"#c6ceda",MainOrange:"#f6aa41",LightOrange:"#ffd874",MainGrey:"#727376",LightGrey:"#dcd6cd",Font:"Roboto,sans-serif",FontColorDark:"#212121",FontColorLight:"#F9F9F9",container:"sharebox-module--container--3eZPl",sharebox:"sharebox-module--sharebox--2V_Au",ShareButton:"sharebox-module--ShareButton--1HJ39"}},Q3uT:function(e,a,o){e.exports={BackgroundWhite:"#F9F9F9",MainBlue:"#72849d",LightBlue:"#c6ceda",MainOrange:"#f6aa41",LightOrange:"#ffd874",MainGrey:"#727376",LightGrey:"#dcd6cd",Font:"Roboto,sans-serif",FontColorDark:"#212121",FontColorLight:"#F9F9F9",TextBoxOpacity:".8",container:"content-container-module--container--Plo3k",ContentContainer:"content-container-module--ContentContainer--3RKVt",TextBox:"content-container-module--TextBox--3ZaQ9",Text:"content-container-module--Text--3yjyw"}},SPlb:function(e,a,o){"use strict";o("KKXr"),o("f3/d");var t=o("q1tI"),n=o.n(t),s=o("Q3uT"),r=o.n(s),i=o("t+Ps"),c=o.n(i),l=(parseFloat(r.a.TextBoxOpacity),function(e){var a=e.color,o=e.textColor,t=(e.name,e.children);return n.a.createElement("div",{className:r.a.TextBox,style:{backgroundColor:a,color:null==o?"black":o}},t)}),u=function(e){var a=e.title,o=e.text,t=e.color,s=e.textColor,i=e.bgImage,c=e.children;return n.a.createElement("div",{className:r.a.ContentContainer,style:null!==i?{backgroundImage:"url("+i+")"}:{}},n.a.createElement(l,{color:t,textColor:s,name:o},n.a.createElement("div",{className:r.a.Text},n.a.createElement("h1",null,a),o.split("\n").map((function(e,a){return n.a.createElement("p",{key:a},e)}))),c))};u.defaultProps={title:"\n  Lorem ipsum?\n",text:"\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet elementum vehicula. Sed sodales eu massa ut luctus. Suspendisse ultrices ante ut bibendum pulvinar. Donec lorem diam, luctus eu dapibus at, tincidunt vitae lorem. Sed venenatis finibus diam et facilisis. Fusce et erat malesuada, consequat lorem in, ultrices libero. Vestibulum quis pretium tortor, sit amet efficitur augue.\n",textColor:c.a.FontColorDark,color:r.a.BackgroundWhite,bgImage:null},a.a=u},U5GE:function(e,a,o){"use strict";o("HAE/");var t=o("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(o("q1tI")),s=(0,t(o("8/g6")).default)(n.default.createElement("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");a.default=s},bO4t:function(e,a,o){"use strict";var t=o("q1tI"),n=o.n(t),s=o("sinx"),r=o.n(s),i=o("uJt2"),c=o.n(i),l=o("U5GE"),u=o.n(l),d=o("PsDL"),m=["apoia-sc@usp.br","gapsi@icmc.usp.br"],p="https://gapsi.icmc.usp.br";a.a=function(){return n.a.createElement("div",{className:r.a.ContactBox},n.a.createElement("h2",null,"Entre em contato!"),n.a.createElement("div",{className:r.a.Contact},n.a.createElement("p",null,"Nosso site: ",n.a.createElement("a",{href:p},p.replace("https://",""))),m.map((function(e,a){return n.a.createElement("p",null,"Nosso email: ",n.a.createElement("a",{href:"mailto:"+e,key:a},e))})),n.a.createElement("p",null,"Nosso telefone: (16) 3373-8905")),n.a.createElement("h2",null,"Nossas redes sociais:"),n.a.createElement("div",{className:r.a.Links},n.a.createElement("a",{href:"https://m.facebook.com/Apoia-Usp-SC-107922227573130/"},n.a.createElement(d.a,{style:{padding:"0px"}},n.a.createElement(c.a,null),n.a.createElement("p",null,"Facebook"))),n.a.createElement("a",{href:"https://www.instagram.com/apoia.usp.sc/"},n.a.createElement(d.a,{style:{padding:"0px"}},n.a.createElement(u.a,null),n.a.createElement("p",null,"Instagram")))))}},sinx:function(e,a,o){e.exports={BackgroundWhite:"#F9F9F9",MainBlue:"#72849d",LightBlue:"#c6ceda",MainOrange:"#f6aa41",LightOrange:"#ffd874",MainGrey:"#727376",LightGrey:"#dcd6cd",Font:"Roboto,sans-serif",FontColorDark:"#212121",FontColorLight:"#F9F9F9",container:"contact-box-module--container--205sp",ContactBox:"contact-box-module--ContactBox--2x5AI",Links:"contact-box-module--Links--3ESFY",Contact:"contact-box-module--Contact--1aZJ-"}},"t+Ps":function(e,a,o){e.exports={BackgroundWhite:"#F9F9F9",MainBlue:"#72849d",LightBlue:"#c6ceda",MainOrange:"#f6aa41",LightOrange:"#ffd874",MainGrey:"#727376",LightGrey:"#dcd6cd",Font:"Roboto,sans-serif",FontColorDark:"#212121",FontColorLight:"#F9F9F9"}},uJt2:function(e,a,o){"use strict";o("HAE/");var t=o("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(o("q1tI")),s=(0,t(o("8/g6")).default)(n.default.createElement("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");a.default=s},umzb:function(e,a,o){"use strict";o("HAE/");var t=o("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(o("q1tI")),s=(0,t(o("8/g6")).default)(n.default.createElement("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp");a.default=s},zIjM:function(e,a,o){"use strict";o.r(a);var t=o("q1tI"),n=o.n(t),s=o("i8ne"),r=o("CuAr"),i=o("SPlb"),c=o("bO4t"),l=o("t+Ps"),u=o.n(l),d="Perguntas Frequentes",m="Tem mais alguma dúvida que não foi respondida aqui? Entre em contato conosco pelo nosso email, telefones ou redes sociais!",p="Quem somos?",f="O GAPSsi e o APOIA USP (Apoio Psicossocial USP - São Carlos) se propõem a receber, acolher e acompanhar os estudantes e funcionários da USP - São Carlos, com o objetivo de desenvolver atividades preventivas e protetivas à saúde mental, atuando sobre os determinantes que causam sofrimento psíquico e acompanhando os casos em que o sofrimento já está instaurado.\n  Nossa equipe é formada pelas assistentes sociais do campus USP- São Carlos e pelos estagiários de Psicologia da UFSCar.",h="Quais serviços o APOIA USP e o GAPsi oferecem?",g="O Apoia USP e o GAPsi atuam na perspectiva de atenção psicossocial, e isso significa entre outras coisas, que partimos dos problemas trazidos pela comunidade para pensar estratégias pertinentes à própria comunidade, buscando uma atuação interdisciplinar e intersetorial. São possibilidades de atuação:\n    - Acolhimento individuais;\n    - Grupos operativos;\n    - Grupos de formação de vínculos;\n    - Mediação de conflitos;\n    - Palestras, oficinas, rodas de conversa, etc, de Psicoeducação;\n    - Assessoria a chefes de departamento, coordenadores de curso e demais professores ou técnicos que sintam a necessidade de acompanhamento de casos específicos relacionados a sofrimento psíquico;\n    - Orientação profissional;\n    - Articulação com as Redes de Atenção Psicossocial - RAPS local e de outros municípios;\n    - Esclarecimentos e encaminhamentos em casos de sofrimento psíquico que não dizem respeito ao contexto universitário.",v="O que é um acolhimento no contexto universitário?",b="O acolhimento é um momento de escuta especializada, feita por algum membro da equipe, no qual a pessoa é convidada a falar e a expor suas necessidades.\n  Pode ser procurado individualmente ou por um coletivo de pessoas, quando esta demanda envolver mais pessoas.\n  Essa escuta estará atenta aos aos determinantes sociais, econômicos, políticos, culturais, psicológicos, de saúde e etc que atuam sobre o sofrimento psíquico, para que assim, em conjunto com quem nos procura, possam ser desenvolvidas ações e/ou estratégias para o cuidado.",E="O que preciso para agendar um acolhimento com o APOIA ou GAPsi?",x="Se você for membro da comunidade USP, você pode agendar o acolhimento individual através da aba “Acolhimento” nesse app, ou enviar a solicitação para o e-mail apoia.sc@usp.br ou gapsi@icmc.usp.br.\n  Não é necessário a apresentação de nenhum documento para o agendamento do acolhimento.",C="Se a pessoa que necessita de atendimento não for da comunidade USP, para onde devo encaminhá-la?",P="A Rede de Atenção Psicossocial (RAPS) é uma estratégia fundamental para pensar o cuidado da pessoa com sofrimento mental no âmbito do Sistema Único de Saúde (SUS).\n  Esta rede é composta por alguns pontos de atenção, e aqui destacamos alguns: a Unidade Básica de Saúde, os Centros de Atenção Psicossocial- CAPS, o SAMU, as UPAs e a atenção Hospitalar.\n  Preferencialmente você deve buscar a Unidade Básica de Saúde de referência do seu endereço de residência, mas caso precise ou para informações, vamos deixar o contato aqui de alguns pontos dessa rede em São Carlos-Sp:\n    - Centro de Atenção Psicossocial - 16 3374-7237\n    - Centro de Atenção Psicossocial (para assuntos referentes a álcool e drogas) - 16 3374 2264\n    - SAMU (para emergências) - 192\n    - OBS: Além das questões biológicas, também são casos de emergência - tentativas de suicídios e crises agudas  psíquicas que podem colocar a vida do sujeito em risco (ex.: Episódios de delirantes e paranóicos)";a.default=function(){return n.a.createElement(s.a,{pageNeedsAuth:"false",pageTitle:"Perguntas Frequentes",lastPage:"/"},n.a.createElement(i.a,{title:d,text:m,color:u.a.MainOrange},n.a.createElement(c.a,null)),n.a.createElement(i.a,{title:p,text:f}),n.a.createElement(i.a,{title:h,text:g,color:u.a.MainBlue}),n.a.createElement(i.a,{title:v,text:b}),n.a.createElement(i.a,{title:E,text:x,color:u.a.MainOrange}),n.a.createElement(i.a,{title:C,text:P}),n.a.createElement(r.a,null))}}}]);
//# sourceMappingURL=component---src-pages-faq-js-6f3c523960475ef8b93e.js.map