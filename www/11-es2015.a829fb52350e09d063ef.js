(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{zFnc:function(t,i,e){"use strict";e.r(i),e.d(i,"EditPageModule",(function(){return f}));var o=e("ofXK"),n=e("3Pt+"),s=e("TEn/"),a=e("tyNb"),b=e("mrSG"),r=e("fXoL"),c=e("a/9d"),l=e("dVwY"),g=e("Bfh1");function h(t,i){if(1&t&&(r.Kb(0,"div"),r.Ib(1,"ion-img",12),r.Jb()),2&t){const t=r.Ub(2);r.xb(1),r.Xb("src",t.image)}}function d(t,i){if(1&t){const t=r.Lb();r.Kb(0,"div"),r.Kb(1,"div",9),r.Kb(2,"label",10),r.gc(3,"\u65e5\u8a8c\u306e\u5199\u771f\u3092\u9078\u629e"),r.Jb(),r.Kb(4,"input",11),r.Sb("change",(function(i){return r.cc(t),r.Ub().loadPicture(i)})),r.Jb(),r.Jb(),r.fc(5,h,2,1,"div",2),r.Kb(6,"ion-card"),r.Kb(7,"ion-card-content"),r.gc(8,"\u6b21\u306e\u30aa\u30b9\u30b9\u30e1\u306e\u6587[1]: RECOMMEND1"),r.Jb(),r.Jb(),r.Kb(9,"ion-card"),r.Kb(10,"ion-card-content"),r.gc(11,"\u6b21\u306e\u30aa\u30b9\u30b9\u30e1\u306e\u6587[2]: RECOMMEND2"),r.Jb(),r.Jb(),r.Kb(12,"ion-card"),r.Kb(13,"ion-card-content"),r.gc(14,"\u6b21\u306e\u30aa\u30b9\u30b9\u30e1\u306e\u6587[3]: RECOMMEND3"),r.Jb(),r.Jb(),r.Jb()}if(2&t){const t=r.Ub();r.xb(5),r.Xb("ngIf",t.imageFlag)}}const u=[{path:"",component:(()=>{class t{constructor(t,i,e,o,n,s){this.camera=t,this.gs=i,this.geolocation=e,this.alertController=o,this.router=n,this.route=s,this.imageFlag=!1,this.imgHeight=600,this.title="",this.text="",this.article_id=0,this.postObj={},this.returnObj={},this.tabFlag=!1,this.loadPicture=t=>{console.log(t);var i=t.srcElement.files[0],e=new FileReader,o=new Image;e.onloadend=()=>{o.onload=()=>{console.log("Image Processing");const t=o.src.substring(5,o.src.indexOf(";")),i=o.width*(this.imgHeight/o.height),e=document.createElement("canvas");e.width=i,e.height=this.imgHeight,e.getContext("2d").drawImage(o,0,0,i,this.imgHeight),this.image=e.toDataURL(t)},o.src=e.result,this.imageFlag=!0},i&&e.readAsDataURL(i)},this.takePicture=t=>{},this.postArticle=()=>{this.geolocation.getCurrentPosition().then(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.postObj.id=localStorage.id,this.postObj.article_id=this.article_id,this.postObj.prefecture=localStorage.prefecture,this.postObj.latitude=this.latitude,this.postObj.longitude=this.longitude,this.postObj.title=this.title,this.postObj.text=this.text,this.postObj.image=this.image,this.postObj.hash=localStorage.hash;const i=this.postObj;1==this.tab?this.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/registerDiaryArticle.php",i).subscribe(t=>{console.log(t),this.navigate(),this.alertPost()},t=>console.error(t)):2==this.tab&&this.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/registerTipsArticle.php",i).subscribe(t=>{console.log(t),this.navigate(),this.alertPost()},t=>console.error(t))},t=>console.error(t))},this.navigate=()=>{this.router.navigate(["/tabs","tab"+this.tab,"edited"])}}ngOnInit(){this.route.params.subscribe(t=>{this.tab=t.tab,1==this.tab&&(this.tabFlag=!0)},t=>console.error(t))}alertPost(){return Object(b.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({message:"\u65e5\u8a8c\u304c\u6295\u7a3f\u3055\u308c\u307e\u3057\u305f",buttons:["OK"]});yield t.present()}))}}return t.\u0275fac=function(i){return new(i||t)(r.Hb(c.a),r.Hb(l.a),r.Hb(g.a),r.Hb(s.a),r.Hb(a.g),r.Hb(a.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-edit"]],decls:19,vars:3,consts:[["slot","start"],["id","back"],[4,"ngIf"],[3,"submit"],["position","floating"],["required","","type","text","name","title",3,"ngModel","ngModelChange"],["name","text",3,"ngModel","ngModelChange"],[1,"button-area"],["type","submit","id","post-article-button"],[1,"button-area","ion-padding"],["for","file-button","id","file-button-label"],["type","file","accept","image/*","id","file-button",3,"change"],["id","image",3,"src"]],template:function(t,i){1&t&&(r.Kb(0,"ion-header"),r.Kb(1,"ion-toolbar"),r.Kb(2,"ion-buttons",0),r.Ib(3,"ion-back-button",1),r.Jb(),r.Kb(4,"ion-title"),r.gc(5,"\u7de8\u96c6\u30da\u30fc\u30b8"),r.Jb(),r.Jb(),r.Jb(),r.Kb(6,"ion-content"),r.fc(7,d,15,1,"div",2),r.Kb(8,"form",3),r.Sb("submit",(function(){return i.postArticle()})),r.Kb(9,"ion-item"),r.Kb(10,"ion-label",4),r.gc(11,"\u30bf\u30a4\u30c8\u30eb"),r.Jb(),r.Kb(12,"ion-input",5),r.Sb("ngModelChange",(function(t){return i.title=t})),r.Jb(),r.Kb(13,"ion-label",4),r.gc(14,"\u672c\u6587"),r.Jb(),r.Kb(15,"ion-textarea",6),r.Sb("ngModelChange",(function(t){return i.text=t})),r.Jb(),r.Jb(),r.Kb(16,"div",7),r.Kb(17,"button",8),r.gc(18,"\u6295\u7a3f\u3059\u308b"),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&t&&(r.xb(7),r.Xb("ngIf",i.tabFlag),r.xb(5),r.Xb("ngModel",i.title),r.xb(3),r.Xb("ngModel",i.text))},directives:[s.n,s.B,s.e,s.c,s.d,s.A,s.k,o.i,n.i,n.e,n.f,s.r,s.s,s.q,s.H,n.h,n.d,n.g,s.z,s.f,s.g,s.p],styles:["#file-button-label[_ngcontent-%COMP%]{font-size:2em;color:#fff;background-color:#cbf266;border-radius:5px;padding:10px 30px;width:80%}#file-button[_ngcontent-%COMP%]{display:none}.button-area[_ngcontent-%COMP%]{text-align:center}#post-article-button[_ngcontent-%COMP%]{font-size:2em;color:#fff;background-color:#cbf266;border-radius:5px;padding:10px 30px;width:80%}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(i){return new(i||t)},imports:[[a.i.forChild(u)],a.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(i){return new(i||t)},imports:[[o.b,n.a,s.C,p]]}),t})()}}]);