import React, { useEffect, useState } from "react";

// Nearby Locations Fetch

const MrtStation = ({ mrtId }) => {
  const [hotspotsFetch, setHotspotsFetch] = useState([]);

  useEffect(() => {
    const callNearbySearch = async () => {
      try {
        const hotspots = await fetch(`/v1/mrt/${mrtId}/hotspots`).then(
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
  }, [mrtId]);

  return (
      <div>
        {hotspotsFetch.map((loc, index) => (
          <a href={"/location/" + loc["place_id"]} key={index}>
            <p>{loc["name"]}</p>
          </a>
        ))}
      </div>
  );
};

export default MrtStation;
