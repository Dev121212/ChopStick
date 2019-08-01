import React from "react";
import withAuthentication from "../hoc/withAuthentication";
import { withRouter } from "react-router-dom";
import withUser from "../hoc/withUser";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Store from "@material-ui/icons/Store";
import SearchIcon from "@material-ui/icons/Search";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CardMedia from "@material-ui/core/CardMedia";
import Settings from "@material-ui/icons/Settings";
import Help from "@material-ui/icons/Help";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import People from "@material-ui/icons/People";
import Assessment from "@material-ui/icons/Assessment";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 8,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 7,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  list: {
    width: 250
  },
  card: {
    minWidth: 275
  },
  media: {
    height: "150px",
    width: "auto"
    // paddingTop: "56.25%" // 16:9
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  displayName: {
    color: "#ffff"
  }
});

class AppBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      left: false
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  render() {
    //console.log("AppBarComponent.js Component");
    // console.log(this.props);
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button key="Profile">
            <ListItemIcon>
              <Face /> (
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <Divider />
          <ListItem button key="Account">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <Divider />
          <ListItem button key="Customers">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <Divider />
          <ListItem button key="Units">
            <ListItemIcon>
              <Assessment />
            </ListItemIcon>
            <ListItemText primary="Units" />
          </ListItem>
          <Divider />
          <ListItem
            button
            key="Stocks"
            onClick={e => {
              e.preventDefault();
              this.props.history.push(`/stockdetails`);
            }}
          >
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Stocks" />
          </ListItem>
          <Divider />
          <ListItem button key="Settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <Divider />
          <ListItem button key="Customer Support">
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary="Customer Support" />
          </ListItem>
          <Divider />
          <ListItem
            button
            key="Logout"
            onClick={e => {
              this.props.firebase.logOut();
            }}
          >
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
          <Divider />
        </List>
      </div>
    );
    return (
      <div>
        <div className={classes.root}>
          <AppBar style={{ backgroundColor: "#a0e3f5" }} position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Open drawer"
              >
                {this.props.title !== "LOGIN" ? (
                  this.props.title === "DASHBOARD" ? (
                    <MenuIcon onClick={this.toggleDrawer("left", true)} />
                  ) : (
                    <ArrowBack
                      onClick={e => {
                        e.preventDefault();
                        this.props.history.goBack();
                      }}
                    />
                  )
                ) : null}
              </IconButton>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                // noWrap
              >
                {this.props.title === "DASHBOARD" ? null : this.props.title}
              </Typography>
              {this.props.title === "DASHBOARD" ? (
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search Property"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                  />
                </div>
              ) : null}

              <div className={classes.grow} />
            </Toolbar>
          </AppBar>
        </div>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          onOpen={this.toggleDrawer("left", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {this.props.user ? (
              <div>
                <CardMedia
                  className={classes.media}
                  image="https://wallpapercave.com/wp/9cATyz8.jpg"
                  title="Paella dish"
                >
                  <div style={{ padding: "10px" }}>
                    <Grid container justify="left" alignItems="center">
                      <Avatar
                        alt="Remy Sharp"
                        src={this.props.user.photoURL}
                        className={classes.bigAvatar}
                      />
                    </Grid>
                    <Typography
                      classes={{
                        root: classes.displayName
                      }}
                    >
                      {this.props.user.displayName}
                    </Typography>
                    <Typography
                      classes={{
                        root: classes.displayName
                      }}
                    >
                      {this.props.user.email}
                    </Typography>
                  </div>
                </CardMedia>
                {sideList}
              </div>
            ) : null}
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "10px",
              alignSelf: "center",
              fontSize: "12px"
            }}
          >
            Version 1.0.0
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  withAuthentication(withUser(withStyles(styles)(AppBarComponent)))
);
