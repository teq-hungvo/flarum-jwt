(()=>{var o={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const e=flarum.core.compat["forum/app"];var n=o.n(e);const r=flarum.core.compat["common/extend"],a=flarum.core.compat["common/components/Button"];var i=o.n(a);const s=flarum.core.compat["forum/components/SessionDropdown"];var u=o.n(s);const c=flarum.core.compat["forum/ForumApplication"];var l=o.n(c);function m(o){document.cookie=o+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}n().initializers.add("jwt-cookie-login",(function(){(0,r.extend)(u().prototype,"items",(function(o){var t=n().forum.attribute("logoutRedirect");(t||!1===t)&&o.remove("logOut"),t&&o.add("logOutLink",i().component({icon:"fas fa-sign-out-alt",onclick:function(){m("eazymock_session"),m("flarum_session"),window.location.href=t}},n().translator.trans("core.forum.header.log_out_button")))})),(0,r.extend)(l().prototype,"mount",(function(){var o=n().forum.attribute("jwtIframe");if(o){var t=new Date,e=!1,r=!1,a=new URL(o);window.addEventListener("message",(function(o){if(o.origin===a.origin&&"object"==typeof o.data&&o.data.hasOwnProperty("jwtSessionState"))switch(o.data.jwtSessionState){case"login":if(n().session.user||e)return;if((new Date).getTime()-t.getTime()<n().forum.attribute("autoLoginDelay"))return void window.location.reload();e=!0,s("success","login");break;case"logout":if(!n().session.user||r)return;r=!0,s("error","logout")}function s(o,t){n().alerts.show({type:o,controls:[i().component({className:"Button Button--link",onclick:function(){window.location.reload()}},n().translator.trans("teq-hungvo-jwt.forum.alert.refresh"))]},n().translator.trans("teq-hungvo-jwt.forum.alert."+t))}}),!1);var s=document.createElement("iframe");s.src=o,s.width="0",s.height="0",s.style.position="absolute",s.style.top="-1000px;",s.style.left="-1000px",document.body.appendChild(s)}}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map