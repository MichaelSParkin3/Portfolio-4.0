import React, { useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MyComponent from "../components/myComponent"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Plx from "react-plx"
import Fade from "react-reveal/Zoom"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../scss/projectPage.scss"

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 0,
    end: "80vh",
    properties: [
      {
        startValue: -250,
        endValue: 250,
        property: "translateX",
      },
    ],
  },
]

const Shaneco = () => {
  const data = useStaticQuery(graphql`
    query {
      screenshot1: file(relativePath: { eq: "screenshot1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <div className="fullpage">
        <div className="number">01</div>
      </div>
      <div className="text-50-50">
        <div></div>
        <div>
          <h2>Shaneco.com Quizes & Components</h2>
          <p>
            dsf sfds sdf dsf sdfsdfdsdsf sdfsdf sdfsdfsdf fsdf sdfsdfsdf
            sdfsdfsdf ffs sfdfsd sfsfdf dsf sfds sdf dsf sdfsdfdsdsf sdfsdf
            sdfsdfsdf fsdf sdfsdfsdf sdfsdfsdf ffs sfdfsd sfsfdf dsf sfds sdf
            dsf sdfsdfdsdsf sdfsdf sdfsdfsdf fsdf sdfsdfsdf sdfsdfsdf ffs sfdfsd
            sfsfdf dsf sfds sdf dsf sdfsdfdsdsf sdfsdf sdfsdfsdf fsdf sdfsdfsdf
            sdfsdfsdf ffs sfdfsd sfsfdf
          </p>
        </div>
      </div>

      <div className="text-50-50">
        <div>
          <h2>
            Html<br></br>Scss<br></br>Javascript
          </h2>
        </div>
        <div></div>
      </div>
      <div className="big-img">
        <Img fluid={data.screenshot1.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default Shaneco
