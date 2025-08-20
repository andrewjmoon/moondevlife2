import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout style={{ textAlign: "center" }}>
      <SEO title="Home" />

      <h1 style={{ color: `white`, padding: `3.0rem`, textAlign: "center" }}>
        Welcome to the MoonDevLife Site homepage.
      </h1>
      <p
        style={{ color: `white`, textAlign: "center", textDecoration: "none" }}
      >
        <Link
          style={{
            color: `white`,
            textAlign: "center",
          }}
          to="/about"
        >
          {" "}
          About{" "}
        </Link>
        <br />
        <Link
          style={{
            color: `white`,
            textAlign: "center",
          }}
          to="/contact"
        >
          {" "}
          Contact Page{" "}
        </Link>
        <br />
        <Link
          style={{
            color: `white`,
            textAlign: "center",
          }}
          to="/portfolios"
        >
          {" "}
          Portfolio Page{" "}
        </Link>
        <br />
      </p>
      <Image />
    </Layout>
  )
}

export default IndexPage
