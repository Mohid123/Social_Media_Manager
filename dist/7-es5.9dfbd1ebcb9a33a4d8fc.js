!function(){function e(e,n){for(var b=0;b<n.length;b++){var l=n[b];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function n(n,b,l){return b&&e(n.prototype,b),l&&e(n,l),n}function b(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{suls:function(e,n,b){"use strict";(function(e){var l=b("rh/z");n.a={init:function(e,n){!function(e){var n=e;if(void 0===n&&(n=document.querySelectorAll(".example:not(.example-compact):not(.example-hover):not(.example-basic)")),n&&n.length>0)for(var b=0;b<n.length;++b){var a=l.a.find(n[b],".example-copy");a&&new ClipboardJS(a,{target:function(e){var n=e.closest(".example"),b=l.a.find(n,".example-code .tab-pane.active");return b||(b=l.a.find(n,".example-code")),b}}).on("success",function(e){l.a.addClass(e.trigger,"example-copied"),e.clearSelection(),setTimeout(function(){l.a.removeClass(e.trigger,"example-copied")},2e3)})}}(e),function(e){if(void 0===(n=e))var n=document.querySelectorAll(".example.example-compact");if(n&&n.length>0)for(var b=0;b<n.length;++b){var a,o=l.a.find(a=n[b],".example-toggle"),i=l.a.find(a,".example-copy");l.a.addEvent(o,"click",function(){var e=this.closest(".example"),n=l.a.find(e,".example-code"),b=this;l.a.hasClass(this,"example-toggled")?l.a.slideUp(n,300,function(){l.a.removeClass(b,"example-toggled"),l.a.removeClass(n,"example-code-on"),l.a.hide(n)}):(l.a.addClass(n,"example-code-on"),l.a.addClass(this,"example-toggled"),l.a.slideDown(n,300,function(){l.a.show(n)}))}),i&&new ClipboardJS(i,{target:function(e){var n=e.closest(".example"),b=l.a.find(n,".example-code .tab-pane.active");return b||(b=l.a.find(n,".example-code")),b}}).on("success",function(e){l.a.addClass(e.trigger,"example-copied"),e.clearSelection(),setTimeout(function(){l.a.removeClass(e.trigger,"example-copied")},2e3)})}}(e)}}}).call(this,b("3UD+")(e))},vzru:function(e,l,a){"use strict";a.r(l),a.d(l,"BuilderModule",function(){return w});var o,i=a("SVse"),t=a("iInd"),d=a("dJsq"),c=a("aLe/"),r=a("G0yt"),s=a("W79Q"),u=a("WsYS"),g=a("8Y7J"),m=((o=function e(){b(this,e)}).\u0275mod=g.Ob({type:o}),o.\u0275inj=g.Nb({factory:function(e){return new(e||o)},imports:[[i.c,u.a,d.c,c.c,r.m,r.q,s.b]]}),o),p=a("suls");function v(e,n){if(1&e&&(g.Ub(0),g.Rb(1,"span",4),g.Tb()),2&e){var b=g.kc(2);g.Cb(1),g.qc("inlineSVG",b.svg)}}function f(e,n){if(1&e&&(g.Ub(0),g.Rb(1,"i",5),g.Tb()),2&e){var b=g.kc(2);g.Cb(1),g.qc("ngClass",b.icon)}}function V(e,n){if(1&e&&(g.Ub(0),g.Wb(1,"div",3),g.Nc(2,v,2,1,"ng-container",1),g.Nc(3,f,2,1,"ng-container",1),g.Vb(),g.Tb()),2&e){var b=g.kc();g.Cb(2),g.qc("ngIf",b.svg),g.Cb(1),g.qc("ngIf",b.icon)}}var W,h,C,y=["*"],M=((W=function(){function e(){b(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=g.Kb({type:W,selectors:[["app-notice"]],inputs:{classes:"classes",icon:"icon",svg:"svg"},ngContentSelectors:y,decls:4,vars:2,consts:[["role","alert",1,"alert","alert-custom","alert-white","alert-shadow","gutter-b",3,"ngClass"],[4,"ngIf"],[1,"alert-text"],[1,"alert-icon","alert-icon-top"],[1,"svg-icon","svg-icon-3x","svg-icon-primary",3,"inlineSVG"],[3,"ngClass"]],template:function(e,n){1&e&&(g.pc(),g.Wb(0,"div",0),g.Nc(1,V,4,2,"ng-container",1),g.Wb(2,"div",2),g.oc(3),g.Vb(),g.Vb()),2&e&&(g.qc("ngClass",n.classes),g.Cb(1),g.qc("ngIf",n.icon||n.svg))},directives:[i.l,i.n,s.a],encapsulation:2}),W),P=a("s7LF"),x=["form"],S=((C=function(){function e(n,l){b(this,e),this.layout=n,this.el=l,this.activeTabId=1}return n(e,[{key:"ngOnInit",value:function(){this.model=this.layout.getConfig()}},{key:"setActiveTab",value:function(e){this.activeTabId=e}},{key:"getActiveTabCSSClass",value:function(e){return e!==this.activeTabId?"":"active"}},{key:"resetPreview",value:function(){this.layout.refreshConfigToDefault()}},{key:"submitPreview",value:function(){this.layout.setConfig(this.model),location.reload()}},{key:"ngAfterViewInit",value:function(){var e=this.el.nativeElement.querySelectorAll(".example");p.a.init(e)}}]),e}()).\u0275fac=function(e){return new(e||C)(g.Qb(u.e),g.Qb(g.l))},C.\u0275cmp=g.Kb({type:C,selectors:[["app-builder"]],viewQuery:function(e,n){var b;1&e&&g.Ic(x,!0),2&e&&g.zc(b=g.hc())&&(n.form=b.first)},decls:301,vars:36,consts:[[3,"svg"],[1,"card","card-custom","gutter-b"],[1,"card-header","card-header-tabs-line"],["role","tablist",1,"nav","nav-dark","nav-bold","nav-tabs","nav-tabs-line"],[1,"nav-item"],["role","tab",1,"nav-link","cursor-pointer",3,"ngClass","click"],["novalidate","",1,"form",3,"ngSubmit"],["form","ngForm"],[1,"card-body"],[1,"tab-content","pt-3"],[1,"tab-pane",3,"ngClass"],[1,"form-group","row"],[1,"col-lg-3","col-form-label","text-lg-right"],[1,"col-lg-9","col-xl-4"],[1,"switch","switch-icon"],["type","checkbox","name","builder[header][self][fixed][desktop]","value","true",3,"ngModel","ngModelChange"],[1,"form-text","text-muted"],["type","checkbox","name","builder[header][self][fixed][mobile]","value","true",3,"ngModel","ngModelChange"],["name","builder[header][self][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","fluid"],["value","fixed"],["type","checkbox","name","builder[header][menu][self][display]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[header][menu][self][static]","value","true",3,"ngModel","ngModelChange"],["name","builder[header][menu][self][layout]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","default"],["value","tab"],["type","checkbox","name","builder[header][menu][self][rootArrow]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[subheader][display]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[subheader][fixed]","value","true",3,"ngModel","ngModelChange"],["name","builder[subheader][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["name","builder[subheader][style]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","transparent"],["value","solid"],["name","builder[layout][subheader][layoutVersion]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],["value","v1"],["value","v2"],["value","v3"],["value","v4"],["value","v5"],["value","v6"],["name","builder[content][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],[1,"col-lg-9","col-xl-6"],["type","checkbox","name","builder[aside][self][display]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][menu][static]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][self][fixed]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builde[aside][self][minimize][toggle]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][self][minimize][default]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][menu][scroll]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[aside][menu][dropdown]","value","true",3,"ngModel","ngModelChange"],["type","checkbox","name","builder[footer][fixed]","value","true",3,"ngModel","ngModelChange"],["name","builder[footer][width]",1,"form-control","form-control-solid",3,"ngModel","ngModelChange"],[1,"row"],[1,"col-lg-4"],[1,"col-lg-8"],["type","submit","name","builder_submit",1,"btn","btn-primary"],["type","submit","name","builder_reset",1,"btn","btn-secondary",3,"click"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"example","mb-10"],[1,"example-code"],["data-placement","left","ngbTooltip","Copy code",1,"example-copy"],[1,"example-highlight"],[3,"highlight"]],template:function(e,n){1&e&&(g.Wb(0,"app-notice",0),g.Wb(1,"p"),g.Pc(2," The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real time. The configured layout options will be saved until you change or reset them. To use the layout builder, choose the layout options and click the "),g.Wb(3,"code"),g.Pc(4,"Preview"),g.Vb(),g.Pc(5," button to preview the changes. "),g.Vb(),g.Vb(),g.Wb(6,"div",1),g.Wb(7,"div",2),g.Wb(8,"ul",3),g.Wb(9,"li",4),g.Wb(10,"a",5),g.gc("click",function(){return n.setActiveTab(1)}),g.Pc(11," Header "),g.Vb(),g.Vb(),g.Wb(12,"li",4),g.Wb(13,"a",5),g.gc("click",function(){return n.setActiveTab(2)}),g.Pc(14," Subheader "),g.Vb(),g.Vb(),g.Wb(15,"li",4),g.Wb(16,"a",5),g.gc("click",function(){return n.setActiveTab(3)}),g.Pc(17," Content "),g.Vb(),g.Vb(),g.Wb(18,"li",4),g.Wb(19,"a",5),g.gc("click",function(){return n.setActiveTab(4)}),g.Pc(20," Aside "),g.Vb(),g.Vb(),g.Wb(21,"li",4),g.Wb(22,"a",5),g.gc("click",function(){return n.setActiveTab(5)}),g.Pc(23," Footer "),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Wb(24,"form",6,7),g.gc("ngSubmit",function(){return n.submitPreview()}),g.Wb(26,"div",8),g.Wb(27,"div",9),g.Wb(28,"div",10),g.Wb(29,"div",11),g.Wb(30,"label",12),g.Pc(31,"Desktop Fixed Header:"),g.Vb(),g.Wb(32,"div",13),g.Wb(33,"span",14),g.Wb(34,"label"),g.Wb(35,"input",15),g.gc("ngModelChange",function(e){return n.model.header.self.fixed.desktop=e}),g.Vb(),g.Rb(36,"span"),g.Vb(),g.Vb(),g.Wb(37,"div",16),g.Pc(38," Enable fixed header for desktop mode "),g.Vb(),g.Vb(),g.Vb(),g.Wb(39,"div",11),g.Wb(40,"label",12),g.Pc(41,"Mobile Fixed Header:"),g.Vb(),g.Wb(42,"div",13),g.Wb(43,"span",14),g.Wb(44,"label"),g.Wb(45,"input",17),g.gc("ngModelChange",function(e){return n.model.header.self.fixed.mobile=e}),g.Vb(),g.Rb(46,"span"),g.Vb(),g.Vb(),g.Wb(47,"div",16),g.Pc(48," Enable fixed header for mobile mode "),g.Vb(),g.Vb(),g.Vb(),g.Wb(49,"div",11),g.Wb(50,"label",12),g.Pc(51,"Header Width:"),g.Vb(),g.Wb(52,"div",13),g.Wb(53,"select",18),g.gc("ngModelChange",function(e){return n.model.header.self.width=e}),g.Wb(54,"option",19),g.Pc(55,"Fluid"),g.Vb(),g.Wb(56,"option",20),g.Pc(57,"Fixed"),g.Vb(),g.Vb(),g.Wb(58,"div",16),g.Pc(59,"Select header width type."),g.Vb(),g.Vb(),g.Vb(),g.Wb(60,"div",11),g.Wb(61,"label",12),g.Pc(62,"Display Header Menu:"),g.Vb(),g.Wb(63,"div",13),g.Wb(64,"span",14),g.Wb(65,"label"),g.Wb(66,"input",21),g.gc("ngModelChange",function(e){return n.model.header.menu.self.display=e}),g.Vb(),g.Rb(67,"span"),g.Vb(),g.Vb(),g.Wb(68,"div",16),g.Pc(69,"Display header menu"),g.Vb(),g.Vb(),g.Vb(),g.Wb(70,"div",11),g.Wb(71,"label",12),g.Pc(72,"Static Header Menu:"),g.Vb(),g.Wb(73,"div",13),g.Wb(74,"span",14),g.Wb(75,"label"),g.Wb(76,"input",22),g.gc("ngModelChange",function(e){return n.model.header.menu.self.static=e}),g.Vb(),g.Rb(77,"span"),g.Vb(),g.Vb(),g.Wb(78,"div",16),g.Pc(79,"Static header menu"),g.Vb(),g.Vb(),g.Vb(),g.Wb(80,"div",11),g.Wb(81,"label",12),g.Pc(82,"Header Menu Layout:"),g.Vb(),g.Wb(83,"div",13),g.Wb(84,"select",23),g.gc("ngModelChange",function(e){return n.model.header.menu.self.layout=e}),g.Wb(85,"option",24),g.Pc(86,"Default"),g.Vb(),g.Wb(87,"option",25),g.Pc(88,"Tab"),g.Vb(),g.Vb(),g.Wb(89,"div",16),g.Pc(90,"Select header width type."),g.Vb(),g.Vb(),g.Vb(),g.Wb(91,"div",11),g.Wb(92,"label",12),g.Pc(93,"Header Menu Arrows:"),g.Vb(),g.Wb(94,"div",13),g.Wb(95,"span",14),g.Wb(96,"label"),g.Wb(97,"input",26),g.gc("ngModelChange",function(e){return n.model.header.menu.self.rootArrow=e}),g.Vb(),g.Rb(98,"span"),g.Vb(),g.Vb(),g.Wb(99,"div",16),g.Pc(100," Enable header menu root link arrows "),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Wb(101,"div",10),g.Wb(102,"div",11),g.Wb(103,"label",12),g.Pc(104,"Display Subheader:"),g.Vb(),g.Wb(105,"div",13),g.Wb(106,"span",14),g.Wb(107,"label"),g.Wb(108,"input",27),g.gc("ngModelChange",function(e){return n.model.subheader.display=e}),g.Vb(),g.Rb(109,"span"),g.Vb(),g.Vb(),g.Wb(110,"div",16),g.Pc(111,"Display subheader"),g.Vb(),g.Vb(),g.Vb(),g.Wb(112,"div",11),g.Wb(113,"label",12),g.Pc(114,"Fixed Subheader:"),g.Vb(),g.Wb(115,"div",13),g.Wb(116,"span",14),g.Wb(117,"label"),g.Wb(118,"input",28),g.gc("ngModelChange",function(e){return n.model.subheader.fixed=e}),g.Vb(),g.Rb(119,"span"),g.Vb(),g.Vb(),g.Wb(120,"div",16),g.Pc(121," Enable fixed(sticky) subheader. Requires "),g.Wb(122,"code"),g.Pc(123,"Solid"),g.Vb(),g.Pc(124," subheader style. "),g.Vb(),g.Vb(),g.Vb(),g.Wb(125,"div",11),g.Wb(126,"label",12),g.Pc(127,"Width:"),g.Vb(),g.Wb(128,"div",13),g.Wb(129,"select",29),g.gc("ngModelChange",function(e){return n.model.subheader.width=e}),g.Wb(130,"option",19),g.Pc(131,"Fluid"),g.Vb(),g.Wb(132,"option",20),g.Pc(133,"Fixed"),g.Vb(),g.Vb(),g.Wb(134,"div",16),g.Pc(135,"Select layout width type."),g.Vb(),g.Vb(),g.Vb(),g.Wb(136,"div",11),g.Wb(137,"label",12),g.Pc(138,"Subheader Style:"),g.Vb(),g.Wb(139,"div",13),g.Wb(140,"select",30),g.gc("ngModelChange",function(e){return n.model.subheader.style=e}),g.Wb(141,"option",31),g.Pc(142,"Transparent"),g.Vb(),g.Wb(143,"option",32),g.Pc(144,"Solid"),g.Vb(),g.Vb(),g.Wb(145,"div",16),g.Pc(146,"Select subheader style"),g.Vb(),g.Vb(),g.Vb(),g.Wb(147,"div",11),g.Wb(148,"label",12),g.Pc(149,"Subheader Layout:"),g.Vb(),g.Wb(150,"div",13),g.Wb(151,"select",33),g.gc("ngModelChange",function(e){return n.model.subheader.layoutVersion=e}),g.Wb(152,"option",34),g.Pc(153,"Subheader 1"),g.Vb(),g.Wb(154,"option",35),g.Pc(155,"Subheader 2"),g.Vb(),g.Wb(156,"option",36),g.Pc(157,"Subheader 3"),g.Vb(),g.Wb(158,"option",37),g.Pc(159,"Subheader 4"),g.Vb(),g.Wb(160,"option",38),g.Pc(161,"Subheader 5"),g.Vb(),g.Wb(162,"option",39),g.Pc(163,"Subheader 6"),g.Vb(),g.Vb(),g.Wb(164,"div",16),g.Pc(165,"Select subheader layout"),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Wb(166,"div",10),g.Wb(167,"div",11),g.Wb(168,"label",12),g.Pc(169,"Width:"),g.Vb(),g.Wb(170,"div",13),g.Wb(171,"select",40),g.gc("ngModelChange",function(e){return n.model.content.width=e}),g.Wb(172,"option",19),g.Pc(173,"Fluid"),g.Vb(),g.Wb(174,"option",20),g.Pc(175,"Fixed"),g.Vb(),g.Vb(),g.Wb(176,"div",16),g.Pc(177,"Select layout width type."),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Wb(178,"div",10),g.Wb(179,"div",11),g.Wb(180,"label",12),g.Pc(181,"Display:"),g.Vb(),g.Wb(182,"div",41),g.Wb(183,"span",14),g.Wb(184,"label"),g.Wb(185,"input",42),g.gc("ngModelChange",function(e){return n.model.aside.self.display=e}),g.Vb(),g.Rb(186,"span"),g.Vb(),g.Vb(),g.Wb(187,"div",16),g.Pc(188,"Display aside"),g.Vb(),g.Vb(),g.Vb(),g.Wb(189,"div",11),g.Wb(190,"label",12),g.Pc(191,"Static aside menu:"),g.Vb(),g.Wb(192,"div",41),g.Wb(193,"span",14),g.Wb(194,"label"),g.Wb(195,"input",43),g.gc("ngModelChange",function(e){return n.model.aside.menu.static=e}),g.Vb(),g.Rb(196,"span"),g.Vb(),g.Vb(),g.Wb(197,"div",16),g.Pc(198,"Static aside menu"),g.Vb(),g.Vb(),g.Vb(),g.Wb(199,"div",11),g.Wb(200,"label",12),g.Pc(201,"Fixed:"),g.Vb(),g.Wb(202,"div",13),g.Wb(203,"span",14),g.Wb(204,"label"),g.Wb(205,"input",44),g.gc("ngModelChange",function(e){return n.model.aside.self.fixed=e}),g.Vb(),g.Rb(206,"span"),g.Vb(),g.Vb(),g.Wb(207,"div",16),g.Pc(208,"Set fixed aside layout"),g.Vb(),g.Vb(),g.Vb(),g.Wb(209,"div",11),g.Wb(210,"label",12),g.Pc(211,"Minimize:"),g.Vb(),g.Wb(212,"div",13),g.Wb(213,"span",14),g.Wb(214,"label"),g.Wb(215,"input",45),g.gc("ngModelChange",function(e){return n.model.aside.self.minimize.toggle=e}),g.Vb(),g.Rb(216,"span"),g.Vb(),g.Vb(),g.Wb(217,"div",16),g.Pc(218,"Allow aside minimizing"),g.Vb(),g.Vb(),g.Vb(),g.Wb(219,"div",11),g.Wb(220,"label",12),g.Pc(221,"Default Minimize:"),g.Vb(),g.Wb(222,"div",13),g.Wb(223,"span",14),g.Wb(224,"label"),g.Wb(225,"input",46),g.gc("ngModelChange",function(e){return n.model.aside.self.minimize.default=e}),g.Vb(),g.Rb(226,"span"),g.Vb(),g.Vb(),g.Wb(227,"div",16),g.Pc(228," Set aside minimized by default "),g.Vb(),g.Vb(),g.Vb(),g.Wb(229,"div",11),g.Wb(230,"label",12),g.Pc(231,"Scroll:"),g.Vb(),g.Wb(232,"div",13),g.Wb(233,"span",14),g.Wb(234,"label"),g.Wb(235,"input",47),g.gc("ngModelChange",function(e){return n.model.aside.menu.scroll=e}),g.Vb(),g.Rb(236,"span"),g.Vb(),g.Vb(),g.Wb(237,"div",16),g.Pc(238,"Enable aside scroll"),g.Vb(),g.Vb(),g.Vb(),g.Wb(239,"div",11),g.Wb(240,"label",12),g.Pc(241,"Submenu toggle dropdown:"),g.Vb(),g.Wb(242,"div",13),g.Wb(243,"span",14),g.Wb(244,"label"),g.Wb(245,"input",48),g.gc("ngModelChange",function(e){return n.model.aside.menu.dropdown=e}),g.Vb(),g.Rb(246,"span"),g.Vb(),g.Vb(),g.Wb(247,"div",16),g.Pc(248," Select Submenu Toggle mode (works only when "),g.Wb(249,"code"),g.Pc(250,"Scroll"),g.Vb(),g.Pc(251," is disabled. *By default - mode is 'accordion'). "),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Wb(252,"div",10),g.Wb(253,"div",11),g.Wb(254,"label",12),g.Pc(255,"Fixed Desktop Footer:"),g.Vb(),g.Wb(256,"div",13),g.Wb(257,"span",14),g.Wb(258,"label"),g.Wb(259,"input",49),g.gc("ngModelChange",function(e){return n.model.footer.fixed=e}),g.Vb(),g.Rb(260,"span"),g.Vb(),g.Vb(),g.Wb(261,"div",16),g.Pc(262,"Set fixed desktop footer"),g.Vb(),g.Vb(),g.Vb(),g.Wb(263,"div",11),g.Wb(264,"label",12),g.Pc(265,"Width:"),g.Vb(),g.Wb(266,"div",13),g.Wb(267,"select",50),g.gc("ngModelChange",function(e){return n.model.footer.width=e}),g.Wb(268,"option",19),g.Pc(269,"Fluid"),g.Vb(),g.Wb(270,"option",20),g.Pc(271,"Fixed"),g.Vb(),g.Vb(),g.Wb(272,"div",16),g.Pc(273,"Select layout width type."),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Wb(274,"div",8),g.Wb(275,"div",51),g.Rb(276,"div",52),g.Wb(277,"div",53),g.Wb(278,"button",54),g.Pc(279," Preview "),g.Vb(),g.Pc(280," \xa0 "),g.Wb(281,"button",55),g.gc("click",function(){return n.resetPreview()}),g.Pc(282," Reset "),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Wb(283,"div",1),g.Wb(284,"div",56),g.Wb(285,"div",57),g.Wb(286,"h3",58),g.Pc(287,"Generated Config"),g.Vb(),g.Vb(),g.Vb(),g.Wb(288,"div",8),g.Wb(289,"div",59),g.Wb(290,"p"),g.Pc(291," Use for layout config in "),g.Wb(292,"code"),g.Pc(293,"src/app/_metronic/configs/default-layout.config.ts"),g.Vb(),g.Vb(),g.Wb(294,"div",60),g.Wb(295,"div",60),g.Rb(296,"span",61),g.Wb(297,"div",62),g.Wb(298,"pre"),g.Rb(299,"code",63),g.lc(300,"json"),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb(),g.Vb()),2&e&&(g.qc("svg","./assets/media/svg/icons/Tools/Tools.svg"),g.Cb(10),g.qc("ngClass",n.getActiveTabCSSClass(1)),g.Cb(3),g.qc("ngClass",n.getActiveTabCSSClass(2)),g.Cb(3),g.qc("ngClass",n.getActiveTabCSSClass(3)),g.Cb(3),g.qc("ngClass",n.getActiveTabCSSClass(4)),g.Cb(3),g.qc("ngClass",n.getActiveTabCSSClass(5)),g.Cb(6),g.qc("ngClass",n.getActiveTabCSSClass(1)),g.Cb(7),g.qc("ngModel",n.model.header.self.fixed.desktop),g.Cb(10),g.qc("ngModel",n.model.header.self.fixed.mobile),g.Cb(8),g.qc("ngModel",n.model.header.self.width),g.Cb(13),g.qc("ngModel",n.model.header.menu.self.display),g.Cb(10),g.qc("ngModel",n.model.header.menu.self.static),g.Cb(8),g.qc("ngModel",n.model.header.menu.self.layout),g.Cb(13),g.qc("ngModel",n.model.header.menu.self.rootArrow),g.Cb(4),g.qc("ngClass",n.getActiveTabCSSClass(2)),g.Cb(7),g.qc("ngModel",n.model.subheader.display),g.Cb(10),g.qc("ngModel",n.model.subheader.fixed),g.Cb(11),g.qc("ngModel",n.model.subheader.width),g.Cb(11),g.qc("ngModel",n.model.subheader.style),g.Cb(11),g.qc("ngModel",n.model.subheader.layoutVersion),g.Cb(15),g.qc("ngClass",n.getActiveTabCSSClass(3)),g.Cb(5),g.qc("ngModel",n.model.content.width),g.Cb(7),g.qc("ngClass",n.getActiveTabCSSClass(4)),g.Cb(7),g.qc("ngModel",n.model.aside.self.display),g.Cb(10),g.qc("ngModel",n.model.aside.menu.static),g.Cb(10),g.qc("ngModel",n.model.aside.self.fixed),g.Cb(10),g.qc("ngModel",n.model.aside.self.minimize.toggle),g.Cb(10),g.qc("ngModel",n.model.aside.self.minimize.default),g.Cb(10),g.qc("ngModel",n.model.aside.menu.scroll),g.Cb(10),g.qc("ngModel",n.model.aside.menu.dropdown),g.Cb(7),g.qc("ngClass",n.getActiveTabCSSClass(5)),g.Cb(7),g.qc("ngModel",n.model.footer.fixed),g.Cb(8),g.qc("ngModel",n.model.footer.width),g.Cb(32),g.qc("highlight",g.mc(300,34,n.model)))},directives:[M,i.l,P.t,P.l,P.m,P.a,P.k,P.n,P.q,P.o,P.s,r.p,d.b],pipes:[i.h],styles:["[_nghost-%COMP%]   .hljs[_ngcontent-%COMP%]{background:transparent!important}"]}),C),w=((h=function e(){b(this,e)}).\u0275mod=g.Ob({type:h}),h.\u0275inj=g.Nb({factory:function(e){return new(e||h)},imports:[[i.c,P.f,m,d.c,r.m,r.q,t.k.forChild([{path:"",component:S}])]]}),h)}}])}();