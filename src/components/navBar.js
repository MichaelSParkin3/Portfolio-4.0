import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router" // Import useLocation

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
  const location = useLocation()
  const currentPath = location.pathname

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

  const [onTop, setOnTop] = useState(true)

  const variants = {
    on: { opacity: 1, y: 0, scale: 1 },
    off: { opacity: 0, y: -50, scale: 0 },
  }

  var pageRef = props.pageRef

  useEffect(() => {
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
            whileTap={
              currentPath === "/"
                ? {}
                : {
                    backgroundColor: props.makeWhite ? "#2b2c2c" : "#fff",
                    transition: { duration: 0.2 },
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    transition: { type: "spring", duration: 0.25, bounce: 0.5 },
                  }
            }
            whileHover={
              currentPath === "/"
                ? {}
                : {
                    scale: 1.2,
                    transition: { type: "spring", duration: 0.25, bounce: 0.5 },
                  }
            }
            style={{ padding: 3.5 }}
          >
            <AniLink
              onClick={props.CloseContact}
              cover
              direction="up"
              bg="#e5e5e5"
              to="/"
              duration={1.5}
              style={
                currentPath === "/"
                  ? props.makeWhite
                    ? {
                        pointerEvents: "none",
                        backgroundColor: "#e5e5e5",
                        color: "#0f1010",
                      }
                    : {
                        pointerEvents: "none",
                        backgroundColor: "#0f1010",
                        color: "#e5e5e5",
                      }
                  : {}
              }
            >
              Projects
            </AniLink>
          </motion.div>
          <div className="nav-divider">|</div>
          <motion.div
            id="nav-logo-id"
            className="nav-logo"
            whileTap={{
              backgroundColor: props.makeWhite ? "#2b2c2c" : "#fff",
              transition: { duration: 0.2 },
              paddingLeft: "8px",
              paddingRight: "8px",
              transition: { type: "spring", duration: 0.25, bounce: 0.5 },
            }}
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", duration: 0.25, bounce: 0.5 },
            }}
          >
            <a
              href="https://www.linkedin.com/in/michaelscottparkin3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIII
            </a>
          </motion.div>
          <div className="nav-divider">|</div>
          <motion.div
            whileTap={
              currentPath === "/contact"
                ? {}
                : {
                    backgroundColor: props.makeWhite ? "#2b2c2c" : "#fff",
                    transition: { duration: 0.2 },
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    transition: { type: "spring", duration: 0.25, bounce: 0.5 },
                  }
            }
            whileHover={
              currentPath === "/contact"
                ? {}
                : {
                    scale: 1.2,
                    transition: { type: "spring", duration: 0.25, bounce: 0.5 },
                  }
            }
            style={{ padding: 3.5 }}
          >
            <AniLink
              onClick={props.ToggleContact}
              cover
              direction="up"
              bg="#e5e5e5"
              to="/contact"
              duration={1.5}
              style={
                currentPath === "/contact"
                  ? props.makeWhite
                    ? {
                        pointerEvents: "none",
                        backgroundColor: "#e5e5e5",
                        color: "#0f1010",
                      }
                    : {
                        pointerEvents: "none",
                        backgroundColor: "#0f1010",
                        color: "#e5e5e5",
                      }
                  : {}
              }
            >
              Contact
            </AniLink>
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
