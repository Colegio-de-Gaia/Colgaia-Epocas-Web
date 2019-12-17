import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// import { Container } from './styles';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginLeft: 20
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

export const Velas = props => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Typography variant="h4">1ª Vela</Typography>
        <Typography variant="body1">
          Uma vela arde em sinal da nossa esperança, Deus da esperança, vem até
          nós, mais uma vez, neste Advento.\nQue a esperança que Tu dás brilhe
          nas nossas vidas
        </Typography>
        <br></br>
        <Typography variant="h4">2ª Vela</Typography>
        <Typography variant="body1">
          Uma vela arde como simbolo da tua Palavra.\nDeus dos profetas vem até
          nós, mais uma vez, neste Advento.\nQue a tua Palavra seja lâmpada que
          brilha nas nossas vidas.
        </Typography>
        <br></br>
        <Typography variant="h4">3ª Vela</Typography>
        <Typography variant="body1">
          "Uma vela arde como sinal da nossa fé Deus de João Baptista, vem até
          nós, mais uma vez, neste Advento.\nConcede-nos uma fé que renove as
          nossas vidas para vivermos à luz das suas promessas.
        </Typography>
        <br></br>
        <Typography variant="h4">4ª Vela</Typography>
        <Typography variant="body1">
          Uma vela arde como sinal do teu amor Deus de Maria e de José, vem até
          nos, mais uma vez, neste Advento.\nQue a luz do teu amor nasça de novo
          em nossas vidas.
        </Typography>
      </div>
    </div>
  );
};
