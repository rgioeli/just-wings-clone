import {
  Outlet,
  Link,
  useNavigate,
  useMatch,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Spacer from "../helpers/Spacer";
import Footer from "./Footer";
import HamburgerMenu from "./HamburgerMenu";
import { useContext, useEffect, useState } from "react";
import BottomCartBar from "../pages/menu/BottomCartBar";
import OrderContext from "../context/orderContext";

const Layout = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [bottomCartBar, setBottomCartBar] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(OrderContext);

  useEffect(() => {
    if (toggleNav) {
      setToggleNav(false);
    }

    if (location.pathname === "/order/delivery") {
      setBottomCartBar(true);
    } else {
      if (bottomCartBar) {
        setBottomCartBar(false);
      }
    }
  }, [location.key]);

  return (
    <LayoutWrapper>
      <nav>
        <aside>
          <img src={"/images/logo.png"} />
        </aside>
        <Links>
          <div>
            <Button
              text={"ORDER NOW"}
              color={"#fff"}
              bgColor={"#f47d20"}
              handleClick={() => navigate("/order/delivery")}
            />
            <Spacer direction={"right"} spacing={".5rem"} />
          </div>
          <Spacer direction={"right"} spacing={"2rem"} />
          <ul>
            <li>
              <StyledLink to="/">HOME</StyledLink>
            </li>
            <li>
              <StyledLink to="menu">MENU</StyledLink>
            </li>
            <li>
              <StyledLink to="/locations">LOCATIONS</StyledLink>
            </li>
            <li>
              <StyledLink to="/flavors">FLAVORS</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">ABOUT</StyledLink>
            </li>
          </ul>
        </Links>
        <HamburgerMenu toggleNav={toggleNav} setToggleNav={setToggleNav} />
      </nav>
      {toggleNav && (
        <HamburgerMenuDropdown>
          <ul>
            <li className={"ham-links"}>
              <StyledLink to="/">HOME</StyledLink>
            </li>
            <li className={"ham-links"}>
              <StyledLink to="menu">MENU</StyledLink>
            </li>
            <li className={"ham-links"}>
              <StyledLink to="/locations">LOCATIONS</StyledLink>
            </li>
            <li className={"ham-links"}>
              <StyledLink to="/flavors">FLAVORS</StyledLink>
            </li>
            <li className={"ham-links"}>
              <StyledLink to="/about">ABOUT</StyledLink>
            </li>
            <li>
              <Button
                text={"ORDER NOW"}
                color={"#fff"}
                bgColor={"#f47d20"}
                width={"100%"}
                handleClick={() => {
                  setToggleNav(false);
                  navigate("/order/delivery");
                }}
              />
            </li>
          </ul>
        </HamburgerMenuDropdown>
      )}
      <Outlet />
      <Footer />
      {context.order.length > 0 && (
        <div className="cart-bar">
          <BottomCartBar />
        </div>
      )}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  nav {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: auto;
    @media screen and (max-width: 850px) {
      padding: 0.25rem 1rem;
      display: flex;
      flex-flow: row-reverse;
    }
    ul {
      @media screen and (max-width: 850px) {
        display: none;
      }
      display: flex;
      li {
        list-style-type: none;
        text-decoration: none;
        margin-left: 1rem;
      }
    }
    aside {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }

  .cart-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: #111;
  font-weight: 700;
  @media screen and (max-width: 975px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 850px) {
    font-size: 2rem;
  }
`;

const Links = styled.div`
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  div {
    display: flex;
  }
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const HamburgerMenuDropdown = styled.div`
  ul {
    padding: 1rem;
    display: flex;
    flex-flow: column;
    .ham-links {
      align-items: center;
    }
    li {
      list-style-type: none;
      height: 75px;
      width: 100%;
      border-bottom: 2px solid #f47d20;
      display: flex;
    }
  }

  @media screen and (min-width: 850px) {
    display: none;
  }
`;

export default Layout;
