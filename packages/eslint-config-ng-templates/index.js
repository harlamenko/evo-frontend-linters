module.exports = {
    overrides: [
        {
            "files": ["*.component.html", "*.template.html"],
            "extends": ["plugin:@angular-eslint/template/recommended"],
            "rules": {
                /**
                 * Any template/HTML related rules you wish to use/reconfigure over and above the
                 * recommended set provided by the @angular-eslint project would go here.
                 */
            }
        }
    ]
}
