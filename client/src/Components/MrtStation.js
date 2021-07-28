import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Nearby from "./Nearby.js";

//This will be the MRT station page that shows (a) Top 3 Hotspot Locations

const MrtStation = () => {
  const params = useParams();
  const [currentMrt, setCurrentMrt] = useState([]);

  useEffect(() => {
    const callNearbySearch = async () => {
      try {
        const mrt = await fetch(`/v1/mrt/${params.id}`).then(
          (response) => response.json(),
          (err) => console.log(err)
        );
        setCurrentMrt(mrt);
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
          <Nearby mrtId={params.id} />
      </div>
    </>
  );
};

export default MrtStation;
