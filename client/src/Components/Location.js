import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ReviewForm from "./ReviewForm.js";
import Reviews from "./Reviews.js";
require("dotenv").config();

//This will be the Location (Hotspot) page that will show all the reviews for that particular Location.

const Location = ({ logState }) => {
  const params = useParams();
  const [locationFetch, setLocationFetch] = useState({});

  //Fetch Hotspot data
  useEffect(() => {
    //console.log(params.placeid);
    const callGetDetails = async () => {
      try {
        const location = await fetch(`/v1/locations/${params.placeid}`).then(
          (response) => response.json(),
          (err) => console.log(err)
        );
        //console.log(location);
        setLocationFetch(location);
      } catch (err) {
        console.log(err);
      }
    };
    callGetDetails();
  }, [params.placeid]);
  console.log(locationFetch);
  return (
    <div>
      <div>
        <h1> {locationFetch?.name} </h1>
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${locationFetch?.photos?.[0]?.photo_reference}&key=${process.env.REACT_APP_API}`}
          alt={`${locationFetch?.name}`}
        />
        <h4>{locationFetch?.formatted_address}</h4>
        <h4>Opening Hours:</h4>
        <ul>
          {locationFetch?.opening_hours?.weekday_text.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
      <div>
        <ReviewForm
          queryType="location"
          placeId={params.placeid}
          placeName={locationFetch?.name}
        />
        <Reviews queryType="location" searchId={params.placeid} />
      </div>
    </div>
  );
};

export default Location;
