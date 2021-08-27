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

const Shaneco = ({ location }) => {
  console.log(location.pathname)
  const data = useStaticQuery(graphql`
    query {
      screenshot1: file(relativePath: { eq: "screenshot1-test.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot2: file(relativePath: { eq: "screenshot2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot4: file(relativePath: { eq: "screenshot4.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshot3: file(relativePath: { eq: "screenshot3.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      components1: file(relativePath: { eq: "components1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      components2: file(relativePath: { eq: "components2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      components3: file(relativePath: { eq: "components3.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

const pageRef = useRef(null);

  console.log(data)

  const getLocation = () => {
    console.log(location.pathname + " GET LOCATRIN")
    return location.pathname
  }

  return (
    <Layout url={location.pathname}>
      <div className="project-page" ref={pageRef} >
        <NavBar makeWhite={false} pageRef={pageRef} disableAnim={false}/>

        <FullPageNumber url={location} number="01" />
        <ContFiftyFifty
          right={
            '<h1>ShaneCo Quizes & Components</h1><span className="divider"></span><p>I worked with Shaneco. and their team to re-develop their product suggestion quizes, create new re-usable components, and fix some cookie related problems they were having.</p>'
          }
        />

        <ContFiftyFifty left={"<h1>Html</br>Css</br>Javascript</h1>"} />
        <ContFiftyFifty
          rightImg={data.screenshot4.childImageSharp.fluid}
          setImgWidth={"480px"}
          left={
            '<h1>The Quizzes</h1><span className="divider"></span><p>I re-developed their suggestion quiz into a re-usable and customizable component by building upon their existing code. The quiz asks the user questions and based on their answer combinations the user is reccomended different products to buy from the Shaneco store.</p><a href="https://www.shaneco.com/engagement-wedding/engagement-rings/style-finder?promo_name=nav&promo_id=engagement&promo_creative=stylefinder" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />
        <FullImage
          align="center"
          img={data.screenshot1.childImageSharp.fluid}
        />

        <FullImage align="right" img={data.screenshot2.childImageSharp.fluid} />
        <FullImage align="left" img={data.screenshot3.childImageSharp.fluid} />
        <ContFiftyFifty
          leftImg={data.components3.childImageSharp.fluid}
          setImgWidth={"370px"}
          right={
            '<h1>Components</h1><span className="divider"></span><p>I helped the Shaneco. team create a huge collection of re-usable front end components. These components are used all over the entire Shaneco. site. Each component is made with simple, easy to understand, interchangable CSS classes. This is so the less code savvy employees can easily understand and use the components.</p><a href="https://www.shaneco.com/all-components" target="_blank" class="link link--mneme">Find It Here</a>'
          }
        />
        <FullImage align="right" img={data.components1.childImageSharp.fluid} />
        <FullImage align="left" img={data.components2.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default Shaneco
