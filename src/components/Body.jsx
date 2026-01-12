import { useState } from "react";
import { restaurantData } from "../Utility/Constant";
import { Restaurant } from "./Restaurant";


export var Body = () => {
    //state variable to hold the data
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantData);
    return (
        <div className="Body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants, cuisines or a dish" />
                <button>Search</button>
            </div>

            <div className="filter">
                <button
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.card.card.info.avgRating > 4.5
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="restaurant-list">
                {listOfRestaurants.map((restaurant) => (
                    <Restaurant key={restaurant.card.card.info.id} restObj={restaurant} />
                ))}
            </div>
        </div>
    );
}