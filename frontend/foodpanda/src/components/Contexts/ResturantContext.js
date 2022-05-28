import React, { useEffect, useState, createContext } from "react";
import axios from "../Api/Api";

export const ResturantContext = createContext();

export const ResturantProvider = (props) => {
  const [Resturants, setResturants] = useState([]);
  const [Items, setItems] = useState([]);

  const fetchResturants = async () => {
    axios
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
    axios
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

  const addCategory = async (categoryName) => {
    axios
      .post(`/api/menu/category/PizzaHut/${categoryName}`)
      .then(function (response) {
        console.log(response);
      });
  };
  const updateCategory = async (categoryName) => {
    // axios
    //   .put(`/api/menu/category/PizzaHut/${categoryName}`)
    //   .then(function (response) {
    //     console.log(response);
    //     fetchItems();
    //   });
  };
  const deleteCategory = async (categoryName) => {
    axios
      .delete(`/api/menu/category/PizzaHut/${categoryName}`)
      .then(function (response) {
        console.log(response);
        fetchItems();
      });
  };
  const addItem = async (
    categoryName,
    itemName,
    itemDescription,
    itemPrice
  ) => {
    axios
      .post("/api/menu/items", {
        restaurantName: "PizzaHut",
        categoryName: categoryName,
        itemName: itemName,
        itemPrice: itemPrice,
        itemDescription: itemDescription,
      })
      .then(() => {
        //Reason to use Fetch is to use we want to get updated values from all categories
        fetchItems();
      });
  };

  const deleteItem = async (categoryName, itemName) => {
    console.log(categoryName, itemName);
    axios
      .delete("/api/menu/items", {
        data: {
          restaurantName: "PizzaHut",
          categoryName: categoryName,
          itemName: itemName,
        },
      })
      .then(() => {
        //Reason to use Fetch is to use we want to get updated values from all categories
        fetchItems();
      });
  };

  useEffect(() => {
    fetchResturants();
    fetchItems();
  }, []);

  return (
    <ResturantContext.Provider
      value={{
        Resturants,
        setResturants,
        Items,
        setItems,
        addCategory,
        deleteCategory,
        updateCategory,
        addItem,
        deleteItem,
      }}
    >
      {props.children}
    </ResturantContext.Provider>
  );
};
