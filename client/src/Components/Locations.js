import * as React from "react";
import { useEffect, useState } from "react";

const Locations = () => {
  const apikey = process.env.REACT_APP_APIKEY;
  const fetchURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.3419004463682798,103.96154272865057&radius=500&type=restaurant&key=${apikey}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(fetchURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.json());
          return res.json();
        } else {
          throw new Error("Error in network");
        }
      })
      .then((proc) => {
        console.log(proc);
        return setData(proc);
      });
  }, []);

  //   const callNearbySearch = async () => {
  //     try {
  //       const res = await fetch(fetchURL, {
  //         method: "GET",
  //         // mode: "no-cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       console.log(res);
  //       const proc = await res.json();
  //       console.log(proc);
  //       setData(proc);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   callNearbySearch();

  return <div>{JSON?.stringify(data)}</div>;
};

export default Locations;
