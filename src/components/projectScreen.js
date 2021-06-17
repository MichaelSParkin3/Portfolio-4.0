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
      shanecoScreenImage: file(relativePath: { eq: "shanecoScreen2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bikeScreenImage: file(relativePath: { eq: "bikeScreen.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstromScreenImage: file(relativePath: { eq: "nordstromScreen.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gamerScreenImage: file(relativePath: { eq: "gamerScreen1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      artScreenImage: file(relativePath: { eq: "artScreen1.jpg" }) {
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

<<<<<<< HEAD
  useEffect(() => {
    // const allEqual = arr => arr.every(v => v === arr[0])
    // setTimeout(() => {
    //   if (allEqual(displayBoolArray)) {
    //     console.log("-------Tmeout")
    //     setTitleHovered(previousBool => false)
    //   }
    // }, 1000)
  })
=======
  const projectScreenContRef = useRef(null)
  var windowHeight;

      useEffect(() => {
    var projectScreenContHeight = projectScreenContRef.current.offsetHeight;
    console.log('CONT HEIGHT '+ projectScreenContHeight);
    setNewScreenImageHeight(projectScreenContHeight);
  },[])

  // useEffect(() => {
  //   window.addEventListener("resize", updateSize)
  // })

  // const updateSize = () => {
  //   console.log("RESOIZED")
  //   windowHeight = window.innerHeight;
  //   setNewScreenImageHeight( windowHeight - (windowHeight * 0.35))

  //   console.log('newHeight: '+newScreenImageHeight);
  // }
>>>>>>> ProjectimageheighequalsScreencOntHeight

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
      <div className="projectScreen-cont">
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
        >
          <ProjectScreenTitleWithImage
            name={"RENT A BIKE"}
            tech={"React"}
            img={data.bikeScreenImage.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[0]}
            link={"404"}
          />
          <ProjectScreenTitleWithImage
            name={"SHANECO"}
            tech={"Html Scss Js"}
            img={data.shanecoScreenImage.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[1]}
            link={"shaneco"}
          />
          <ProjectScreenTitleWithImage
            name={"NORDSTROM"}
            tech={"React Redux"}
            img={data.nordstromScreenImage.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[2]}
            link={"nordstrom"}
          />
          <ProjectScreenTitleWithImage
            name={"GAMER CONNECT"}
            tech={"React Node"}
            img={data.gamerScreenImage.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[3]}
            link={"404"}
          />
          <ProjectScreenTitleWithImage
            name={"LORI RHODES ART"}
            tech={"Squarespace"}
            img={data.artScreenImage.childImageSharp.fluid}
            itemHoveredOn={itemHoveredOn}
            itemHoveredOff={itemHoveredOff}
            display={displayBoolArray[4]}
            link={"404"}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectScreen
