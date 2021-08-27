import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from '@reach/router'

import ScrollToTopButton from "./scrollToTopButton";

import "../scss/navbar.scss"

const NavBar = props => {

  const variants = {
  on: { opacity: 1, y: 0, scale: 1 },
  off: { opacity: 0, y: -50, scale: 0 },
}

  //console.log(props.url);

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

  const [onTop, setOnTop] = useState(true);
     const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {

    // if (location.pathname !== "/nordstrom") {  
    //   return () => window.removeEventListener("scroll", onScroll, true);
    // }

  function onScroll() {
    console.log(props.pageRef.current.getBoundingClientRect().top);
    if (props.pageRef.current.getBoundingClientRect().top >= 0) {
      console.log('topo');
      setOnTop(true)
    } else {
      console.log('not top');
      setOnTop(false)
    }
  }

  console.log('Navbar useeffect');
  window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);



},[]);

  return (
    <>
    <motion.nav
    animate={onTop ? "on" : "off"}
        variants={ props.disableAnim ? null : variants }
        //variants={variants}
        transition={{ type: "spring", duration: 0.75, bounce: 0.5 }}
    >
      <div className={props.makeWhite ? 'nav-main-cont nav-white' : 'nav-main-cont nav-black'}>
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
        <AniLink cover direction="up" bg="#e5e5e5" to="/" duration={1.5}>
          Contact
        </AniLink>
        </motion.div>
      </div>
    </motion.nav>
    <ScrollToTopButton onTopBool={onTop} pageRef={props.pageRef}/>
    </>
  )
}

export default NavBar
