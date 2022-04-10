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
    }
  `)

  const pageRef = useRef(null);

  const url = typeof window !== 'undefined' ? window.location.href : '';
  var splitUrl = ''
  var makeWhite = true;

  console.log(url);

  splitUrl = url.split('/')[3];

  console.log(splitUrl);

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

     <NavBar makeWhite={true} path={splitUrl} pageRef={pageRef} disableAnim={false}/>

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
