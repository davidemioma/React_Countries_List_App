import React from "react";
import Layout from "../component/layout/Layout";
import Header from "../component/header/Header";
import CountryList from "../component/countries/CountryList";

const Countries = () => {
  return (
    <Layout>
      <Header />

      <CountryList />
    </Layout>
  );
};

export default Countries;
