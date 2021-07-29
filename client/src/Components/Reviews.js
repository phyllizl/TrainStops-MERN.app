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
  }, [searchId, queryType]);

  const handleClick = (reviewid) => {
    console.log(reviewid);
  };

  return (
    <div>
      <ul>
        {fetchReviews?.map((rev, index) => (
          <>
            <li key={index}>
              <div>
                {queryType === "users" ? `[${rev.location_name}]` : null}{" "}
                {rev.reviews}
              </div>
              <div>
                {queryType === "users" ? (
                  <>
                    <a href={`/${queryType}/${searchId}/edit/${rev._id}`}>
                      Edit
                    </a>
                    <button onClick={() => handleClick(rev._id)}>Edit</button>
                  </>
                ) : null}
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
