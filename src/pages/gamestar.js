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
      gamestar1: file(relativePath: { eq: "gamestar1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gamestar2: file(relativePath: { eq: "gamestar2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gamestar3: file(relativePath: { eq: "gamestar3.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gamestar4: file(relativePath: { eq: "gamestar4.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gamestar5: file(relativePath: { eq: "gamestar5.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gamestar6: file(relativePath: { eq: "gamestar6.png" }) {
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
            '<h1>GameStar Exchange</h1><span className="divider"></span><p>I worked with the GameStar Exchange dev team as their front end developer to update their nextjs mobile site, update their landing page, and to create their entire nextjs desktop site. The purpose of their site is to facilitate P2P exchanges of crypto, giftcards, game items, and fiats. Complete with advertisements, a trading system, a judge system, and Metamask wallet connection. This is only a small sample of my work for GameStar.</p><a href="https://app.gamestar.exchange/" target="_blank" class="link link--mneme">Find Them Here</a>'
          }
        />

        <ContFiftyFifty left={"<h1>NextJs</br>React</br>Figma</h1>"} />
        <ContFiftyFifty
          rightImg={data.gamestar1.childImageSharp.fluid}
          setImgWidth={"480px"}
          left={
            '<h1>The Design</h1><span className="divider"></span><p>Working with the UI designer and the team of product managers we came up with an entire design on figma to guide me through the development process. I had to use the existing code from the mobile site to create a fully functioning desktop version.</p> '
          }
        />
        <ContFiftyFifty
          leftImg={data.gamestar2.childImageSharp.fluid}
          setImgWidth={"480px"}
          right={
            '<h1>Home Page</h1><span className="divider"></span><p>We wanted it to be both quick access to trading and provide a basic understanding of how the site works. I used and edited one of the existing modules and created the rest of the page to fit the design.</p><a href="https://app.gamestar.exchange/" target="_blank" class="link link--mneme">Find It Here</a>'
          }
        />
        <FullImage align="center" img={data.gamestar3.childImageSharp.fluid} />
        <ContFiftyFifty
          rightImg={data.gamestar4.childImageSharp.fluid}
          setImgWidth={"480px"}
          left={
            '<h1>Market Page</h1><span className="divider"></span><p>The purpose of this page was to organize and filter through the exchange ads to help the user find the ones they want and then start a trade. I had to redo the existing mobile version then make it display well on desktop. With a complete trading process with a live chat and judge arbitration system.</p>'
          }
        />
        <FullImage align="left" video={marketVideo} />
        <FullImage align="right" video={marketVideo2} />
        <ContFiftyFifty
          setImgWidth={"480px"}
          right={
            '<h1>Ad Creation & Management</h1><span className="divider"></span><p>According to the design I created a multiple step ad creation process with lots of info to help the user understand the process. Then I created a page to display and filter ads created by the user and to offer options to edit or delete their ads.</p>'
          }
        />
        <FullImage align="left" img={data.gamestar5.childImageSharp.fluid} />
        <FullImage align="right" video={adVideo} />
        <ContFiftyFifty
          setImgWidth={"480px"}
          left={
            '<h1>User Profile & Wallet</h1><span className="divider"></span><p>Following the design I built a profile page to connect your email and phone, a wallet page to connect your crypto wallets. Also a section to stake and unstake funds. Along with a section to show you all the info about the movement of your funds.</p> '
          }
        />
        <FullImage align="center" img={data.gamestar6.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default Gamestar
