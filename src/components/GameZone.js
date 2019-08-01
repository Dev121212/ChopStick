import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = {
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: 275,
    maxWidth: 600,
    margin: "50px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  fab: {
    margin: "8px",
    fontSize: "20px"
  }
};

const hand = { width: "100%", display: "flex", justifyContent: "space-around" };

class GameZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: true,
      mturn: true,
      lturn: false,
      chooseOwnHand: true,
      ownHand: "",
      currentValue: 0,
      chooseOppHand: false,
      h1: 1,
      h2: 1,
      h3: 1,
      h4: 1,
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClick = value => {
    console.log(value);
    if (this.state.chooseOwnHand === true) {
      let val;
      if (value === "h1") {
        val = this.state.h1;
        this.setState({ currentValue: val });
      }
      if (value === "h2") {
        val = this.state.h2;
        this.setState({ currentValue: val });
      }
      if (value === "h3") {
        val = this.state.h3;
        this.setState({ currentValue: val });
      }
      if (value === "h4") {
        val = this.state.h4;
        this.setState({ currentValue: val });
      }
      this.setState(
        { ownHand: value },
        this.setState({ chooseOwnHand: false, chooseOppHand: true })
      );
    }
    // Opponent hand
    if (this.state.chooseOppHand === true) {
      let val;
      if (value === "h1") {
        val = this.state.h1 + this.state.currentValue;
        this.setState({ h1: val });
      }
      if (value === "h2") {
        val = this.state.h2 + this.state.currentValue;
        this.setState({ h2: val });
      }
      if (value === "h3") {
        val = this.state.h3 + this.state.currentValue;
        this.setState({ h3: val });
      }
      if (value === "h4") {
        val = this.state.h4 + this.state.currentValue;
        this.setState({ h4: val });
      }
      this.setState(
        {
          chooseOppHand: false,
          turn: !this.state.turn,
          chooseOwnHand: true
        },
        () => {
          //Won Check
          if (this.state.h1 === 5 && this.state.h2 === 5) {
            this.handleClickOpen();
          }
          if (this.state.h3 === 5 && this.state.h4 === 5) {
            this.handleClickOpen();
          }
        }
      );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* AppBar */}
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Game Area
              </Typography>
            </Toolbar>
          </AppBar>
          {/* Card */}
          <center>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Welcome to Chop Sticks ! !
                  {this.state.turn === true ? (
                    <div>
                      <div>Mario's turn</div>
                      {/* <div>Choose your hand to strike Mario</div> */}
                    </div>
                  ) : (
                    <div>
                      <div>Luigi's turn</div>
                      {/* <div>Choose your hand to strike Luigi</div> */}
                    </div>
                  )}
                  {this.state.chooseOwnHand === true ? (
                    <div>Choose your hand to strike</div>
                  ) : (
                    <div>Choose opponents hand to kill</div>
                  )}
                </Typography>
                <div style={{ padding: "40px" }}>
                  <div>
                    <Grid container justify="center" alignItems="center">
                      <Avatar
                        alt="Remy Sharp"
                        src="https://static.giantbomb.com/uploads/square_medium/15/153607/3075875-mario.png"
                        className={classes.bigAvatar}
                      />
                    </Grid>
                    <Typography variant="h5" component="h2">
                      Mario
                    </Typography>
                    {/* <Typography className={classes.pos} color="textSecondary">
                      Turn
                    </Typography> */}
                    <div style={hand}>
                      <div>
                        <div>Right</div>
                        <div>
                          <Fab
                            color="primary"
                            aria-label="Add"
                            name="h1"
                            id="hand1"
                            className={classes.fab}
                            onClick={e => {
                              e.preventDefault();
                              this.handleClick("h1");
                            }}
                          >
                            {this.state.h1}
                          </Fab>
                        </div>
                      </div>
                      <div>
                        <div>Left</div>
                        <div>
                          <Fab
                            color="secondary"
                            aria-label="Add"
                            name="h2"
                            id="hand2"
                            className={classes.fab}
                            onClick={e => {
                              e.preventDefault();
                              this.handleClick("h2");
                            }}
                          >
                            {this.state.h2}
                          </Fab>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Divider />

                <div style={{ padding: "40px" }}>
                  <div>
                    <div style={hand}>
                      <div>
                        <div>Left</div>
                        <div>
                          <Fab
                            color="secondary"
                            aria-label="Add"
                            name="h3"
                            id="hand3"
                            className={classes.fab}
                            onClick={e => {
                              e.preventDefault();
                              this.handleClick("h3");
                            }}
                          >
                            {this.state.h3}
                          </Fab>
                        </div>
                      </div>
                      <div>
                        <div>Right</div>
                        <div>
                          <Fab
                            color="primary"
                            aria-label="Add"
                            name="h4"
                            id="hand4"
                            className={classes.fab}
                            onClick={e => {
                              e.preventDefault();
                              this.handleClick("h4");
                            }}
                          >
                            {this.state.h4}
                          </Fab>
                        </div>
                      </div>
                    </div>
                    <Grid container justify="center" alignItems="center">
                      <Avatar
                        alt="Remy Sharp"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMTyW_f3IeOe00Ko9exDVfn-44wN7WigcktASr7rejZKmvErO"
                        className={classes.bigAvatar}
                      />
                    </Grid>
                    <Typography variant="h5" component="h2">
                      Luigi
                    </Typography>
                    {/* <Typography className={classes.pos} color="textSecondary">
                      Turn
                    </Typography> */}
                  </div>
                </div>
              </CardContent>
              {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
            </Card>
          </center>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Congrats!!! You WON....
            {this.state.turn === true ? <h3>Luigi</h3> : <h3>Mario</h3>}
          </DialogTitle>
        </Dialog>
      </div>
    );
  }
}

GameZone.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameZone);
