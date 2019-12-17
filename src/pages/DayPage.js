import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Axios from "axios";
import { Header } from "../components/Header";
import { Typography, Grid, Container } from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 100
  },
  image: {
    width: 250
  }
}));

export const DayPage = props => {
  let { id } = useParams();

  const classes = useStyles();
  const theme = useTheme();
  const [day, setDay] = useState([]);

  useEffect(() => {
    async function get() {
      try {
        const response = await Axios.get("http://51.77.159.152/api/days/" + id);
        setDay(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    get();
  }, [id]);
  return (
    <div>
      <Header />
      <main className={classes.content}>
        <Grid container spacing={2}>
          <Grid item>
            <img src={day.url} className={classes.image} />

            <br></br>

            <Typography>{day.photo_name}</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5">"{day.sentence}"</Typography>
            <Typography>- {day.sentence_author}</Typography>
            <br></br>
            <Typography variant="h4">Reflexão</Typography>
            <Typography variant="body1">{day.reflection}</Typography>
            <br></br>
            <Typography variant="h4">Oração</Typography>
            <Typography variant="body1">{day.pray}</Typography>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};
