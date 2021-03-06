import React from "react"

import Layout from "../components/layout"
import "../styles/index.scss"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a
          href="https://twitter.com/@andrew_j_mead"
          target="_blank"
          rel="noreferrer"
        >
          @andrew_j_mead
        </a>{" "}
        on Twitter!
      </p>
    </Layout>
  )
}

export default ContactPage
