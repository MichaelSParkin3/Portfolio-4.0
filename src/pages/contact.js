import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectScreen from "../components/projectScreen"
import InfiniteCarousel from "../components/infiniteCarousel"
import NavBar from "../components/navBar"
import ContactBox from "../components/contactBox"

import "../scss/contact.scss"

const ContactPage = () => (
  <Layout>
  <div className="contact-page">
    <SEO title="Contact" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <ContactBox/>
    {/* <InfiniteCarousel
      phraseArray={[
        "HIRE ME FOR YOUR NEXT PROJECT",
        "为您的下一个项目雇我",
        "CONTRATAME PARA TU PRÓXIMO PROYECTO",
        "次のプロジェクトのために私を雇う",
      ]}
    /> */}
    </div>
  </Layout>
)

export default ContactPage
