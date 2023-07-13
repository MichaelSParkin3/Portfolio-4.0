import React, { useEffect, useRef, useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import anime from "animejs"
import {
  Transition,
  TransitionElements,
  TransitionGroup,
} from "react-transition-group"
import ProjectScreenTitleWithImage from "./projectScreenTitleWithImage"
import ProjectScreenMobileAlert from "./projectScreenMobileAlert"
import { isIOS } from "react-device-detect"

import "../scss/projectScreen.scss"

/**
 * ProjectScreen:
 * This component is used to display the different project titles and when
 * ProjectScreenTitleWithImage component is hovered upon the project image
 * is displayed.
 */

const ProjectScreen = () => {
  /**
   * Image data to run through GatsbyImage
   */

  const data = useStaticQuery(graphql`
    query {
      shanecoScreenImage2: file(relativePath: { eq: "shanecoScreen2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bikeScreenImage2: file(relativePath: { eq: "bikeScreen.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstromScreenImage2: file(relativePath: { eq: "nordstromScreen.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gamerScreenImage2: file(relativePath: { eq: "gamerScreen1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      artScreenImage2: file(relativePath: { eq: "artScreen1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      verbScreen2: file(relativePath: { eq: "verbScreen4.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gamestarScreen1: file(relativePath: { eq: "gamestarScreen1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  /**
   * titleContRef : Reference to the container of the projectScreenTitleWithImage components.
   * titleHovered : Initially false, when a cursor hovers over a title turns true in itemHoveredOn function.
   * positionPercent :
   * displayBoolArray :
   * transitioning :
   * newScreenImageHeight :
   * onIOS :
   */

  const titleContRef = useRef()
  const [titleHovered, setTitleHovered] = useState(false)
  const [positionPercent, setPositionPercent] = useState(0)
  const [displayBoolArray, setdisplayBoolArray] = useState([false, false])
  const [transitioning, setTransitioning] = useState(false)
  const [newScreenImageHeight, setNewScreenImageHeight] = useState("65vh")
  const [onIOS, setOnIOS] = useState(isIOS)

  /**
   * itemHoveredOn:
   * Sets display of all project images to none.
   * Sets display of hovered project title to flex.
   * Changes the the backgroundPosition second percent to the percentage param.
   * @param {var} percentage : The calculated percentage used in backGround position.
   * @param {object} titleItemRef : The ref of the hovered upon title-item-cont.
   * @param {array} titleItemOnly : Array of titleItemNodes without the screen-images.
   */
  const itemHoveredOn = (percentage, titleItemRef, titleItemOnly) => {
    var tempArray = []

    displayBoolArray.forEach(element => {
      tempArray.push(false)
    })

    for (let index = 0; index < titleItemOnly.length; index++) {
      const element = titleItemOnly[index]

      if (element == titleItemRef.current) {
        tempArray[index] = true
        break
      }
    }

    setdisplayBoolArray(PreviousDisplayBoolArray => tempArray)
    setTitleHovered(previousBool => true)
    setPositionPercent(previousPercent => percentage)
    setTransitioning(previousTransitioning => true)
  }

  const itemHoveredOff = titleItemRef => {
    // var tempArray = []
    // displayBoolArray.forEach(element => {
    //   tempArray.push(false)
    // })
    // setdisplayBoolArray(PreviousDisplayBoolArray => tempArray)
  }

  const titleContMouseOut = () => {
    setTitleHovered(previousBool => false)
    setTransitioning(previousTransitioning => false)
  }

  const projectScreenContRef = useRef(null)
  var windowHeight

  useEffect(() => {
    onResize()

    function onResize() {
      var projectScreenContHeight = projectScreenContRef.current.offsetHeight

      setNewScreenImageHeight(projectScreenContHeight)
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  })

  useEffect(() => {
    setOnIOS(previousBool => isIOS)
  }, [])

  // useEffect(() => {
  //   window.addEventListener("resize", updateSize)
  // })

  // const updateSize = () => {
  //
  //   windowHeight = window.innerHeight;
  //   setNewScreenImageHeight( windowHeight - (windowHeight * 0.35))

  //
  // }

  const handleEnter = () => {
    anime({
      targets: ".img-cover-1",
      width: "0%",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {},
    })
    anime({
      targets: ".img-cover-2",
      width: "0%",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {},
    })
    anime({
      targets: ".mobileAlert",
      bottom: "1rem",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {},
    })
  }

  const handleExit = () => {
    anime({
      targets: ".img-cover-1",
      width: "50%",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {},
    })
    anime({
      targets: ".img-cover-2",
      width: "50%",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {},
    })
    anime({
      targets: ".mobileAlert",
      bottom: "-1.5rem",
      duration: 1000,
      delay: 0,
      easing: "easeInOutElastic",
      complete: () => {},
    })
  }

  return (
    <div className={"projectScreen"}>
      <div className="projectScreen-cont" ref={projectScreenContRef}>
        <Transition
          in={transitioning}
          onEnter={handleEnter}
          onExit={handleExit}
          appear
          duration={1000}
          timeout={1000}
          className="img-cover-cont"
        >
          <div>
            <div className="img-cover-1"></div>
            <div className="img-cover-2"></div>
          </div>
        </Transition>
        <div
          ref={titleContRef}
          className={titleHovered ? "title-cont title-hovered" : "title-cont"}
          style={{
            backgroundPosition: "50% " + positionPercent + "%",
          }}
          onMouseOut={titleContMouseOut}
          onTouchCancel={titleContMouseOut}
        >
          <ProjectScreenTitleWithImage
            name={"NORDSTROM MOCK"}
            tech={"React Redux"}
            projectScreenHeight={newScreenImageHeight}
            img={data.nordstromScreenImage2.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[0]}
            link={"nordstrom"}
            onIOS={onIOS}
          />
          <ProjectScreenTitleWithImage
            name={"LANDING PAGES"}
            tech={"Html Scss Js"}
            projectScreenHeight={newScreenImageHeight}
            img={data.bikeScreenImage2.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[1]}
            link={"landingPages"}
            onIOS={onIOS}
          />
          <ProjectScreenTitleWithImage
            name={"VERB LABS"}
            tech={"Html Scss Js"}
            projectScreenHeight={newScreenImageHeight}
            img={data.verbScreen2.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[2]}
            link={"verbLabs"}
            onIOS={onIOS}
          />
          <ProjectScreenTitleWithImage
            name={"GAMESTAR"}
            tech={"Html Scss Js"}
            projectScreenHeight={newScreenImageHeight}
            img={data.gamestarScreen1.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[3]}
            link={"gamestar"}
            onIOS={onIOS}
            highlight={false}
          />
          <ProjectScreenTitleWithImage
            name={"SHANECO"}
            tech={"Html Scss Js"}
            projectScreenHeight={newScreenImageHeight}
            img={data.shanecoScreenImage2.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[4]}
            link={"shaneco"}
            onIOS={onIOS}
            highlight={true}
          />
        </div>
      </div>
      <ProjectScreenMobileAlert isIOS={onIOS} />
    </div>
  )
}

export default ProjectScreen
