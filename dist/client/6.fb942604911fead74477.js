(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{XpXM:function(t,e,r){"use strict";r.r(e),r.d(e,"MainModule",(function(){return w}));var n=r("ofXK"),o=r("tyNb"),c=r("fXoL"),a=r("pW6c"),i=r("bTqV"),s=r("NFeN"),b=r("XhcP"),l=r("MutI");function u(t,e){if(1&t&&(c.Ob(0,"mat-list-option",15),c.pc(1),c.Nb()),2&t){const t=e.$implicit;c.cc("routerLink",t.routerlink)("value",t),c.zb(1),c.rc(" ",t.name," ")}}let p=(()=>{class t{constructor(t,e){this.router=t,this.authenticationService=e,this.typesOfShoes=[{name:"Dashboard",routerlink:"./dashboard"},{name:"Survey Tools",routerlink:"./dashboard"},{name:"Profile",routerlink:"./profile"},{name:"Analytics",routerlink:"./dashboard"},{name:"Settings",routerlink:"./dashboard"},{name:"Billing",routerlink:"./dashboard"},{name:"Privacy policy",routerlink:"./dashboard"}],this.authenticationService.currentUser.subscribe(t=>this.currentUser=t)}toogleDrawer(){}logout(){this.authenticationService.logout(),this.router.navigate([""])}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(o.b),c.Jb(a.a))},t.\u0275cmp=c.Db({type:t,selectors:[["app-home"]],decls:21,vars:2,consts:[[1,"navbar","fixed-top","bg-light","navbar-expand-lg","shadow-sm","p-0"],[1,"d-flex","justify-content-between","w-100"],[1,"nav","nav-item"],["mat-icon-button","","color","accent"],[3,"click"],["href","http://localhost:4200",1,"navbar-brand","pl-2","p-1"],["src","../assets/brand.webp","width","40%",1,"p-0"],[1,""],["mat-icon-button","","color","accent",1,"p-0","mr-2",3,"click"],[1,"drawer-container"],["mode","side","opened","",1,"drawer"],["drawer",""],[1,"m-0","selectionlist",3,"multiple"],["shoes",""],["class","list-item p-0",3,"routerLink","value",4,"ngFor","ngForOf"],[1,"list-item","p-0",3,"routerLink","value"]],template:function(t,e){if(1&t){const t=c.Pb();c.Ob(0,"nav",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Ob(3,"button",3),c.Ob(4,"mat-icon",4),c.Vb("click",(function(){return c.gc(t),c.fc(15).toggle()})),c.pc(5,"menu"),c.Nb(),c.Nb(),c.Ob(6,"a",5),c.Kb(7,"img",6),c.Nb(),c.Nb(),c.Ob(8,"div",7),c.Ob(9,"button",8),c.Vb("click",(function(){return e.logout()})),c.Ob(10,"mat-icon"),c.pc(11,"more_vert"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(12,"div",7),c.Ob(13,"mat-drawer-container",9),c.Ob(14,"mat-drawer",10,11),c.Ob(16,"mat-selection-list",12,13),c.oc(18,u,2,3,"mat-list-option",14),c.Nb(),c.Nb(),c.Ob(19,"mat-drawer-content"),c.Kb(20,"router-outlet"),c.Nb(),c.Nb(),c.Nb()}2&t&&(c.zb(16),c.cc("multiple",!1),c.zb(2),c.cc("ngForOf",e.typesOfShoes))},directives:[i.a,s.a,b.b,b.a,l.c,n.h,b.c,o.f,l.b,o.c],styles:[".childrouter[_ngcontent-%COMP%]{margin-top:0}.drawer-container[_ngcontent-%COMP%]{width:100%;height:700px;margin-top:3.5%;border:0 solid #555}.drawer[_ngcontent-%COMP%]{width:15%;color:#fff;background-color:#fff}.list-item[_ngcontent-%COMP%]{color:#141414;font-size:small}"]}),t})(),d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Db({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,e){1&t&&(c.Ob(0,"p"),c.pc(1,"dashboard works!"),c.Nb())},styles:[""]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Db({type:t,selectors:[["app-profile"]],decls:2,vars:0,template:function(t,e){1&t&&(c.Ob(0,"p"),c.pc(1,"profile works!"),c.Nb())},styles:[""]}),t})();const f=[{path:"home",component:p,canActivate:[(()=>{class t{constructor(t,e){this.router=t,this.authenticationService=e}canActivate(t,e){return!!this.authenticationService.currentUserValue||(this.router.navigate([""]),!1)}}return t.\u0275fac=function(e){return new(e||t)(c.Sb(o.b),c.Sb(a.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()],children:[{path:"",redirectTo:"./profile",pathMatch:"full"},{path:"./dashboard",component:d},{path:"./profile",component:h}]}];let m=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[o.e.forChild(f)],o.e]}),t})();var v=r("hctd");let w=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[n.b,m,v.a]]}),t})()}}]);