import React, { useEffect, useState, createContext } from "react";
import axios from "../Api/Api";

export const ResturantContext = createContext();

export const ResturantProvider = (props) => {
  const [Resturants, setResturants] = useState([]);

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
  useEffect(() => {
    fetchResturants();
  }, []);

  return (
    <ResturantContext.Provider value={[Resturants, setResturants]}>
      {props.children}
    </ResturantContext.Provider>
  );
};
