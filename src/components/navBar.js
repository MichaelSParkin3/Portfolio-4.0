import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

import ScrollToTopButton from "./scrollToTopButton"
import ContactPopUp from "./contactPopUp"

import Github from "../images/svg/github.svg"
import { FaGithub, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa"

import "../scss/navbar.scss"

/**
 * Navbar:
 * This component helps the user navigate the website from any page.
 * @param {object} props
 * * props.pageRef : Reference to current page. Used to get width and height of page.
 * * props.disableAnim : Bool if true then disables the Navbar's anime when page is scrolled down.
 * * props.makeWhite : Bool if ture makes text of navbar white if false then black.
 */

const NavBar = props => {
  const data = useStaticQuery(graphql`
    query {
      contactImage: file(relativePath: { eq: "contact1.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "github2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      email: file(relativePath: { eq: "email2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  /**
   * onTop: True initally and true if page is scrolled to top. Otherwise it is false.
   * contactIsOpen :
   */
  const [onTop, setOnTop] = useState(true)

  const variants = {
    on: { opacity: 1, y: 0, scale: 1 },
    off: { opacity: 0, y: -50, scale: 0 },
  }

  var url = typeof window !== "undefined" ? window.location.href : ""
  var urlPath;
  var pageRef = props.pageRef


  useEffect(() => {

    /**
     * onScroll:
     * If the page is not at scrolled to the top then change the onTop state so
     * the navbar can hide itself and the scrollToTopArrow can appear. If the page
     * is at the top then update the onTop state to true and hide the scrollToTopArrow
     * and make the navbar appear.
     */

    function onScroll() {
      let yOffset = pageRef.current.getBoundingClientRect().top
      console.log("offset " + yOffset)

      if (yOffset >= 0) {
        console.log("topo")

        setOnTop(true)
      } else {
        console.log("not top")
        if (onTop !== false) {
          setOnTop(false)
        }
      }
    }

    console.log("Navbar useeffect")
    window.addEventListener("scroll", onScroll, true)
    return () => window.removeEventListener("scroll", onScroll, true)
  }, [])

  return (
    <>
      <motion.nav
        animate={onTop ? "on" : "off"}
        variants={props.disableAnim || props.isContactOpen ? null : variants}
        transition={{ type: "spring", duration: 0.75, bounce: 0.5 }}
      >
        <div
          className={
            (props.makeWhite)
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
            <AniLink cover direction="up" bg="#e5e5e5" to="/" duration={1.5}>
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
            <AniLink cover direction="up" duration={1.5} to="/">
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
            <a onClick={props.OpenContact}>Contact</a>
          </motion.div>
        </div>
      </motion.nav>
      <ScrollToTopButton disableAnim={props.disableAnim} onTopBool={onTop} pageRef={props.pageRef} />
    </>
  )
}

export default NavBar
