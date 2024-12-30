import React, { useState, useEffect, useRef } from "react"
import anime from "animejs"
import "../scss/contactBox.scss"
import cyberCoder from "../images/videos/CyberpunkCoder.mp4"

const ContactBox = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null);

  var TerminalEmulator = {
    init: function (screen) {
      var inst = Object.create(this)
      inst.screen = screen
      inst.createInput()

      return inst
    },

    createInput: function () {
      var inputField = document.createElement("div")
      var inputWrap = document.createElement("div")

      inputField.className = "terminal_emulator__field"
      inputField.innerHTML = ""
      inputWrap.appendChild(inputField)
      this.screen.appendChild(inputWrap)
      this.field = inputField
      this.fieldwrap = inputWrap
    },

    enterInput: function (input) {
      return new Promise((resolve, reject) => {
        var randomSpeed = (max, min) => {
          return Math.random() * (max - min) + min
        }

        var speed = randomSpeed(70, 90)
        var i = 0
        var str = ""
        var type = () => {
          str = str + input[i]
          this.field.innerHTML = str.replace(/ /g, "&nbsp;")
          i++

          setTimeout(() => {
            if (i < input.length) {
              if (i % 5 === 0) speed = randomSpeed(80, 120)
              type()
            } else {
              console.log("tick")
              setTimeout(() => {
                console.log("tock")
                resolve()
              }, 400)
            }
          }, speed)
        }

        type()
      })
    },

    enterCommand: function () {
      return new Promise((resolve, reject) => {
        var resp = document.createElement("div")
        resp.className = "terminal_emulator__command"
        resp.innerHTML = this.field.innerHTML
        this.screen.insertBefore(resp, this.fieldwrap)

        this.field.innerHTML = ""
        resolve()
      })
    },

    enterResponse: function (response) {
      return new Promise((resolve, reject) => {
        var resp = document.createElement("div")
        resp.className = "terminal_emulator__response"
        resp.innerHTML = response
        this.screen.insertBefore(resp, this.fieldwrap)

        resolve()
      })
    },

    wait: function (time, busy) {
      busy = busy === undefined ? true : busy
      return new Promise((resolve, reject) => {
        if (busy) {
          this.field.classList.add("waiting")
        } else {
          this.field.classList.remove("waiting")
        }
        setTimeout(() => {
          resolve()
        }, time)
      })
    },

    reset: function () {
      return new Promise((resolve, reject) => {
        this.field.classList.remove("waiting")
        resolve()
      })
    },
  }

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedData = () => {
        console.log("Video loaded");
        setVideoLoaded(true);
      };
  
      const handleError = () => {
        console.error("Failed to load video");
      };
  
      videoElement.addEventListener("loadeddata", handleLoadedData);
      videoElement.addEventListener("error", handleError);
  
      // Cleanup event listeners on component unmount
      return () => {
        videoElement.removeEventListener("loadeddata", handleLoadedData);
        videoElement.removeEventListener("error", handleError);
      };
    }
  }, []);

  const animateImgCovers = () => {
    console.log('running animate');
  
    return new Promise((resolve) => {
      anime({
        targets: ".img-cover-1",
        width: "0%",
        duration: 1000,
        easing: "easeInOutCirc",
        complete: resolve, // Resolve the promise when animation completes
      });
      anime({
        targets: ".img-cover-2",
        width: "0%",
        duration: 1000,
        easing: "easeInOutCirc",
        complete: resolve, // Resolve the promise when animation completes
      });
    });
  };

  useEffect(() => {
    const screenElement = document.getElementById("screen")
    if (screenElement) {
      const TE = TerminalEmulator.init(screenElement)
      TE.wait(1000, false)
        .then(TE.enterInput.bind(TE, "npm install websitecontroller"))
        .then(TE.enterCommand.bind(TE))
        .then(TE.enterResponse.bind(TE, "npm installing packages..."))
        .then(TE.wait.bind(TE, 600))
        .then(TE.enterResponse.bind(TE, "- remotecontroller v9 installed."))
        .then(TE.wait.bind(TE, 300))
        .then(
          TE.enterResponse.bind(TE, "- 10,000 dependencies installed. ")
        )
        .then(TE.wait.bind(TE, 600, false))
        .then(TE.enterInput.bind(TE, "node openblinds.js"))
        .then(TE.enterCommand.bind(TE))
        .then(TE.wait.bind(TE, 400))
        .then(TE.enterResponse.bind(TE, "opening blinds..."))
        .then(TE.wait.bind(TE, 600))
        .then(()=>{animateImgCovers()})
        .then(TE.wait.bind(TE, 1000))
        .then(TE.enterResponse.bind(TE, "blinds opened successfully"))
        .then(TE.wait.bind(TE, 600, false))
        .then(TE.enterInput.bind(TE, "node showcontacts.js"))
        .then(TE.reset.bind(TE))
    }
  }, [])

  return (
    <div className="contactBox">
      <div className="img-cover-cont">
        <div className="img-cover-1"></div>
        <div className="img-cover-2"></div>
      </div>
      <div className="links-cont">
        <div className="links">
          {/* <a
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
          </a> */}
          <div className="screen">
            <div id="screen" className="terminal_emulator"></div>
          </div>
        </div>
      </div>
      <video ref={videoRef} id="cyberCoderVideo" src={cyberCoder} autoPlay muted loop />
      <div class="dark-overlay"></div>
    </div>
  )
}

export default ContactBox
