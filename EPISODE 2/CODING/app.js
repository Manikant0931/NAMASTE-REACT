//why the app.js of episode 1 file is not working?
//Bhai array mein element dala hai toh uska ID (key) de,
//warna React bolega — tu kaun?”

// WHAT IS PARCEL?
// Parcel is a web application bundler, similar to Webpack, but it is designed to be simpler and easier to use. It requires zero configuration to get started, making it a great choice for developers who want to quickly set up a project without dealing with complex configuration files.

// Some key features of Parcel include:
// Zero Configuration: Parcel works out of the box without the need for configuration files.
// Fast Bundling: Parcel uses multiple cores to parallelize the bundling process, resulting in faster build times.
// Hot Module Replacement (HMR): Parcel supports HMR, allowing developers to see changes in real-time without refreshing the browser.
// Automatic Code Splitting: Parcel automatically splits code into smaller bundles for optimized loading.
// Built-in Support for Various File Types: Parcel supports JavaScript, TypeScript, CSS, HTML, images, and more without additional plugins.
// Easy to Use: Parcel has a simple command-line interface that makes it easy to start a new project.
// Extensible: While Parcel works well out of the box, it also allows for customization and extension through plugins if needed.

// Overall, Parcel is a great choice for developers who want a hassle-free bundling experience with minimal setup and configuration.

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child", key: "child-1" },
    [
      React.createElement("h1", { key: "c1-h1" }, "I'm an h1 tag"),
      React.createElement("h2", { key: "c1-h2" }, "I'm an h2 tag"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child-2" },
    [
      React.createElement("h1", { key: "c2-h1" }, "I'm an h1 tag"),
      React.createElement("h2", { key: "c2-h2" }, "I'm an h2 tag"),
    ]
  ),
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);





// explore browser list official website for more info
// https://browsersl.ist/
// explore parcel official website for more info
// https://parceljs.org/
// to run parcel use below command
// npx parcel index.html
// to build parcel use below command
// npx parcel build index.html
// output folder will be dist by default
// to change output folder name use below command
// npx parcel build index.html --dist-dir <folder-name>
// example
// npx parcel build index.html --dist-dir build
// to clean parcel cache use below command
// npx parcel cache clean

// Note: Make sure to add /dist and .parcel-cache in .gitignore file to avoid pushing build files and cache to git repository.
// Also, ensure that "browserslist" field is added in package.json to specify target browsers for compatibility.
// Example:
// "browserslist": [
//   "last 2 versions"
// ]
