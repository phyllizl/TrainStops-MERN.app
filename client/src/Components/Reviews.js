import * as React from "react";

const Reviews = ({ placeId }) => {
  // fetch("/v1/reviews", {
  //   method: "POST",
  //   body: JSON.stringify(postReview),
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
