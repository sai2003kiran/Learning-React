import React from "react";
import ReactDOM from "react-dom/client";

//react to create element 
const element = React.createElement(
  "div",
  null,
  React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Hello from React"),
      React.createElement("a", {href:""}, "Click me")
    )
  )
);


//jsx to create same element
let heading = (
  <div id="parent">
    <div id="child">
      <div id="subchild">
      <h1 style={{color:"red"}}>Hello from React</h1>
      <button href="# " style={{width:"100px"}}>Click me</button>
      <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg" style={{width:"30%"}}></img>
      </div>
    </div>
  </div>
);

console.log(heading);

// comparing both the elements
console.log(element===heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
