import { Link } from "gatsby"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "../scss/navbar.scss"

const NavBar = () => {
  return (
    <nav>
      <div className="nav-main-cont">
        <AniLink cover direction="up" bg="#e5e5e5" to="404">
          Projects
        </AniLink>

        <div className="nav-divider">|</div>
        <Link className="nav-logo">MIII</Link>
        <div className="nav-divider">|</div>
        <Link>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar
