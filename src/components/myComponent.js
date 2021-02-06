import React from "react"
import { Parallax, ParallaxBanner } from "react-scroll-parallax"
import IntroCopy from "./IntroCopy"

const MyComponent = () => (
  <div style={{ height: "200vh", width: "100vw", position: "relative" }}>
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      dgfdgfdg
    </Parallax>
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      fdgf
    </Parallax>
    <IntroCopy />
  </div>
)
export default MyComponent
