import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from '@reach/router'

import UpArrowInline from '../images/svg/upArrow4.inline.svg'

import "../scss/scrollToTopButton.scss"

console.log(UpArrowInline);

const ScrollToTopButton = props => {

      const variants = {
  on: { opacity: 1, y: 0, scale: 1 },
  off: { opacity: 0, y: -50, scale: 0 },
}

    console.log(props.onTopBool)

    const [onTop, setOnTop] = useState(false);

    useEffect(() => {

      setOnTop(props.onTopBool)

    }, [props.onTopBool])

    const scrollToTop = () =>{
    props.pageRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <motion.div animate={onTop ? "off" : "on"}
        //variants={ props.disableAnim ? null : variants }
        variants={variants}
        transition={{ type: "spring", duration: 0.75, bounce: 0.5 }}
        whileHover={{
    scale: 1.2,
    transition: { type: "spring", duration: 0.25, bounce: 0.5 },
  }}
  whileTap={{ scale: 0.8 }}
        className='scrollToCont'
        onClick={() => {
          scrollToTop();
        }}>
        
    <UpArrowInline/>
    
    </motion.div>
  )
}

export default ScrollToTopButton
