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
        This site provides a list non-profits and charities for Covid-19
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
          href="https://github.com/andrewjmoon/localfoodplacesapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://ams-localfoodplaces.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://ams-localfoodplaces.netlify.app
        </a>
        <br />
        This site lists local restaurants and food related businesses in
        Beaumont, Texas, utilizing Mapbox for the mapping functionality.
        Tabletopjs, Material-UI, and React Hooks were part of the projects
        framework.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/therestaurantsearchapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://therestaurantapp.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://therestaurantapp.netlify.app
        </a>
        <br />
        This site allows a user to search for a type of food or restaurant in a
        certain city or neighborhood. A list of the results will show up on a
        map along with Yelp ratings and reviews. The site utilizes the Yelp
        Fusion API for the food data and Leafletjs for the mapping
        functionality.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/On_the_Links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://onthelinks.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://onthelinks.netlify.app/
        </a>
        <br />
        This site combines GatsbyJs, Contentful, Material-UI, and pagination to
        show a list of compiled links ordered by dates. This site is best used
        on a laptop or desktop.
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
          href="https://github.com/andrewjmoon/What-sOnYoutubeApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://whats-on-youtube.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://whats-on-youtube.netlify.app
        </a>
        <br />
        In this App, I track lists of available movies and shows on Youtube and
        the Internet Archive Site. I also have a Youtube Player that built with
        React hooks. Material-Ui, Auth0, Axios, and Tabletopjs were also used in
        the building of this App.
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
          href="https://github.com/andrewjmoon/tvshowrater"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://amstvratingsapp.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://amstvratingsapp.netlify.app
        </a>
        <br />
        This App incorporates Airtable as a backend to track ratings of
        television shows selected by a User. Pagination has been provided with
        Material-Ui being used for the styling. The useReducer hook was added
        for data fetching of the television shows through the TV Maze API as
        well.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/audio2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://audiocollection-am.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://audiocollection-am.netlify.app
        </a>
        <br />
        This site incorporates a music audio player, an audiobook collection, a
        music selection from Youtube using Google Sheets. AuthO provides the
        authentication and Bulma provides the styling.
      </li>
    </ul>

    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://astros-site.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://astros-site.netlify.app
        </a>
        <br />
        This Astros Site tracks the stats of the Astro Baseball Players with
        various charts utilizing Airtable. Also, the teams' depth chart and
        additional resources (various blogs) are provided as well. I utilized
        Material-UI for the styling and hosted the site with Netlify.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/AMsAudioPlaylist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://amsaudioplaylist.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://amsaudioplaylist.netlify.app
        </a>
        <br />
        This app utilizes the Openwhyd API to showcase the playlists I have
        created plus the ability to play the songs or audiobooks in the browser.
        A react audio player was also used for playing audio books. The data
        from the lists are from Google Sheets. AuthO provides the authentication
        with Material-UI for the styling as well.
      </li>
    </ul>
    <ul>
      <li style={{ color: `white` }}>
        <a
          style={{ color: `white` }}
          href="https://github.com/andrewjmoon/beerproject"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} />
        </a>
        <a
          style={{ color: `white` }}
          href="https://blogs-and-brews.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://blogs-and-brews.netlify.app
        </a>
        <br />
        This site comprises many resources for beer enthusiasts. I utilized the
        openbrewerydb API, the Brewdog Brewery's API, and the BreweryDB to
        provide much of the information. In the 'Search Breweries in the US'
        Page, a site visitor can search a city or state for a list of breweries
        in that location. One can then click on the map link to go to the
        address in Google Maps or click to the Brewery's website page as well.
        Pagination was also added for a better user experience for some of the
        pages. There is also a section for reviews and resources. Material-UI
        was used to style the NavBar and SideDrawer, and AuthO provided the
        authentication.
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
          href="https://therecipestash.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          https://therecipestash.netlify.app
        </a>
        <br />
        The Recipe Stash site incorporates the edamam API for searching recipes
        online and google sheets for storing recipes from old recipe books.
        Pagination has been added to the site as well. A Material-UI theme was
        used for the styling of the site along with a hide-on-scroll function.
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
