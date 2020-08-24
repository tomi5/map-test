import React from "react";
import Header from "../Header/Header";
import SummaryBox from "../SummaryBox/SummaryBox";
import MapContainer from "../MapContainer/MapContainer";
import { Wrapper } from "./style";
import VisitedCountryContextProvider from "../../contexts/visitedCountryContext";
import SelectedCountryContextProvider from "../../contexts/selectedCountryContext";
import SearchContainer from "../SearchContainer/SearchContainer";
import Tabels from "../Tabels/Tabels";
import useFetchCountry from "../../hooks/useFetchCountry";

const App = () => {
  const { allCountries } = useFetchCountry("");

  return (
    <Wrapper>
      <Header title='Interactive Visited Countries Map' />
      <VisitedCountryContextProvider>
        <SelectedCountryContextProvider>
          <MapContainer allCountries={allCountries} />
          <SearchContainer />
          <SummaryBox allCountries={allCountries} />
          <Tabels />
        </SelectedCountryContextProvider>
      </VisitedCountryContextProvider>
    </Wrapper>
  );
};

export default App;
