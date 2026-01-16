export var Restaurant = ({ resData }) => {
  var { name, avgRating, cuisines, costForTwo, locality, cloudinaryImageId } = resData;
  // console.log(resData);

  return (
    <div className="restaurant-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h3>{locality}</h3>
      <h3>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};