import React from "react";
import AboutPic from "../Images/about-pic.svg";
import useWebAnimations, { lightSpeedInLeft } from "@wellyshen/use-web-animations";


function About() {
 const { ref } = useWebAnimations({...lightSpeedInLeft});

  return (
    <div id="container">
      <div id="content">
        <h1 id="head1" ref={ref}>
          Welcome to about Page
          <br />
          <strong id="brandName">A.M Services</strong>
        </h1>
        <h4 id="head3">We are team of talented Developers</h4>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia per ut
          sollicitudin congue ridiculus. Dis adipiscing at leo morbi bibendum
          fermentum facilisis tempus. Egestas sem vestibulum dignissim curabitur
          faucibus interdum! Porttitor eget vehicula enim tempus sapien at.
          Felis faucibus curae tortor class lobortis. Torquent sit et ultrices
          sodales cursus justo senectus nostra.
        </p>
      </div>
      <img src={AboutPic} alt="aboutPic" className="homePic" align="right" />
    </div>
  );
}

export default About;
