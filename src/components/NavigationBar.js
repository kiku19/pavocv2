import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import { useContext } from "react";

import { userThemeContext } from "../App.js";
import GreenButton from "./GreenButton.js";

import Pavoc from "../images/Pavoc.png";
import PavocLogo from "../images/PavocLogo.png";

import { Container,Flex,J_Start,A_Center,A_SelfCenter,J_Center } from "../css/ObjectsCss.js";

function NavigationBar() {
  const theme = useContext(userThemeContext);

  const a = {
    textDecoration: "none",
    color: theme.black,
    paddingInline: "3vw",
    weight: "400",
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    fontWeight: "400",
    lineHeight: "1rem",
  };

  return (
    <div style={{ ...Flex, ...J_Start, ...Container, ...A_Center }}>
      <img style={A_SelfCenter} src={PavocLogo} alt="Pavoc Logo"></img>
      <img style={A_SelfCenter} src={Pavoc} alt="Pavoc Text"></img>
      <nav style={{ ...Flex, ...J_Center, ...A_Center, margin: "auto" }}>
        <BrowserRouter>
          <NavLink style={{ ...a, Flex }} to="/">
            HOME
          </NavLink>
          <NavLink style={{ ...a, Flex }} to="/service">
            SERVICE
          </NavLink>
          <NavLink style={{ ...a, Flex }} to="/blog">
            BLOG
          </NavLink>
        </BrowserRouter>
      </nav>
      <GreenButton>CONTACT</GreenButton>
    </div>
  );
}

export default NavigationBar;
