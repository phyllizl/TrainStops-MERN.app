import * as React from "react";
import { useState, useEffect } from "react";

const Reviews = ({ searchId, queryType }) => {
  const [fetchReviews, setFetchReviews] = useState();

  useEffect(() => {
    fetch(`/v1/reviews/${queryType}/${searchId}`, {
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
        {fetchReviews?.map((rev, index) => (
          <li key={index}>{rev.reviews}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
