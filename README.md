# eslint-plugin-import-replace

Change import source

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-import-replace`:

```sh
npm install eslint-plugin-import-replace --save-dev
```

## Usage

Add `import-replace` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "import-replace"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "import-replace/import-replace": ["error", [
            {
                "from": "lodash",
                "to": "lodash-es"
            }
        ]]
    }
}
```

then run eslint on your project.

if your code is

```js
import { get } from 'lodash';
```

then it will be autofixed to

```js
import { get } from 'lodash-es';
```

## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                           | 🔧 |
| :--------------------------------------------- | :- |
| [import-replace](docs/rules/import-replace.md) | 🔧 |

<!-- end auto-generated rules list -->


