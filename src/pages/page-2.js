import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SignInForm from "../components/forms/SignInForm"
import getFirebase from "../model/firebase"

export default function SecondPage() {
  React.useEffect(() => {
    let instance = getFirebase()
    if (instance) {
      alert("Succes")
    }
  }, [])
  return (
    <Layout>
      <Seo title="Sign In" />
      <SignInForm />
    </Layout>
  )
}
