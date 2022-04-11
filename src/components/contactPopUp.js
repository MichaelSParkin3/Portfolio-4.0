import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
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
      display: "flex", opacity: 1, y: 0,
      transition: {
        duration: 1, delay: 3.5
      },
    },
    closedCardItem: { opacity: 0, y: 25,
      transition: {
        duration: 1, delay: 0
      },
    },
    openedCardUl: {
      display: "flex", opacity: 1,
      transition: {
        duration: 1, delay: 3.5
      },
    },
    closedCardUl: { opacity: 0,
      transition: {
        duration: 1, delay: 0
      }, },
  }

  console.log("props.contactisopen " + props.contactIsOpen)

  function Item({ content, icon }) {
    const [isOpen, setIsOpen] = useState(false)
    const variants3 = {
    openedCardItem: { display: "flex", opacity: 1, y: 0 },
    closedCardItem: { display: "none", opacity: 0, y: 25 },
  }

  useEffect(() => {

    console.log(props.contactIsOpen);

  });

  console.log(props.contactIsOpen);

    return (
      <motion.div
        transition={{ duration: 1.5, delay: 3.5 }}
        animate={props.contactIsOpen ? "openedCardItem" : "closedCardItem"}
        variants={variants3}
        className={"iconTextContainer"}
      >
        {props.contactIsOpen && content}
        <div className={"textCont"}>
          <h2>TEST</h2>
        </div>
        <a className={"iconAnchor"}>{icon}</a>
      </motion.div>
    )
  }

  const generatedItems = props.items.map(item => {
    console.log(item)
    return <Item key={item.key} content={item.content} icon={item.icon}></Item>
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
            delay: 1.5,
          }}
          animate={props.contactIsOpen ? "openedCard" : "closedCard"}
          variants={variants}
          style={props.contactIsOpen ? {display: 'flex'} : {display: 'none'}}
        >
          <motion.h1
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 1.5,
              delay: 2.5,
            }}
            animate={props.contactIsOpen ? "openedCardItem" : "closedCardItem"}
            variants={variants}
          >
            MIII
          </motion.h1>
          <AnimateSharedLayout>
            <motion.ul key={'ulText'} variants={variants} animate={props.contactIsOpen ? "openedCardUl" : "closedCardUl"} id={"ulText"} className={"ulText"}>
              {generatedItems}
            </motion.ul>
            <motion.ul key={'ulIcon'} 
        variants={variants} animate={props.contactIsOpen ? "openedCardUl" : "closedCardUl"}>{generatedItems}</motion.ul>
          </AnimateSharedLayout>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ContactPopUp
