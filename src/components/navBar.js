import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from "@reach/router"

import ContactModal from "./contactModal"

import "../scss/navbar.scss"

const NavBar = props => {
  const variants = {
    on: { opacity: 1, y: 0, scale: 1 },
    off: { opacity: 0, y: -50, scale: 0 },
  }

  //console.log(props.url);

  const [onTop, setOnTop] = useState(true)
  const [navModalBool, setNavModalBool] = useState(false)

  // useEffect(() => {

  //   function onScroll() {
  //     console.log(document.body.scrollTop);
  //   }

  //   console.log('Navbar useeffect');
  //   window.addEventListener("scroll", onScroll, true);
  //     return () => window.removeEventListener("scroll", onScroll);

  // });

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     console.log('scroll');
  //   }, true);
  // });

  return (
    <>
    <motion.nav
      animate={props.onTopBool ? "on" : "off"}
      variants={props.disableAnim ? null : variants}
      //variants={variants}
      transition={{ type: "spring", duration: 0.75, bounce: 0.5 }}
    >
      <div
        className={
          props.makeWhite
            ? "nav-main-cont nav-white"
            : "nav-main-cont nav-black"
        }
      >
        <motion.div
          whileTap={{ scale: 0.7 }}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", duration: 0.25, bounce: 0.5 },
          }}
        >
          <AniLink cover direction="up" bg="#e5e5e5" to="/" duration={2.5}>
            Projects
          </AniLink>
        </motion.div>
        <div className="nav-divider">|</div>
        <motion.div
          id="nav-logo-id"
          className="nav-logo"
          whileTap={{ scale: 0.7 }}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", duration: 0.25, bounce: 0.5 },
          }}
        >
          <AniLink cover direction="up" duration={2.5} to="/">
            MIII
          </AniLink>
        </motion.div>
        <div className="nav-divider">|</div>
        <motion.div
          whileTap={{ scale: 0.7 }}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", duration: 0.25, bounce: 0.5 },
          }}
        >
          <div onClick={() => {
            setNavModalBool(!navModalBool)
          }}>Contact</div>
        </motion.div>
      </div>
    </motion.nav>
    <div className="navModalCont">
            <ContactModal navModalBool={navModalBool} />
          </div>
          </>

  )
}

export default NavBar
