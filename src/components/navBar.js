import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from '@reach/router'
import { useStaticQuery, graphql } from "gatsby"

import ScrollToTopButton from "./scrollToTopButton";
import ContactPopUp from "./contactPopUp";

import Github from '../images/svg/github.svg'
import { FaGithub, FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

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
      },
      github: file(relativePath: { eq: "github2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      linkedin: file(relativePath: { eq: "linkedin2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      email: file(relativePath: { eq: "email2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const variants = {
  on: { opacity: 1, y: 0, scale: 1 },
  off: { opacity: 0, y: -50, scale: 0 },
}

  /**
   * onTop: True initally and true if page is scrolled to top. Otherwise it is false.
   * contactIsOpen : 
  */
  const [onTop, setOnTop] = useState(true);
  const [contactIsOpen, setContactIsOpen] = useState(false);

  useEffect(() => {

    /**
   * onScroll:
   * If the page is not at scrolled to the top then change the onTop state so 
   * the navbar can hide itself and the scrollToTopArrow can appear. If the page
   * is at the top then update the onTop state to true and hide the scrollToTopArrow
   * and make the navbar appear.
   */

  function onScroll() {
    console.log(props.pageRef);
    console.log(props.pageRef.current.getBoundingClientRect().top);
    if (props.pageRef.current.getBoundingClientRect().top >= 0) {
      console.log('topo');
      
      setOnTop(true)
      
    } else {
      console.log('not top');
      if (onTop !== false) {
      setOnTop(false)
      }
    }
  }

  console.log('Navbar useeffect');
  window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);



},[]);

  function onContactClick () {
    setContactIsOpen(previousContactIsOpen => !previousContactIsOpen)
    console.log('ON CONTACT CLICK');
  }

  return (
    <>
    <motion.nav
    animate={onTop ? "on" : "off"}
        variants={ props.disableAnim ? null : variants }
        //variants={variants}
        transition={{ type: "spring", duration: 0.75, bounce: 0.5 }}
    >
      <div className={props.makeWhite && !contactIsOpen ? 'nav-main-cont nav-white' : 'nav-main-cont nav-black'}>
      <motion.div whileTap={{ scale: 0.7 }} whileHover={{
    scale: 1.2,
    transition: { type: "spring", duration: 0.25, bounce: 0.5 },
  }}>
        <AniLink cover direction="up" bg="#e5e5e5" to="/" duration={1.5}>
          Projects
        </AniLink>
</motion.div>
        <div className="nav-divider">|</div>
        <motion.div id="nav-logo-id" className="nav-logo" whileTap={{ scale: 0.7 }} whileHover={{
    scale: 1.2,
    transition: { type: "spring", duration: 0.25, bounce: 0.5 },
  }}>
        <AniLink cover direction="up" duration={1.5} to="/">
          MIII
        </AniLink>
        </motion.div>
        <div className="nav-divider">|</div>
        <motion.div whileTap={{ scale: 0.7 }} whileHover={{
    scale: 1.2,
    transition: { type: "spring", duration: 0.25, bounce: 0.5 },
  }}>
        <a onClick={onContactClick}>
          Contact
        </a>
        </motion.div>
      </div>
    </motion.nav>
    <ScrollToTopButton onTopBool={onTop} pageRef={props.pageRef}/>
    <ContactPopUp items={[{content: '0000', key: '0', icon: <FaGithub/>}, {'content': '1111', key: '1', icon: <FaEnvelope/>}, {content: '2222', key: '2', icon: <FaLinkedin/>}, {content: '3333', key: '3', icon: <FaPhone/>}]} img={data.contactImage.childImageSharp.fluid} contactIsOpen={contactIsOpen}/>
    </>
  )
}

export default NavBar
