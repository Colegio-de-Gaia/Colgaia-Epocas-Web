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

export const Advento = props => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Typography variant="h2">Advento</Typography>
        <Typography variant="body1">
          O Advento é o primeiro tempo do Ano litúrgico, o qual antecede o
          Natal. Para os cristãos, é um tempo de preparação e alegria, de
          expectativa, onde os fiéis, esperando o Nascimento de Jesus Cristo ,
          vivem o arrependimento e promovem a fraternidade e a Paz. No
          calendário religioso este tempo corresponde às quatro semanas que
          antecedem o Natal.
        </Typography>
      </div>
    </div>
  );
};
