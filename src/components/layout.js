/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./navBar"
import ContactPopUp from "./contactPopUp"
import { isIOS, isAndroid } from "react-device-detect"

import { FaGithub, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa"

import "../scss/layout.scss"

/**
 * 
 * @param {object} children
 * * children : Children is the current page component eg. index, nordstrom, 404, shaneco
 * 
 */

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  /**
   * isContactOpen : Bool false initially, when true it will trigger contactPopUp to open.
   * makeWhite : Bool false initally, when true will tell the navbar to be white.
   * disableAnim : Bool false initally, when true will tell navbar to disable navBar animations.
   */

  const [isContactOpen, setIsContactOpen] = useState(false)
  const [makeWhite, setMakeWhite] = useState(false)
  const [disableAnim, setDisableAnim] = useState(false)

  const pageRef = useRef(null)

  /**
   * url : The current url of the website. "" if undefined.
   * splitUrl : the current pathname of the site. Everything after the ".com/"
   */
  const url = typeof window !== "undefined" ? window.location.href : ""
  var splitUrl = ""

  splitUrl = url.split("/")[3]

  /**
   * ToggleContact:
   * Changes the state of isContactOpen to the opposite of its current bool value.
   * Used to open or close the contactPopUp
   */

  function ToggleContact() {
    setIsContactOpen(!isContactOpen)
  }

  /**
   * CloseContact:
   * Changes the state of isContactOpen to false.
   * Used to only close the contactPopUp.
   */

  function CloseContact() {
    setIsContactOpen(false)
  }

  /**
   * AdjustColorAnime:
   * Used to adjust the color and animation of the Navbar component.
   * If the user is on the index page and the contactPopUp is closed then make Navbar white and disable
   * its animations. Else make navbar black and enable animations.
   */

  function AdjustColorAnim() {
    if ((splitUrl == "" || splitUrl == null) && !isContactOpen) {
      setMakeWhite(true)
      setDisableAnim(true)
    } else {
      setMakeWhite(false)
      setDisableAnim(false)
    }
  }

  /**
   * Run AdjustColorAnim when url or isContactOpen is changed.
   */

  useEffect(() => {
    AdjustColorAnim()
  }, [url, isContactOpen])

  /**
   * GetPhoneHref :
   * Used for the phone button on the ContactPopUp. If user is on IOS device then open the text message app.
   * If user is on an android device then trigger the device to add a contact using the provided info.
   * Else if user is on a different device then trigger an alert that provides phone number.
   */

  function GetPhoneHref() {
    if (isIOS) {
      window.open("sms:1-323-393-0360", "_blank")
    } else if (isAndroid) {
      window.open(
        window.open("tel:3233930360", "_blank")
      )
    } else {
      alert("Since you are not on android or IOS text me at: 1-323-393-0360")
    }
  }

  return (
    <div
      id="layout-cont"
      style={isContactOpen ? { overflowY: "hidden" } : { overflowY: "visible" }}
      ref={pageRef}
    >
      <NavBar
        makeWhite={makeWhite}
        pageRef={pageRef}
        disableAnim={disableAnim}
        CloseContact={CloseContact}
        ToggleContact={ToggleContact}
        contactIsOpen={isContactOpen}
      />

      <ContactPopUp
        key={"1"}
        items={[
          {
            content: "Check out my github",
            link: "https://github.com/MichaelSParkin3",
            key: "0",
            icon: <FaGithub />,
          },
          {
            content: "Send me an email",
            link: "mailto:MichaelSParkin3@gmail.com",
            key: "1",
            icon: <FaEnvelope />,
          },
          {
            content: "Connect with me",
            link: "https://www.linkedin.com/in/michael-parkin-702396133/",
            key: "2",
            icon: <FaLinkedin />,
          },
          {
            content: "My BEST contact, TEXT ME",
            link: "sms:1-323-393-0360",
            key: "3",
            icon: <FaPhone />,
            clickInit: GetPhoneHref,
          },
        ]}
        contactIsOpen={isContactOpen}
      />

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
