import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Image3 from "../components/image3"

const About = () => (
  <Layout className="Link">
    <SEO title="About" />
    <h1 style={{ color: `white`, padding: `3.0rem`, textAlign: "center" }}>
      About Page
    </h1>

    <p>
      Hello, my name is Andrew Moon and I am an aspiring Front-End Developer
      with some knowledge of Back-End Development. My primary focus has been on
      the ReactJS framework. While focusing on ReactJS, I have utilized the
      following applications in my studies and projects: GatsbyJS, Apollo,
      GraphQL, Redux, Express, MongoDB, Hasura, Material-UI, Algolia, Auth0,
      Airtable, Netlify, Heroku, Shopify, and Stripe. Computer Programming has
      become a great passion of mine in which I enjoy learning and solidifying
      my skills very much. I do not want to become complacent in my programming
      studies. I want to keep track of the latest updates and trends in the
      programming world and innovate with the times. Computer Programming
      involves dedication, hard work, innovation, creativity, and perseverance.
      I possess all of these qualities and apply them everyday to my programming
      studies and projects. Below are links to my Contact, Portfolio, and Resume
      pages.
    </p>
    <p style={{ color: `white`, textAlign: "center" }}>
      <Link style={{ color: `white`, marginRight: `1.0rem` }} to="/contact">
        {" "}
        Contact Page{" "}
      </Link>
      <br />
      <Link style={{ color: `white`, marginRight: `1.0rem` }} to="/portfolios">
        {" "}
        Portfolio Page{" "}
      </Link>
      <br />
      <Link style={{ color: `white`, marginRight: `1.0rem` }} to="/resume">
        {" "}
        Resume Page{" "}
      </Link>
      <br />
      <Link style={{ color: `white` }} to="/">
        Go back to the homepage
      </Link>
    </p>
    <Image3 />
  </Layout>
)

export default About
