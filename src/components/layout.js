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
import { isIOS, isMobile, isAndroid } from 'react-device-detect';

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
  const [makeWhite, setMakeWhite] = useState(false)
  const [disableAnim, setDisableAnim] = useState(false)
  

  const pageRef = useRef(null);

  const url = typeof window !== 'undefined' ? window.location.href : '';
  var splitUrl = ''
  var contactIsOpen = false;
  var popUpKey = 0;

  console.log(url);

  splitUrl = url.split('/')[3];

  console.log('splitUrl '+splitUrl);

  function OpenContact() {
    console.log('before contactisopen '+contactIsOpen);
    setIsContactOpen(!isContactOpen)
    console.log('after contactisopen '+contactIsOpen);
    popUpKey = popUpKey + 1;
  }

  function adjustColorAnim() {
    if ((splitUrl == '' || splitUrl == null) && !isContactOpen) {
      console.log('adjustColorAnim return true '+ splitUrl);
      setMakeWhite(true)
      setDisableAnim(true)
    } else {
      console.log('adjustColorAnim return false '+ splitUrl);
      setMakeWhite(false)
      setDisableAnim(false)
    }
  }

  useEffect(()=>{

    adjustColorAnim();

  },[url, isContactOpen]) 


  console.log('ismobile '+isMobile)

    function GetPhoneHref() {

    console.log('GetPhoneHref')

    if (isIOS) {
      window.open("sms:1-323-393-0360", "_blank");
    } else if (isAndroid) {
      window.open("intent://vnd.android.cursor.dir/raw_contact/#Intent;action=android.intent.action.INSERT;S.email=hello@world.com;S.phone=+1-212-555-1234end;", "_blank");
    } else {
      alert('Since you are not on android or IOS text me at: 1-323-393-0360')
    }

  }

  return (
    <div
      id="layout-cont"
      style={(isContactOpen) ? {overflowY:'hidden'} : {overflowY:'visible'}}
      ref={pageRef}
    >

     <NavBar makeWhite={makeWhite} path={splitUrl} pageRef={pageRef} disableAnim={disableAnim} OpenContact={OpenContact} contactIsOpen={isContactOpen}/>

     <ContactPopUp
     key={'1'}
     
      items={[
          { content: "Check out my github", link: "https://github.com/MichaelSParkin3", key: "0", icon: <FaGithub /> },
          { content: "Send me an email", link: "mailto:MichaelSParkin3@gmail.com", key: "1", icon: <FaEnvelope /> },
          { content: "Connect with me", link: "https://www.linkedin.com/in/michael-parkin-702396133/", key: "2", icon: <FaLinkedin /> },
          { content: "My BEST contact, TEXT ME", link: "sms:1-323-393-0360", key: "3", icon: <FaPhone />, clickInit: GetPhoneHref },
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
