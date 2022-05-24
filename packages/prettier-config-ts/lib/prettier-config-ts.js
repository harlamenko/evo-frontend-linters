"use strict";

module.exports = prettierConfigTs;

const prettierConfigTs = {
    $schema: "https://json.schemastore.org/prettierrc",
    files: ["*.ts"],
    parser: "typescript",
    htmlWhitespaceSensitivity: "ignore",
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: "all",
    bracketSpacing: false,
    arrowParens: "always",
    bracketSameLine: false,
    proseWrap: "preserve",
    plugins: [
        // https://github.com/prettier/prettier-vscode/issues/2259#issuecomment-952950119
        require.resolve("prettier-plugin-organize-attributes"),
        require.resolve("@prettier/plugin-xml"),
    ],
    attributeGroups: [
        // prettier-plugin-organize-attribute
        "$ANGULAR_STRUCTURAL_DIRECTIVE",
        "$ANGULAR_ELEMENT_REF",
        "$ID",
        "$DEFAULT",
        "$CLASS",
        "$ANGULAR_ANIMATION",
        "$ANGULAR_ANIMATION_INPUT",
        "$ANGULAR_INPUT",
        "$ANGULAR_TWO_WAY_BINDING",
        "$ANGULAR_OUTPUT",
    ],
};