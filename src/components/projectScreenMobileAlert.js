import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import "../scss/fullPageNumber.scss"

const ProjectScreenMobileAlert = props => {

    return (

    <div className={'mobileAlert'} style={props.onIOS ? { display: 'flex' } : { display: 'none' }}>
      Tap twice to open a project!
      </div>
  
    )

}
export default ProjectScreenMobileAlert
