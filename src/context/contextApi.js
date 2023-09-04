import { createContext, useEffect, useState } from "react";
import { fetchDatafromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResults] = useState([]);
  const [selectCategoroies, setSelectCategoroies] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategoroies);
  }, [selectCategoroies]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDatafromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResults,
        selectCategoroies,
        setSelectCategoroies,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
