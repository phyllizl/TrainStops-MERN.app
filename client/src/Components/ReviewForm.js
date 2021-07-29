import * as React from "react";
import { useContext } from "react";
import { LoggedContext } from "../App";

const ReviewForm = ({ placeId, placeName, user, queryType }) => {
  const loggedContext = useContext(LoggedContext);
  console.log("context", loggedContext);
  console.log("context id", loggedContext?._id);

  const handleReview = (e) => {
    e.preventDefault();
    console.log(e.target.elements.review.value);
    const inputReview = e.target.elements.review.value;
    const postReview = {
      user_id: loggedContext?._id,
      location_id: placeId,
      location_name: placeName,
      review: inputReview,
    };
    console.log("post rev userid", postReview.userId);
    fetch(`/v1/reviews`, {
      method: "POST",
      body: JSON.stringify(postReview),
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
      <h1>Reviews</h1>
      <div>
        <form onSubmit={handleReview}>
          <label htmlFor="review">Type Review</label>
          <input type="textfield" name="review" id="review" />
          <button>Review Location?</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
