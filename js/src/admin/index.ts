import app from "flarum/admin/app";

app.initializers.add("jwt-cookie-login", () => {
    app.extensionData
        .for("teq-hungvo-jwt")
        .registerSetting({
            setting: "jwt-cookie-login.cookieName",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.cookieName"
            ),
        })
        .registerSetting({
            setting: "jwt-cookie-login.actorId",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.actorId"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.actorIdHelp"
            ),
            placeholder: "1",
        })
        .registerSetting({
            setting: "jwt-cookie-login.audience",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.audience"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.audienceHelp"
            ),
        })
        .registerSetting({
            setting: "jwt-cookie-login.publicKey",
            type: "textarea",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.publicKey"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.publicKeyHelp"
            ),
        })
        .registerSetting({
            setting: "jwt-cookie-login.publicKeyAlgorithm",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.publicKeyAlgorithm"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.publicKeyAlgorithmHelp"
            ),
        })
        .registerSetting({
            setting: "jwt-cookie-login.expirationLeeway",
            type: "number",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.expirationLeeway"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.expirationLeewayHelp"
            ),
            placeholder: "0",
        })
        .registerSetting({
            setting: "jwt-cookie-login.usernameTemplate",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.usernameTemplate"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.usernameTemplateHelp",
                {
                    sub: "{sub}",
                }
            ),
        })
        .registerSetting({
            setting: "jwt-cookie-login.emailTemplate",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.emailTemplate"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.emailTemplateHelp",
                {
                    sub: "{sub}",
                }
            ),
        })
        .registerSetting({
            setting: "jwt-cookie-login.registrationHook",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.registrationHook"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.registrationHookHelp",
                {
                    sub: "{sub}",
                }
            ),
        })
        .registerSetting({
            setting: "jwt-cookie-login.authorizationHeader",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.authorizationHeader"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.authorizationHeaderHelp"
            ),
        })
        .registerSetting({
            setting: "jwt-cookie-login.hiddenIframe",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.hiddenIframe"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.hiddenIframeHelp"
            ),
        })
        .registerSetting({
            setting: "jwt-cookie-login.autoLoginDelay",
            type: "number",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.autoLoginDelay"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.autoLoginDelayHelp"
            ),
            placeholder: "2000",
        })
        .registerSetting({
            setting: "jwt-cookie-login.logoutRedirect",
            type: "text",
            label: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.logoutRedirect"
            ),
            help: app.translator.trans(
                "teq-hungvo-jwt.admin.settings.logoutRedirectHelp"
            ),
        });
});
