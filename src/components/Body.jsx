import {  useEffect, useState } from "react";
import { restaurantData } from "../Utility/Constant.jsx";
import { Restaurant } from "./Restaurant.jsx";
import { Shimmer } from "./Shimmer.jsx";

export var Body = () => {
  //state variable to hold the data
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantData);
  const [allRestaurants, setAllRestaurants] = useState(restaurantData);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //useEffect to call the api - on page load
  useEffect(() => {
   fetchData();
  }, [])

  const fetchData=async ()=>{
    setIsLoading(true);
    try{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.97530&lng=77.59100&str=non%20veg&trackingId=undefined&submitAction=ENTER&queryUniqueId=a8746319-a7f7-487e-014c-5e5714917f0b&selectedPLTab=RESTAURANT");
      const json=await data.json();
      let extractedData=json.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
      console.log(extractedData);
      setListOfRestaurants(extractedData);
      setAllRestaurants(extractedData);
    }catch(err){
      console.error("Failed to fetch restaurants:", err);
    }finally{
      setIsLoading(false);
    }

  }

  const handleSearch = () => {
    const term = searchText.trim().toLowerCase();
    const filtered = allRestaurants.filter((restaurant) => {
      const info = restaurant.card?.card?.info ?? {};
      const name = (info.name || "").toLowerCase();
      const cuisines = (info.cuisines || []).join(" ").toLowerCase();
      const locality = (info.locality || "").toLowerCase();
      return name.includes(term) || cuisines.includes(term) || locality.includes(term);
    });

    setListOfRestaurants(filtered);
  }

   if(isLoading) {
     return <Shimmer></Shimmer>
   }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => { if(e.key === 'Enter') handleSearch(); }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = allRestaurants.filter((res) => {
              const info = res.card?.card?.info ?? {};
              const avg = Number(info.avgRating) || 0;
              return avg > 4.5;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {listOfRestaurants.length === 0 ? (
          <h3>No restaurants match your search.</h3>
        ) : (
          listOfRestaurants.map((restaurant) => {
            const info = restaurant.card.card.info;
            return (
              <Restaurant
                resData={info}
                key={info.id}
              ></Restaurant>
            );
          })
        )}
      </div>
    </div>
  );
}