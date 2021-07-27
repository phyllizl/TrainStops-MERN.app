import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

//This will be the MRT station page that shows (a) Top 3 Hotspot Locations

const MrtStation = () => {
  const params = useParams();
  const [currentMrt, setCurrentMrt] = useState([]);
  const [hotspotsFetch, setHotspotsFetch] = useState([]);

  useEffect(() => {
    const callNearbySearch = async () => {
      try {
        const mrt = await fetch(`/v1/mrt/${params.id}`).then(
          (response) => response.json(),
          (err) => console.log(err)
        );
        setCurrentMrt(mrt);

        const hotspots = await fetch(`/v1/mrt/${params.id}/hotspots`).then(
          (response) => response.json(),
          (err) => console.log(err)
        );
        console.log("hotspots", hotspots);
        setHotspotsFetch(hotspots);
      } catch (err) {
        console.log(err);
      }
    };
    callNearbySearch();
  }, [params.id]);

  return (
    <>
      <div>
        <h1>
          {currentMrt?.["Station"]} - {currentMrt?.["Station Name"]}
        </h1>
        <div>
          {/* <Hotspots /> */}
          {hotspotsFetch.map((loc, index) => (
            <a href={"/location/" + loc["place_id"]} key={index}>
              <p>{loc["name"]}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MrtStation;
