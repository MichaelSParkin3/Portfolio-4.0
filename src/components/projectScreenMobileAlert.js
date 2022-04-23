import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { isIOS } from "react-device-detect"

import "../scss/fullPageNumber.scss"

const ProjectScreenMobileAlert = props => {
  const [isIOSState, setIsIOSState] = useState(true)

  useEffect(() => {
    setIsIOSState(isIOS)
  })

  return (
    <div
      className={"mobileAlert"}
      style={isIOSState ? { display: "flex" } : { display: "none" }}
    >
      Tap twice to open a project!
    </div>
  )
}
export default ProjectScreenMobileAlert
