import styled from "styled-components";

const Header = ({
  title = "COMBO MEALS",
  description = "Wings tossed in your choice of flavor, with curly fries and an ice cold beverage to wash it down.",
}) => {
  return (
    <HeaderWrapper>
      {title === "POPULAR ITEMS" && <img src={"/images/menu/branding75.png"} />}
      <h1>{title}</h1>
      <p>{description}</p>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  h1 {
    margin: 0;
  }
  p {
    font-weight: 500;
  }
`;
