# @mitchreece/eslint-config-base

Native javascript linter configuration options for [eslint](https://eslint.org/). 

## Installation
Install this eslint config by adding the npm package to your projects dev dependencies.

**yarn:**
```zsh
yarn add @mitchreece/eslint-config-base --dev
```

**npm:**
```zsh
npm i @mitchreece/eslint-config-base --save-dev
```
## Usage

To use these rules in your eslint setup just extend the npm package in your eslint config file.

```javascript
{
  "extends": "@mitchreece/eslint-config-base"
}
```

## Environments

There are also more specific config files for both browser and node environments. These env specific config files can be extended in your eslint config file.

**browser:**

```javascript
  "extends": "@mitchreece/eslint-config-base/browser"
```

**node:**
```javascript
  "extends": "@mitchreece/eslint-config-base/node"
```

## Compatibility

**Prettier**

There is a bit of overlap between eslint and prettier rules causing compatibility issues between the two.

Look at the [.eslintrc](https://github.com/mitchreece/front-end-toolkit/blob/feature/eslint-standard-config/.eslintrc) file in the root of this monorepo to see an example of configuring eslint to work with prettier.

## License

This project is licensed under the [MIT](https://github.com/mitchreece/front-end-toolkit/blob/feature/eslint-standard-config/LICENSE) License.
