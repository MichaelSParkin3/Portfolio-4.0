import { Link } from "gatsby"
import React, { useEffect, useState, useRef } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion, useCycle } from "framer-motion"
import { globalHistory } from "@reach/router"

import { MenuItem } from "./MenuItem";

import EmailInline from "../images/svg/email.inline.svg"
import GithubInline from "../images/svg/github.inline.svg"
import LinkedinInline from "../images/svg/linkedin.inline.svg"
import CloseInline from "../images/svg/close.inline.svg"

import "../scss/contactModal.scss"

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const ContactModal = props => {


  const containerRef = useRef(null);


  return (
      
    <motion.div initial={false}
      animate={props.isOpen ? "open" : "closed"}
      custom={'100vh'}
      ref={containerRef} className="contactModalCont">
      <motion.div className="contactModal"  variants={{
          closed: {width: '0px', height: '0px'},
          open: {width: '50px', height: '200px'}
        }}>

        <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>

        </motion.div>

    </motion.div>
  )
}

const itemIds = [0, 1, 2, 3];

export default ContactModal
