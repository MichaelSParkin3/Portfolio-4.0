import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const variants = {
  on: { opacity: 1, y: 0 },
  off: { opacity: 0, y: 100 },
}

const FullpageNumber = props => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  })
  console.log(props.url);
  return (
    <div className="fullpage">
      <motion.div animate={ inView ? 'on' : 'off' }
      variants={variants}
  transition={{ type: "spring", duration: 3, bounce: 0 }} ref={ref} className="number">
        {props.number}
      </motion.div>
    </div>
  )
}
export default FullpageNumber
