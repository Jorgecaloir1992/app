"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3816],{3816:(Z,d,c)=>{c.r(d),c.d(d,{SodimacNublePageModule:()=>M});var u=c(6895),s=c(433),n=c(2078),g=c(2435),p=c(655),o=c(4650),m=c(7786),b=c(5290);function _(e,l){if(1&e&&(o.TgZ(0,"div")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-subtitle"),o._uU(4),o.qZA(),o.TgZ(5,"ion-card-subtitle"),o._uU(6),o.qZA(),o.TgZ(7,"ion-card-subtitle"),o._uU(8),o.qZA(),o.TgZ(9,"ion-card-subtitle"),o._uU(10),o.qZA()()()()),2&e){const t=l.$implicit;o.xp6(4),o.hij(" Nombre: ",t.nombre,""),o.xp6(2),o.hij(" Precios: ",t.precio,""),o.xp6(2),o.hij(" Stock: ",t.stock,""),o.xp6(2),o.hij(" Descripcion: ",t.descripcion,"")}}function h(e,l){if(1&e){const t=o.EpF();o.TgZ(0,"ion-content")(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"Nuevos datos"),o.qZA(),o.TgZ(4,"ion-buttons",7)(5,"ion-button",8),o.NdJ("click",function(){o.CHM(t),o.oxw();const a=o.MAs(15);return o.KtG(a.dismiss())}),o._uU(6,"Volver"),o.qZA()()(),o.TgZ(7,"ion-list",9)(8,"ion-item",10)(9,"input",11),o.NdJ("ngModelChange",function(a){o.CHM(t);const r=o.oxw();return o.KtG(r.productos.nombre=a)}),o.qZA(),o.TgZ(10,"label",12),o._uU(11,"Nombre"),o.qZA()(),o.TgZ(12,"ion-item",10)(13,"input",13),o.NdJ("ngModelChange",function(a){o.CHM(t);const r=o.oxw();return o.KtG(r.productos.precio=a)}),o.qZA(),o.TgZ(14,"label",12),o._uU(15,"Precios"),o.qZA()(),o.TgZ(16,"ion-item",10)(17,"input",13),o.NdJ("ngModelChange",function(a){o.CHM(t);const r=o.oxw();return o.KtG(r.productos.stock=a)}),o.qZA(),o.TgZ(18,"label",12),o._uU(19,"Stock"),o.qZA()(),o.TgZ(20,"ion-item",10)(21,"input",11),o.NdJ("ngModelChange",function(a){o.CHM(t);const r=o.oxw();return o.KtG(r.productos.descripcion=a)}),o.qZA(),o.TgZ(22,"label",12),o._uU(23,"Descripcion"),o.qZA()(),o.TgZ(24,"ion-item",14)(25,"ion-buttons",7)(26,"ion-label"),o._uU(27,"Guardar"),o.qZA(),o.TgZ(28,"ion-button",15),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.save_easy_costanera())}),o._UZ(29,"ion-icon",16),o.qZA()()()()()}if(2&e){const t=o.oxw();o.xp6(9),o.Q6J("ngModel",t.productos.nombre),o.xp6(4),o.Q6J("ngModel",t.productos.precio),o.xp6(4),o.Q6J("ngModel",t.productos.stock),o.xp6(4),o.Q6J("ngModel",t.productos.descripcion)}}const x=[{path:"",component:(()=>{class e{constructor(t,i){this.database=t,this.Interaction=i,this.productos={nombre:"",precio:null,stock:null,descripcion:"",id:""},this.data=[]}ngOnInit(){this.getmostar()}save_easy_costanera(){return(0,p.mG)(this,void 0,void 0,function*(){this.Interaction.showLoading("Cargando..."),console.log("esto vamos a guardar --\x3e",this.productos);const t=this.productos;t.id=this.database.creatId(),yield this.database.createDocument(t,"sodimac_nuble","Nuble"),this.Interaction.presentToast("Guardado con Exito"),this.productos={nombre:"",precio:null,stock:null,descripcion:"",id:""},this.loading.dismiss()})}getmostar(){this.database.getCollection("sodimac_nuble").subscribe(t=>{console.log("esta es la lectura",t),this.data=t})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(m.j),o.Y36(b.k))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-sodimac-nuble"]],decls:17,vars:1,consts:[["slot","start"],["src","assets/sodimac.jpeg",1,"img"],[1,"direccion"],[4,"ngFor","ngForOf"],["id","open-modal","expand","block"],["trigger","open-modal"],["modal",""],["slot","end"],["color","light",3,"click"],["lines","none"],[1,"form-field"],["placeholder","",1,"text-input",3,"ngModel","ngModelChange"],[1,"label"],["type","number","placeholder","",1,"text-input",3,"ngModel","ngModelChange"],[1,"itemInput"],[3,"click"],["slot","icon-only","name","save-sharp"]],template:function(t,i){1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),o._UZ(3,"ion-back-button"),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"sodimac-nuble"),o.qZA()()(),o.TgZ(6,"ion-content"),o._UZ(7,"ion-img",1),o.TgZ(8,"h4",2),o._uU(9,"Av. Vicu\xf1a Mackenna 1700, Santiago, \xd1u\xf1oa, Regi\xf3n Metropolitana"),o.qZA(),o.YNc(10,_,11,4,"div",3),o.TgZ(11,"div")(12,"ion-button",4),o._uU(13,"Actualizar"),o.qZA(),o.TgZ(14,"ion-modal",5,6),o.YNc(16,h,30,4,"ng-template"),o.qZA()()()),2&t&&(o.xp6(10),o.Q6J("ngForOf",i.data))},dependencies:[u.sg,s.Fj,s.wV,s.JJ,s.On,n.oU,n.YG,n.Sm,n.PM,n.Zi,n.tO,n.W2,n.Gu,n.gu,n.Xz,n.Ie,n.Q$,n.q_,n.wd,n.sr,n.ki,n.cs],styles:[".direccion[_ngcontent-%COMP%]{margin-top:1%;margin-bottom:10px;font-size:10px;font-weight:100;text-align:center;color:#000}ion-modal[_ngcontent-%COMP%]{--height: 50%;--border-radius: 16px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)}ion-modal[_ngcontent-%COMP%]::part(backdrop){background:rgb(209,213,219);opacity:1}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#6c122b;--color: white}.form-field[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem;height:50px}.text-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;font-size:17px;font-weight:600;border:2px solid #e7ebee;border-radius:10px;outline:none;padding:1rem;background:none;z-index:1;color:#171c25}.text-input[_ngcontent-%COMP%]:focus{border-color:#6c122b}.label[_ngcontent-%COMP%]{position:absolute;left:1rem;top:1rem;padding:0 .25rem;color:#939fab;font-size:1rem;transition:.3s}.text-input[_ngcontent-%COMP%]:focus + .label[_ngcontent-%COMP%], .filled[_ngcontent-%COMP%]{top:-15px;color:#6c122b;font-size:14px}.label[_ngcontent-%COMP%]:before{top:-.4rem;left:.8rem;font-size:14px;font-weight:600;background-color:#fff;z-index:10}.text-input[_ngcontent-%COMP%]:focus   [_ngcontent-%COMP%]::placeholder{opacity:1;animation-delay:.2s}.img[_ngcontent-%COMP%]{width:200px;height:200px;display:block;margin:0 auto}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[g.Bz.forChild(x),g.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.ez,s.u5,n.Pc,f]}),e})()}}]);