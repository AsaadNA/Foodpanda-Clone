import React, { useEffect, useState, createContext } from "react";
import axios from "../Api/Api";

export const ResturantContext = createContext();

export const ResturantProvider = (props) => {
  const [Resturants, setResturants] = useState([]);
  const [Items, setItems] = useState([]);

  const fetchResturants = async () => {
    await axios
      .get("/api/restaurant")
      .then(function (response) {
        const resturants = response.data.data;
        setResturants(resturants);
        console.log(resturants);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchItems = async () => {
    await axios
      .get("/api/menu/items/PizzaHut")
      .then(function (response) {
        const items = response.data.data;
        setItems(items);
        console.log(items);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchResturants();
    fetchItems();
  }, []);

  return (
    <ResturantContext.Provider
      value={{ Resturants, setResturants, Items, setItems }}
    >
      {props.children}
    </ResturantContext.Provider>
  );
};
