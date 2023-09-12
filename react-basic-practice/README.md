# React basic practice

## Overview:

- This document provides information about React basic practice.

## Targets:

- Verify knowledge HTML, CSS, JS, React basic
- Using the library user interface

## Information:

### Timeline:

- Estimate time: 11 days (16/08/2023 - 30/08/2023).
- Actual time:

### Technical:

- [HTML5](https://en.wikipedia.org/wiki/HTML5): is a markup language used for structuring and presenting content on the World Wide Web
- [CSS3](https://www.techopedia.com/definition/28243/cascading-style-sheets-level-3-css3): is the iteration of the CSS standard used in the styling and formatting of Web pages
- [ES6](https://www.geeksforgeeks.org/introduction-to-es6/): ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.
- [React Hook](https://reactjs.org/docs/hooks-intro.html): a new addition in React 16.8. They let you use state and other React features without writing a class.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start): is a standard library for routing in React.
- [Vite](https://vitejs.dev/guide): is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html): is a syntactic superset of JavaScript which adds static typing.
- Editor: Visual Studio Code.
- [MockApi](https://github.com/mockapi-io/docs/wiki): is a simple tool that lets you easily mock up APIs, generate custom data, and perform operations on it using RESTful interface.
- [Chakra UI](https://chakra-ui.com/): is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

### Development environment:

- Node: version 18.16.0
- pnpm: version 8.6.3
- Vite: version 4.4.5
- typescript: version 5.0.2
- react: version 18.2.0
- axios: version 1.4.0
- charka: version 2.8.0

### Document:

- [Design](<https://www.figma.com/file/fF9ePXSGuUaCuGvk1QnaEo/Task-Management-Dashboard---Pickolab-Studio-(Community)?type=design&node-id=253-2640&mode=design&t=uIK1kF1Api06CfFQ-0>)
- [Requirement](https://docs.google.com/document/d/1ZnY3tu4PUXVkj2m8Ihb-47Cc8Rv8LnQevPm9YXOy14g/edit)
- [List component](https://docs.google.com/spreadsheets/d/1S84iHZx_dg9psSddLOUEuyoLCSkwyvrmCDzvO54LMXU/edit?usp=sharing)
- [Plan](https://docs.google.com/document/d/17_zVwqyWiFfQ8AEWOmk6vV6f2S-EtTmlC0i9oQ5ab_s/edit?usp=sharing)

### Work flow

![Work flow](https://res.cloudinary.com/de2x8dwvf/image/upload/v1692181488/React/Work_flow_ri1acv.png)

### Convention:

- Branch name format: `<prefix>/short-desc`<br>
  _Ex:_ feat/header
- Commit format: `<type>[optional scope]: <description>`<br>
  _Ex:_ feat(header): add type for header
- Merge request format: `[Project] - Short desc [optional issue id]`<br>
  _Ex:_ [React basic practice] - Add type for show list products #17
- Component's event handling functions: `on<Event name>`<br>
  _Ex:_ onChange, onEvent, onInput

### Main app features:

- Show list task
- Search task by name
- Sort tasks asc/desc by name/time
- Create task
- Update task
- Delete task

## Getting started

### Requirement

- Have node package manager (version 18.16.0)
- Installed pnpm (version 8.6.3)

### 1) Clone repo and checkout branch

- Step 1: Cloning the repo
  - HTTPS:
    ```
    $ git clone https://gitlab.asoft-python.com/minh.nguyenthuy/react-training.git
    ```
  - SSH:
    ```
    $ git clone git@gitlab.asoft-python.com:minh.nguyenthuy/react-training.git
    ```
- Step 2: Go to folder react-training `cd react-training`
- Step 3: Checkout to branch develop `git checkout feat/react-basic-practice`
- Step 4: Go to folder react-basic-practice `cd react-basic-practice`

### 2) Run database
- Step 1: Go to folder react-basic-practice `cd react-basic-practice`
- Step 2: Create file .env
- Step 3: Add line code `VITE_API_BASE_URL="https://64dd7b6e825d19d9bfb12ef3.mockapi.io/" `

### 3) Run application

- Step 1: Install package `pnpm install`
- Step 2: Run project `pnpm run dev`
- Step 3: Open `http://127.0.0.1:5173/` in your browser to see the Web application.
