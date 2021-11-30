import React from "react";
import { response } from "../response";


function Card(props) {

  return (
    <div>
      <div className="section">
        <div className="single-tour">
          <img src={response[props.value].image} alt="" />
          <footer>
            <div className="tour-info">
              <h4>{response[props.value].name}</h4>
              <div className="tour-price">
                <h4>${response[props.value].price}</h4>
              </div>
            </div>
            <p>
              {response[props.value].info.slice(0, 200)}
              <button type="button">
                show more
              </button>
            </p>
            <div className="delete-btn">Not Interested</div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Card;
