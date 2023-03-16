"use strict";(self.webpackChunketixpay_app=self.webpackChunketixpay_app||[]).push([[569],{2569:(z,x,d)=>{d.r(x),d.d(x,{CheckCodeModule:()=>y});var l=d(6895),u=d(7163),v=(()=>{return(e=v||(v={})).Email="email",e.Phone="phone",v;var e})(),t=d(4650);function A(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"span",2),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("innerHTML",n.i.text,t.oJD)}}function M(e,o){1&e&&t.GkF(0)}const q=function(e){return{$implicit:e}};var c=(()=>{return(e=c||(c={}))[e.ing=0]="ing",e[e.pause=1]="pause",e[e.stop=2]="stop",e[e.done=3]="done",c;var e})();let _=(()=>{class e{constructor(n){this.ngZone=n,this.fns=[],this.commands=[],this.nextTime=0,this.ing=!1}start(){!0!==this.ing&&(this.ing=!0,this.nextTime=+new Date,this.ngZone.runOutsideAngular(()=>{this.process()}))}process(){for(;this.commands.length;)this.commands.shift()();let n=+new Date-this.nextTime;const i=1+Math.floor(n/100);n=100-n%100,this.nextTime+=100*i;for(let s=0,f=this.fns.length;s<f;s+=2){let a=this.fns[s+1];if(0===a)this.fns[s](i);else{a+=2*i-1;const r=Math.floor(a/20);r>0&&this.fns[s](r),this.fns[s+1]=a%20+1}}!this.ing||setTimeout(()=>this.process(),n)}add(n,i){return this.commands.push(()=>{this.fns.push(n),this.fns.push(1e3===i?1:0),this.ing=!0}),this}remove(n){return this.commands.push(()=>{const i=this.fns.indexOf(n);-1!==i&&this.fns.splice(i,2),this.ing=this.fns.length>0}),this}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(t.R0b))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),Z=(()=>{class e{constructor(n){this.locale=n,this.demand=!1,this.leftTime=0,this.format="HH:mm:ss",this.timezone="+0000",this.formatDate=({date:i,formatStr:s,timezone:f})=>(0,l.p6)(new Date(i),s,this.locale,f||this.timezone||"+0000")}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(t.soG))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),w=(()=>{class e{constructor(n,i,s,f,a){this.locale=n,this.timer=i,this.defCog=s,this.cdr=f,this.ngZone=a,this.frequency=1e3,this._notify={},this.status=c.ing,this.isDestroy=!1,this.i={},this.left=0,this.event=new t.vpe}set config(n){null!=n.notify&&!Array.isArray(n.notify)&&n.notify>0&&(n.notify=[n.notify]),this._config=n}get config(){return this._config}begin(){this.status=c.ing,this.callEvent("start")}restart(){this.status!==c.stop&&this.destroy(),this.init(),this.callEvent("restart")}stop(){this.status!==c.stop&&(this.status=c.stop,this.destroy(),this.callEvent("stop"))}pause(){this.status===c.stop||this.status===c.pause||(this.status=c.pause,this.callEvent("pause"))}resume(){this.status===c.stop||this.status!==c.pause||(this.status=c.ing,this.callEvent("resume"))}callEvent(n){this.event.emit({action:n,left:this.left,status:this.status,text:this.i.text})}init(){const{locale:n,defCog:i}=this,s=this.config={...new Z(n),...i,...this.config},f=this.frequency=~s.format.indexOf("S")?100:1e3;this.status=s.demand?c.pause:c.ing,this.getLeft();const a=this.reflow;this.reflow=(r=0,F=!1)=>a.apply(this,[r,F]),Array.isArray(s.notify)&&s.notify.forEach(r=>{if(r<1)throw new Error("The notify config must be a positive integer.");r*=1e3,this._notify[r-=r%f]=!0}),this.timer.add(this.reflow,f).start(),this.reflow(0,!0)}destroy(){return this.timer.remove(this.reflow),this}reflow(n=0,i=!1){if(this.isDestroy)return;const{status:s,config:f,_notify:a}=this;if(!i&&s!==c.ing)return;let r=this.left=this.left-this.frequency*n;r<1&&(r=0),this.i={value:r,text:f.formatDate({date:r,formatStr:f.format,timezone:f.timezone})},"function"==typeof f.prettyText&&(this.i.text=f.prettyText(this.i.text)),this.cdr.detectChanges(),(0===f.notify||a[r])&&this.ngZone.run(()=>{this.callEvent("notify")}),0===r&&this.ngZone.run(()=>{this.status=c.done,this.destroy(),this.callEvent("done")})}getLeft(){const{config:n,frequency:i}=this;let s=1e3*n.leftTime;const f=n.stopTime;!s&&f&&(s=f-(new Date).getTime()),this.left=s-s%i}ngOnInit(){this.init(),this.config.demand||this.begin()}ngOnDestroy(){this.isDestroy=!0,this.destroy()}ngOnChanges(n){n.config.firstChange||this.restart()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.soG),t.Y36(_),t.Y36(Z),t.Y36(t.sBO),t.Y36(t.R0b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["countdown"]],hostVars:2,hostBindings:function(n,i){2&n&&t.ekj("count-down",!0)},inputs:{config:"config",render:"render"},outputs:{event:"event"},standalone:!0,features:[t._Bn([_]),t.TTD,t.jDz],decls:2,vars:5,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"innerHTML"]],template:function(n,i){1&n&&(t.YNc(0,A,2,1,"ng-container",0),t.YNc(1,M,1,0,"ng-container",1)),2&n&&(t.Q6J("ngIf",!i.render),t.xp6(1),t.Q6J("ngTemplateOutlet",i.render)("ngTemplateOutletContext",t.VKq(3,q,i.i)))},dependencies:[l.ez,l.O5,l.tP],encapsulation:2,changeDetection:0}),e})(),b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[w]}),e})();var T=d(4463);function D(e,o){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"verifyCode.email")))}function O(e,o){1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"verifyCode.phone")))}function k(e,o){1&e&&(t.TgZ(0,"p",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"verifyCode.infoEmail")," "))}function U(e,o){1&e&&(t.TgZ(0,"p",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"verifyCode.infoPhone")," "))}const L=function(){return{leftTime:180,format:"mm:ss"}};class h{constructor(o){this.router=o,this.verifyType={}}ngOnInit(){console.log(this.verifyType)}onTimerFinished(o){"done"===o.action&&console.log("termino",o)}goTo(){"email"===this.verifyType&&this.router.navigate(["/sign-up/set-personal-info"]),"phone"===this.verifyType&&this.router.navigate(["/sign-up/set-credentials"])}}h.\u0275fac=function(o){return new(o||h)(t.Y36(u.F0))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-verify-code"]],inputs:{verifyType:"verifyType"},decls:41,vars:24,consts:[[1,"container-fluid","h-100","theme-light-radial-gradient"],[1,"row","h-100"],[1,"col-12"],[1,"col-11","col-sm-11","col-md-6","col-lg-5","col-xl-3","mx-auto","align-self-center","py-4"],[1,"text-center","mb-3"],[1,"text-secondary","fw-light"],[4,"ngIf"],["class","text-center text-secondary mb-4",4,"ngIf"],[1,"form-group","form-floating","mb-3"],["type","text","placeholder","Inserisci il codice di verifica qui",1,"form-control"],["for","OTP",1,"form-control-label"],[1,"text-success","fw-bold"],[1,"col-11","col-sm-11","mt-auto","mx-auto","pb-4"],[1,"row"],[1,"col-auto","text-center","mx-auto"],[1,"progressstimer"],["src","assets/img/progress.png","alt",""],["id","timer",1,"timer"],[3,"config","event"],[1,"mb-3"],[1,"text-muted"],[1,"text-default","fw-bold"],[1,"col-12","d-grid"],[1,"btn","btn-outline-default","btn-lg","shadow-sm","btn-rounded","text-normalcase",3,"click"],[1,"text-center","text-secondary","mb-4"]],template:function(o,n){1&o&&(t.TgZ(0,"main",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3)(4,"h1",4)(5,"span",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"br"),t.YNc(9,D,3,3,"span",6),t.YNc(10,O,3,3,"span",6),t.qZA(),t.YNc(11,k,3,3,"p",7),t.YNc(12,U,3,3,"p",7),t.TgZ(13,"div",8),t._UZ(14,"input",9),t.TgZ(15,"label",10),t._uU(16),t.ALo(17,"translate"),t.qZA()(),t.TgZ(18,"p",11),t._uU(19),t.ALo(20,"translate"),t.qZA()(),t.TgZ(21,"div",12)(22,"div",13)(23,"div",14)(24,"span",15),t._UZ(25,"img",16),t.TgZ(26,"span",17)(27,"countdown",18),t.NdJ("event",function(s){return n.onTimerFinished(s)}),t.qZA()()(),t._UZ(28,"br"),t.TgZ(29,"p",19)(30,"span",20),t._uU(31),t.ALo(32,"translate"),t.qZA(),t._UZ(33,"br"),t.TgZ(34,"a",21),t._uU(35),t.ALo(36,"translate"),t.qZA()()(),t.TgZ(37,"div",22)(38,"a",23),t.NdJ("click",function(){return n.goTo()}),t._uU(39),t.ALo(40,"translate"),t.qZA()()()()()()),2&o&&(t.xp6(6),t.Oqu(t.lcZ(7,11,"verifyCode.check")),t.xp6(3),t.Q6J("ngIf","email"===n.verifyType),t.xp6(1),t.Q6J("ngIf","phone"===n.verifyType),t.xp6(1),t.Q6J("ngIf","email"===n.verifyType),t.xp6(1),t.Q6J("ngIf","phone"===n.verifyType),t.xp6(4),t.Oqu(t.lcZ(17,13,"verifyCode.code")),t.xp6(3),t.hij(" ",t.lcZ(20,15,"verifyCode.codeSend")," "),t.xp6(8),t.Q6J("config",t.DdM(23,L)),t.xp6(4),t.Oqu(t.lcZ(32,17,"verifyCode.getTheEmail")),t.xp6(4),t.Oqu(t.lcZ(36,19,"verifyCode.clickReceive")),t.xp6(4),t.Oqu(t.lcZ(40,21,"verifyCode.check")))},dependencies:[l.O5,w,T.X$]});class C{constructor(o){this.route=o,this.verifyType={}}ngOnInit(){this.route.params.forEach(o=>{"email"===o.type&&(this.verifyType=v.Email),"phone"===o.type&&(this.verifyType=v.Phone)})}}C.\u0275fac=function(o){return new(o||C)(t.Y36(u.gz))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-check-code"]],decls:13,vars:4,consts:[[1,"header","position-fixed","bg-theme-round-opac","text-white"],["HeaderEl",""],[1,"row"],[1,"col"],[1,"logo-small"],["src","assets/img/logo.svg","alt","",1,"rounded-circle"],[1,"col-auto"],["routerLink","/login","target","_self",1,"text-white"],[3,"verifyType"]],template:function(o,n){1&o&&(t.TgZ(0,"header",0,1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.TgZ(6,"h5"),t._uU(7,"EtixPay"),t.qZA()()(),t.TgZ(8,"div",6)(9,"a",7),t._uU(10),t.ALo(11,"translate"),t.qZA()()()(),t._UZ(12,"app-verify-code",8)),2&o&&(t.xp6(10),t.hij(" ",t.lcZ(11,2,"signIn.checkCode.signIn")," "),t.xp6(2),t.Q6J("verifyType",n.verifyType))},dependencies:[u.rH,h,T.X$]});const E=[{path:"",component:C}];class p{}p.\u0275fac=function(o){return new(o||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[u.Bz.forChild(E),u.Bz]});const J=[{path:"",component:h}];class m{}m.\u0275fac=function(o){return new(o||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[u.Bz.forChild(J),u.Bz]});class g{}g.\u0275fac=function(o){return new(o||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[l.ez,m,T.aw,b]});class y{}y.\u0275fac=function(o){return new(o||y)},y.\u0275mod=t.oAB({type:y}),y.\u0275inj=t.cJS({imports:[l.ez,p,g,T.aw]})}}]);