(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{T9iC:function(e,o,t){"use strict";t.r(o),t.d(o,"SignupPageModule",(function(){return p}));var n=t("ofXK"),i=t("3Pt+"),b=t("TEn/"),l=t("tyNb"),c=t("mrSG"),s=t("fXoL"),a=t("dVwY");const u=[{path:"",component:(()=>{class e{constructor(e,o,t){this.alertController=e,this.router=o,this.gs=t,this.postObj={},this.returnObj={},this.signup=()=>{this.postObj.id=this.id,this.postObj.email=this.email,this.postObj.prefecture=this.prefecture,this.postObj.password=this.password,this.gs.http("https://kn46itblog.com/hackathon/winter2020/php_apis/signup.php",this.postObj).subscribe(e=>{this.returnObj=e,200==this.returnObj.status?(this.alertSuccess(),this.router.navigate(["/login"])):this.alertFailer()})}}ngOnInit(){}alertSuccess(){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"\u65b0\u898f\u767b\u9332",message:"\u65b0\u898f\u767b\u9332\u306b\u6210\u529f\u3057\u307e\u3057\u305f.",buttons:["OK"]});yield e.present()}))}alertFailer(){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"\u65b0\u898f\u767b\u9332",message:"\u65b0\u898f\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f.<br>ID\u304c\u91cd\u8907\u3057\u3066\u3044\u307e\u3059.",buttons:["OK"]});yield e.present()}))}}return e.\u0275fac=function(o){return new(o||e)(s.Hb(b.a),s.Hb(l.g),s.Hb(a.a))},e.\u0275cmp=s.Bb({type:e,selectors:[["app-signup"]],decls:121,vars:4,consts:[["slot","start"],["id","back"],["id","icon","src","../../assets/icon/icon.png"],["src","../../assets/logo.png",1,"ion-padding"],["id","top"],[1,"button_center"],[1,"ion-padding",3,"submit"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["required","","type","text","name","id",3,"ngModel","ngModelChange"],["required","","type","text","name","email",3,"ngModel","ngModelChange"],["required","","name","prefecture","placeholder","1\u3064\u9078\u3093\u3067\u304f\u3060\u3055\u3044",3,"ngModel","ngModelChange"],["value","\u5317\u6d77\u9053"],["value","\u9752\u68ee\u770c"],["value","\u5ca9\u624b\u770c"],["value","\u5bae\u57ce\u770c"],["value","\u79cb\u7530\u770c"],["value","\u5c71\u5f62\u770c"],["value","\u798f\u5cf6\u770c"],["value","\u8328\u57ce\u770c"],["value","\u6803\u6728\u770c"],["value","\u7fa4\u99ac\u770c"],["value","\u57fc\u7389\u770c"],["value","\u5343\u8449\u770c"],["value","\u6771\u4eac\u90fd"],["value","\u795e\u5948\u5ddd\u770c"],["value","\u65b0\u6f5f\u770c"],["value","\u5bcc\u5c71\u770c"],["value","\u77f3\u5ddd\u770c"],["value","\u798f\u4e95\u770c"],["value","\u5c71\u68a8\u770c"],["value","\u9577\u91ce\u770c"],["value","\u5c90\u961c\u770c"],["value","\u9759\u5ca1\u770c"],["value","\u611b\u77e5\u770c"],["value","\u4e09\u91cd\u770c"],["value","\u6ecb\u8cc0\u770c"],["value","\u4eac\u90fd\u5e9c"],["value","\u5927\u962a\u5e9c"],["value","\u5175\u5eab\u770c"],["value","\u5948\u826f\u770c"],["value","\u548c\u6b4c\u5c71\u770c"],["value","\u9ce5\u53d6\u770c"],["value","\u5cf6\u6839\u770c"],["value","\u5ca1\u5c71\u770c"],["value","\u5e83\u5cf6\u770c"],["value","\u5c71\u53e3\u770c"],["value","\u5fb3\u5cf6\u770c"],["value","\u9999\u5ddd\u770c"],["value","\u611b\u5a9b\u770c"],["value","\u9ad8\u77e5\u770c"],["value","\u798f\u5ca1\u770c"],["value","\u4f50\u8cc0\u770c"],["value","\u9577\u5d0e\u770c"],["value","\u718a\u672c\u770c"],["value","\u5927\u5206\u770c"],["value","\u5bae\u5d0e\u770c"],["value","\u9e7f\u5150\u5cf6\u770c"],["value","\u6c96\u7e04\u770c"],["required","","type","password","name","password",3,"ngModel","ngModelChange"],["type","submit","expand","block","fill","outline","color","base-green"]],template:function(e,o){1&e&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-buttons",0),s.Ib(3,"ion-back-button",1),s.Lb(),s.Mb(4,"ion-title"),s.Ib(5,"ion-img",2),s.Lb(),s.Lb(),s.Lb(),s.Mb(6,"ion-content"),s.Ib(7,"ion-img",3),s.Mb(8,"div",4),s.hc(9,"\u65b0\u898f\u767b\u9332"),s.Lb(),s.Mb(10,"div",5),s.Mb(11,"form",6),s.Tb("submit",(function(){return o.signup()})),s.Mb(12,"ion-item",7),s.Mb(13,"ion-label",8),s.hc(14,"ID"),s.Lb(),s.Mb(15,"ion-input",9),s.Tb("ngModelChange",(function(e){return o.id=e})),s.Lb(),s.Mb(16,"ion-label",8),s.hc(17,"e-mail"),s.Lb(),s.Mb(18,"ion-input",10),s.Tb("ngModelChange",(function(e){return o.email=e})),s.Lb(),s.Mb(19,"ion-label"),s.hc(20,"\u5728\u4f4f\u3057\u3066\u3044\u308b\u90fd\u9053\u5e9c\u770c"),s.Lb(),s.Mb(21,"ion-select",11),s.Tb("ngModelChange",(function(e){return o.prefecture=e})),s.Mb(22,"ion-select-option",12),s.hc(23,"\u5317\u6d77\u9053"),s.Lb(),s.Mb(24,"ion-select-option",13),s.hc(25,"\u9752\u68ee\u770c"),s.Lb(),s.Mb(26,"ion-select-option",14),s.hc(27,"\u5ca9\u624b\u770c"),s.Lb(),s.Mb(28,"ion-select-option",15),s.hc(29,"\u5bae\u57ce\u770c"),s.Lb(),s.Mb(30,"ion-select-option",16),s.hc(31,"\u79cb\u7530\u770c"),s.Lb(),s.Mb(32,"ion-select-option",17),s.hc(33,"\u5c71\u5f62\u770c"),s.Lb(),s.Mb(34,"ion-select-option",18),s.hc(35,"\u798f\u5cf6\u770c"),s.Lb(),s.Mb(36,"ion-select-option",19),s.hc(37,"\u8328\u57ce\u770c"),s.Lb(),s.Mb(38,"ion-select-option",20),s.hc(39,"\u6803\u6728\u770c"),s.Lb(),s.Mb(40,"ion-select-option",21),s.hc(41,"\u7fa4\u99ac\u770c"),s.Lb(),s.Mb(42,"ion-select-option",22),s.hc(43,"\u57fc\u7389\u770c"),s.Lb(),s.Mb(44,"ion-select-option",23),s.hc(45,"\u5343\u8449\u770c"),s.Lb(),s.Mb(46,"ion-select-option",24),s.hc(47,"\u6771\u4eac\u90fd"),s.Lb(),s.Mb(48,"ion-select-option",25),s.hc(49,"\u795e\u5948\u5ddd\u770c"),s.Lb(),s.Mb(50,"ion-select-option",26),s.hc(51,"\u65b0\u6f5f\u770c"),s.Lb(),s.Mb(52,"ion-select-option",27),s.hc(53,"\u5bcc\u5c71\u770c"),s.Lb(),s.Mb(54,"ion-select-option",28),s.hc(55,"\u77f3\u5ddd\u770c"),s.Lb(),s.Mb(56,"ion-select-option",29),s.hc(57,"\u798f\u4e95\u770c"),s.Lb(),s.Mb(58,"ion-select-option",30),s.hc(59,"\u5c71\u68a8\u770c"),s.Lb(),s.Mb(60,"ion-select-option",31),s.hc(61,"\u9577\u91ce\u770c"),s.Lb(),s.Mb(62,"ion-select-option",32),s.hc(63,"\u5c90\u961c\u770c"),s.Lb(),s.Mb(64,"ion-select-option",33),s.hc(65,"\u9759\u5ca1\u770c"),s.Lb(),s.Mb(66,"ion-select-option",34),s.hc(67,"\u611b\u77e5\u770c"),s.Lb(),s.Mb(68,"ion-select-option",35),s.hc(69,"\u4e09\u91cd\u770c"),s.Lb(),s.Mb(70,"ion-select-option",36),s.hc(71,"\u6ecb\u8cc0\u770c"),s.Lb(),s.Mb(72,"ion-select-option",37),s.hc(73,"\u4eac\u90fd\u5e9c"),s.Lb(),s.Mb(74,"ion-select-option",38),s.hc(75,"\u5927\u962a\u5e9c"),s.Lb(),s.Mb(76,"ion-select-option",39),s.hc(77,"\u5175\u5eab\u770c"),s.Lb(),s.Mb(78,"ion-select-option",40),s.hc(79,"\u5948\u826f\u770c"),s.Lb(),s.Mb(80,"ion-select-option",41),s.hc(81,"\u548c\u6b4c\u5c71\u770c"),s.Lb(),s.Mb(82,"ion-select-option",42),s.hc(83,"\u9ce5\u53d6\u770c"),s.Lb(),s.Mb(84,"ion-select-option",43),s.hc(85,"\u5cf6\u6839\u770c"),s.Lb(),s.Mb(86,"ion-select-option",44),s.hc(87,"\u5ca1\u5c71\u770c"),s.Lb(),s.Mb(88,"ion-select-option",45),s.hc(89,"\u5e83\u5cf6\u770c"),s.Lb(),s.Mb(90,"ion-select-option",46),s.hc(91,"\u5c71\u53e3\u770c"),s.Lb(),s.Mb(92,"ion-select-option",47),s.hc(93,"\u5fb3\u5cf6\u770c"),s.Lb(),s.Mb(94,"ion-select-option",48),s.hc(95,"\u9999\u5ddd\u770c"),s.Lb(),s.Mb(96,"ion-select-option",49),s.hc(97,"\u611b\u5a9b\u770c"),s.Lb(),s.Mb(98,"ion-select-option",50),s.hc(99,"\u9ad8\u77e5\u770c"),s.Lb(),s.Mb(100,"ion-select-option",51),s.hc(101,"\u798f\u5ca1\u770c"),s.Lb(),s.Mb(102,"ion-select-option",52),s.hc(103,"\u4f50\u8cc0\u770c"),s.Lb(),s.Mb(104,"ion-select-option",53),s.hc(105,"\u9577\u5d0e\u770c"),s.Lb(),s.Mb(106,"ion-select-option",54),s.hc(107,"\u718a\u672c\u770c"),s.Lb(),s.Mb(108,"ion-select-option",55),s.hc(109,"\u5927\u5206\u770c"),s.Lb(),s.Mb(110,"ion-select-option",56),s.hc(111,"\u5bae\u5d0e\u770c"),s.Lb(),s.Mb(112,"ion-select-option",57),s.hc(113,"\u9e7f\u5150\u5cf6\u770c"),s.Lb(),s.Mb(114,"ion-select-option",58),s.hc(115,"\u6c96\u7e04\u770c"),s.Lb(),s.Lb(),s.Mb(116,"ion-label",8),s.hc(117,"\u30d1\u30b9\u30ef\u30fc\u30c9"),s.Lb(),s.Mb(118,"ion-input",59),s.Tb("ngModelChange",(function(e){return o.password=e})),s.Lb(),s.Lb(),s.Mb(119,"ion-button",60),s.hc(120,"\u65b0\u898f\u767b\u9332\u3059\u308b"),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.xb(15),s.Yb("ngModel",o.id),s.xb(3),s.Yb("ngModel",o.email),s.xb(3),s.Yb("ngModel",o.prefecture),s.xb(97),s.Yb("ngModel",o.password))},directives:[b.q,b.F,b.f,b.c,b.d,b.E,b.s,b.m,i.i,i.e,i.f,b.u,b.v,b.t,b.M,i.h,i.d,i.g,b.y,b.L,b.z,b.e],styles:["#top[_ngcontent-%COMP%]{font-weight:700;font-size:large}#top[_ngcontent-%COMP%], .button-area[_ngcontent-%COMP%]{text-align:center}.button-bottom[_ngcontent-%COMP%]{font-size:2em;color:#fff;background-color:#cbf266;border-radius:5px;padding:10px 30px;width:300px}"]}),e})()}];let r=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(o){return new(o||e)},imports:[[l.i.forChild(u)],l.i]}),e})(),p=(()=>{class e{}return e.\u0275mod=s.Fb({type:e}),e.\u0275inj=s.Eb({factory:function(o){return new(o||e)},imports:[[n.b,i.a,b.G,r]]}),e})()}}]);