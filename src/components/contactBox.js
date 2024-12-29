import React, { useState, useEffect } from "react";
import anime from "animejs";
import "../scss/contactBox.scss";
import cyberCoder from "../images/videos/CyberpunkCoder.mp4";

const ContactBox = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("cyberCoderVideo");
    videoElement.onloadeddata = () => {
      setVideoLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (videoLoaded) {
      anime({
        targets: ".img-cover-1",
        width: "0%",
        duration: 1000,
        easing: "easeInOutCirc",
      });
      anime({
        targets: ".img-cover-2",
        width: "0%",
        duration: 1000,
        easing: "easeInOutCirc",
      });
    }
  }, [videoLoaded]);

  return (
    <div className="contactBox">
      <div className="img-cover-cont">
        <div className="img-cover-1"></div>
        <div className="img-cover-2"></div>
      </div>
      <video id="cyberCoderVideo" src={cyberCoder} autoPlay muted loop />
    </div>
  );
};

export default ContactBox;