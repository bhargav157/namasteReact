import React from "react";
import ReactDOM from "react-dom/client";


//JSX (transpiled before rendering and reecing to JS engine) -- > Parcel --> Babel --> React.createElement --> JS object --> HTML (render)
const jsxheading = (<h1 className = "head"> Hello World </h1>);

// in react
const heading  = React.createElement("h1", {id : "heading"}, "Hello World"); 

//react component -- In react , everything can be a component
// 1. Functional Component - NEW ( JS functions )
// 2. Class Component - OLD  (JS Classes)


//React Functional Component - A normal JS function that returns JSX

const Heading = () => {
  return <h1>Namaste React , Functional Component</h1>;
};

//const HeadingComponenet = () => <h1  className="heading" >Namaste React , Functional Component</h1>;


//component composition  
const Headingcomponent = () => {
 return  <div>
    <Heading /> 
    {Heading()} //this is also a valid way to call a component
   <h2>{ //Any JS code can be written here
    2+2
     } </h2> 
     {jsxheading} /*this element is afterall a normal JS variable */
    <h1>Namaste React</h1>
  </div>
};

// we acn mix and match any elemnt or component inside each other (anything inside anything)
// JSX will sanitisize the code
// No need to worry about hackerr attcks


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent />);