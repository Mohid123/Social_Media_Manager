(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/2RN":function(t,e,a){"use strict";a.r(e),a.d(e,"DashboardModule",function(){return L});var s=a("SVse"),n=a("iInd"),c=a("8Y7J"),i=a("7g+E"),o=a("wDSB"),r=a("ZPyn"),b=a("Tczp");const l=["chart"];function d(t,e){1&t&&c.Rb(0,"i",54)}function g(t,e){1&t&&c.Rb(0,"i",55)}function u(t,e){1&t&&c.Rb(0,"i",56)}function f(t,e){if(1&t&&(c.Wb(0,"div",57),c.Oc(1,"Your"),c.Wb(2,"strong"),c.Oc(3),c.Vb(),c.Oc(4,"post was "),c.Wb(5,"span",58),c.Oc(6,"failed"),c.Vb(),c.Vb()),2&t){const t=c.kc().$implicit;c.Cb(3),c.Qc(" ",t.postedTo," ")}}function p(t,e){if(1&t&&(c.Wb(0,"div",57),c.Oc(1,"Your"),c.Wb(2,"strong"),c.Oc(3),c.Vb(),c.Oc(4,"post was "),c.Wb(5,"span",59),c.Oc(6,"succeed"),c.Vb(),c.Vb()),2&t){const t=c.kc().$implicit;c.Cb(3),c.Qc(" ",t.postedTo," ")}}function h(t,e){if(1&t&&(c.Wb(0,"div",57),c.Oc(1,"Your"),c.Wb(2,"strong"),c.Oc(3),c.Vb(),c.Oc(4,"post was "),c.Wb(5,"span",60),c.Oc(6,"pending"),c.Vb(),c.Vb()),2&t){const t=c.kc().$implicit;c.Cb(3),c.Qc(" ",t.postedTo," ")}}function m(t,e){if(1&t&&(c.Ub(0),c.Wb(1,"div",46),c.Wb(2,"div",47),c.Wb(3,"div",48),c.Oc(4),c.Vb(),c.Wb(5,"div",49),c.Mc(6,d,1,0,"i",50),c.Mc(7,g,1,0,"i",51),c.Mc(8,u,1,0,"i",52),c.Vb(),c.Mc(9,f,7,1,"div",53),c.Mc(10,p,7,1,"div",53),c.Mc(11,h,7,1,"div",53),c.Vb(),c.Vb(),c.Tb()),2&t){const t=e.$implicit;c.Cb(4),c.Pc(t.time),c.Cb(2),c.qc("ngIf",0==t.successStatus),c.Cb(1),c.qc("ngIf",1==t.successStatus),c.Cb(1),c.qc("ngIf",2==t.successStatus),c.Cb(1),c.qc("ngIf",0==t.successStatus),c.Cb(1),c.qc("ngIf",1==t.successStatus),c.Cb(1),c.qc("ngIf",2==t.successStatus)}}function D(t,e){if(1&t&&(c.Wb(0,"span",61),c.Oc(1),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.Pc(t.facebookStats.total)}}function w(t,e){if(1&t&&(c.Wb(0,"span",61),c.Oc(1),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.Pc(t.facebookStats.succeeded)}}function S(t,e){if(1&t&&(c.Wb(0,"span",61),c.Oc(1),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.Pc(t.facebookStats.failed)}}function C(t,e){if(1&t&&(c.Wb(0,"span",61),c.Oc(1),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.Pc(t.instagramStats.total)}}function V(t,e){if(1&t&&(c.Wb(0,"span",61),c.Oc(1),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.Pc(t.instagramStats.succeeded)}}function W(t,e){if(1&t&&(c.Wb(0,"span",61),c.Oc(1),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.Pc(t.instagramStats.failed)}}function v(t,e){if(1&t&&(c.Wb(0,"span",61),c.Oc(1),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.Pc(t.clubStats.total)}}function x(t,e){if(1&t&&(c.Wb(0,"span",61),c.Oc(1),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.Pc(t.clubStats.succeeded)}}function O(t,e){if(1&t&&(c.Wb(0,"span",61),c.Oc(1),c.Vb()),2&t){const t=c.kc();c.Cb(1),c.Pc(t.clubStats.failed)}}let k=(()=>{class t{constructor(t,e,a,s){this.spinner=t,this._clubService=e,this._reportService=a,this.cf=s,this.latestReports=[],this.facebookStatistics=[0,0,0,0,0,0,0,0],this.instagramStatistics=[0,0,0,0,0,0,0,0],this.clubStatistics=[0,0,0,0,0,0,0,0]}ngOnInit(){this.signedInuserID=localStorage.getItem("clubUid"),this.getSelectedClub(),this.getLatestReports(),this.getSignedInUserStats(),this.initializeStatsChart(),this.getLastSevenDaysStats()}getSelectedClub(){let t=JSON.parse(localStorage.getItem("selectedClub"));this.selectedClub=t}initializeStatsChart(){this.chartOptions={series:[{name:"Facebook",data:this.facebookStatistics,color:"#3b5998"},{name:"Instagram",data:this.instagramStatistics,color:"#D62976"},{name:"Club",data:this.clubStatistics,color:"#FBAD50"}],chart:{height:400,type:"line"},dataLabels:{enabled:!1},stroke:{width:5,curve:"smooth",dashArray:[0,8,9],colors:["#3b5998","#D62976","#FBAD50","#FBAD50","#FBAD50"]},title:{text:"Page Statistics",align:"left"},legend:{tooltipHoverFormatter:function(t,e){return t+" - <strong>"+e.w.globals.series[e.seriesIndex][e.dataPointIndex]+"</strong>"}},markers:{size:0,hover:{sizeOffset:10}},xaxis:{labels:{trim:!1},categories:[new Date((new Date).setDate((new Date).getDate()-7)).getDate()+" "+new Date((new Date).setDate((new Date).getDate()-7)).toLocaleString("default",{month:"short"}),new Date((new Date).setDate((new Date).getDate()-6)).getDate()+" "+new Date((new Date).setDate((new Date).getDate()-6)).toLocaleString("default",{month:"short"}),new Date((new Date).setDate((new Date).getDate()-5)).getDate()+" "+new Date((new Date).setDate((new Date).getDate()-5)).toLocaleString("default",{month:"short"}),new Date((new Date).setDate((new Date).getDate()-4)).getDate()+" "+new Date((new Date).setDate((new Date).getDate()-4)).toLocaleString("default",{month:"short"}),new Date((new Date).setDate((new Date).getDate()-3)).getDate()+" "+new Date((new Date).setDate((new Date).getDate()-3)).toLocaleString("default",{month:"short"}),new Date((new Date).setDate((new Date).getDate()-2)).getDate()+" "+new Date((new Date).setDate((new Date).getDate()-2)).toLocaleString("default",{month:"short"}),new Date((new Date).setDate((new Date).getDate()-1)).getDate()+" "+new Date((new Date).setDate((new Date).getDate()-1)).toLocaleString("default",{month:"short"}),new Date((new Date).setDate((new Date).getDate())).getDate()+" "+new Date((new Date).setDate((new Date).getDate())).toLocaleString("default",{month:"short"})]},tooltip:{y:[{title:{formatter:function(t){return t+" (Posts)"}}},{title:{formatter:function(t){return t+" (Posts)"}}},{title:{formatter:function(t){return t+" (Posts)"}}}]},grid:{borderColor:"#f1f1f1"}},this.cf.detectChanges()}getLatestReports(){let t=localStorage.getItem("clubUid");this._reportService.getLatestReports(t).subscribe(t=>{t.map(t=>{let e=new Date(t.postedTime).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"});t.time=e}),this.latestReports=t,this.cf.detectChanges()})}getInstagramStats(){return this._reportService.getInstagramStats(this.signedInuserID)}getClubStats(){return this._reportService.getClubStatus(this.signedInuserID)}getSignedInUserStats(){this._reportService.getFacebookStats(this.signedInuserID).subscribe(t=>{this.facebookStats=t,this.getInstagramStats().subscribe(t=>{this.instagramStats=t,this.getClubStats().subscribe(t=>{this.clubStats=t,this.cf.detectChanges()})})})}getLastSevenDaysStats(){this._reportService.getLastSevenDaysStats(this.signedInuserID,"Facebook").subscribe(t=>{this.facebookStatistics=t,this._reportService.getLastSevenDaysStats(this.signedInuserID,"Instagram").subscribe(t=>{this.instagramStatistics=t,this._reportService.getLastSeventDaysStatsForClub(this.signedInuserID).subscribe(t=>{this.clubStatistics=t,this.initializeStatsChart()})})})}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(i.c),c.Qb(o.a),c.Qb(r.a),c.Qb(c.h))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-dashboard"]],viewQuery:function(t,e){if(1&t&&c.Tc(l,!0),2&t){let t;c.zc(t=c.hc())&&(e.chart=t.first)}},decls:101,vars:24,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","default","color","#fff","type","ball-spin",3,"fullScreen"],[2,"color","white"],[1,"row"],[1,"col-lg-3"],[1,"card","card-custom","card-stretch"],[1,"card-header",2,"background-color","#1e1e2d"],[1,"card-title"],[1,"card-label"],[1,"svg-icon","svg-icon-primary","svg-icon-2x"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","24px","height","24px","viewBox","0 0 24 24","version","1.1"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["x","0","y","0","width","24","height","24"],["d","M12,21 C7.581722,21 4,17.418278 4,13 C4,8.581722 7.581722,5 12,5 C16.418278,5 20,8.581722 20,13 C20,17.418278 16.418278,21 12,21 Z","fill","#000000","opacity","0.3"],["d","M13,5.06189375 C12.6724058,5.02104333 12.3386603,5 12,5 C11.6613397,5 11.3275942,5.02104333 11,5.06189375 L11,4 L10,4 C9.44771525,4 9,3.55228475 9,3 C9,2.44771525 9.44771525,2 10,2 L14,2 C14.5522847,2 15,2.44771525 15,3 C15,3.55228475 14.5522847,4 14,4 L13,4 L13,5.06189375 Z","fill","#000000"],["d","M16.7099142,6.53272645 L17.5355339,5.70710678 C17.9260582,5.31658249 18.5592232,5.31658249 18.9497475,5.70710678 C19.3402718,6.09763107 19.3402718,6.73079605 18.9497475,7.12132034 L18.1671361,7.90393167 C17.7407802,7.38854954 17.251061,6.92750259 16.7099142,6.53272645 Z","fill","#000000"],["d","M11.9630156,7.5 L12.0369844,7.5 C12.2982526,7.5 12.5154733,7.70115317 12.5355117,7.96165175 L12.9585886,13.4616518 C12.9797677,13.7369807 12.7737386,13.9773481 12.4984096,13.9985272 C12.4856504,13.9995087 12.4728582,14 12.4600614,14 L11.5399386,14 C11.2637963,14 11.0399386,13.7761424 11.0399386,13.5 C11.0399386,13.4872031 11.0404299,13.4744109 11.0414114,13.4616518 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z","fill","#000000"],[1,"nav-text",2,"color","#fff"],[1,"card-body"],[1,"container","d-flex","justify-content-center",2,"border-bottom","1px solid lightgrey","padding-bottom","25px"],[1,"fa","fa-genderless","text-success","icon-md","mr-2","ml-2"],[1,"fa","fa-genderless","text-danger","icon-md","mr-2","ml-2"],[1,"fa","fa-genderless","text-info","icon-md","mr-2","ml-2"],[1,"card-scroll","custom-scrollbar-css","padd"],[1,"card-body","pt-4"],[4,"ngFor","ngForOf"],[1,"col-lg-9"],[1,"card","card-custom","bgi-no-repeat","card-stretch",2,"background-position","right top","background-size","30% auto","background-image","url(assets/media/svg/shapes/abstract-2.svg)"],[1,"col-xl-4","col-xs-3"],[1,"card","card-custom","bgi-no-repeat","card-stretch","gutter-b",2,"background-color","#3B5998 !important"],[1,"socicon-facebook","mr-5","icon-lg",2,"color","white"],[1,"text-inverse-danger","font-weight-bolder","font-size-h5","mb-2","mt-5"],[1,"btn","btn-light-primary","mr-2"],[1,"label","pulse","pulse-primary"],["class","font-weight-bolder",4,"ngIf"],[1,"pulse-ring"],[1,"btn","btn-light-success","mr-2"],[1,"label","pulse","pulse-success"],[1,"btn","btn-light-danger","mr-2"],[1,"label","pulse","pulse-danger"],[1,"card","card-custom","bgi-no-repeat","card-stretch","gutter-b",2,"background-color","#D62976 !important"],[1,"socicon-instagram","mr-5","icon-lg",2,"color","white"],[1,"card","card-custom","bgi-no-repeat","card-stretch","gutter-b",2,"background-color","#FBAD50 !important"],[1,"svg-icon","menu-icon","icon-lg"],["alt","",1,"rounded",2,"height","auto","width","29px",3,"src"],["id","chart"],[3,"series","chart","xaxis","stroke","tooltip","dataLabels","legend","markers","grid","yaxis","title"],[1,"timeline","timeline-6","mt-3"],[1,"timeline-item","align-items-start"],[1,"timeline-label","font-weight-bolder","text-dark-75","font-size-lg"],[1,"timeline-badge"],["class","fa fa-genderless text-danger icon-xl",4,"ngIf"],["class","fa fa-genderless text-success icon-xl",4,"ngIf"],["class","fa fa-genderless text-info icon-xl",4,"ngIf"],["class","font-weight-mormal font-size-lg timeline-content text-bold pl-5",4,"ngIf"],[1,"fa","fa-genderless","text-danger","icon-xl"],[1,"fa","fa-genderless","text-success","icon-xl"],[1,"fa","fa-genderless","text-info","icon-xl"],[1,"font-weight-mormal","font-size-lg","timeline-content","text-bold","pl-5"],[1,"text-danger","font-weight-bolder"],[1,"text-success","font-weight-bolder"],[1,"text-info","font-weight-bolder"],[1,"font-weight-bolder"]],template:function(t,e){1&t&&(c.Wb(0,"ngx-spinner",0),c.Wb(1,"p",1),c.Oc(2," D I V I D I S "),c.Vb(),c.Vb(),c.Wb(3,"div",2),c.Wb(4,"div",3),c.Wb(5,"div",4),c.Wb(6,"div",5),c.Wb(7,"div",6),c.Wb(8,"h3",7),c.Wb(9,"span",8),c.jc(),c.Wb(10,"svg",9),c.Wb(11,"g",10),c.Rb(12,"rect",11),c.Rb(13,"path",12),c.Rb(14,"path",13),c.Rb(15,"path",14),c.Rb(16,"path",15),c.Vb(),c.Vb(),c.Vb(),c.ic(),c.Wb(17,"span",16),c.Oc(18," \xa0 Activity log"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(19,"div",17),c.Wb(20,"div",18),c.Rb(21,"i",19),c.Oc(22," Succeed "),c.Rb(23,"i",20),c.Oc(24," Failed "),c.Rb(25,"i",21),c.Oc(26," Pending "),c.Vb(),c.Wb(27,"div",22),c.Wb(28,"div",23),c.Mc(29,m,12,7,"ng-container",24),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(30,"div",25),c.Wb(31,"div",26),c.Wb(32,"div",2),c.Wb(33,"div",27),c.Wb(34,"a",28),c.Wb(35,"div",17),c.Rb(36,"i",29),c.Wb(37,"div",30),c.Oc(38,"Facebook"),c.Vb(),c.Wb(39,"button",31),c.Oc(40,"Total "),c.Wb(41,"span",32),c.Mc(42,D,2,1,"span",33),c.Rb(43,"span",34),c.Vb(),c.Vb(),c.Wb(44,"button",35),c.Oc(45,"Succeed "),c.Wb(46,"span",36),c.Mc(47,w,2,1,"span",33),c.Rb(48,"span",34),c.Vb(),c.Vb(),c.Wb(49,"button",37),c.Oc(50,"Failed "),c.Wb(51,"span",38),c.Mc(52,S,2,1,"span",33),c.Rb(53,"span",34),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(54,"div",27),c.Wb(55,"a",39),c.Wb(56,"div",17),c.Rb(57,"i",40),c.Wb(58,"div",30),c.Oc(59,"Instagram"),c.Vb(),c.Wb(60,"button",31),c.Oc(61,"Total "),c.Wb(62,"span",32),c.Mc(63,C,2,1,"span",33),c.Rb(64,"span",34),c.Vb(),c.Vb(),c.Wb(65,"button",35),c.Oc(66,"Succeed "),c.Wb(67,"span",36),c.Mc(68,V,2,1,"span",33),c.Rb(69,"span",34),c.Vb(),c.Vb(),c.Wb(70,"button",37),c.Oc(71,"Failed "),c.Wb(72,"span",38),c.Mc(73,W,2,1,"span",33),c.Rb(74,"span",34),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(75,"div",27),c.Wb(76,"a",41),c.Wb(77,"div",17),c.Wb(78,"i",42),c.Wb(79,"span"),c.Rb(80,"img",43),c.Vb(),c.Vb(),c.Wb(81,"div",30),c.Oc(82),c.Vb(),c.Wb(83,"button",31),c.Oc(84,"Total "),c.Wb(85,"span",32),c.Mc(86,v,2,1,"span",33),c.Rb(87,"span",34),c.Vb(),c.Vb(),c.Wb(88,"button",35),c.Oc(89,"Succeed "),c.Wb(90,"span",36),c.Mc(91,x,2,1,"span",33),c.Rb(92,"span",34),c.Vb(),c.Vb(),c.Wb(93,"button",37),c.Oc(94,"Failed "),c.Wb(95,"span",38),c.Mc(96,O,2,1,"span",33),c.Rb(97,"span",34),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(98,"div",17),c.Wb(99,"div",44),c.Rb(100,"apx-chart",45),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.qc("fullScreen",!0),c.Cb(29),c.qc("ngForOf",e.latestReports),c.Cb(13),c.qc("ngIf",e.facebookStats),c.Cb(5),c.qc("ngIf",e.facebookStats),c.Cb(5),c.qc("ngIf",e.facebookStats),c.Cb(11),c.qc("ngIf",e.instagramStats),c.Cb(5),c.qc("ngIf",e.instagramStats),c.Cb(5),c.qc("ngIf",e.instagramStats),c.Cb(7),c.qc("src",e.selectedClub.logoURL,c.Fc),c.Cb(2),c.Pc(e.selectedClub.clubName),c.Cb(4),c.qc("ngIf",e.clubStats),c.Cb(5),c.qc("ngIf",e.clubStats),c.Cb(5),c.qc("ngIf",e.clubStats),c.Cb(4),c.qc("series",e.chartOptions.series)("chart",e.chartOptions.chart)("xaxis",e.chartOptions.xaxis)("stroke",e.chartOptions.stroke)("tooltip",e.chartOptions.tooltip)("dataLabels",e.chartOptions.dataLabels)("legend",e.chartOptions.legend)("markers",e.chartOptions.markers)("grid",e.chartOptions.grid)("yaxis",e.chartOptions.yaxis)("title",e.chartOptions.title))},directives:[i.a,s.m,s.n,b.a],styles:["@media (min-width:992px){.footer-fixed[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding-bottom:0}}.custom-scrollbar-css[_ngcontent-%COMP%]{height:200px;overflow-y:scroll}.custom-scrollbar-css[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}.custom-scrollbar-css[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#eee}.custom-scrollbar-css[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:1rem;background-color:#34abc5;background-image:linear-gradient(0deg,#949494 0,#1e1e2d)}@media screen and (max-width:1600px){.btn[_ngcontent-%COMP%]{padding:6px;font-size:10px;margin:5px 0}.font-size-lg[_ngcontent-%COMP%]{font-size:12px}.card-body[_ngcontent-%COMP%]{padding:0}}.padd[_ngcontent-%COMP%]{height:660px}@media screen and (max-width:500px){.padd[_ngcontent-%COMP%]{height:200px}}"]}),t})();var I=a("hrfs");let L=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[s.c,i.b,I.a,b.b,n.k.forChild([{path:"",component:k}])]]}),t})()}}]);