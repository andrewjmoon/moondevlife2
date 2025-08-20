import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image4 from "../components/image4"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{ color: `white`, padding: `3.0rem`, textAlign: "center" }}>
      <h1> Contact Page</h1>
      <br />
      <p>Email Address: andrewjm80@gmail.com</p>
      <br />
      <p>Phone Number: 1-409-549-9571</p>
      <br />
      <p>
        Youtube: CodingAndAnalysis
        <br />
        <a
          href="https://www.youtube.com/@CodingAndAnalysis"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: `white` }}
        >
          {" "}
          Link to Youtube Channel{" "}
        </a>
      </p>
      <br />
      <p>
        Github: andrewjmoon (StylesofOmega)
        <br />
        <a
          href="https://github.com/andrewjmoon"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: `white` }}
        >
          {" "}
          https://github.com/andrewjmoon{" "}
        </a>
      </p>
      <p>
        Github: MoonData21
        <br />
        <a
          href="https://github.com/MoonData21"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: `white` }}
        >
          {" "}
          https://github.com/MoonData21{" "}
        </a>
      </p>
      <p>
        Github: Secret-Machines
        <br />
        <a
          href="https://github.com/Secret-Machines"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: `white` }}
        >
          {" "}
          https://github.com/Secret-Machines{" "}
        </a>
      </p>
      <br />

      <Link style={{ color: `white` }} to="/">
        Go back to the homepage
      </Link>
    </div>
    <Image4 />
  </Layout>
)

export default Contact
