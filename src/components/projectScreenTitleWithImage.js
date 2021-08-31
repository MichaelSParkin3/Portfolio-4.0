import React, { ref, useRef, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
    console.log(titleItemRef)
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

    console.log(titleItemOnly)

    for (let index = 0; index < titleItemOnly.length; index++) {
      const element = titleItemOnly[index]

      if (element == titleItemRef.current) {
        titleItemIndex = index
        console.log(index)
        break
      }
    }

    const newPercent = (100 / (titleItemOnly.length - 1)) * titleItemIndex

    console.log(newPercent)

    setTitleHovered(previousBool => true)

    console.log("ITEMREF", titleItemRef)

    props.itemHoveredOn(newPercent, titleItemRef, titleItemOnly)
  }

  const mouseOut = () => {
    props.itemHoveredOff(titleItemRef)
    setTitleHovered(previousBool => false);
    console.log(props.onIOS && titleHovered)
  }

  return (
    <>
      <div
        onMouseEnter={mouseEnter}
        onMouseOut={mouseOut}
        onTouchStart={mouseEnter}
        onTouchEnd={mouseOut}
        onClick={() => {
          console.log('TITLE ONCLCIK')
          // mouseOut();
          // mouseEnter();
        }}
        style={props.onIOS && titleHovered ? { color: '#fff' } : {  }}
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
            {props.name}
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
        style={props.display ? { display: "flex", height: props.projectScreenHeight } : { display: "none", height: props.projectScreenHeight }}
      >
        <Img fluid={props.img} />
      </div>
    </>
  )
}

export default ProjectScreenTitleWithImage
