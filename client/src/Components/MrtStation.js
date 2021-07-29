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
        <div className="box pt-6 pl-6">
          <div className="subtitle">
            {currentMrt?.["Station"]} 
          </div>
          <div className="title">
            {currentMrt?.["Station Name"]}
          </div>
            <Nearby mrtId={params.id} />
        </div>
      </div>
        
    </>
  );
};

export default MrtStation;
