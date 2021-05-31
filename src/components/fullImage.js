import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Img from "gatsby-image"

const variants = {
  on: { opacity: 1, y: 0 },
  off: { opacity: 0, y: 100 },
}

const FullImage = props => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  })

  const getFlexValue = (block) => {
    console.log(props.align + ' alighn---');
    if (block == 1) {
      if (props.align == 'left') {
      return 0;
    } else if (props.align == 'right') {
      return 2;
    } else {
      return 1;
    }
    } else if (block == 3) {
      if (props.align == 'left') {
      return 2;
    } else if (props.align == 'right') {
      return 0;
    } else {
      return 1;
    }
    }
  }

  return (
    <div className="full-image">
    <div className='block-1' style={{flex: getFlexValue(1)}}></div>
      <motion.div animate={ inView ? 'on' : 'off' }
      variants={variants}
  transition={{ type: "spring", duration: 3, bounce: 0 }} ref={ref} className='block-2'>
        <Img fluid={props.img} />
      </motion.div>
      <div className='block-3' style={{flex: getFlexValue(3)}}></div>
    </div>
  )
}
export default FullImage
