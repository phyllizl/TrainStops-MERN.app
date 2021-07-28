import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//This will be the Location (Hotspot) page that will show all the reviews for that particular Location.

const Location = () => {
  const params = useParams();
  const [locationFetch, setLocationFetch] = useState({});

  useEffect(() => {
    console.log(params.placeid);
    const callGetDetails = async () => {
      try {
        const location = await fetch(`/v1/locations/${params.placeid}`).then(
          (response) => response.json(),
          (err) => console.log(err)
        );
        console.log(location);
        setLocationFetch(location);
      } catch (err) {
        console.log(err);
      }
    };
    callGetDetails();
  }, [params.placeid]);

  return (
    <div>
      <h1> {locationFetch?.name} </h1>
      <h4>{locationFetch?.formatted_address}</h4>
      <h4>Opening Hours:</h4>
      <ul>
        {locationFetch?.opening_hours?.weekday_text.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
