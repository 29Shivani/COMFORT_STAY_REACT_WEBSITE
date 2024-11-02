import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
            Welcome to COMFORT STAY, your trusted partner in finding and renting beautiful, handpicked homes and villas. Our mission is to make renting seamless, comfortable, and tailored to your needs.
          </p>
          <p>
            With a team dedicated to quality, transparency, and customer satisfaction, we ensure each listing meets high standards, providing you with a safe and welcoming home experience. At COMFORT STAY, we believe that finding a place to call home should be exciting, convenient, and stress-free.
          </p>
          <p>
            Whether you’re looking for a cozy apartment in the city or a luxurious villa by the sea, we strive to offer a diverse range of properties to match every lifestyle and budget.
          </p>
          <p>
            Join us on this journey, whether you're seeking a new home or ready to share yours with others as a host. We're here to guide you every step of the way, offering trusted support and exceptional service to make your rental experience the best it can be.
          </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;