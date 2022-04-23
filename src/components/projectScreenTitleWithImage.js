import React, { ref, useRef, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { isIOS } from "react-device-detect"
import { motion } from "framer-motion"

import Img from "gatsby-image"

/**
 * ProjectScreenTitleWithImage:
 * This component displays the project title and project image for the ProjectScreen component.
 * @param {object} props
 * * props.name : Name of project.
 * * props.tech : Name of Programming tech used.
 * * props.img : The Gatsby Img returned from the query.
 * * props.itemHoveredOn : itemHoveredOn function from projectScreen component.
 * * props.display : Bool used to hide or show project image.
 */
const ProjectScreenTitleWithImage = props => {
  const titleItemRef = useRef()
  const [titleHovered, setTitleHovered] = useState(false)

  /**
   * mouseEnter:
   * Remove screen-image divs from title-cont childNodes.
   * Get index of currently hovered on titleItem in titleItemOnly array.
   * Calculate new backgroundPosition percent for title-cont.
   * Send titleItemOnly array, new percent, and ref of currently hovered titleItem to projectScreen component.
   */
  const mouseEnter = () => {
    var titleItemIndex
    var titleItemOnly = []

    for (
      let index = 0;
      index < titleItemRef.current.parentNode.childNodes.length;
      index++
    ) {
      const element = titleItemRef.current.parentNode.childNodes[index]

      if (element.className !== "screen-image fade-in") {
        titleItemOnly.push(titleItemRef.current.parentNode.childNodes[index])
      }
    }

    const variants = {
      on: { opacity: 1, y: 0, scale: 1 },
      off: { opacity: 0, y: -50, scale: 0 },
    }

    for (let index = 0; index < titleItemOnly.length; index++) {
      const element = titleItemOnly[index]

      if (element == titleItemRef.current) {
        titleItemIndex = index

        break
      }
    }

    const newPercent = (100 / (titleItemOnly.length - 1)) * titleItemIndex

    setTitleHovered(previousBool => true)

    props.itemHoveredOn(newPercent, titleItemRef, titleItemOnly)
  }

  const mouseOut = () => {
    props.itemHoveredOff(titleItemRef)
    setTitleHovered(previousBool => false)
  }

  return (
    <>
      <div
        onMouseEnter={mouseEnter}
        onMouseOut={mouseOut}
        onTouchStart={mouseEnter}
        onTouchEnd={mouseOut}
        onClick={() => {
          // mouseOut();
          // mouseEnter();
        }}
        style={isIOS && titleHovered ? { color: "#fff" } : {}}
        ref={titleItemRef}
        // data-screenimagename={props.screenImageName}
        className="projectScreenTitleItem-cont"
      >
        {/* <h2 className="title">
          {props.name}
          {","}
          &nbsp;
        </h2>
        <h2 className="tech">{props.tech}</h2> */}
        <AniLink
          className="title"
          cover
          direction="up"
          bg="#e5e5e5"
          to={props.link}
          duration={1.5}
        >
          <div className="title">
            <motion.span
              className="highlight-arrow-leftside"
              animate={{
                opacity: [0, 1, 0],
                x: [0, 10, 0],
              }}
              style={
                props.highlight ? { display: "block" } : { display: "none" }
              }
              transition={{ repeat: Infinity, type: "spring" }}
            >
              {">"}
            </motion.span>
            {props.name}
            <motion.span
              animate={{
                opacity: [0, 1, 0],
                x: [0, -10, 0],
              }}
              className="highlight-arrow-rightside"
              style={
                props.highlight ? { display: "block" } : { display: "none" }
              }
              transition={{ repeat: Infinity, type: "spring" }}
            >
              {"<"}
            </motion.span>
            <div className="title-tech">
              {", "}
              {props.tech}
            </div>
          </div>
        </AniLink>
      </div>
      <div
        className="screen-image fade-in"
        // className={
        //   props.display ? "screen-image screen-image-appear" : "screen-image"
        // }
        style={
          props.display
            ? { display: "flex", height: props.projectScreenHeight }
            : { display: "none", height: props.projectScreenHeight }
        }
      >
        <Img fluid={props.img} />
      </div>
    </>
  )
}

export default ProjectScreenTitleWithImage
