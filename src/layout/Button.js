import styled from "styled-components";

const Button = ({
  text,
  borderRadius = false,
  fontSize = ".85rem",
  handleClick,
  bgColor,
  color,
  margin,
  width,
}) => {
  return (
    <ButtonWrapper
      margin={margin}
      bgColor={bgColor}
      color={color}
      fontSize={fontSize}
      onClick={handleClick}
      borderRadius={borderRadius}
      width={width}
    >
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: 1rem;
  border: none;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  border-radius: ${(props) => (props.borderRadius ? "0.75rem" : 0)};
  box-shadow: 2px 2px 0.1px 0.1px #666;
  width: ${(props) => props.width};
  cursor: pointer;
`;

export default Button;
