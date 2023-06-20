import React from 'react';
import FooterFE from "../components/FooterFE";
import HeaderFE from "../components/HeaderFE";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <>
    <HeaderFE />
    <div className="about-page">
      <h1>Welcome to Bếp của Bố</h1>
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      <section className="introduction">
        <h2>Introduction</h2>
        <p>
          Hi there! We are Bếp của Bố, and I'm thrilled to have you visit my food blog. At Bếp của Bố, we're all about sharing our love for food and cooking with the world.
        </p>
      </section>
      <section className="personal-story">
        <h2>Personal Story</h2>
        <p>
          we want to share our experience that ignited our passion for food and motivated you to start this blog
        </p>
      </section>
      <section className="mission-vision">
        <h2>Mission and Vision</h2>
        <p>
          
        </p>
      </section>
      <section className="expertise">
        <h2>Expertise and Credentials</h2>
        <p>
          
        </p>
      </section>
      <section className="unique-selling-proposition">
        <h2>Unique Selling Proposition</h2>
        <p>
          
        </p>
      </section>
      <section className="content-overview">
        <h2>Content Overview</h2>
        <p>
          
        </p>
      </section>
      <section className="engagement">
        <h2>Engagement and Community</h2>
        <p>
          
        </p>
      </section>
     
      <section className="call-to-action">
        <h2>Join Us!</h2>
        <p>
      Bếp của Bố - Vui vẻ và ngon miệng, hứa hẹn làm bạn tròn vẹn!
        </p>
      </section>
    </div>
    <FooterFE />
    </>
  );
};

export default AboutPage;
