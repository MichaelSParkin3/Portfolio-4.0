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
          right={
            '<h1>ShaneCo Quizes & Components</h1><span className="divider"></span><p>I worked with Shaneco. and their team to re-develop their product suggestion quizes, create new re-usable components, and fix some cookie related problems they were having.</p>'
          }
        />

        <ContFiftyFifty left={"<h1>Html</br>Css</br>Javascript</h1>"} />
        <ContFiftyFifty
          rightImg={data.verb2.childImageSharp.fluid}
          setImgWidth={"280px"}
          left={
            '<h1>The Quizzes</h1><span className="divider"></span><p>I re-developed their suggestion quiz into a re-usable and customizable component by building upon their existing code. The quiz asks the user questions and based on their answer combinations the user is reccomended different products to buy from the Shaneco store.</p><a href="https://www.shaneco.com/engagement-wedding/engagement-rings/style-finder?promo_name=nav&promo_id=engagement&promo_creative=stylefinder" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />
        <ContFiftyFifty
          leftImg={data.verb3.childImageSharp.fluid}
          setImgWidth={"500px"}
          right={'<p><-- Mobile Landscape</p>'}
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

