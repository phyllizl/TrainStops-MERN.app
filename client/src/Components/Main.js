import React from "react";
import { useState, useEffect } from "react";

//This will be the landing page where you get: (a) MRT lines, which are (b) drop down lists that show all the stations in that line

const Main = () => {
  const [mrtStations, setMrtStations] = useState([]);
  let NS = [];
  let EW = [];
  let DT = [];
  let CC = [];
  let NE = [];
  let CG = [];
  let CE = [];

  const url = "/v1/mrt";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMrtStations(data));
    //console.log("data", mrtStations);
  }, []);

  if (mrtStations.length > 1) {
    //Get results for North South line
    NS = mrtStations.filter((stations) => stations.Station.includes("NS"));

    //Get results for East West line
    EW = mrtStations.filter((stations) => stations.Station.includes("EW"));

    //Get results for Downtown line
    DT = mrtStations.filter((stations) => stations.Station.includes("DT"));

    //Get results for Circle line
    CC = mrtStations.filter((stations) => stations.Station.includes("CC"));

    //Get results for North East line
    NE = mrtStations.filter((stations) => stations.Station.includes("NE"));

    //Get results for CG line (Changi Airport)
    CG = mrtStations.filter((stations) => stations.Station.includes("CG"));

    //Get results for CE line (Marina Bay)
    CE = mrtStations.filter((stations) => stations.Station.includes("CE"));
  }

  return (
    <div>
      <h1>Line name</h1>
      {mrtStations?.map((ele, index) => (
        <div key={index}>
          <p>
            <a href={"/mrt/" + ele?._id}>
              {ele?.Station} - {ele?.["Station Name"]}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Main;
