import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from '@reach/router'

import "../scss/navbar.scss"

const NavBar = props => {

  const variants = {
  on: { opacity: 1, y: 0 },
  off: { opacity: 0, y: -50 },
}

  //console.log(props.url);

  const [onTop, setOnTop] = useState(true);

useEffect(() => {
  window.onscroll = function() {
      if(window.pageYOffset === 0 && onTop !== true) {
        
        setOnTop(true)
      } else if (onTop !== false) {
        setOnTop(false)
      }
    };
});

  return (
    <motion.nav
    animate={onTop ? "on" : "off"}
        variants={ props.disableAnim ? null : variants }
        // variants={variants}
        transition={{ type: "spring", duration: 1, bounce: 0 }}
    >
      <div className={props.makeWhite ? 'nav-main-cont nav-white' : 'nav-main-cont nav-black'}>
        <AniLink cover direction="up" bg="#e5e5e5" to="/">
          Projects
        </AniLink>

        <div className="nav-divider">|</div>
        <AniLink cover className="nav-logo" direction="up" bg="#e5e5e5" to="/">
          MIII
        </AniLink>
        <div className="nav-divider">|</div>
        <AniLink cover direction="up" bg="#e5e5e5" to="/">
          Contact
        </AniLink>
      </div>
    </motion.nav>
  )
}

export default NavBar
