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
      verb10: file(relativePath: { eq: "verb10.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      verb9: file(relativePath: { eq: "verb9.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      verb8: file(relativePath: { eq: "verb8.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      verb12: file(relativePath: { eq: "verb12.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      verb4: file(relativePath: { eq: "verb4.png" }) {
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
            '<h1>Verb Labs</h1><span className="divider"></span><p>The NFT company Verb Labs asked me to manage hosting and work with a backend developer to make 3 different versions or phases of their website. First a minimalistic webpage with their social links.</p><a href="https://twitter.com/verb_labs" target="_blank" class="link link--mneme">Find Them Here</a> '
          }
        />
        <ContFiftyFifty left={"<h1>Html</br>Css</br>Javascript</h1>"} />
        <ContFiftyFifty
          leftImg={data.verb3.childImageSharp.fluid}
          setImgWidth={"500px"}
          right={'<p>Mobile Landscape</p>'}
        />
        <FullImage
          align="center"
          img={data.verb1.childImageSharp.fluid}
        />
        <ContFiftyFifty
          leftImg={data.verb10.childImageSharp.fluid}
          setImgWidth={"280px"}
          right={
            '<h1>Phase 2</h1><span className="divider"></span><p>The purpose of this 2nd phase of their website was so the user could check to see if their Crypto address was whitelisted for the upcoming priority sale.</p>'
          }
        />
        <FullImage
          align="center"
          img={data.verb9.childImageSharp.fluid}
        />
        <ContFiftyFifty
          rightImg={data.verb8.childImageSharp.fluid}
          setImgWidth={"280px"}
          left={
            '<h1>Phase 3</h1><span className="divider"></span><p>Phase 3 is the more complicated and final site. At the top I made a minting UI to connect your crypto wallet to buy the verbs. First you connect your wallet and then depending on the time you would see either a screen to mint the NFTs or a clock ticking down to the next phase phase of the minting process. And below that we have a collection of videos of sample verbs doing their things and then more info.</p>'
          }
        />
        <FullImage
          align="center"
          img={data.verb12.childImageSharp.fluid}
        />
        <FullImage
          align="center"
          img={data.verb4.childImageSharp.fluid}
        />
      </div>
    </Layout>
  )
}

export default OtherWork

