import React, { ref, useEffect, useRef, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { isIOS, isMobile } from "react-device-detect"
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

  /**
   * titleItemRef : Reference to the projectScreenTitleItem-cont.
   * titleHovered : Initially false but true when projectScreenTitleItem-cont is hovered over.
   * coverDimensions : The dimensions of projectScreenTitleItem-cont to be copied over to cover div.
   */

  const titleItemRef = useRef()
  const [titleHovered, setTitleHovered] = useState(false)
  const [coverDimensions, setCoverDimensions] = useState([])

  /**
   * useEffect :
   * Set the cover dimensions to match projectScreenTitleItem-cont on initial render.
   */

  useEffect(() => {
    setCoverDimensions([titleItemRef.current.clientWidth,titleItemRef.current.clientHeight])
  },[])

  useEffect(() => {

    function handleResize() {
      console.log(titleItemRef.current.clientWidth)
    setCoverDimensions([titleItemRef.current.clientWidth,titleItemRef.current.clientHeight])
    
}

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    
}


  })

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
        style={isIOS && titleHovered ? { color: "#fff" } : {}}
        ref={titleItemRef}
        className="projectScreenTitleItem-cont"
      >
      <div onMouseEnter={mouseEnter}
        onMouseOut={mouseOut}
        onTouchStart={mouseEnter}
        onTouchEnd={mouseOut} className="cover" style={isMobile ? {height: coverDimensions[1], width: coverDimensions[0], display: 'none'} : {height: coverDimensions[1], width: coverDimensions[0]}}>
        <AniLink
          className="title"
          cover
          direction="up"
          bg="#e5e5e5"
          to={props.link}
          duration={1.5}
        ></AniLink>
      </div>
          <div className="title">
            <motion.div
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
            </motion.div>
            {props.name}
            <motion.div
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
            </motion.div>
            <div className="title-tech">
              {", "}
              {props.tech}
            </div>
          </div>
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
