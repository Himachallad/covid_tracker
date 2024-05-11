import data from "./covid.config";

function refactorResponse(data) {
  let covidData = {};

  data?.map((item) => {
    covidData[item["Country"]] = {
      totalCases: item["Total Cases"] || 0,
      totalRecovered: item["Total Recovered"] || 0,
      totalDeaths: item["Total Deaths"] || 0,
      totalTests: item["Total Tests"] || 0,
      countryInfo: item["countryInfo"]
    };
  });
  return covidData;
}

export async function fetchCovidData() {
  try {
    const refactoredData = refactorResponse(data);
    return refactoredData;
  } catch (e) {
    console.error(e);
  }
}
