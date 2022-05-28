import React, { useState, createContext } from "react";
import axios from "../Api/Api";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [Items, setItems] = useState([]);
  const addItem = (Item) => {
    let temp = Items;
    temp.push(Item);
    setItems(temp);
    console.log(Items);
    window.localStorage.setItem("Items", JSON.stringify(Items));
  };
  const placeOrder = () => {
    let items = JSON.parse(window.localStorage.getItem("Items"));
    axios
      .post("/api/orders/", {
        username: window.localStorage.getItem("username"),
        restaurantName: window.localStorage.getItem("restaurantName"),
        items: items,
        totalAmount: "1000",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <UserContext.Provider value={{ addItem, placeOrder }}>
      {props.children}
    </UserContext.Provider>
  );
};
