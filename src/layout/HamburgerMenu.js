import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ toggleNav, setToggleNav }) => {
  const handleClick = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <HamburgerMenuWrapper onClick={handleClick}>
      {toggleNav ? (
        <FaTimes size={"3rem"} color={"#f47d20"} />
      ) : (
        <FaBars size={"3rem"} color={"#f47d20"} />
      )}
    </HamburgerMenuWrapper>
  );
};

const HamburgerMenuWrapper = styled.div`
  cursor: pointer;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #222;
  border: 2px solid #222;
`;

export default HamburgerMenu;
