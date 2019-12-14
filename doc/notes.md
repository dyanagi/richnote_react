# Notes

## Code Style

### eslint-config-standard-react


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

