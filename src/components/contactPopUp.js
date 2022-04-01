import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from '@reach/router'

import "../scss/contactPopUp.scss"

const ContactPopUp = props => {

      const variants = {
  openedTop: { y: 100 },
  closedTop: { y: 0 },
  openedBottom: { y: 100 },
  closedBottom: { y: 0 }
}


  return (
//     <motion.div animate={onTop ? "off" : "on"}
//         //variants={ props.disableAnim ? null : variants }
//         variants={variants}
//         transition={{ type: "spring", duration: 0.75, bounce: 0.5 }}
//         whileHover={{
//     scale: 1.2,
//     transition: { type: "spring", duration: 0.25, bounce: 0.5 },
//   }}
//   whileTap={{ scale: 0.8 }}
//         className='scrollToCont'
//         onClick={() => {
//           scrollToTop();
//         }}>
        
//     <UpArrowInline/>
    
//     </motion.div>
<div>
    <motion.div class={'contactTopSlider'} animate={props.contactIsOpen ? "openedTop" : "closedTop"} variants={variants}>

    </motion.div>
    <motion.div class={'contactBottomSlider'} animate={props.contactIsOpen ? "openedBottom" : "closedBottom"} variants={variants}>

    </motion.div>
</div>
  )
}

export default ContactPopUp
