import React, { useRef, useState } from "react";
import img from "../../assets/Screenshot 2024-11-07 125730.png";
import arrow from "../../assets/Screenshot 2024-11-07 130735.png";
import "./home.css";
import Trusted from "./trusted";
import start from "../../assets/Screenshot 2024-11-07 135014.png";

function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="container">
      <div className="home">
        <div className="shopify">
          <a>
            Available on
            <img src={img} alt="Shopify" /> Shopify app store.
            <h5>Install the app <img src={arrow} alt="Arrow" /></h5>
          </a>
        </div>
        <h1>Build converting Shopify pages & sections without code</h1>
        <p>Use Instant today to start building high-converting landing pages and sections, no-code required.</p>
        <div className="button">
          <button id="one">Start for free</button>
          <button id="two">Book demo</button>
        </div>
        <p id="p">No credit card required</p>
        <div className="start">
          <a>
            <img src={start} alt="Star Rating" />
            <h5>5.0</h5> TRUSTED BY 11,118+ SHOPIFY BRANDS
          </a>
        </div>
        <Trusted />
        <div className="video-container">
          <video
            ref={videoRef}
            controls
            width="100%"
            height="auto"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source
              src="https://a.storyblok.com/f/225618/x/00e51e610e/intant-intro-q3-2024.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div className="play-button" onClick={togglePlayPause}>
              <span className="play-icon">►</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
