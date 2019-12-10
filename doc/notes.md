# Notes

## Code Style

### eslint-config-standard-react

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)

- <https://github.com/standard/eslint-config-standard-react>
- <https://github.com/standard/standard>

```bash
yarn add --dev babel-eslint eslint-config-standard eslint-config-standard-react eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

`.eslintrc`

```json
{
  "parser": "babel-eslint",
  "extends": ["standard", "standard-react"]
}
```

Commands:

```bash
# Check all files that are not ignored
npx standard

# Format code
npx standard --fix
```
