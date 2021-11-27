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
import "../scss/socials.scss"
import "../scss/contactPage.scss"

import FullImage from "../components/fullImage"
import PerfectScrollbar from "react-perfect-scrollbar"
import ScrollToTopButton from "../components/scrollToTopButton"

const Contact = ({ location }) => {

  const data = useStaticQuery(graphql`
    query {
      contact1: file(relativePath: { eq: "contact1.JPG" }) {
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
      <link
        rel="stylesheet"
        href=" https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div ref={pageRef}>
        <NavBar makeWhite={true} pageRef={pageRef} disableAnim={false} />
        <div className="project-page-black contact-page">
          <div className="contact-page-cont">
            <div className="contact-page-content">
             <ContFiftyFifty
          rightImg={data.contact1.childImageSharp.fluid}
          setImgWidth={'400px'}
          left={
            '<h1>Get In Touch</h1><span className="divider"></span><p><a href="https://ecommerce-react-app.herokuapp.com/" target="_blank" class="link link--mneme">Email Me ✉️</a></p><p><a href="https://ecommerce-react-app.herokuapp.com/" target="_blank" class="link link--mneme">Github 💻</a></p><p><a href="https://ecommerce-react-app.herokuapp.com/" target="_blank" class="link link--mneme">LinkedIn 👋</a></p>'
          }
        />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
