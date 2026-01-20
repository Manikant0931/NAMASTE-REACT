//LAYING THE FOUNDATION: CREATING REACT ELEMENTS AND COMPONENTS
import React from "react";
import ReactDOM from "react-dom/client";

//what is react element?
//It is a simple js object which describes what you want to see on the screen.
//REACT ELEMENT
// const heading = React.createElement(
//   "h1",
//   {id:"heading"},
//   "Namaste React"
// );

// console.log(heading);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//lets convert react element to react component
//REACT COMPONENT
// const heading =(
//     <h1 className="heading" tabIndex="5">
//         Namaste React - Using J
//     </h1>
// );


//What is JSX=>It is a syntactic sugar over React.createElement().
// JSX=>React.createElement=>It is Object=>but after rendering on DOM=>It become HTML element.
//JSX => BABEL => React.createElement => Object => HTML Element


// NAMASTE REACT USING JSX
// const jsxHeading = <h1 id="heading">Namaste React - Using JSX</h1>
// const jsxHeading = <h1 className="head">Namaste React - Using JSX</h1>

// wrapping multiple lines in JSX
// code 1:
// const jsxHeading = (
//     <div>
//         <h1 id="heading">Namaste React - Using JSX</h1>
//         <h2>This is a subheading</h2>
//     </div>
// );
// code 2:
// const jsxHeading = (
//     <div>
//         <h1 className="heading">Namaste React - Using JSX</h1>
//         <h2>This is a subheading</h2>
//     </div>
// );

// NAMASTE REACT USING JSX - FRAGMENTS
// const jsxHeading = (
//     <>
//         <h1 className="heading">Namaste React - Using JSX</h1>
//         <h2>This is a subheading</h2>
//     </>
// );

// NAMASTE REACT USING JSX - INLINE STYLING
// const jsxHeading = (

//     <>
//         <h1 style={{color:"red",backgroundColor:"yellow",fontSize:"50px"}}>Namaste React - Using JSX</h1>
//         <h2 style={{color:"green"}}>This is a subheading</h2>
//     </>
// );


// console.log(jsxHeading);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);








// REACT COMPONENT
// THERE ARE TWO TYPES OF COMPONENTS
// 1.FUNCTIONAL COMPONENT
// 2.CLASS COMPONENT


// NOTE:
// const fn=() => true;

// const fn1=() => {
//     return true;
// }
// here, both fn and fn1 are same.



// 1.FUNCTIONAL COMPONENT=>
  // it is a normal js function which returns JSX.
// i.e.,

// const functionalComponent1 = () => {
//     return <h1 className="heading">Namaste React</h1>;
// };

// const functionalComponent2 = () => <h1 className="heading">Namaste React</h1>;

// const functionalcomponent=() => (
//   <div id="container">
//     <h1 className="heading">Namaste React using functional component. </h1>
//   </div>
// )
// both functionalComponent1 and functionalComponent2 are same.



//THE BELOW CODE IS KNOWN AS COMPOSITION OF COMPONENTS
const Title = () => (
  <h2 className="head" tabIndex="5">
    This is the Title component
    </h2>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
