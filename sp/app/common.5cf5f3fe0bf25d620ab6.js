(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/P1U":function(l,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var t=e("CcnG"),u=e("Ip0R"),i=(e("rRoi"),e("4GxJ"),e("GkvS"),e("Vn7d"),e("ZYjt"),t["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function c(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","checkbox-card"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"input",[["type","checkbox"]],[[8,"id",0],[8,"value",0],[8,"name",0]],[[null,"change"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==l.component.updateSelectedIds(l.context.$implicit.id)&&t),t},null,null)),(l()(),t["\u0275eld"](2,0,null,null,0,"label",[],[[8,"htmlFor",0],[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,1,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""),t["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""),t["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,"")),l(n,2,0,t["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""),e.cacheHtml(n.context.$implicit))})}function r(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Interested in other valuable services we offer?"])),(l()(),t["\u0275eld"](3,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.context.close("cancel")&&t),t},null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"i",[["aria-hidden","true"],["class","material-icons icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["close"])),(l()(),t["\u0275eld"](6,0,null,null,7,"div",[["class","modal-body"]],null,[[null,"keyup.escape"]],function(l,n,e){var t=!0;return"keyup.escape"===n&&(t=!1!==l.context.dismiss()&&t),t},null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Select one or multiple options below you wish to learn more about."])),(l()(),t["\u0275eld"](9,0,null,null,2,"div",[["class","checkbox-card-group"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](11,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["One of our customer success agents will contact you with more information on your selections."])),(l()(),t["\u0275eld"](14,0,null,null,4,"div",[["class","modal-footer d-flex"]],null,null,null,null,null)),(l()(),t["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-light"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.context.close("not-interested")&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["I'm not interested"])),(l()(),t["\u0275eld"](17,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.context.close("send-me")&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["We'll contact you"]))],function(l,n){l(n,11,0,n.component.ancillaryVm)},null)}function o(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{ancillaryModal:0}),(l()(),t["\u0275and"](0,[[1,2],["ancillaryModal",2]],null,0,null,r))],null,null)}},JRiv:function(l,n,e){"use strict";e.d(n,"a",function(){return b});var t=e("ey9i"),u=e("vJhN"),i=e("dzgT"),c=e("F/XL"),r=e("67Y/"),o=e("Phjn"),a=e("klSw"),s=e("CcnG"),d=e("ognR"),p=e("wsHA"),f=e("gkpW"),m=e("YFxi"),h=e("WNQf"),v=e("ZYCi"),y=e("GkvS"),g=e("4+Yl"),b=function(){function l(l,n,e,t,u,c,o,a){this.documentService=l,this.documentPackageService=n,this.envelopeSignerService=e,this.esignService=t,this.companyService=u,this.router=c,this.sessionService=o,this.hhFilersService=a,this.isAdmin$=o.isAdmin$,this.hhFilers$=Object(i.b)(o.currentCompany$,a.entities$).pipe(Object(r.a)(function(l){var n=l[1];return l[0].isHousehold?n.length&&n[0]:null})),this.initializeVm$()}return l.prototype.initializeVm$=function(){var l=this;this.vms$=Object(i.b)(this.documentPackageService.documentPackage$,this.sessionService.currentUser$,this.sessionService.currentCompany$,this.hhFilers$).pipe(Object(r.a)(function(l){var n=l[0],e=l[1],t=l[2],i=l[3],c=n.Document,r=n.Envelope,o=n.EnvelopeSigner,a=r.filter(function(l){return l&&l.status!==u.v.voided}),s=a.length<r.length,d=a.map(function(l){var n=c.filter(function(n){return n.envelopeId===l.id}),r=o.filter(function(n){return n.envelopeId===l.id&&!n.isRemoved}),a=r.find(function(l){return l.userId===e.id}),d=r.find(function(l){return!0}),p=i?r.find(function(l){return l.firstName===i.primaryFirstName&&l.lastName===i.primaryLastName}):d,f=i&&r.find(function(l){return l.firstName===i.spouseFirstName&&l.lastName===i.spouseLastName}),m=a?"viewer"===a.role?"no":"signer"===a.role&&!0===a.isEmbedded?"yes":"":"";"yes"===m&&null!=i&&(m=a.firstName===i.spouseFirstName&&a.lastName===i.spouseLastName?"spouse":"primary");var h=l.status===u.v.completed;return{docs:n,envelope:l,signers:r,user:e,isSigner:m,isSigningComplete:h,isSignedByUser:a&&a.status===u.v.completed,isSent:h||l.status===u.v.sent,isResign:s&&!h,signerEmail:p?p.email:"",signerFirstName:p?p.firstName:"",signerLastName:p?p.lastName:"",signerTitle:d?d.title:"",spouseEmail:f?f.email:"",spouseFirstName:f?f.firstName:"",spouseLastName:f?f.lastName:"",companyStatus:t?t.status:""}});return d.sort(function(l,n){return l.envelope.isWetSign?1:-1}),d}),Object(o.a)(function(n){return l.navigateIfSigningComplete(n)}),Object(a.a)(1))},l.prototype.getDocPdf=function(l){return this.documentService.getDocPdf(l.id)},l.prototype.getEsignEnvelopeUrl=function(l){return this.esignService.getEnvelopeUrl(l)},l.prototype.navigateIfSigningComplete=function(l){if(l.length>0&&l.every(function(l){return l.isSigningComplete||l.envelope.isWetSign})){var n=l[0].companyStatus;if(n===u.a.AutoMigrate||n===u.a.Operations||n===u.a.Migrating)return this.router.navigate([t.c.Processing]),Object(c.a)(null);if(n!==u.a.Docs)return Object(c.a)(null);this.companyService.getByKey(l[0].envelope.companyId)}return Object(c.a)(l)},l.prototype.loadDocumentPackage=function(){return this.documentPackageService.loadDocumentPackage()},l.prototype.save=function(l){return this.envelopeSignerService.upsert(l)},l.prototype.sendEnvelope=function(l,n){return this.esignService.postEnvelope(l,n)},l.prototype.gotoDashboard=function(){var l=this;this.sessionService.setAccountStatus(u.a.Open).subscribe(function(n){return l.router.navigate([t.c.Dashboard])})},l.ngInjectableDef=s.defineInjectable({factory:function(){return new l(s.inject(d.a),s.inject(p.a),s.inject(f.a),s.inject(m.a),s.inject(h.a),s.inject(v.l),s.inject(y.a),s.inject(g.a))},token:l,providedIn:"root"}),l}()},MUNJ:function(l,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r});var t=e("CcnG"),u=e("Ip0R"),i=(e("JqXw"),e("YFxi"),e("upEX"),e("OsF4"),t["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function c(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"button",[["class","btn btn-secondary btn-icon-combo mt-3"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.viewDocs(u.envelopeId)&&t),t},null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["View Signed Documents "])),(l()(),t["\u0275eld"](3,0,null,null,1,"i",[["class","material-icons icon d-inline"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["chevron_right"]))],null,null)}function r(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](1,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,!!n.component.envelopeId)},null)}},Tnpa:function(l,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a});var t=e("CcnG"),u=e("Ip0R"),i=(e("6xyM"),e("ZYjt"),t["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function c(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"span",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","see-more-action"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.seeMore()&&t),t},null,null)),(l()(),t["\u0275ted"](3,null,["",""]))],null,function(l,n){var e=n.component;l(n,1,0,e.summaryHtml),l(n,3,0,e.seeMoreLabel)})}function r(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","see-more-action"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.seeLess()&&t),t},null,null)),(l()(),t["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.seeLessLabel)})}function o(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"span",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,r)),t["\u0275did"](3,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](0,null,null,0))],function(l,n){l(n,3,0,n.component.showSeeMore)},function(l,n){l(n,1,0,n.component.descriptionHtml)})}function a(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","read-more"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](2,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,o)),t["\u0275did"](4,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.showSummary),l(n,4,0,e.showAll)},null)}},Vn7d:function(l,n,e){"use strict";e.d(n,"a",function(){return m});var t=e("t/Na"),u=e("vJhN"),i=e("a+Vh"),c=e("P6uZ"),r=e("Phjn"),o=e("67Y/"),a=e("AytR"),s=e("CcnG"),d=e("/4ef"),p=e("eXtt"),f=e("Nvq7"),m=function(){function l(l,n,e,t){this.idGeneratorService=l,this.companyAncillaryService=n,this.ancillaryService=e,this.http=t,this.loadedAncillaryData=!1,this.companyAncillaryVm$=this.companyAncillaryService.entities$}return l.prototype.getAncillaryData=function(){var l=this;return this.ancillaryService.loaded$.pipe(Object(c.a)(),Object(r.a)(function(n){return l.loadedAncillaryData=n,!0===l.loadedAncillaryData?l.ancillaryService.entities$.pipe(Object(o.a)(function(n){return l.updateAncillaryWithHtml(n)})):l.ancillaryService.load().pipe(Object(o.a)(function(n){return l.updateAncillaryWithHtml(n)}))}))},l.prototype.updateAncillaryWithHtml=function(l){for(var n=function(l){e.http.get("/assets/ancillary/"+l.content,{headers:new t.j({Accept:"text/html"}),responseType:"text"}).subscribe(function(n){l.htmlVal=n})},e=this,u=0,i=l;u<i.length;u++)n(i[u]);return l},l.prototype.saveCompanyAncillary=function(l,n){var e=a.a.apiRoot+"/save/companyancillary";if(l.length>0){for(var t=[],c=0,r=l;c<r.length;c++){var s=r[c],d=new u.e;d.id=this.idGeneratorService.generateId(),d.companyId=n,d.ancillaryId=s,t.push(i.d.add("CompanyAncillary",d))}this.companyAncillaryService.saveEntities({changes:t},e).pipe(Object(o.a)(function(l){}))}},l.ngInjectableDef=s.defineInjectable({factory:function(){return new l(s.inject(d.a),s.inject(p.a),s.inject(f.a),s.inject(t.c))},token:l,providedIn:"root"}),l}()},ZHrR:function(l,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var t=e("CcnG"),u=e("Ip0R"),i=(e("hvi7"),t["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function c(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["class","icon"],["height","40px;"],["width","40px;"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.icon)})}function r(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),t["\u0275ncd"](null,0)],null,null)}function o(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,12,"div",[["class","accordion"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,9,"div",[["class","accordion-group-header-container"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggle()&&t),t},null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](3,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](4,0,null,null,6,"div",[["class","d-flex justify-content-between w-100"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"span",[["class","accordion-group-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,["",""])),(l()(),t["\u0275eld"](7,0,null,null,3,"i",[],null,null,null,null,null)),t["\u0275did"](8,278528,null,0,u.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](9,{collapsed:0,"toggle-base":1,"material-icons":2}),(l()(),t["\u0275ted"](-1,null,["expand_more"])),(l()(),t["\u0275and"](16777216,null,null,1,null,r)),t["\u0275did"](12,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,e.icon),l(n,8,0,l(n,9,0,!e.expanded,!0,!0)),l(n,12,0,e.expanded)},function(l,n){l(n,6,0,n.component.title)})}},hrGE:function(l,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return p});var t=e("CcnG"),u=e("mEqS"),i=e("wFZl"),c=e("Ip0R"),r=(e("mu4q"),e("JRiv"),t["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function o(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["E-Sign Documents"])),(l()(),t["\u0275eld"](3,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["The documents below will be signed using electronic signature in DocuSign."]))],null,null)}function a(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Wet Signature Documents"])),(l()(),t["\u0275eld"](3,0,null,null,4,"em",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["The documents below cannot be signed using electronic signature. You must download the documents, sign them, and return them to SurePayroll. Please "])),(l()(),t["\u0275eld"](5,0,null,null,1,"sp-contact-support",[],null,null,null,u.b,u.a)),t["\u0275did"](6,49152,null,0,i.a,[],null,null),(l()(),t["\u0275ted"](-1,null,[" for assistance."]))],null,null)}function s(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""])),(l()(),t["\u0275eld"](3,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,2,"a",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.download(l.context.$implicit)&&t),t},null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"i",[["class","material-icons icon d-inline btn-circle"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["save_alt"]))],null,function(l,n){l(n,2,0,n.context.$implicit.title)})}function d(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,o)),t["\u0275did"](3,16384,null,0,c.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,a)),t["\u0275did"](5,16384,null,0,c.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](6,0,null,null,0,"hr",[["class","my-1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,4,"div",[["class","mx-4"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,3,"table",[["class","table interactive-table no-header"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,s)),t["\u0275did"](11,278528,null,0,c.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](12,0,[[1,0],["downloadLink",1]],null,0,"a",[["style","display: none"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,3,0,e.isEsign),l(n,5,0,!e.isEsign),l(n,11,0,e.docs)},null)}function p(l){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{downloadLink:0}),(l()(),t["\u0275and"](16777216,null,null,1,null,d)),t["\u0275did"](2,16384,null,0,c.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.docs&&e.docs.length)},null)}},jvbL:function(l,n,e){"use strict";e.d(n,"a",function(){return i});var t=e("mrSG"),u=e("FFOo");function i(l){return function(n){return n.lift(new c(l))}}var c=function(){function l(l){this.predicate=l}return l.prototype.call=function(l,n){return n.subscribe(new r(l,this.predicate))},l}(),r=function(l){function n(n,e){var t=l.call(this,n)||this;return t.predicate=e,t.index=0,t}return t.__extends(n,l),n.prototype._next=function(l){var n,e=this.destination;try{n=this.predicate(l,this.index++)}catch(l){return void e.error(l)}this.nextOrComplete(l,n)},n.prototype.nextOrComplete=function(l,n){var e=this.destination;Boolean(n)?e.next(l):e.complete()},n}(u.a)},rRoi:function(l,n,e){"use strict";e.d(n,"a",function(){return i});var t=e("P6uZ"),u=e("Phjn"),i=function(){function l(l,n,e,t){this.modalService=l,this.sessionService=n,this.ancillaryHelperService=e,this.sanitizer=t,this.ancillaryIdListSelected=[],this.states={},this.htmlCache={}}return l.prototype.ngOnInit=function(){var l=this;this.ancillaryViewModel$=this.ancillaryHelperService.companyAncillaryVm$.pipe(Object(t.a)(),Object(u.a)(function(n){if(l.companyAncillaryVm=n,void 0===l.companyAncillaryVm||0===l.companyAncillaryVm.length)return l.ancillaryHelperService.getAncillaryData()})),this.ancillaryViewModel$.pipe(Object(t.a)()).subscribe(function(n){l.ancillaryVm=n}),this.sessionService.currentCompanyId$.pipe(Object(t.a)()).subscribe(function(n){l.companyId=n})},l.prototype.openModalDialog=function(){var l=this;this.modalRef=this.modalService.open(this.ancillaryModal,{backdrop:"static"}),this.modalRef.result.then(function(n){l.close(n)})},l.prototype.close=function(l){"send-me"===l&&this.save()},l.prototype.cacheHtml=function(l){if(!this.htmlCache[l.id]){var n=this.getSafeHtml(l);n.changingThisBreaksApplicationSecurity&&(this.htmlCache[l.id]=n)}return this.htmlCache[l.id]},l.prototype.getSafeHtml=function(l){return this.sanitizer.bypassSecurityTrustHtml(l.htmlVal)},l.prototype.save=function(){this.ancillaryHelperService.saveCompanyAncillary(this.ancillaryIdListSelected,this.companyId)},l.prototype.checkAncillaryResponse=function(){void 0!==this.companyAncillaryVm&&0!==this.companyAncillaryVm.length||this.openModalDialog()},l.prototype.updateSelectedIds=function(l){if("checked"===this.states[l]){this.states[l]="unchecked";var n=this.ancillaryIdListSelected.indexOf(l);-1!==n&&this.ancillaryIdListSelected.splice(n,1)}else this.states[l]="checked",this.ancillaryIdListSelected.push(l)},l.prototype.closeModal=function(){this.modalRef.close("ok")},l}()},yK6c:function(l,n,e){"use strict";e.d(n,"a",function(){return t});var t=function(){}}}]);
//# sourceMappingURL=common.5cf5f3fe0bf25d620ab6.js.map