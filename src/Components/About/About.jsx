import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import "./About.css";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos
          officia eius quia sint, ipsam pariatur laboriosam rem expedita, veniam
          quibusdam reiciendis autem! Repellat odit quo magni, exercitationem
          velit modi cupiditate quis voluptas non repudiandae sit. Minus soluta
          nesciunt dicta.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          provident ab commodi iusto, sapiente itaque. Odit quae suscipit, sit
          quia modi expedita pariatur deleniti. Eaque mollitia illo quos
          voluptate consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          modi vel, veritatis consectetur at dolorem incidunt ex, laudantium
          saepe vitae quas velit. Animi molestiae cumque, possimus non vero
          nesciunt dignissimos beatae voluptate? Inventore architecto, fugit
          sapiente beatae aliquam praesentium alias?
        </p>
      </div>
    </div>
  );
};

export default About;
