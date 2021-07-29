import * as React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoggedContext } from "../App";

const ReviewForm = ({
  placeId,
  placeName,
  fetchReviews,
  setFetchReviews,
  queryType,
}) => {
  const loggedContext = useContext(LoggedContext);
  console.log("context", loggedContext);
  console.log("context id", loggedContext?._id);
  const history = useHistory();

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
        setFetchReviews([...fetchReviews, resJson]);
        return history.push(`/location/${placeId}`);
      })
      .catch((err) => console.error({ Error: err }));
  };
  return (
    <div>
      <h1>Reviews</h1>
      <div>
        <form onSubmit={handleReview}>
          <label htmlFor="review">How did you like this place?</label>
          <input
            type="textfield"
            name="review"
            id="review"
            placeholder="Type something"
          />
          <button>Post Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
