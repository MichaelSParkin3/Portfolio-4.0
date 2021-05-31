import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from '@reach/router'

import "../scss/navbar.scss"

const NavBar = (location) => {

  const variants = {
  on: { opacity: 1, y: 0 },
  off: { opacity: 0, y: -50 },
}

  //console.log(props.url);

  var makeWhite = false

  const [onTop, setOnTop] = useState(true);

  console.log(location);

//   if (location.url !== undefined) {
//   if (location.url.pathname == '/shaneco') {
//     makeWhite = true
//     console.log('---- TRUE');
//   } else {
//     makeWhite = false
//   }
// }

if (location.url !== undefined) {

switch(location.url.pathname) {
  case undefined:
    break;
  case '/shaneco':
    makeWhite = true
    break;
    case '/':
      makeWhite = false
      break;
  default:
    makeWhite = false
}

}

useEffect(() => {
  window.onscroll = function() {
      if(window.pageYOffset === 0 && onTop !== true) {
        
        setOnTop(true)
      } else if (onTop !== false) {
        setOnTop(false)
      }
    };
});

const routeChange = () => {
console.log('------GOO');
}

useEffect(() => {
  return globalHistory.listen(({ action }) => {
    if (action === 'PUSH') routeChange(false)
  })
}, [routeChange])



  return (
    <motion.nav
    animate={onTop ? "on" : "off"}
        variants={variants}
        transition={{ type: "spring", duration: 1, bounce: 0 }}
    >
      <div className={makeWhite ? 'nav-main-cont nav-black' : 'nav-main-cont nav-white'}>
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
