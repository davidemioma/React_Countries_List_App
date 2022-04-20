import React, { useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import Info from "../component/country/info/Info";
import Borders from "../component/country/borders/Borders";
import Spinner from "../component/spinner/Spinner";
import { useParams } from "react-router";
import axios from "axios";

const Country = () => {
  const [country, setCountry] = useState({});

  const [loading, setLoading] = useState(false);

  const { countryId } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://restcountries.com/v2/alpha/${countryId}`)
      .then((res) => {
        setCountry(res.data);

        setLoading(false);
      })
      .catch((err) => alert(err.message));
  }, [countryId]);

  return (
    <Layout>
      {loading && <Spinner />}

      {!loading && (
        <Info
          img={country?.flag}
          name={country?.name}
          nativeName={country?.nativeName}
          population={country?.population}
          region={country?.region}
          subregion={country?.subregion}
          capital={country?.capital}
          domain={country?.topLevelDomain?.map((domain) => domain)}
          languages={country?.languages?.map((language) => language.name)}
          currencies={country?.currencies?.map((currency) => currency.name)}
        />
      )}

      {!loading && (
        <Borders borders={country?.borders?.map((border) => border)} />
      )}
    </Layout>
  );
};

export default Country;
