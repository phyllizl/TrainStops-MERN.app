import * as React from "react";
import { useState, useEffect } from "react";

const Reviews = ({ placeId }) => {
  const [fetchReviews, setFetchReviews] = useState();

  useEffect(() => {
    fetch("/v1/reviews/", {
      method: "GET",
      // body: JSON.stringify(postReview),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in network");
        }
      })
      .then((resJson) => {
        console.log(resJson);
        setFetchReviews(resJson);
      })
      .catch((err) => console.error({ Error: err }));
  }, []);

  return (
    <div>
      <ul>
        <li>review here</li>
        <li>review here</li>
        <li>review here</li>
      </ul>
    </div>
  );
};

export default Reviews;
