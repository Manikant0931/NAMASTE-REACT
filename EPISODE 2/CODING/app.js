//why the app.js of episode 1 file is not working?
//Bhai array mein element dala hai toh uska ID (key) de,
//warna React bolega — tu kaun?”

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
