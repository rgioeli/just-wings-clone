import styled from "styled-components";
import Card from "./Card";
import Header from "./Header";
import { menuItems } from "../../../data/menuItems";

const Menu = () => {
  return (
    <MenuWrapper>
      {/* we are going to need a header component */}
      {/* we are going to need a card component */}
      {/* we are going to need a module component */}
      <PopularItems>
        <Header
          title={"POPULAR ITEMS"}
          description={
            "Not sure where to start? These killer choices are a great way to satisfy your craving for chicken wings. Don’t forget dessert!"
          }
        />
        <CardWrapper>
          {menuItems.popularItems.map(({ name, description, src }) => (
            <Card title={name} description={description} src={src} />
          ))}
        </CardWrapper>
      </PopularItems>
      <ComboMeals>
        <Header />
        <CardWrapper>
          {menuItems.comboMeals.map(({ name, description, src }) => (
            <Card title={name} description={description} src={src} />
          ))}
        </CardWrapper>
      </ComboMeals>
      <JustWings>
        <Header
          title={"Just Wings"}
          description={
            "Choose your wing style, then your flavor. Want some curly fries with that? We already included them plus a side of ranch."
          }
        />
        <CardWrapper>
          {menuItems.justWings.map(({ name, description, src }) => (
            <Card title={name} description={description} src={src} />
          ))}
        </CardWrapper>
      </JustWings>
      <PartyStyle>
        <Header
          title={"JUST WINGS: PARTY STYLE"}
          description={
            "Choose your size and wing flavor. Served with curly fries and a side of ranch. You're in for a cluckin' treat!"
          }
        />
        <CardWrapper>
          {menuItems.partyStyle.map(({ name, description, src }) => (
            <Card title={name} description={description} src={src} />
          ))}
        </CardWrapper>
      </PartyStyle>
      <Dips>
        <Header
          title={"DIPS & SAUCES"}
          description={
            "We put some of the best culinary minds we know together to come up with these killer sauces. There's something for everyone here, and you can order them on the side to try them out for your next order."
          }
        />
        <CardWrapper>
          {menuItems.dips.map(({ name, description, src }) => (
            <Card title={name} description={description} src={src} />
          ))}
        </CardWrapper>
      </Dips>
      <Sides></Sides>
      <Desserts></Desserts>

      {/* we are going to need an addItem function that adds the order to a cookie */}
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  max-width: 1400px;
  margin: 1rem auto auto auto;
  padding: 1rem;
`;
const PopularItems = styled.div`
  margin-bottom: 4rem;
`;
const ComboMeals = styled.div`
  margin-bottom: 4rem;
`;
const JustWings = styled.div`
  margin-bottom: 4rem;
`;
const PartyStyle = styled.div`
  margin-bottom: 4rem;
`;
const Sides = styled.div`
  margin-bottom: 4rem;
`;
const Dips = styled.div`
  margin-bottom: 4rem;
`;
const Desserts = styled.div``;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 875px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default Menu;