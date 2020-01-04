# Richnote [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)

![Icon](src/assets/images/richnote_icon.svg) Richnote is a note-taking app with rich editor built with React/Redux.

## Setup

Dependency: Yarn (1.17+)

### For Development

```bash
yarn install
yarn start
```

### For Production Build

```bash
yarn global add pm2
chmod +x server.sh
yarn install
yarn build
pm2 start --name "richnote_react" --interpreter bash server.sh
```

## Design Prototype

Richnote is designed with Adobe XD.

### Videos

Watch a prototype preview video on YouTube at <https://youtu.be/vL9yHQR1ddU>.

### Screenshots

Design for tablet size screen

![iPad](doc/prototype/iPad-2x.png)

[More Details](doc/ux_design/ux_design.md)

## Development

- [Coding Notes](doc/coding_notes.md)
