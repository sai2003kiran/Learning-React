import React from "react";
import ReactDOM from "react-dom/client";

//application form here
// static application using props//
var Header = () => {
  return (
    <div className="Outerheader">
      <div className="logo">
        <img src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" style={{ width: "150px" }}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

var Restaurant = (props) => {

  //PROPS DESTRUCTION//
  var {Name,Rating,Cuisine,DeliveryTime,Image}=props;
  return (
    <div className="restaurant-card">
      <img src={Image}></img>
      <h1>{Name}</h1>
      <p>Cuisine: {Cuisine}</p>
      <p>Rating: {Rating}</p>
      <h3>Delivery Time: {DeliveryTime}</h3>
    </div>
  );

}
//body layout
var Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search here"></input>
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        <Restaurant
          Rating="4.5"
          DeliveryTime="30 mins"
          Cuisine="North Indian, Chinese"
          Name="Restaurant 1"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/2/25/1b1dbecd-05f7-417b-baf7-53edbe2c680a_5cc6f0c5-b68d-44c1-901a-c0acfbbc39da.jpeg"
        ></Restaurant>

        <Restaurant
          Rating="4.2"
          DeliveryTime="20 mins"
          Cuisine="South Indian, Thai"
          Name="Restaurant 2"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hprrkr2aghvcmk6ikjlk"
        ></Restaurant>
        <Restaurant
          Rating="4.7"
          DeliveryTime="25 mins"
          Cuisine="Italian, Mexican"
          Name="Restaurant 3"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5bc297db12c4907df27234af9f4254da"
        ></Restaurant>
        <Restaurant
          Rating="4.3"
          DeliveryTime="40 mins"
          Cuisine="Japanese, Korean"
          Name="Restaurant 4"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/1/df4f8284-f3bf-4c2d-8d6b-ac7ac2fcb531_9194e9a5-1aea-4e34-8350-eb48aafacfed.jpg"
        ></Restaurant>
        <Restaurant
          Rating="4.6"
          DeliveryTime="35 mins"
          Cuisine="Mediterranean, Greek"
          Name="Restaurant 5"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ekkkgstyllmymnwpgbad"
        ></Restaurant>
        <Restaurant
          Rating="4.4"
          DeliveryTime="28 mins"
          Cuisine="French, Spanish"
          Name="Restaurant 6"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/3/10/48ff68a6-2b92-408a-ad22-c96c07f30228_80fff8a0-99fa-43e6-98ca-08b0734d0a50.jpg_compressed"
        ></Restaurant>
        <Restaurant
          Rating="5"
          DeliveryTime="30 mins"
          Cuisine="indian"
          Name="Restauran 7"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/2/28/f86800af-b3bb-4a4d-b28a-6169c63619b6_bb14797c-eb15-4b3e-8f0f-00fc4bc8675b.jpg"
        ></Restaurant>
        <Restaurant
          Rating="4.3"
          DeliveryTime="50 mins"
          Cuisine="NorthIndian"
          Name="Restauran 8"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aed631db976052859628950b26edd5a3"
        ></Restaurant>
        <Restaurant
          Rating="3.9"
          DeliveryTime="45 mins"
          Cuisine="Rarajastani"
          Name="Restauran 9"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/2/9/d191d343-64da-4f72-bb86-e3730e422d8d_d5db81d0-ebb5-423c-9150-b80afc849081.jpg"
        ></Restaurant>
        <Restaurant
          Rating="4.4"
          DeliveryTime="20 mins"
          Cuisine="Gujarathi"
          Name="Restauran 10"
          Image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aed631db976052859628950b26edd5a3
          "
        ></Restaurant>

      </div>
    </div>
  );
}

//app layout
var AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
