import React, { useState, useEffect } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { Typography, ButtonBase } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  paper: {
    height: 60,
    width: 100,
    textAlign: "center",
    padding: theme.spacing(2)
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export const Day = props => {
  const [day, setDay] = useState([]);
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    async function getDay() {
      try {
        const response = await Axios.get("http://51.77.159.152/api/days");
        setDay(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getDay();
  }, []);

  function handleClick(id) {
    return history.push("day/" + id);
  }

  return (
    <Grid container className={classes.root} my={10} spacing={5}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {day.map((value, index) => (
            <Grid key={value.id} item>
              <ButtonBase
                onClick={() => {
                  handleClick(value.id);
                }}
              >
                <Paper className={classes.paper} button>
                  <Typography justify="center">Dia {index + 1}</Typography>
                </Paper>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
