import app from "flarum/admin/app";
import { extend } from "flarum/admin/extend";
import Button from "flarum/common/components/Button";
import SessionDropdown from "flarum/admin/components/SessionDropdown";

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

    extend(SessionDropdown.prototype, "items", function (items) {
        const href = app.forum.attribute<string | false>("logoutRedirect");

        // False is used to explicitly say the logout button should be hidden without any replacement
        if (href || href === false) {
            items.remove("logOut");
        }

        if (href) {
            items.add(
                "logOutLink",
                Button.component(
                    {
                        icon: "fas fa-sign-out-alt",
                        onclick() {
                            delete_cookie("flarum_session");
                            delete_cookie("eazymock_session", href);
                            delete_cookie("CHECK_LOGIN", href);
                            set_cookie("eazymock_sign_out", "true", href);
                            window.location.replace(window.location.origin);
                        },
                    },
                    "Log Out"
                )
            );
        }
    });
});

function delete_cookie(name, domain = null) {
    if (domain) {
        document.cookie = `${name}=; Path=/; Domain=${domain}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        return;
    }

    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function set_cookie(name, value, domain = null) {
    if (domain) {
        document.cookie = `${name}=${value}; Path=/; Domain=${domain};`;
        return;
    }

    document.cookie = `${name}=${value}; Path=/;`;
}
