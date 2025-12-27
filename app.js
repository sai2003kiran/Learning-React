import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";

//app layout
const AppLayout = () => {
  return (<div>
    <Header />
    <Body />
  </div>);}

//Rendering the AppLayout component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);