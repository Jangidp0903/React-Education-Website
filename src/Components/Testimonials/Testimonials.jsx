import React, { useRef } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import "./Testimonials.css";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideforward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slidebacward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideforward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slidebacward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Esusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to purse my degree at Edusity was one of the the best
                decisions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic exelence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Esusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to purse my degree at Edusity was one of the the best
                decisions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic exelence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Esusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to purse my degree at Edusity was one of the the best
                decisions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic exelence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Esusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to purse my degree at Edusity was one of the the best
                decisions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic exelence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;