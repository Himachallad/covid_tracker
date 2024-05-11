import React from "react";
import "./index.css";
import countryCodeMap from "../../api/country.code";

export default function Flag({country}) {
  const countryCode = (countryCodeMap[country]?.toLowerCase())
  return (
    <>
      <img src={`https://flagcdn.com/${countryCode}.svg` || ''} className="countryFlag" alt={country} />
    </>
  );
}
