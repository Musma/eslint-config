![Musma Logo](https://camo.githubusercontent.com/95474277564b8bd24a17863e5394ff7dc8892138/68747470733a2f2f7777772e6d75736d612e6e65742f66696c65732f6174746163682f696d616765732f3135372f31333132332e706e67)

# @musma/eslint-config

> Musma's ESLint config with TypeScript support

Note: this config works for both JS and TS files.

## Installation

Within `.npmrc` file in your project:

```
@musma:registry=https://npm.pkg.github.com/
```

And then,

```
$ npm install @musma/eslint-config --save-dev

or

$ yarn add @musma/eslint-config --dev --update-checksums
```

## Configuration

Within your `.eslintrc` file:

```json
{
  "extends": ["@musma"]
}
```

If you use react,

```json
{
  "env": {
    "browser": true
  },
  "extends": ["@musma"],
  "ecmaFeatures": {
    "jsx": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## License

Open source [licensed as MIT](./LICENSE).
