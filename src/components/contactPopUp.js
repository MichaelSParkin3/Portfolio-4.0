import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion, AnimateSharedLayout } from "framer-motion"
import { globalHistory } from '@reach/router'

import "../scss/contactPopUp.scss"


const items = [{content: '0000', key: '0'}, {content: '1111', key: '1'}, {content: '2222', key: '2'}];


function Item({ content }) {
  const [isOpen, setIsOpen] = useState(false)

  return <motion.div layout>{isOpen && content}</motion.div>
}

function List({ items }) {

  /**
   * This wrapping motion.ul, and sibling
   * Item components won't animate layout
   * when an Item opens/closes
   */

  return (
    <motion.ul layout>
      {items.map(item => (
        <Item content={item.content} />
      ))}
    </motion.ul>
  )
}


const ContactPopUp = props => {

      const variants = {
  openedTop: { y: 0 },
  closedTop: { y: '-70vh' },
  openedBottom: { y: 0 },
  closedBottom: { y: '70vh' }
}

const variants2 = {
  opened: { opacity: 100, y: 0, delay: 1, rotate: 0, transition: {
      type: "spring", stiffness: 50,
      duration: 2,
      delay: 0.75
    } },
  closed: { opacity: 0, y: -50, rotate: 180 }
}

    console.log('props.contactisopen '+props.contactIsOpen);

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
<div className={'contactPopUp'}>
    <motion.div className={'contactTopSlider'} transition={{ type: "spring", stiffness: 100, duration: 1 }} animate={props.contactIsOpen ? "openedTop" : "closedTop"} variants={variants}>

    </motion.div>
    <motion.div className={'contactBottomSlider'} transition={{ type: "spring", stiffness: 100, duration: 1 }} animate={props.contactIsOpen ? "openedBottom" : "closedBottom"} variants={variants}>

    </motion.div>
    <motion.h1 animate={props.contactIsOpen ? "opened" : "closed"} variants={variants2}>
        Lets Talk
    </motion.h1>

    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map(item => (
          <Item key={item.key}>
            {item.content}
          </Item>
        ))}
      </motion.ul>
    </AnimateSharedLayout>

</div>
  )
}

export default ContactPopUp
