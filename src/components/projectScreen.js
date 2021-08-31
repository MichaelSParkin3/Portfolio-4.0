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
import { isIOS } from "react-device-detect"

import "../scss/projectScreen.scss"

/**
 * ProjectScreen:
 * This component is used to display the different project titles and when
 * ProjectScreenTitleWithImage component is hovered upon the project image
 * is displayed.
 */

const ProjectScreen = () => {
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
    }
  `)

  const titleContRef = useRef()
  const [titleHovered, setTitleHovered] = useState(false)
  const [positionPercent, setPositionPercent] = useState(0)
  const [displayBoolArray, setdisplayBoolArray] = useState([false, false])
  const [transitioning, setTransitioning] = useState(false)
  const [newScreenImageHeight, setNewScreenImageHeight] = useState('65vh')
  const [onIOS, setOnIOS] = useState(isIOS);

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
    console.log("ItemRef", titleItemRef)
    console.log("ItemOnly", titleItemOnly)

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
  var windowHeight;

      useEffect(() => {
    onResize();

         function onResize() {
              var projectScreenContHeight = projectScreenContRef.current.offsetHeight;
    console.log('CONT HEIGHT '+ projectScreenContHeight);
    setNewScreenImageHeight(projectScreenContHeight);
  }

  window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);

  })

  // useEffect(() => {
  //   window.addEventListener("resize", updateSize)
  // })

  // const updateSize = () => {
  //   console.log("RESOIZED")
  //   windowHeight = window.innerHeight;
  //   setNewScreenImageHeight( windowHeight - (windowHeight * 0.35))

  //   console.log('newHeight: '+newScreenImageHeight);
  // }

  const handleEnter = () => {
    console.log("======== ENTER")
    anime({
      targets: ".img-cover-1",
      width: "0%",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {
        console.log("ENTER COMPLETE====")
      },
    })
    anime({
      targets: ".img-cover-2",
      width: "0%",
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
  }

  console.log(titleHovered)

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
            name={"SHANECO"}
            tech={"Html Scss Js"}
            projectScreenHeight={newScreenImageHeight}
            img={data.shanecoScreenImage2.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[2]}
            link={"shaneco"}
            onIOS={onIOS}
          />
        <ProjectScreenTitleWithImage
            name={"OTHER WORK"}
            tech={"Various"}
            projectScreenHeight={newScreenImageHeight}
            img={data.gamerScreenImage2.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[3]}
            link={"otherWork"}
            onIOS={onIOS}
          />
          
          
        </div>
      </div>
    </div>
  )
}

export default ProjectScreen
