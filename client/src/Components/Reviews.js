import * as React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Reviews = ({ searchId, queryType, fetchReviews, setFetchReviews }) => {
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
    <div className="columns is-multiline">
      {fetchReviews?.map((rev, index) => (
        <>
          {queryType === "users" ? (
            <div className="column is-4" key={index}>
              <div className="card">
                <div className="card-header-title">
                  <a href={`/location/${rev.location_id}`}>
                    {rev.location_name}
                  </a>
                </div>
                <div className="card-content">{rev.reviews}</div>
                <div className="card-footer">
                  <a href={`/${queryType}/${searchId}/edit/${rev._id}`}>
                    <button className="button is-link is-outlined is-warning">
                      Edit
                    </button>
                  </a>
                  <a>
                    <button
                      className="button is-outlined is-danger"
                      onClick={() => handleDelete(rev._id)}
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="column is-4" key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="content">{rev.reviews}</div>
                  <div className="card-footer">{rev.username}</div>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Reviews;
