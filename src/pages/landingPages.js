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

const LandingPages = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      coffee3: file(relativePath: { eq: "coffee3.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coffee1: file(relativePath: { eq: "coffee1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coffee2: file(relativePath: { eq: "coffee2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coffee5: file(relativePath: { eq: "coffee5.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coffee6: file(relativePath: { eq: "coffee6.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      bike1: file(relativePath: { eq: "bike1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bike2: file(relativePath: { eq: "bike2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout url={location.pathname}>
      <div className="project-page">
        <FullPageNumber url={location} number="02" />
        <ContFiftyFifty
          right={
            '<h1>Landing Pages</h1><span className="divider"></span><p>Here is a collection of some landing pages I have created.</p>'
          }
        />

        <ContFiftyFifty left={"<h1>Html</br>Css</br>Javascript</h1>"} />
        <ContFiftyFifty
          rightImg={data.coffee3.childImageSharp.fluid}
          setImgWidth={"480px"}
          left={
            '<h1>Coffee Company Mock</h1><span className="divider"></span><p>I created a mock landing page for a coffee company. It is optimized for mobile and has a review slider and some other features.</p><a href="https://michaelsparkin3.github.io/Coffee-Landing-Page/" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />
        <FullImage align="center" img={data.coffee1.childImageSharp.fluid} />

        <FullImage align="right" img={data.coffee2.childImageSharp.fluid} />
        <ContFiftyFifty
          leftImg={data.coffee5.childImageSharp.fluid}
          setImgWidth={"370px"}
          rightImg={data.coffee6.childImageSharp.fluid}
        />

        {/* <ContFiftyFifty
          left={
            '<h1>Bike Rental Mock</h1><span className="divider"></span><p>Bike rental company landing page made with react for fun. Has cute hover animations.</p><a href="https://rent-a-bike-react.herokuapp.com/landing" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />
        <FullImage align="center" img={data.bike1.childImageSharp.fluid} />

        <FullImage align="right" img={data.bike2.childImageSharp.fluid} /> */}
      </div>
    </Layout>
  )
}

export default LandingPages
