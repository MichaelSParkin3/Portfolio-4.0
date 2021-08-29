import React, { useRef, useEffect, useState, useCallback } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MyComponent from "../components/myComponent"
import Plx from "react-plx"
import Fade from "react-reveal/Zoom"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Scrollbar from "react-smooth-scrollbar"
import { useInView } from "react-intersection-observer"
import FullPageNumber from "../components/fullpageNumber"
import ContFiftyFifty from "../components/contFiftyFifty"
import NavBar from "../components/navBar"
import AnimateOnScroll from "../components/animateOnScroll"

import "../scss/shanecoPage.scss"
import FullImage from "../components/fullImage"
import PerfectScrollbar from "react-perfect-scrollbar"
import ScrollToTopButton from "../components/scrollToTopButton"

const Contact = ({ location }) => {

const pageRef = useRef(null);

  return (
    <Layout url={location.pathname}>
      <div ref={pageRef} >
        <NavBar makeWhite={true} pageRef={pageRef} disableAnim={false}/>

            <div>

            </div>

      </div>
    </Layout>
  )
}

export default Contact
