import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E20 90%)",
    flexGrow: 0.5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.45,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "black",
    color: "white",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  function toggleDrawer(booleanValue) {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "black", color: "blue" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link style={{ color: "white", textDecoration: `none` }} to="/">
              Home
            </Link>
          </Typography>
          <Typography
            variant="h3"
            className={classes.title}
            style={{ color: "Blue" }}
          >
            {siteTitle}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon style={{ color: `white` }} />
          ) : (
            <ChevronRightIcon style={{ color: `white` }} />
          )}
        </IconButton>
        <ul>
          <li>
            <Link
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              to="/contact"
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              to="/portfolios"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              style={{ color: `white`, textDecoration: `none` }}
              to="/resume"
            >
              Resume
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
