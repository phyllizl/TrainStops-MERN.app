import React, { useEffect, useState } from "react";

//This will be the MRT station page that shows (a) Top 3 Hotspot Locations

const MrtStation = () => {
  const [locationFetch, setLocationFetch] = useState([]);

  useEffect(() => {
    fetch("/v1/locations/result")
      .then(
        (data) => data.json(),
        (err) => console.log(err)
      )
      .then(
        (parsedData) => setLocationFetch(parsedData),
        (err) => console.log(err)
      );
  },[]);

  return (
    <>
      <div>
        <h1> Station Name </h1>
        <div>
          {locationFetch.map((loc, index) => (
            <p key={index}>{loc.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default MrtStation;
