(() => {
    var t = {
            n: (e) => {
                var n = e && e.__esModule ? () => e.default : () => e;
                return t.d(n, { a: n }), n;
            },
            d: (e, n) => {
                for (var i in n)
                    t.o(n, i) &&
                        !t.o(e, i) &&
                        Object.defineProperty(e, i, {
                            enumerable: !0,
                            get: n[i],
                        });
            },
            o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
            r: (t) => {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            },
        },
        e = {};
    (() => {
        "use strict";
        t.r(e);
        const n = flarum.core.compat["admin/app"];
        var i = t.n(n);
        i().initializers.add("jwt-cookie-login", function () {
            i()
                .extensionData.for("teq-hungvo-jwt")
                .registerSetting({
                    setting: "jwt-cookie-login.cookieName",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.cookieName"
                    ),
                })
                .registerSetting({
                    setting: "jwt-cookie-login.actorId",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.actorId"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.actorIdHelp"
                    ),
                    placeholder: "1",
                })
                .registerSetting({
                    setting: "jwt-cookie-login.audience",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.audience"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.audienceHelp"
                    ),
                })
                .registerSetting({
                    setting: "jwt-cookie-login.publicKey",
                    type: "textarea",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.publicKey"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.publicKeyHelp"
                    ),
                })
                .registerSetting({
                    setting: "jwt-cookie-login.publicKeyAlgorithm",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.publicKeyAlgorithm"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.publicKeyAlgorithmHelp"
                    ),
                })
                .registerSetting({
                    setting: "jwt-cookie-login.expirationLeeway",
                    type: "number",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.expirationLeeway"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.expirationLeewayHelp"
                    ),
                    placeholder: "0",
                })
                .registerSetting({
                    setting: "jwt-cookie-login.usernameTemplate",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.usernameTemplate"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.usernameTemplateHelp",
                        { sub: "{sub}" }
                    ),
                })
                .registerSetting({
                    setting: "jwt-cookie-login.emailTemplate",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.emailTemplate"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.emailTemplateHelp",
                        { sub: "{sub}" }
                    ),
                })
                .registerSetting({
                    setting: "jwt-cookie-login.registrationHook",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.registrationHook"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.registrationHookHelp",
                        { sub: "{sub}" }
                    ),
                })
                .registerSetting({
                    setting: "jwt-cookie-login.authorizationHeader",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.authorizationHeader"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.authorizationHeaderHelp"
                    ),
                })
                .registerSetting({
                    setting: "jwt-cookie-login.hiddenIframe",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.hiddenIframe"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.hiddenIframeHelp"
                    ),
                })
                .registerSetting({
                    setting: "jwt-cookie-login.autoLoginDelay",
                    type: "number",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.autoLoginDelay"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.autoLoginDelayHelp"
                    ),
                    placeholder: "2000",
                })
                .registerSetting({
                    setting: "jwt-cookie-login.logoutRedirect",
                    type: "text",
                    label: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.logoutRedirect"
                    ),
                    help: i().translator.trans(
                        "teq-hungvo-jwt.admin.settings.logoutRedirectHelp"
                    ),
                });
        });
    })(),
        (module.exports = e);
})();
//# sourceMappingURL=admin.js.map
