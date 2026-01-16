import { useState, useEffect } from "react";
import { restaurantData } from "../Utility/Constant";
import { Restaurant } from "./Restaurant";


export var Body = () => {
    //state variable to hold the data
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantData);
    //useEffect to call the api - on page load
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.97530&lng=77.59100&str=non%20veg&trackingId=undefined&submitAction=ENTER&queryUniqueId=a8746319-a7f7-487e-014c-5e5714917f0b&selectedPLTab=RESTAURANT");
        const json = await data.json();
        let extractedData = json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
        console.log(extractedData);
        setListOfRestaurants(extractedData);

    }
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
                {listOfRestaurants.map((restaurant) => {
                    return <Restaurant resData={restaurant.card.card.info}
                        key={restaurant.card.card.info.id}
                    ></Restaurant>;
                })}
            </div>
        </div>
    );
}