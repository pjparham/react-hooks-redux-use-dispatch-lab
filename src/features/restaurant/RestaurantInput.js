import React, { useState } from "react";
import { addRestaurant } from "./restaurantsSlice";
import { useDispatch } from "react-redux";

function RestaurantInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const restaurant = {name: name, location: location}
    setName("")
    setLocation("")
    dispatch(addRestaurant(restaurant))
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          value={location}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
