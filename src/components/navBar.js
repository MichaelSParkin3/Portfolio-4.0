import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"

import ScrollToTopButton from "./scrollToTopButton"

import "../scss/navbar.scss"

/**
 * Navbar:
 * This component helps the user navigate the website from any page.
 * @param {object} props
 * * props.pageRef : Reference to current page. Used to get width and height of page.
 * * props.disableAnim : Bool if true then disables the Navbar's anime when page is scrolled down.
 * * props.makeWhite : Bool if ture makes text of navbar white if false then black.
 * * props.toggleContact : Function that makes the contactpopup the opposite of it's current state Open VS Closed
 * * props.contactIsOpen : Bool if true then the contactpopup is open if false then it's closed
 * * props.closeContact : Function that closes contactpopup only closes
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
   */
  const [onTop, setOnTop] = useState(true)

  const variants = {
    on: { opacity: 1, y: 0, scale: 1 },
    off: { opacity: 0, y: -50, scale: 0 },
  }

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

      if (pageRef.current != undefined && pageRef.current != null) {

      let yOffset = pageRef.current.getBoundingClientRect().top

      if (yOffset >= 0) {
        setOnTop(true)
      } else {
        if (onTop !== false) {
          setOnTop(false)
        }
      }
    }
    }

        window.addEventListener("scroll", onScroll, true)
    return () => window.removeEventListener("scroll", onScroll, true)

  
  }, [props.url])


  return (
    <>
      <motion.div
        className="scroll-down"
        style={
          props.disableAnim || props.contactIsOpen
            ? { display: "none" }
            : { display: "block" }
        }
      ></motion.div>
      <motion.nav
        animate={onTop ? "on" : "off"}
        variants={props.disableAnim || props.contactIsOpen ? null : variants}
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
            <AniLink
              onClick={props.CloseContact}
              cover
              direction="up"
              bg="#e5e5e5"
              to="/"
              duration={1.5}
            >
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
            <AniLink
              onClick={props.CloseContact}
              cover
              direction="up"
              duration={1.5}
              to="/"
            >
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
            <a onClick={props.ToggleContact}>Contact</a>
          </motion.div>
        </div>
      </motion.nav>
      <ScrollToTopButton
        disableAnim={props.disableAnim}
        isContactOpen={props.contactIsOpen}
        onTopBool={onTop}
        pageRef={props.pageRef}
      />
    </>
  )
}

export default NavBar
