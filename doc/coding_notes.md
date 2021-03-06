# Coding Notes

## Code Style

### eslint-config-standard-react (JavaScript Standard Style)

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

### Prettier Standard

```bash
# Run on all files and check with ESLint
prettier-standard --lint
```

Reformat on each file on save in IntelliJ-based IDEs: Add a File Watcher plugin, add Prettier in File Watcher, set `$ProjectFileDir$/node_modules/.bin/prettier-standard` in the Program field.

## File extension

Use `.js` extension (Not `.jsx)

## Draft.js

- <https://draftjs.org/>
- <https://www.youtube.com/watch?v=0k9suXgCtTA>

## Bulma CSS Framework

- [How to Install Bulma](https://medium.com/@thexap/how-to-setup-bulma-css-framework-with-react-under-5-minutes-a3d8c2c33a87)
- [Bulma Variables](https://bulma.io/documentation/customize/variables/)

## Modular CSS with React

<https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e>

## CSS for Slide/Swipe animation

<https://css-tricks.com/simple-swipe-with-vanilla-javascript/>

## Multiline Eclipse

<https://css-tricks.com/line-clampin/>

I'm using the WebKit Way

```css
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

## CSS for Slide/Swipe animation

<https://css-tricks.com/simple-swipe-with-vanilla-javascript/>

## Testing on mobile phones

1. Install Android Studio
2. Launch a emulator
3. To access the host's local server, go to <http://10.0.2.2:3000> in the Android emulator

## Full-screen height for mobile phones

<https://css-tricks.com/the-trick-to-viewport-units-on-mobile/>

In this project, this CSS/JavaScript trick is used to place an object at the bottom. (Without it, objects at the bottom will be overflow for the height of the top status bar)

## Generating favicon/icon files from SVG

See [Favicon Generation](favicon_generation/favicon_generation.md)

## React.js

[Default README](default_readme.md)
