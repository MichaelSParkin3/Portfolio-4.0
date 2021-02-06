import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectScreen from "../components/projectScreen"
import InfiniteCarousel from "../components/infiniteCarousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <ProjectScreen />
    <InfiniteCarousel
      phraseArray={[
        "HIRE ME FOR YOUR NEXT PROJECT",
        "为您的下一个项目雇我",
        "CONTRATAME PARA TU PRÓXIMO PROYECTO",
        "次のプロジェクトのために私を雇う",
      ]}
    />
  </Layout>
)

export default IndexPage
