import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { LoggedContext } from "../App";

const ReviewEdit = () => {
  const [editReview, setEditReview] = useState({});
  const loggedContext = useContext(LoggedContext);
  console.log("context", loggedContext);
  const params = useParams();
  // console.log(params.reviewid);
  const history = useHistory();

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
        // return history.push();
      })
      .catch((err) => console.error({ Error: err }));
  }, [params.reviewid]);

  const handleInput = (e) => {
    const origReview = e.target.value;
    console.log(origReview);
    setEditReview({ ...editReview, reviews: e.target.value });
  };

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
        return history.push(`/users/${params.userid}`);
      })
      .catch((err) => console.error({ Error: err }));
  };

  return (
    <div>
      <h1>Edit Review for {editReview.location_name}</h1>
      <div>
        <form onSubmit={handleEdit}>
          <input
            onChange={handleInput}
            type="textfield"
            name="review"
            id="review"
            value={editReview.reviews}
          />
          <button>Edit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewEdit;
