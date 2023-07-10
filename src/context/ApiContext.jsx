import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const baseURL = "https://reqres.in/api/users";
  const [userSort, setUserSort] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userCarousel,setUserCarousel] = useState([])
  const [dataFilter] = useState(["first_name","email"])
  const [word, setWord] = useState("");



   //Sort Data in Services page
   const sortData = async () => {
    setLoading(true);
    try {
      const { data: res } = await axios.get(baseURL);
      setUserSort(res.data);
      console.log(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const sortDataAToZ = () => {
    const data = [...userSort]
    if(data.length > 0){
        let res = data.sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      );
      setUserSort(res);
    }
  }


  const sortDataZToA = () => {
    const data = [...userSort]
    if(data.length > 0){
        let res = data.sort((a, b) =>
        b.first_name.localeCompare(a.first_name)
      );
      setUserSort(res);
    }
  }


  const search=(userSort)=>{   
    return userSort.filter((data)=> {
      // eslint-disable-next-line
      return dataFilter.some((filter) => {
      if(data[filter]){
        return data[filter].toString().toLowerCase().indexOf(word.toLocaleLowerCase())>-1
      }
      })
    })
  }

  //Carousel in Home page
    const carouselData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get(`${baseURL}?page=2`);
        setUserCarousel(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }


  useEffect(() => {
    carouselData();
    sortData();
  }, []);


  return (
    <ApiContext.Provider value={{ loading, userSort,userCarousel,sortDataAToZ,sortDataZToA,sortData,search,word,setWord  }}>
      {children}
    </ApiContext.Provider>
  );
};
