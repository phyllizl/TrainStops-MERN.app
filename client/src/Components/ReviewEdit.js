import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { LoggedContext } from "../App";

const ReviewEdit = ({ placeId, placeName, user, queryType }) => {
  const [editReview, setEditReview] = useState({});
  const loggedContext = useContext(LoggedContext);
  console.log("context", loggedContext);
  const params = useParams();
  console.log(params.reviewid);

  useEffect(() => {
    fetch(`/v1/reviews/${params.reviewid}`, {
      method: "GET",
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
        setEditReview(resJson);
      })
      .catch((err) => console.error({ Error: err }));
  }, [params.reviewid]);

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.review.value);
    const inputReview = e.target.elements.review.value;
    fetch(`/v1/reviews/${params.reviewid}`, {
      method: "PUT",
      body: JSON.stringify({ reviews: inputReview }),
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
      })
      .catch((err) => console.error({ Error: err }));
  };

  return (
    <div>
      <h1>Edit Review for {editReview.location_name}</h1>
      <div>
        <form onSubmit={handleEdit}>
          <input
            type="textfield"
            name="review"
            id="review"
            // value={editReview.reviews}
          />
          <button>Edit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewEdit;
