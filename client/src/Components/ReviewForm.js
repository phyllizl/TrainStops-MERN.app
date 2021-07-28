import * as React from "react";

const ReviewForm = ({ placeId }) => {
  const handleReview = (e) => {
    e.preventDefault();
    console.log(e.target.elements.review.value);
    const inputReview = e.target.elements.review.value;
    const postReview = {
      username: "60fd586ab5bc8f2804df6e62",
      location: placeId,
      review: inputReview,
    };
    fetch("/v1/reviews", {
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
        // props.addHoliday(resJson);
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
