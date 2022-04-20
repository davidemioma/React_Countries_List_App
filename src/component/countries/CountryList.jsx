import React, { useEffect, useState } from "react";
import CountryItem from "./CountryItem";
import Spinner from "../spinner/Spinner";
import axios from "axios";
import classes from "./Countries.module.css";
import { useSelector } from "react-redux";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const filterValue = useSelector((state) => state.filters.filterValue);

  const searchValue = useSelector((state) => state.search.searchValue);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        const result = res.data.map((country) => ({
          id: country.alpha3Code,
          name: country.name,
          flagImg: country.flag,
          population: country.population,
          region: country.region,
          capital: country.capital,
        }));

        setCountries(result);

        setIsLoading(false);
      })
      .catch((err) => alert(err.message));
  }, []);

  const filteredCountries = countries?.filter(
    (country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      country.region.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {isLoading && <Spinner />}

      <div className={classes.countries}>
        {filteredCountries?.map((country) => (
          <CountryItem
            key={country.id}
            id={country.id}
            name={country.name}
            flagImg={country.flagImg}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </>
  );
};

export default CountryList;
