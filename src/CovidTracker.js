import { useEffect, useState } from "react";
import { fetchCovidData } from "./api/fetchCovidData";
import Flag from "./components/flag";
import Card from "./components/card";
import { MapContainer } from "react-leaflet";
import CovidMap from "./components/covid-map";
import "./CovidTracker.css";
import Footer from "./Footer/footer";

function App() {
  const [covidData, setCovidData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState("India");
  const [mapMarkerInfo, setMapMarkerInfo] = useState({
    color: "red",
    type: "active",
  });
  const [globalMaxCount, setGlobalMaxCount] = useState({
    totalCases: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
  });

  const getCovidData = async () => {
    const data = await fetchCovidData();
    setCovidData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  useEffect(() => {
    const maxCasesData = {
      totalCases: 0,
      totalTests: 0,
      totalRecovered: 0,
      totalDeaths: 0,
    };

    if (!covidData) {
      return []
    }

    Object.keys(covidData).forEach((country) => {
      maxCasesData.totalCases = Math.max(
        maxCasesData.totalCases,
        covidData[country].totalCases
      );
      maxCasesData.totalTests = Math.max(
        maxCasesData.totalTests,
        covidData[country].totalTests
      );
      maxCasesData.totalRecovered = Math.max(
        maxCasesData.totalRecovered,
        covidData[country].totalCases - covidData[country].totalDeaths
      );
      maxCasesData.totalDeaths = Math.max(
        maxCasesData.totalDeaths,
        covidData[country].totalDeaths
      );
    });
    setGlobalMaxCount(maxCasesData);
  }, [covidData]);

  if (isLoading) {
    return <div className="waitingLoader">Waiting....</div>;
  }

  const getDropdownOptions = () => {
    return Object.keys(covidData).map((country) => {
      return <option key={country}>{country}</option>;
    });
  };

  const changeCountry = (event) => {
    setCountry(event.target.value);
  };

  const setMapInfo = (color, type) => {
    setMapMarkerInfo({ color: color, type: type });
  };

  const getTrackerCards = () => {
    return (
      <div className="trackerCardsContainer">
        <Card
          changeMapColor={setMapInfo}
          heading="Total"
          cases={covidData[country].totalCases}
          color="blue"
          type="total"
        />
        <Card
          changeMapColor={setMapInfo}
          heading="Total Tests"
          cases={covidData[country].totalTests}
          color="red"
          type="totalTests"
        />
        <Card
          changeMapColor={setMapInfo}
          heading="Total Deaths"
          cases={covidData[country].totalDeaths}
          color="grey"
          type="totalDeaths"
        />
        <Card
          changeMapColor={setMapInfo}
          heading="Total Recovered"
          cases={covidData[country].totalCases - covidData[country].totalDeaths}
          color="green"
          type="totalRecovered"
        />
      </div>
    );
  };

  const getWorldMap = () => {
    const { lat, long } = covidData[country]?.countryInfo;
    return (
      <MapContainer
        className="covidMap"
        center={[lat, long]}
        zoom={3}
        scrollWheelZoom={true}
      >
        <CovidMap
          covidData={covidData}
          mapMarkerInfo={mapMarkerInfo}
          selectedCountry={country}
          globalMaxCount={globalMaxCount}
          lat={lat}
          long={long}
        />
      </MapContainer>
    );
  };

  return (
    <>
    <div className="covidTrackerContainer">
      <h1 className="covidTrackerHeading">Covid tracker</h1>
      <div className="covidTrackerBody">
        <div className="worldMap">{getWorldMap()}</div>
        <div className="right">
          <div className="flagSelectContainer">
            <Flag country={country} />
            <select
              className="countryDropDown"
              value={country}
              onChange={changeCountry}
            >
              {getDropdownOptions()}
            </select>
          </div>
          <div className="cardsContainer">{getTrackerCards()}</div>
          
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
