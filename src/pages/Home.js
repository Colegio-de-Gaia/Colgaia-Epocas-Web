import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Day } from "../components/Day";

// import { Container } from './styles';

export const Home = props => {
  return (
    <div>
      <Header />
      
      <Day />
    </div>
  );
};
