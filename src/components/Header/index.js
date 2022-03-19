import { Nav, Logo, NavMenu } from "./styles";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>menu</NavMenu>
    </Nav>
  );
};

export default Header;
