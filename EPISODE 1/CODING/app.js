// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// The final html will be:-
// <div id="root">
//   <h1>Namaste Everyone</h1>
// </div>

// Manipulate the HTML DOM using React

// Create nested React Elements
const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background:"red",
    },
    className:"title"
  },
  "heading"
);

// React ke dimaag me ye bana:
// <h1 id="title" class="title" style="background:red">
//   heading
// </h1>

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);
// Virtual DOM me:
// <h1 id="title">heading1</h1>

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// React ka tree structure:
// <div id="container">
//   <h1>heading</h1>
//   <h1>heading1</h1>
// </div>

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// HTML me:
// <div id="root"></div>
// passing react element inside root

root.render(container);

//  container → sirf JavaScript object hai

// Jab tak render() nahi call karoge:
//  kuch bhi screen pe nahi dikhega





// PARENT AND CHILD
const parent = React.createElement("div", { id: "parent" }, [
      React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
      ]),
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),
      ]),
    ]);

    console.log(parent); // React Element (object)

    const root1 = ReactDOM.createRoot(document.getElementById("root"));
    root1.render(parent);



//MERGING BOTH EXAMPLES
//    const app = React.createElement(
//   "div",
//   {},
//   [container, parent]
// );

// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(app);
 

// React allows only one render per root. 
// To show multiple UIs, we either use multiple roots -
//  or compose components -
//  into a single render tree.