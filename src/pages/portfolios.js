import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/github.png"

const Portfolio = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 style={{ color: `white`, padding: `3.0rem`, textAlign: "center" }}>
      {" "}
      Portfolio Page{" "}
    </h1>
    <p>
      This is the list of projects that I have created. Most of these projects
      are under continuous deployment and are subject to possible changes and
      improvements. The GitHub Icon will provide a link to the Github Page of
      the project.
    </p>
    <hr style={{ backgroundColor: "white" }} />
    
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/batmanapp2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://thebatmanproject.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://thebatmanproject.netlify.app
        </a>
        <br />
        This site uses a local JSON file and Apollo Client to get mock data to the browser. Pagination is being utilized to paginate results of the TvMaze data.
        MUI 6 styles the project as well. React 18 was also used to create this site.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/MoonData21/PythonRecipesProjectAM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://anoon14.pythonanywhere.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://anoon14.pythonanywhere.com/
        </a>
        <br />
        Recipe Sharing App with Django and Html. The main objective of this project is to have users sign up and provide CRUD operations while sharing recipes with friends and family.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/thehelpoutproject"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://thehelpoutproject.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://thehelpoutproject.netlify.app/
        </a>
        <br />
        This site was meant to provide a list non-profits and charities for Covid-19
        responses and where to donate to the organizations. There is also a list
        for tips/advice associated with Covid-19. Pagination is being utilized
        with data files to mimic an API fetch. Material-UI styles the project
        with an image layout scroll added as well. 
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/myreadinglist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://ams-readinglist.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://ams-readinglist.netlify.app/
        </a>
        <br />A Udacity React Nanodegree project that connects to a library
        database where the user can add, delete, search, and update the books.
        React Hooks was used in the project with Material-UI providing the
        styling as well.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/React-Redux-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://wouldyourather-prefergame.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://wouldyourather-prefergame.netlify.app/
        </a>
        <br />A Udacity React Nanodegree project of a user participating in a
        Would You Rather game. This project uses React, Redux, and Material-UI
        in the building of the game. There are also resources provided for
        potential questions for the game. This project also utilizes Redux hooks
        useSelector and useDispatch in some of the view components.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/Secret-Machines/theplaylist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://ams-music-playlist.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://ams-music-playlist.netlify.app
        </a>
        <br />
        This music site lists my top ten albums of the 2010's plus providing
        playlists for 2019 and 2020. Tabletopjs, React Hooks, and Material-UI
        were utilized throughout this project.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/Secret-Machines/calendarcountdown"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://amscountdowncalendar.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://amscountdowncalendar.netlify.app
        </a>
        <br />
        This app is both a timer and a calendar combined built with React. A
        background-video is also played on the home page.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/Secret-Machines/MyReadingList"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://amsreadinglist.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://amsreadinglist.netlify.app/
        </a>
        <br />
        This site is a reading list application utilizing local storage and
        react hooks (useReducer, useEffect, useState, and useContext). If I
        finish the book, I can click to delete the book from the list.
      </li>
    </ul>

    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/picsandvids2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://pics-and-vids.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://pics-and-vids.netlify.app/
        </a>
        <br />
        This site provides picturesque photos and videos through full-screen
        galleries, picture carousels, and videos from free photo sites and
        Youtube. React Hooks and React-Router was used throughout this project.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/amsbookcollection"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://amsbookcollectionapp.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://amsbookcollectionapp.netlify.app/
        </a>
        <br />
        GatsbyJS, Airtable, Material-ui are combined to create a book collection
        app of books and audiobooks in the public domain.
      </li>
    </ul>
    <Link style={{ color: `white` }} to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default Portfolio
