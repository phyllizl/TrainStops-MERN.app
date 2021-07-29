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
    //Add this to EW line
    EW.push(CG[0], CG[1]);

    //Get results for CE line (Marina Bay)
    CE = mrtStations.filter((stations) => stations.Station.includes("CE"));
    //Add this to NS line
    NS.push(CE[0], CE[1]);
  }

  //* CAN DELETE * create handleClick function to track selected mrt
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   const index = event.target.selectedIndex;
  //   const optionElement = event.target.childNodes[index];
  //   const optionElementId = optionElement.getAttribute("id");
  //   console.log(optionElementId);
  //   history.push(`/mrt/${optionElementId}`);
  // };

  //Toggle Class for DropDowns
  const toggle = () => {
    const EW = document.getElementById("EW");
    EW.classList.toggle("is-active");
  };

  const NorthSouth = () => {
    const NS = document.getElementById("NS");
    NS.classList.toggle("is-active");
  };

  const DownTown = () => {
    const DT = document.getElementById("DT");
    DT.classList.toggle("is-active");
  };

  const NorthEast = () => {
    const NE = document.getElementById("NE");
    NE.classList.toggle("is-active");
  };

  const Circle = () => {
    const CC = document.getElementById("CC");
    CC.classList.toggle("is-active");
  };

  return (
    <>
      <div className="has-text-centered is-size-4 has-text-weight-bold">
        {/* East West Line */}
        <div className="py-2 my-2 ">
          <label for="EW"> East West Line </label>
          <br />

          <div className="dropdown" id="EW" onClick={toggle}>
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>Choose a Station</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {EW?.map((ele) => (
                  <a
                    href={`/mrt/${ele?._id}`}
                    className="dropdown-item EWcolor"
                    key={ele?._id}
                    id={ele?._id}
                  >
                    {ele?.["Station Name"]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>

        {/* CAN DELETE
      <select id="EW" onChange={handleClick}>
        <option value="" disabled selected>
          Choose Station
        </option>
        {EW?.map((ele) => (
          <option key={ele?._id} id={ele?._id}>
            {ele?.["Station Name"]}
          </option>
        ))}
      </select>
      <br /> */}

        {/* North South Line */}
        <div className="py-2 my-2 ">
          <label for="NS"> North South Line </label>
          <br />
          <div className="dropdown" id="NS" onClick={NorthSouth}>
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>Choose a Station</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {NS?.map((ele) => (
                  <a
                    href={`/mrt/${ele?._id}`}
                    className="dropdown-item NScolor"
                    key={ele?._id}
                    id={ele?._id}
                  >
                    {ele?.["Station Name"]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>

        {/* DownTown Line */}
        <div className="py-2 my-2 ">
          <label for="DT"> Downtown Line </label>
          <br />
          <div className="dropdown" id="DT" onClick={DownTown}>
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>Choose a Station</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {DT?.map((ele) => (
                  <a
                    href={`/mrt/${ele?._id}`}
                    className="dropdown-item DTcolor"
                    key={ele?._id}
                    id={ele?._id}
                  >
                    {ele?.["Station Name"]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>

        {/* Circle Line */}
        <div className="py-2 my-2 ">
          <label for="CC"> Circle Line </label>
          <br />
          <div className="dropdown" id="CC" onClick={Circle}>
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>Choose a Station</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {CC?.map((ele) => (
                  <a
                    href={`/mrt/${ele?._id}`}
                    className="dropdown-item CCcolor"
                    key={ele?._id}
                    id={ele?._id}
                  >
                    {ele?.["Station Name"]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>

        {/* North East Line */}
        <div className="py-2 my-2 ">
          <label for="NE"> North East Line </label>
          <br />
          <div className="dropdown" id="NE" onClick={NorthEast}>
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>Choose a Station</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {NE?.map((ele) => (
                  <a
                    href={`/mrt/${ele?._id}`}
                    className="dropdown-item NEcolor"
                    key={ele?._id}
                    id={ele?._id}
                  >
                    {ele?.["Station Name"]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Main;
