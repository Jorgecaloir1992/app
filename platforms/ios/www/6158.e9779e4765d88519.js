"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6158],{6158:(Z,g,s)=>{s.r(g),s.d(g,{DehesaPageModule:()=>M});var d=s(6895),l=s(433),n=s(2078),u=s(2435),p=s(655),e=s(4650),h=s(7786),m=s(5290);function _(o,c){if(1&o&&(e.TgZ(0,"div")(1,"ion-card")(2,"ion-card-header")(3,"ion-card-subtitle"),e._uU(4),e.qZA(),e.TgZ(5,"ion-card-subtitle"),e._uU(6),e.qZA(),e.TgZ(7,"ion-card-subtitle"),e._uU(8),e.qZA(),e.TgZ(9,"ion-card-subtitle"),e._uU(10),e.qZA()()()()),2&o){const t=c.$implicit;e.xp6(4),e.hij(" Nombre: ",t.nombre,""),e.xp6(2),e.hij(" Precios: ",t.precio,""),e.xp6(2),e.hij(" Stock: ",t.stock,""),e.xp6(2),e.hij(" Descripcion: ",t.descripcion,"")}}function b(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"ion-content")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Nuevos datos"),e.qZA(),e.TgZ(4,"ion-buttons",7)(5,"ion-button",8),e.NdJ("click",function(){e.CHM(t),e.oxw();const a=e.MAs(15);return e.KtG(a.dismiss())}),e._uU(6,"Volver"),e.qZA()()(),e.TgZ(7,"ion-list",9)(8,"ion-item",10)(9,"input",11),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.productos.nombre=a)}),e.qZA(),e.TgZ(10,"label",12),e._uU(11,"Nombre"),e.qZA()(),e.TgZ(12,"ion-item",10)(13,"input",13),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.productos.precio=a)}),e.qZA(),e.TgZ(14,"label",12),e._uU(15,"Precios"),e.qZA()(),e.TgZ(16,"ion-item",10)(17,"input",13),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.productos.stock=a)}),e.qZA(),e.TgZ(18,"label",12),e._uU(19,"Stock"),e.qZA()(),e.TgZ(20,"ion-item",10)(21,"input",11),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.productos.descripcion=a)}),e.qZA(),e.TgZ(22,"label",12),e._uU(23,"Descripcion"),e.qZA()(),e.TgZ(24,"ion-item",14)(25,"ion-buttons",7)(26,"ion-label"),e._uU(27,"Guardar"),e.qZA(),e.TgZ(28,"ion-button",15),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.save_easy_costanera())}),e._UZ(29,"ion-icon",16),e.qZA()()()()()}if(2&o){const t=e.oxw();e.xp6(9),e.Q6J("ngModel",t.productos.nombre),e.xp6(4),e.Q6J("ngModel",t.productos.precio),e.xp6(4),e.Q6J("ngModel",t.productos.stock),e.xp6(4),e.Q6J("ngModel",t.productos.descripcion)}}const x=[{path:"",component:(()=>{class o{constructor(t,i){this.database=t,this.Interaction=i,this.productos={nombre:"",precio:null,stock:null,descripcion:"",id:""},this.data=[]}ngOnInit(){this.getmostar()}save_easy_costanera(){return(0,p.mG)(this,void 0,void 0,function*(){this.Interaction.showLoading("Cargando..."),console.log("esto vamos a guardar --\x3e",this.productos);const t=this.productos;t.id=this.database.creatId(),yield this.database.createDocument(t,"easy_dehesa","La Dehesa"),this.Interaction.presentToast("Guardado con Exito"),this.productos={nombre:"",precio:null,stock:null,descripcion:"",id:""},this.loading.dismiss()})}getmostar(){this.database.getCollection("easy_dehesa").subscribe(t=>{console.log("esta es la lectura",t),this.data=t})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.j),e.Y36(m.k))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dehesa"]],decls:17,vars:1,consts:[["slot","start"],["src","assets/easy.jpeg",1,"img"],[1,"direccion"],[4,"ngFor","ngForOf"],["id","open-modal","expand","block"],["trigger","open-modal"],["modal",""],["slot","end"],["color","light",3,"click"],["lines","none"],[1,"form-field"],["placeholder","",1,"text-input",3,"ngModel","ngModelChange"],[1,"label"],["type","number","placeholder","",1,"text-input",3,"ngModel","ngModelChange"],[1,"itemInput"],[3,"click"],["slot","icon-only","name","save-sharp"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"La Dehesa"),e.qZA()()(),e.TgZ(6,"ion-content"),e._UZ(7,"ion-img",1),e.TgZ(8,"h4",2),e._uU(9,"Av. La Dehesa 1445, Santiago, Lo Barnechea, Regi\xf3n Metropolitana"),e.qZA(),e.YNc(10,_,11,4,"div",3),e.TgZ(11,"div")(12,"ion-button",4),e._uU(13,"Actualizar"),e.qZA(),e.TgZ(14,"ion-modal",5,6),e.YNc(16,b,30,4,"ng-template"),e.qZA()()()),2&t&&(e.xp6(10),e.Q6J("ngForOf",i.data))},dependencies:[d.sg,l.Fj,l.wV,l.JJ,l.On,n.oU,n.YG,n.Sm,n.PM,n.Zi,n.tO,n.W2,n.Gu,n.gu,n.Xz,n.Ie,n.Q$,n.q_,n.wd,n.sr,n.ki,n.cs],styles:[".direccion[_ngcontent-%COMP%]{margin-top:1%;margin-bottom:10px;font-size:10px;font-weight:100;text-align:center;color:#000}ion-modal[_ngcontent-%COMP%]{--height: 50%;--border-radius: 16px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)}ion-modal[_ngcontent-%COMP%]::part(backdrop){background:rgb(209,213,219);opacity:1}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#6c122b;--color: white}.form-field[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem;height:50px}.text-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;font-size:17px;font-weight:600;border:2px solid #e7ebee;border-radius:10px;outline:none;padding:1rem;background:none;z-index:1;color:#171c25}.text-input[_ngcontent-%COMP%]:focus{border-color:#6c122b}.label[_ngcontent-%COMP%]{position:absolute;left:1rem;top:1rem;padding:0 .25rem;color:#939fab;font-size:1rem;transition:.3s}.text-input[_ngcontent-%COMP%]:focus + .label[_ngcontent-%COMP%], .filled[_ngcontent-%COMP%]{top:-15px;color:#6c122b;font-size:14px}.label[_ngcontent-%COMP%]:before{top:-.4rem;left:.8rem;font-size:14px;font-weight:600;background-color:#fff;z-index:10}.text-input[_ngcontent-%COMP%]:focus   [_ngcontent-%COMP%]::placeholder{opacity:1;animation-delay:.2s}.img[_ngcontent-%COMP%]{width:200px;height:200px;display:block;margin:0 auto}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(x),u.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,l.u5,n.Pc,f]}),o})()}}]);