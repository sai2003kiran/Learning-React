import { useState } from "react";
export var Header = () => {
    const [button, setButton] = useState("login");
    return (
        <div className="Outerheader">
            <div className="logo">
                <img src="https://img.freepik.com/free-vector/delivery-logo-with-bike-man-courier_1308-49806.jpg?semt=ais_hybrid&w=740&q=80" style={{ width: "100px" }}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>
                        <button
                            onClick={() => {
                                if (button == "login") {
                                    setButton("logout");
                                } else {
                                    setButton("login");
                                }
                            }}
                            className="login-button s"
                        >
                            {button}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
};