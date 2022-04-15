import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useAnimation,
} from "framer-motion"
import { globalHistory } from "@reach/router"

import Img from "gatsby-image"

import "../scss/contactPopUp.scss"

const items = [
  { content: "0000", key: "0" },
  { content: "1111", key: "1" },
  { content: "2222", key: "2" },
]

const ContactPopUp = props => {
  const variants = {
    openedTop: { y: 0 },
    closedTop: { y: "-70vh" },
    openedBottom: { y: 0 },
    closedBottom: { y: "70vh" },
    openedCard: { width: "75vw" },
    closedCard: { width: 0 },
    openedCardItem: {
      display: "flex",
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.75,
      },
    },
    closedCardItem: {
      opacity: 0,
      y: 25,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
    openedCardUl: {
      display: "flex",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
    closedCardUl: {
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0,
      },
    },

    rest: {
      scale: 0,
      transition: {
        duration: 2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      visibility: "visible",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  }

  const paraInvisIconContVariants = {
    hover: {
      x: -25,
      scale: [1.1, 1],
      opacity: 100,
      type: "spring",
      stiffness: 2000,
    },
    initial: {
      x: 0,
      scale: 1,
      opacity: 0,
      type: "spring",
      stiffness: 2000,
    },
  }

  // Imperative
  const controls = useAnimation()
  function handleMouseEnterControls() {
    console.log("Handle mouse enter")
    controls.start("hover")
  }

  function handleMouseLeaveControls() {
    console.log("Handle mouse leave")
    controls.start("initial")
  }

  console.log("props.contactisopen " + props.contactIsOpen)

  function Item({ content, icon, theKey, key, link }) {
    console.log("key " + key)

    return (
      <motion.div
        animate={props.contactIsOpen ? "openedCardItem" : "closedCardItem"}
        variants={variants}
        className={"iconTextContainer"}
      >
        <motion.div
          transition={{ delay: 0.1 * theKey }}
          variants={paraInvisIconContVariants}
          animate={controls}
          key={key}
          className="paraInvisIconCont"
        >
          <div className="pCont">
            <motion.p>{content}</motion.p>
          </div>

          <motion.a style={{ visibility: "hidden" }} className={"iconAnchor"}>
            {icon}
          </motion.a>
        </motion.div>
        <motion.a
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={"iconAnchor"}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          href={link}
          target="_blank" rel="noopener noreferrer"
        >
          {icon}
        </motion.a>
      </motion.div>
    )
  }

  const generatedItems = props.items.map(item => {
    console.log("key " + item.key)
    return (
      <Item
        key={item.key}
        theKey={item.key}
        content={item.content}
        icon={item.icon}
        link={item.link}
      ></Item>
    )
  })

  return (
    <div className={"contactPopUp"}>
      <motion.div
        className={"contactTopSlider"}
        transition={{ type: "spring", stiffness: 40, duration: 1 }}
        animate={props.contactIsOpen ? "openedTop" : "closedTop"}
        variants={variants}
      ></motion.div>
      <motion.div
        className={"contactBottomSlider"}
        transition={{ type: "spring", stiffness: 40, duration: 1 }}
        animate={props.contactIsOpen ? "openedBottom" : "closedBottom"}
        variants={variants}
      ></motion.div>
      <div className={"contentCont"}></div>
      <AnimatePresence>
        <motion.div
          className={"contactCard"}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: 0.5,
          }}
          animate={props.contactIsOpen ? "openedCard" : "closedCard"}
          variants={variants}
          style={
            props.contactIsOpen ? { display: "flex" } : { display: "none" }
          }
        >
          <motion.h1
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 1.5,
              delay: 0.25,
            }}
            animate={props.contactIsOpen ? "openedCardItem" : "closedCardItem"}
            variants={variants}
          >
            MIII
          </motion.h1>
          <AnimateSharedLayout>
            <motion.ul
              key={"ulIcon"}
              onMouseEnter={handleMouseEnterControls}
              onMouseLeave={handleMouseLeaveControls}
              variants={variants}
              animate={props.contactIsOpen ? "openedCardUl" : "closedCardUl"}
            >
              {generatedItems}
            </motion.ul>
          </AnimateSharedLayout>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ContactPopUp
