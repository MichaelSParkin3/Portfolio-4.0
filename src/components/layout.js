/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useEffect, useRef, useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import NavBar from "./navBar"
import Scrollbar from "react-smooth-scrollbar"
import ContactPopUp from "./contactPopUp"

import { FaGithub, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa"

import "../scss/layout.scss"

const Layout = ({ children }, {location}, props) => {
  console.log(props);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    },
  `)

  const [isContactOpen, setIsContactOpen] = useState(false)

  const pageRef = useRef(null);

  const url = typeof window !== 'undefined' ? window.location.href : '';
  var splitUrl = ''
  var makeWhite = true;
  var contactIsOpen = false;
  var popUpKey = 0;

  console.log(url);

  splitUrl = url.split('/')[3];

  console.log(splitUrl);

  function OpenContact() {
    console.log('before contactisopen '+contactIsOpen);
    setIsContactOpen(!isContactOpen)
    console.log('after contactisopen '+contactIsOpen);
    popUpKey = popUpKey + 1;
  }

  return (
    <div
      id="layout-cont"
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={pageRef}
    >

     <NavBar makeWhite={true} path={splitUrl} pageRef={pageRef} disableAnim={false} OpenContact={OpenContact} contactIsOpen={isContactOpen}/>

     <ContactPopUp
     key={'1'}
     
      items={[
          { content: "Check out my github", link: "https://github.com/MichaelSParkin3", key: "0", icon: <FaGithub /> },
          { content: "Send me an email", link: "mailto:MichaelSParkin3@gmail.com", key: "1", icon: <FaEnvelope /> },
          { content: "Connect with me", link: "https://www.linkedin.com/in/michael-parkin-702396133/", key: "2", icon: <FaLinkedin /> },
          { content: "My BEST contact, TEXT ME", link: "sms:1-323-393-0360", key: "3", icon: <FaPhone /> },
        ]}
        
        contactIsOpen={isContactOpen} />

      <main
      
        style={{
          width: "100vw",
          height: "100%",
        }}
      >
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
