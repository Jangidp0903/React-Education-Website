import React from "react";
import gallety_1 from "../../assets/gallery-1.png";
import gallety_2 from "../../assets/gallery-2.png";
import gallety_3 from "../../assets/gallery-3.png";
import gallety_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
import "./Campus.css";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallety_1} alt="" />
        <img src={gallety_2} alt="" />
        <img src={gallety_3} alt="" />
        <img src={gallety_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See More Here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
