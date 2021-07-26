import React from "react";
import { useState, useEffect } from "react";

//This will be the landing page where you get: (a) MRT lines, which are (b) drop down lists that show all the stations in that line

const Main = () => {
  const [mrtStations, setMrtStations] = useState([]);
  const [northSouth, setNorthSouth] = useState([]);

  const url = "/v1/mrt";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMrtStations(data));
    //console.log("data", mrtStations);
  }, []);

  if (mrtStations.length > 1) {
      const results = mrtStations.filter(stations => stations.Station.includes("NS"));
      //console.log(results); IT WORKS!!
  }

  return (
    <>
      <h1>
        {mrtStations?.map((ele, index) => (
          <div>
            <p>
              {ele?.Station} - {ele?.["Station Name"]}
            </p>
          </div>
        ))}
      </h1>
    </>
  );
};

export default Main;
