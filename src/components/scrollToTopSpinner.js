import React, { useEffect, useRef, useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Img from "gatsby-image"

import "../scss/scrollToTopSpinner.scss"

const ScrollToTopSpinner = props => {

const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <motion.div animate={{
rotate: scrollPosition
    }} className="spinner">
    <h2 id="demo3">This text makes a complete rotation no matter how long it is. </h2>
    </motion.div>
  )
}
export default ScrollToTopSpinner
