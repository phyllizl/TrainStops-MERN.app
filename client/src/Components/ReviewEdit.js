import * as React from "react";
import { useContext } from "react";
import { LoggedContext } from "../App";

const ReviewEdit = ({ placeId, placeName, user, queryType }) => {
  const loggedContext = useContext(LoggedContext);
  console.log("context", loggedContext);

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.review.value);
    // const inputReview = e.target.elements.review.value;
    // fetch(`/v1/reviews`, {
    //   method: "POST",
    //   body: JSON.stringify({review: inputReview}),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       throw new Error("Error in network");
    //     }
    //   })
    //   .then((resJson) => {
    //     console.log(resJson);
    //     // props.addHoliday(resJson);
    //   })
    //   .catch((err) => console.error({ Error: err }));
  };
  return (
    <div>
      <h1>Edit Review</h1>
      <div>
        <form onSubmit={handleEdit}>
          <label htmlFor="review">Review</label>
          <input type="textfield" name="review" id="review" />
          <button>Edit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewEdit;
