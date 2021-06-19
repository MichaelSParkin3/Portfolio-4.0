import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from '@reach/router'

import "../scss/navbar.scss"

const ScrollToTopButton = props => {

    console.log(props.pageRectTop)

  return (
    <motion.div>

    </motion.div>
  )
}

export default ScrollToTopButton
