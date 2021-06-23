import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import { globalHistory } from '@reach/router'

import EmailInline from '../images/svg/email.inline.svg'
import GithubInline from '../images/svg/github.inline.svg'
import LinkedinInline from '../images/svg/linkedin.inline.svg'
import CloseInline from '../images/svg/close.inline.svg'

import "../scss/contactModal.scss"

const ContactModal = props => {

  return (
    <div className='contactModalCont'>
        <div><EmailInline fill="#fff"/></div>
        <div><GithubInline fill='#fff'/></div>
        <div><LinkedinInline fill="#fff"/></div>
        <div><CloseInline fill="#fff"/></div>
    </div>
  )
}

export default ContactModal
