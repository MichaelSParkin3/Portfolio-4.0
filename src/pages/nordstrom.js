import React, { useRef, useEffect, useState } from "react"
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
import Scrollbar from "react-smooth-scrollbar"
import { useSpring, animated as a, interpolate } from "react-spring"
import { useInView } from "react-intersection-observer"
import FullPageNumber from "../components/fullpageNumber"
import ContFiftyFifty from "../components/contFiftyFifty"
import NavBar from "../components/navBar"

import "../scss/shanecoPage.scss"
import FullImage from "../components/fullImage"
import PerfectScrollbar from "react-perfect-scrollbar"

const Shaneco = ({ location }) => {
  console.log(location.pathname)
  const data = useStaticQuery(graphql`
    query {
      nordstrom1: file(relativePath: { eq: "nordstrom1.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom2: file(relativePath: { eq: "nordstrom2.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom3: file(relativePath: { eq: "nordstrom3.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom4: file(relativePath: { eq: "nordstrom4.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom5: file(relativePath: { eq: "nordstrom5.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom6: file(relativePath: { eq: "nordstrom6.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom8: file(relativePath: { eq: "nordstrom8.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom9: file(relativePath: { eq: "nordstrom9.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom10: file(relativePath: { eq: "nordstrom10.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom11: file(relativePath: { eq: "nordstrom11.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom12: file(relativePath: { eq: "nordstrom12.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nordstrom7: file(relativePath: { eq: "nordstrom7.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [onTop, setOnTop] = useState(true);

  useEffect(() => {

  function onScroll() {
    console.log(pageRef.current.getBoundingClientRect().top);
    if (pageRef.current.getBoundingClientRect().top >= 0) {
      console.log('topo');
      setOnTop(true)
    } else {
      console.log('not top');
      setOnTop(false)
    }
  }

  console.log('Navbar useeffect');
  window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll);

},[]);

const pageRef = useRef(null);



  console.log(data)

  return (
    <Layout url={location.pathname}>
      <div className="project-page" ref={pageRef}>
        <NavBar makeWhite={false} onTopBool={onTop} disableAnim={false}/>

        <FullPageNumber url={location} number="02" />

        <ContFiftyFifty
          right={
            '<h1>Mock Clothing Store</h1><span className="divider"></span><p>I saw a website design for a fitness clothing brand and decided to make the complete front end of the website with react. This helped me get more comfortable with react and redux.</p>'
          }
        />

        <ContFiftyFifty left={"<h1>React</br>Redux</br>Sass</h1>"} />

        <FullImage
          align="center"
          img={data.nordstrom1.childImageSharp.fluid}
        />

        <ContFiftyFifty
          rightImg={data.nordstrom2.childImageSharp.fluid}
          setImgWidth={'370px'}
          left={
            '<h1>Home Page</h1><span className="divider"></span><p>The above photo is the original design for the home page. The photos below are from the website I created myself. I tried to make it pretty much the same but sadly I did not have access to the photos or the font. Click the link below to go and interact with my site.</p><a href="https://ecommerce-react-app.herokuapp.com/" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />

        <FullImage
          align="left"
          img={data.nordstrom3.childImageSharp.fluid}
        />

        <FullImage
          align="right"
          img={data.nordstrom4.childImageSharp.fluid}
        />
        
          <ContFiftyFifty
          leftImg={data.nordstrom6.childImageSharp.fluid}
          setImgWidth={'370px'}
          right={
            '<h1>Search By Category</h1><span className="divider"></span><p>This page allows you to either look through all of the gym wear or to filter through the gym wear by type and/or color. I am happy with how it turned out. It works pretty well and it looks good in my opinion.</p><a href="https://ecommerce-react-app.herokuapp.com/products" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />

        <FullImage
          align="left"
          img={data.nordstrom5.childImageSharp.fluid}
        />

        <ContFiftyFifty
          rightImg={data.nordstrom8.childImageSharp.fluid}
          setImgWidth={'370px'}
          left={
            '<h1>Search Bar</h1><span className="divider"></span><p>If you click the cute little magnifying glass icon then you will open up the search bar. Here you can search up any of the products by name. Click the link below and try it yourself to see the cool little slide in animation.</p><a href="https://ecommerce-react-app.herokuapp.com/" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />

        <FullImage
          align="right"
          img={data.nordstrom7.childImageSharp.fluid}
        />

        <ContFiftyFifty
          leftImg={data.nordstrom10.childImageSharp.fluid}
          setImgWidth={'370px'}
          right={
            '<h1>Product Page</h1><span className="divider"></span><p>This page is made to display all the information about the product and allow you to add the product to your cart. If you mouse over the photo then you can zoom in. Also you can adjust the quantity and size before adding the product to your cart.</p><a href="https://ecommerce-react-app.herokuapp.com/products" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />

        <FullImage
          align="left"
          img={data.nordstrom9.childImageSharp.fluid}
        />

        <ContFiftyFifty
          rightImg={data.nordstrom11.childImageSharp.fluid}
          setImgWidth={'370px'}
          left={
            '<h1>Shopping Cart</h1><span className="divider"></span><p>This page displays all the items added to your shopping cart and adds up the price to show you your total. You can also click the red X to remove an item from your cart.</p><a href="https://ecommerce-react-app.herokuapp.com/" target="_blank" class="link link--mneme">Find It Here</a> '
          }
        />

        <FullImage
          align="right"
          img={data.nordstrom12.childImageSharp.fluid}
        />

      </div>
    </Layout>
  )
}

export default Shaneco
