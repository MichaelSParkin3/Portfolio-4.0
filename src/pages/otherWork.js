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

import "../scss/projectPage.scss"
import FullImage from "../components/fullImage"
import PerfectScrollbar from "react-perfect-scrollbar"
import ScrollToTopButton from "../components/scrollToTopButton"

const OtherWork = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      verb1: file(relativePath: { eq: "verb1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      verb2: file(relativePath: { eq: "verb2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      verb3: file(relativePath: { eq: "verb3.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const pageRef = useRef(null)

  return (
    <Layout url={location.pathname}>
      <div className="project-page">
        <FullPageNumber url={location} number="04" />
        <ContFiftyFifty
          rightImg={data.verb2.childImageSharp.fluid}
          setImgWidth={"280px"}
          left={
            '<h1>Verb Labs</h1><span className="divider"></span><p>The NFT company Verb Labs asked me to make them a minimalistic webpage with their social links.</p><a href="https://verblabs.io/" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />
        <ContFiftyFifty
          leftImg={data.verb3.childImageSharp.fluid}
          setImgWidth={"500px"}
          right={'<p>Mobile Landscape</p>'}
        />
        <FullImage
          align="center"
          img={data.verb1.childImageSharp.fluid}
        />
      </div>
    </Layout>
  )
}

export default OtherWork

