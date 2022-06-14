import styled from "styled-components";
import Button from "../../../../layout/Button";

const Card = ({
  src = "/images/menu/combo1.jpg",
  title = "11 Boneless Wings",
  description = "11 Boneless Wings and Fries with your choice of one of our fountain drinks.",
  price = 9
}) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={src} alt="meal item" />
      </ImageWrapper>
      <Body>
        <div>
          <TitleText>{title}</TitleText>
          <DescriptionText>{description}</DescriptionText>
          <p className="price-text">{`$${price.toFixed(2)}`}</p>
        </div>
        <Button text={"Add to order"} bgColor={"#f47d20"} color={"#fff"} />
      </Body>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  padding: 1rem;
  box-shadow: 1px 1px 2px 1px #333;
  display: flex;
  flex-direction: column;
`;
const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;
const Body = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  .price-text {
    font-size: 1.2rem;
    font-weight: 700;
    color: #111;
  }
`;
const TitleText = styled.p`
  font-weight: bold;
`;
const DescriptionText = styled.p``;
