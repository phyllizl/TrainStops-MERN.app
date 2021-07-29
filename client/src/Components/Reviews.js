import * as React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Reviews = ({
  searchId,
  queryType,
  fetchReviews,
  setFetchReviews,
}) => {
  // const [fetchReviews, setFetchReviews] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch(`/v1/reviews/${queryType}/${searchId}`, {
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
        setFetchReviews(resJson);
      })
      .catch((err) => console.error({ Error: err }));
  }, [searchId, queryType]);

  const handleDelete = (reviewid) => {
    console.log(reviewid);
    fetch(`/v1/reviews/${reviewid}`, {
      method: "DELETE",
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
        setFetchReviews(
          fetchReviews.filter((review) => review._id !== resJson._id)
        );
        return history.push(`/users/${searchId}`);
      })
      .catch((err) => console.error({ Error: err }));
  };

  return (
    <div>
      <ul>
        {fetchReviews?.map((rev, index) => (
          <>
            <li key={index}>
              <div>
                {queryType === "users" ? (
                  <a href={`/location/${rev.location_id}`}>
                    {rev.location_name}
                  </a>
                ) : null}{" "}
                {rev.reviews}
              </div>
              <div>
                {queryType === "users" ? (
                  <>
                    <a href={`/${queryType}/${searchId}/edit/${rev._id}`}>
                      Edit
                    </a>
                    <a>
                      <button onClick={() => handleDelete(rev._id)}>
                        Delete
                      </button>
                    </a>
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
