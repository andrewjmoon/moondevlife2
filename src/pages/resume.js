import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image2 from "../components/image2"

const Resume = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 style={{ color: `white`, padding: `3.0rem`, textAlign: "center" }}>
      {" "}
      Resume
    </h1>
    <div style={{ color: `white`, textAlign: "center" }}>
      <p>Below is a link to my JSON Resume</p>
      <a
        style={{ color: `white` }}
        href="https://registry.jsonresume.org/andrewjmoon"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://registry.jsonresume.org/andrewjmoon{" "}
      </a>

      <br />
      <br />
      <Link style={{ color: `white` }} to="/">
        Go back to the homepage
      </Link>
    </div>
    <Image2 />
  </Layout>
)

export default Resume
