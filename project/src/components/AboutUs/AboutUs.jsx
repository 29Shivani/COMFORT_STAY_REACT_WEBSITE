import React from "react";
import AboutComponentMini from "../../subComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>At COMFORT STAY, we simplify finding and renting homes, connecting you with quality spaces that feel like home.</p>
          <p>Our team is dedicated to offering a seamless, trustworthy rental experience tailored to your lifestyle needs.</p>
          <p>Whether you're looking to find a new home or host one, we’re here to support you every step of the way.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;