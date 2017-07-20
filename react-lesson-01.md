# First React App

## Introduction
- We will be creating a React app using create-react-app
- We will be gliding over a good amout of details so we can focus on creating a working app
- create-react-app
  - builds a complete development environment and deployable application which we will modify
  - it provides a better configuration than you are able to achieve on your own
- No semi-colons.
  - Semi-colons are not required in JavaScript and I'm tired of typing them. You should do what ever others you are working with do. Today you are on my team and we will not be using semi-colons unless you really need to.
- JSX - https://facebook.github.io/react/docs/introducing-jsx.html
- JSX file extension. Both .js and .jsx seem to work equally well. Today we will use .jsx

## Give it a try
1. Create the app with create-react-app
    - $ create-react-app first-react

2. Run the app
    - $ cd first-react
    - $ yarn start

## Modify project structure
3. Open project in Editor

4. Create new folders src/components/App

5. Delete files (we will not be using these)
    - App.test.js
    - logo.svg

6. Move App.css, App.js & App.test.js to components/App

7. Rename files
    - App.css = style.css
    - App.js = index.jsx

8. components/app/index.jsx
    - delete lines 9 - 15 so that only <div className="App"> ... </div> remains
    - change line 3 to read: import ./style.css
    - delete line 2 line: import logo from './logo.svg'
    - make the new line 2 read: import './style.css'

9. In src/index.js change 'import App from './App'' to import App from './components/App';

10. Remove all semi colons (3 of them)

11. /src/index.js
    - Change line 4 to read: import App from './components/App'



## Make first component Header
**Note: By convention all react components start with a capital letter**

12. Inside components/App
    - make a folder named Header put in it
      - index.jsx
      - style.jsx
13. Header/index.jsx
14. App/index.js
    - Import and render Header

## Make Person component
- make person
- import in App
- render twice

## Advanced: Make Cars component

- Download: https://drive.google.com/file/d/0Bz9gU5JSsXGAY2plbFBLVG1jSVU/view?usp=sharing
