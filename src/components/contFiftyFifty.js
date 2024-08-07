import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Img from "gatsby-image"

import "../scss/contFiftyFifty.scss"

const variants = {
  on: { opacity: 1, y: 0 },
  off: { opacity: 0, y: 100 },
}

const leftVariants = {
  on: { opacity: 1, y: 0 },
  off: { opacity: 0, y: -100 },
}

const ContFiftyFifty = props => {
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  })

  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  })

  const doesImgExist = img => {
    if (img != null) {
      return true
    } else {
      return false
    }
  }

  return (
    <div
      className={
        doesImgExist(props.rightImg) || doesImgExist(props.leftImg)
          ? "double cont-50-50"
          : "single cont-50-50"
      }
    >
      <motion.div
        className="inner-50-50 inner-50-50-left"
        animate={inViewLeft ? "on" : "off"}
        variants={leftVariants}
        transition={{ type: "spring", duration: 3, bounce: 0 }}
        style={{ top: "100px" }}
        ref={refLeft}
      >
        <div
          style={
            doesImgExist(props.leftImg)
              ? { display: "none" }
              : { display: "flex" }
          }
          className="inner-html inner-html-1"
        >
          <div dangerouslySetInnerHTML={{ __html: props.left }}></div>
        </div>
        <div
          style={
            doesImgExist(props.leftImg)
              ? { display: "flex", maxWidth: props.setImgWidth, margin: "auto" }
              : { display: "none" }
          }
          className={
            doesImgExist(props.rightImg)
              ? "inner-html inner-html-2 inner-img"
              : "inner-html inner-html-2 "
          }
        >
          {props.isGif ? (
            <img style={{ width: '100%' }} src={props.leftImg} alt="GIF" />
          ) : (
            <Img fluid={props.leftImg} />
          )}
        </div>
      </motion.div>
      <motion.div
        className="inner-50-50 inner-50-50-right"
        animate={inViewRight ? "on" : "off"}
        variants={variants}
        transition={{ type: "spring", duration: 3, bounce: 0 }}
        style={{ top: "100px" }}
        ref={refRight}
      >
        <div
          style={
            doesImgExist(props.rightImg)
              ? { display: "none" }
              : { display: "flex" }
          }
          className="inner-html inner-html-2"
        >
          <div dangerouslySetInnerHTML={{ __html: props.right }}></div>
        </div>
        <div
          style={
            doesImgExist(props.rightImg)
              ? { display: "flex", maxWidth: props.setImgWidth, margin: "auto" }
              : { display: "none" }
          }
          className={
            doesImgExist(props.rightImg)
              ? "inner-html inner-html-2 inner-img"
              : "inner-html inner-html-2 "
          }
        >
          {props.isGif ? (
            <img style={{ width: '100%' }} src={props.rightImg} alt="GIF" />
          ) : (
            <Img fluid={props.rightImg} />
          )}
        </div>
      </motion.div>
    </div>
  )
}
export default ContFiftyFifty
