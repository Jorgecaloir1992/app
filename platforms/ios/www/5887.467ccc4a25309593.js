"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5887],{5887:(Z,l,c)=>{c.r(l),c.d(l,{SodimacIndependenciaPageModule:()=>M});var p=c(6895),s=c(433),t=c(2078),g=c(2435),u=c(655),n=c(4650),m=c(7786),_=c(5290);function b(o,d){if(1&o&&(n.TgZ(0,"div")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-subtitle"),n._uU(4),n.qZA(),n._uU(5,", "),n.TgZ(6,"ion-card-subtitle"),n._uU(7),n.qZA(),n.TgZ(8,"ion-card-subtitle"),n._uU(9),n.qZA(),n.TgZ(10,"ion-card-subtitle"),n._uU(11),n.qZA()()()()),2&o){const e=d.$implicit;n.xp6(4),n.hij(" Nombre: ",e.nombre,""),n.xp6(3),n.hij(" Precios: ",e.precio,""),n.xp6(2),n.hij(" Stock: ",e.stock,""),n.xp6(2),n.hij(" Descripcion: ",e.descripcion,"")}}function h(o,d){if(1&o){const e=n.EpF();n.TgZ(0,"ion-content")(1,"ion-toolbar")(2,"ion-title"),n._uU(3,"Nuevos datos"),n.qZA(),n.TgZ(4,"ion-buttons",7)(5,"ion-button",8),n.NdJ("click",function(){n.CHM(e),n.oxw();const a=n.MAs(15);return n.KtG(a.dismiss())}),n._uU(6,"Volver"),n.qZA()()(),n.TgZ(7,"ion-list",9)(8,"ion-item",10)(9,"input",11),n.NdJ("ngModelChange",function(a){n.CHM(e);const r=n.oxw();return n.KtG(r.productos.nombre=a)}),n.qZA(),n.TgZ(10,"label",12),n._uU(11,"Nombre"),n.qZA()(),n.TgZ(12,"ion-item",10)(13,"input",13),n.NdJ("ngModelChange",function(a){n.CHM(e);const r=n.oxw();return n.KtG(r.productos.precio=a)}),n.qZA(),n.TgZ(14,"label",12),n._uU(15,"Precios"),n.qZA()(),n.TgZ(16,"ion-item",10)(17,"input",13),n.NdJ("ngModelChange",function(a){n.CHM(e);const r=n.oxw();return n.KtG(r.productos.stock=a)}),n.qZA(),n.TgZ(18,"label",12),n._uU(19,"Stock"),n.qZA()(),n.TgZ(20,"ion-item",10)(21,"input",11),n.NdJ("ngModelChange",function(a){n.CHM(e);const r=n.oxw();return n.KtG(r.productos.descripcion=a)}),n.qZA(),n.TgZ(22,"label",12),n._uU(23,"Descripcion"),n.qZA()(),n.TgZ(24,"ion-item",14)(25,"ion-buttons",7)(26,"ion-label"),n._uU(27,"Guardar"),n.qZA(),n.TgZ(28,"ion-button",15),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.save_easy_costanera())}),n._UZ(29,"ion-icon",16),n.qZA()()()()()}if(2&o){const e=n.oxw();n.xp6(9),n.Q6J("ngModel",e.productos.nombre),n.xp6(4),n.Q6J("ngModel",e.productos.precio),n.xp6(4),n.Q6J("ngModel",e.productos.stock),n.xp6(4),n.Q6J("ngModel",e.productos.descripcion)}}const x=[{path:"",component:(()=>{class o{constructor(e,i){this.database=e,this.Interaction=i,this.productos={nombre:"",precio:null,stock:null,descripcion:"",id:""},this.data=[]}ngOnInit(){this.getmostar()}save_easy_costanera(){return(0,u.mG)(this,void 0,void 0,function*(){this.Interaction.showLoading("Cargando..."),console.log("esto vamos a guardar --\x3e",this.productos);const e=this.productos;e.id=this.database.creatId(),yield this.database.createDocument(e,"sodimac_independencia","Independencia"),this.Interaction.presentToast("Guardado con Exito"),this.productos={nombre:"",precio:null,stock:null,descripcion:"",id:""},this.loading.dismiss()})}getmostar(){this.database.getCollection("sodimac").subscribe(e=>{console.log("esta es la lectura",e),this.data=e})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(m.j),n.Y36(_.k))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-sodimac-independencia"]],decls:17,vars:1,consts:[["slot","start"],["src","assets/sodimac.jpeg",1,"img"],[1,"direccion"],[4,"ngFor","ngForOf"],["id","open-modal","expand","block"],["trigger","open-modal"],["modal",""],["slot","end"],["color","light",3,"click"],["lines","none"],[1,"form-field"],["placeholder","",1,"text-input",3,"ngModel","ngModelChange"],[1,"label"],["type","number","placeholder","",1,"text-input",3,"ngModel","ngModelChange"],[1,"itemInput"],[3,"click"],["slot","icon-only","name","save-sharp"]],template:function(e,i){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n._UZ(3,"ion-back-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"sodimac-independencia"),n.qZA()()(),n.TgZ(6,"ion-content"),n._UZ(7,"ion-img",1),n.TgZ(8,"h4",2),n._uU(9,"Av. Independencia 565, Independencia, Regi\xf3n Metropolitana"),n.qZA(),n.YNc(10,b,12,4,"div",3),n.TgZ(11,"div")(12,"ion-button",4),n._uU(13,"Actualizar"),n.qZA(),n.TgZ(14,"ion-modal",5,6),n.YNc(16,h,30,4,"ng-template"),n.qZA()()()),2&e&&(n.xp6(10),n.Q6J("ngForOf",i.data))},dependencies:[p.sg,s.Fj,s.wV,s.JJ,s.On,t.oU,t.YG,t.Sm,t.PM,t.Zi,t.tO,t.W2,t.Gu,t.gu,t.Xz,t.Ie,t.Q$,t.q_,t.wd,t.sr,t.ki,t.cs],styles:[".direccion[_ngcontent-%COMP%]{margin-top:1%;margin-bottom:10px;font-size:10px;font-weight:100;text-align:center;color:#000}ion-modal[_ngcontent-%COMP%]{--height: 50%;--border-radius: 16px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)}ion-modal[_ngcontent-%COMP%]::part(backdrop){background:rgb(209,213,219);opacity:1}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#6c122b;--color: white}.form-field[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem;height:50px}.text-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;font-size:17px;font-weight:600;border:2px solid #e7ebee;border-radius:10px;outline:none;padding:1rem;background:none;z-index:1;color:#171c25}.text-input[_ngcontent-%COMP%]:focus{border-color:#6c122b}.label[_ngcontent-%COMP%]{position:absolute;left:1rem;top:1rem;padding:0 .25rem;color:#939fab;font-size:1rem;transition:.3s}.text-input[_ngcontent-%COMP%]:focus + .label[_ngcontent-%COMP%], .filled[_ngcontent-%COMP%]{top:-15px;color:#6c122b;font-size:14px}.label[_ngcontent-%COMP%]:before{top:-.4rem;left:.8rem;font-size:14px;font-weight:600;background-color:#fff;z-index:10}.text-input[_ngcontent-%COMP%]:focus   [_ngcontent-%COMP%]::placeholder{opacity:1;animation-delay:.2s}.img[_ngcontent-%COMP%]{width:200px;height:200px;display:block;margin:0 auto}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.Bz.forChild(x),g.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[p.ez,s.u5,t.Pc,f]}),o})()}}]);