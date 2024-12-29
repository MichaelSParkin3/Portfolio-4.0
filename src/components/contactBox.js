import React from "react"
import InfiniteCarousel from "./infiniteCarousel"
import "../scss/contactBox.scss"

import cyberCoder from "../images/videos/CyberpunkCoder.mp4"

const ContactBox = props => {
  return (
    <>
      <div className="contact-box">
        <div></div>
        <video loop="true" autoplay="autoplay" muted width="100%" height="auto">
          <source src={cyberCoder} type="video/mp4" />
        </video>
      </div>
      <InfiniteCarousel
        phraseArray={[
          "HIRE ME FOR YOUR NEXT PROJECT",
          "为您的下一个项目雇我",
          "CONTRATAME PARA TU PRÓXIMO PROYECTO",
          "次のプロジェクトのために私を雇う",
        ]}
      />
    </>
  )
}

export default ContactBox
