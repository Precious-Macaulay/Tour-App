import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

function Card() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(true);

  const showMore = () => {
    setShow(true);
  };

  const showLess = () => {
    setShow(false);
  };

  const removeCard = (id) => {
    setData((prev) => {
      const newData = prev.filter((item) => item.id !== id);
      return newData;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = "https://course-api.com/react-tours-project";
        const { data: response } = await axios.get(url);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : data.length > 0 ? (
    data.map((item) => (
      <div key={item.id}>
        <div className="section">
          <div className="single-tour">
            <img src={item.image} alt="" />
            <footer>
              <div className="tour-info">
                <h4>{item.name}</h4>
                <div className="tour-price">
                  <h4>${item.price}</h4>
                </div>
              </div>
              <p>
                {show ? item.info.slice(0, 200) : item.info}
                {show ? (
                  <button
                    type="button"
                    onClick={() => {
                      showLess();
                    }}
                  >
                    show more
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      showMore();
                    }}
                  >
                    show less
                  </button>
                )}
              </p>
              <div
                className="delete-btn"
                onClick={() => {
                  removeCard(item.id);
                }}
              >
                Not Interested
              </div>
            </footer>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="loading">No Tour Available Now</p>
  );
}

export default Card;
