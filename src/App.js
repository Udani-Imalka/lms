import React from "react";
import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";

import { Main, Footer, Header } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";

import Dashboard from "./containers/Dashboard";

function App() {
  const theme = {
    primary: {
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "#0086c3",
      textColor: "#000",
    },
    secondary: {
      main: "#fff",
    },

    spacing: (factor) => `${factor * 8}px`,
  };

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <NavBar>
          <NavItem href="#">
            <NavLink>
              <BsBookHalf />
            </NavLink>
          </NavItem>
          <NavItem href="#">
            <NavLink>Catalog</NavLink>
          </NavItem>
          <NavItem href="#">
            <NavLink>Dashboard</NavLink>
          </NavItem>
        </NavBar>
      </Header>
      <Main>
        <Dashboard />
      </Main>
      <Footer>Copyright {new Date().getFullYear()} © Spark Academy </Footer>
    </ThemeProvider>
  );
}

export default App;
