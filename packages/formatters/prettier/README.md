# @mitchreece/prettier-config

Configuration options for [prettier](https://github.com/prettier/prettier) code formatter.

| Config Option | Value    | Release |
| ------------- | -------- | ------- |
| tabWidth      | `2`      | v1.0.0  |
| singleQuote   | `true`   | v1.0.0  |
| semi          | `false`  | v1.0.0  |
| arrowParens   | `always` | v1.0.0  |
| trailingComma | `es5`    | v1.0.0  |

## Installation

Install this prettier config by adding the npm packge to your projects dev dependencies.

**yarn:**

```zsh
yarn add @mitchreece/prettier-config --dev
```

**npm:**

```zsh
npm i @mitchreece/prettier-config --save-dev
```

## Usage

The easiest way to start using this config in your project is by referencing it in your `package.json` file:

```json
{
  "prettier": "@mitchreece/prettier-config"
}
```

[See other configuration setup options here.](https://prettier.io/docs/en/configuration.html)

### Extend config

You can also extend/override the config options by creating a `.prettierrc.js` file in your project root:

```javascript
module.exports = {
  ...require('@mitchreece/prettier-config'),
  tabSize: 4,
  semi: true,
}
```

[See a full list of available prettier options here.](https://prettier.io/docs/en/options.html)

## Compatibility

As some of these format options clash with the options available in `.editorconfig`'s - I have provided an editorconfig that is compatible with this prettier config [here](../../../.editorconfig).

## License

This project is licensed under the [MIT](../../../LICENSE) License.
