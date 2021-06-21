import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from '@reach/router'

import upArrow from '../images/svg/upArrow.svg'

import "../scss/scrollToTopButton.scss"

const ScrollToTopButton = props => {

      const variants = {
  on: { opacity: 1, y: 0, scale: 1 },
  off: { opacity: 0, y: -50, scale: 0 },
}

    console.log(props.pageRectTop)

    const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <motion.div animate={props.onTopBool ? "off" : "on"}
        //variants={ props.disableAnim ? null : variants }
        variants={variants}
        transition={{ type: "spring", duration: 0.75, bounce: 0.5 }}
        className='scrollToCont'>
        
  
    
    </motion.div>
  )
}

export default ScrollToTopButton
