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

import marketVideo from "../images/videos/gamestarMarket1.mp4"
import marketVideo2 from "../images/videos/gamestarMarket2.mp4"
import adVideo from "../images/videos/gamestarAd.mp4"

const Gamestar = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      ocusell1x: file(relativePath: { eq: "ocusell1.gif" }) {
        publicURL
      }
      ocusellBig: file(relativePath: { eq: "ocusellBig.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ocusell2: file(relativePath: { eq: "ocusell2.gif" }) {
        publicURL
      }
      ocusell3: file(relativePath: { eq: "ocusell3.gif" }) {
        publicURL
      }
      ocusell4: file(relativePath: { eq: "ocusell4.gif" }) {
        publicURL
      }
      headlessBig: file(relativePath: { eq: "headlessBig.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wordpressBig: file(relativePath: { eq: "wordpressBig.jpg" }) {
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
        <FullPageNumber url={location} number="02" />
        <ContFiftyFifty
          right={
            '<h1>Lampros Labs</h1><span className="divider"></span><p>At Lampros I worked on many different projects for various companies. From headless wordpress sites to cross platform applications. So I will walk you through just a few of my favorite projects.</p><a href="https://www.linkedin.com/company/lampros-labs/" target="_blank" class="link link--mneme">Find Them Here</a>'
          }
        />

        <ContFiftyFifty
          rightImg={data.ocusell1x.publicURL}
          isGif={true}
          setImgWidth={"480px"}
          left={
            '<h1>Ocusell.AI</h1><span className="divider"></span><p>The Ocusell app is AI driven listing input software that enables brokers, agents, and staff to auto-pop data in seconds and seamlessly publish listings across one or multiple MLSs at once. I am not sure what I am allowed to show so I will only show info that is available to the public. If you want to learn more about the app then click the link below.</p><a href="https://www.ocusell.ai/" target="_blank" class="link link--mneme">Find Out More</a>'
          }
        />

        <ContFiftyFifty right={"<h1>Svelte</br>Laravel</br>Javascript</h1>"} />

        <FullImage align="center" img={data.ocusellBig.childImageSharp.fluid} />

        <ContFiftyFifty
          rightImg={data.ocusell2.publicURL}
          isGif={true}
          setImgWidth={"480px"}
          left={
            '<h1>Listing Creation Page</h1><span className="divider"></span><p>I mainly worked on the functionality of the most important page, the huge form page to make a listing across multiple mlses at once. I made various fixes to the validations of the MANY fields and worked with my colleague to figure out how to follow all the rules of each MLS.</p>'
          }
        />

        <ContFiftyFifty
          leftImg={data.ocusell3.publicURL}
          isGif={true}
          setImgWidth={"480px"}
          right={
            '<h1>Error Resolution</h1><span className="divider"></span><p>I also made the entire error resolution page and system. When you attempt to submit a listing the error resolution system will check every single input for every mls and check if there is an error and check if the input is conflicting with an mlses strict rules. It will then direct you to the error resolution page and go through each error with you one by one making sure every input is validated and following the every properly.</p>'
          }
        />

        <ContFiftyFifty
          rightImg={data.ocusell4.publicURL}
          isGif={true}
          setImgWidth={"480px"}
          left={
            '<h1>Importing Team Members</h1><span className="divider"></span><p>Another thing I worked on was the UI for importing team members. Whether you wanted to add them manually or from a document. If importing many at once I made a handy modal that allows you to select which team they are sent to and what type of privileges each user gets.</p>'
          }
        />

        <ContFiftyFifty
          right={
            '<h1>Headless Wordpress Site</h1><span className="divider"></span><p>The Lampros company site got a much needed revamp. We decided to do it headless and we created custom acf blocks so our marketer could arrange and put in content in the editor as she sees fit. As I am writing this the new site is not up because the content is still being written. When it is up I will change the link.</p><a href="https://www.linkedin.com/company/lampros-labs/" target="_blank" class="link link--mneme">Find Them Here</a>'
          }
        />

        <ContFiftyFifty
          left={
            "<h1>Headless Wordpress</br>Svelte</br>Javascript</br>Tailwind</h1>"
          }
        />

        <FullImage
          align="center"
          img={data.headlessBig.childImageSharp.fluid}
        />

<ContFiftyFifty
          right={
            '<h1>Wordpress Sites</h1><span className="divider"></span><p>We built various wordpress sites for small businesses. One for example was this site for the famous beer brewing author Randy Mosher.</p><a href="https://randymosher.com/" target="_blank" class="link link--mneme">Find It Here</a>'
          }
        />

<FullImage
          align="center"
          img={data.wordpressBig.childImageSharp.fluid}
        />

      </div>
    </Layout>
  )
}

export default Gamestar
