import { restaurantData } from "../Utility/Constant";
import { Restaurant } from "./Restaurant";

export var Body = () => {
    return (
        <div className="Body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants, cuisines or a dish" />
                <button>Search</button>
            </div>
            <div className="restaurant-list">
                {restaurantData.map((restaurant) => (
                    <Restaurant key={restaurant.card.card.info.id} restObj={restaurant} />
                ))}
        </div>
        </div>
    );
}