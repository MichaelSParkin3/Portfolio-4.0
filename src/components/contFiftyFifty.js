import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Img from "gatsby-image"

const variants = {
  on: { opacity: 1, y: 0 },
  off: { opacity: 0, y: 100 },
}

const ContFiftyFifty = (props) => {

  console.log(props.url);

    const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  })

  const doesImgExist = (img) => {
    if (img != null) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className={doesImgExist(props.rightImg) || doesImgExist(props.leftImg) ? 'double cont-50-50' : 'single cont-50-50'}>
      <motion.div
        className="inner-50-50 inner-50-50-left"
        animate={inView ? "on" : "off"}
        variants={variants}
        transition={{ type: "spring", duration: 3, bounce: 0 }}
        style={{ top: "100px" }}
        ref={ref}
        
      >
      <div className='inner-html inner-html-1' dangerouslySetInnerHTML={{__html: props.left}}></div>
      <div style={doesImgExist(props.leftImg) ? {display: 'flex'} : {display: 'none'}} className={doesImgExist(props.rightImg) ? 'inner-html inner-html-2 inner-img' : 'inner-html inner-html-2 inner-img'}>
        <Img fluid={props.leftImg} />
      </div>
      </motion.div>
      <motion.div
        className="inner-50-50 inner-50-50-right"
        animate={inView ? "on" : "off"}
        variants={variants}
        transition={{ type: "spring", duration: 3, bounce: 0 }}
        style={{ top: "100px" }}
        ref={ref}
      >
      <div className='inner-html inner-html-2' dangerouslySetInnerHTML={{__html: props.right}}></div>
      <div style={doesImgExist(props.rightImg) ? {display: 'flex'} : {display: 'none'}} className={doesImgExist(props.rightImg) ? 'inner-html inner-html-2 inner-img' : 'inner-html inner-html-2 inner-img'}>
        <Img fluid={props.rightImg} />
      </div>
        
      </motion.div>
    </div>
  )
}
export default ContFiftyFifty
