
import { Header,Main,Footer } from "./components/Layout";
import { NavBar, Navbar, NavItem, NavLink} from './components/Navbar';

function App() {
  return (
    <>
    <Header>
      <NavBar>
        <NavItem href="#">
          <NavLink>
            Catelog
          </NavLink>
        </NavItem>
        <NavItem href="#">
          <NavLink>
            Dashboard
          </NavLink>
        </NavItem>
      </NavBar>
    </Header>
    <Main>This is main</Main>
    <Footer>This is the footer</Footer>
    </>
  );
}

export default App;
