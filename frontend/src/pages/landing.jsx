import React, { useState, useEffect } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
export default function LandingPage() {
  const router = useNavigate();

   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landingPageContainer">
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>
        <div className="navHeader">
          <h2>Vertex Connect</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("/aljk23");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p className="loginBtn">Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#4DCCFF" }}>Bridge</span> the distance in a
            single click
          </h1>

          <p className="heroSubText">
            Because a screen shouldn't feel like a barrier
            <br /> between you and the people who matter
          </p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img className="floatingImg" src="/mobile.png" alt="" />
        </div>
      </div>

      <footer className="footerSection">
          <div className="footerFeatures">
            <div className="featureBox">
              <h3>HD Video</h3>
              <p>Crystal clear high-definition video meetings.</p>
            </div>

            <div className="featureBox">
              <h3>Instant Meetings</h3>
              <p>Start or join meetings instantly with one click.</p>
            </div>

            <div className="featureBox">
              <h3>Secure Calls</h3>
              <p>End-to-end encryption keeps your conversations safe.</p>
            </div>

            <div className="featureBox">
              <h3>Global Connectivity</h3>
              <p>Connect with anyone from anywhere in the world.</p>
            </div>
          </div>

          <div className="copyright">
            © {new Date().getFullYear()} Vertex Connect. All rights reserved.
          </div>
        </footer>

      
    </div>
  );
}
