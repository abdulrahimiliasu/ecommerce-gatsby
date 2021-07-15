import * as React from "react"
import ContentSection from "../components/ContentSection"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ContentSection />
  </Layout>
)

export default IndexPage
