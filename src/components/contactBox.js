import React, { useState, useEffect } from "react"
import anime from "animejs"
import "../scss/contactBox.scss"
import cyberCoder from "../images/videos/CyberpunkCoder.mp4"

const ContactBox = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const videoElement = document.getElementById("cyberCoderVideo")
    videoElement.onloadeddata = () => {
      setVideoLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (videoLoaded) {
      const animationTimeout = setTimeout(() => {
        anime({
          targets: ".img-cover-1",
          width: "0%",
          duration: 1000,
          easing: "easeInOutCirc",
        })
        anime({
          targets: ".img-cover-2",
          width: "0%",
          duration: 1000,
          easing: "easeInOutCirc",
        })
      }, 250) // 500 milliseconds delay

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(animationTimeout)
    }
  }, [videoLoaded])

  return (
    <div className="contactBox">
      <div className="img-cover-cont">
        <div className="img-cover-1"></div>
        <div className="img-cover-2"></div>
      </div>
      <div className="links-cont">
        <div className="links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:MichaelSParkin3@gmail.com"
          >
            MichaelSParkin3@gmail.com
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MichaelSParkin3"
          >
            github.com/MichaelSParkin3
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/michaelscottparkin3/"
          >
            linkedin.com/in/michaelscottparkin3/
          </a>
        </div>
      </div>
      <video id="cyberCoderVideo" src={cyberCoder} autoPlay muted loop />
      <div class="dark-overlay"></div>
    </div>
  )
}

export default ContactBox
