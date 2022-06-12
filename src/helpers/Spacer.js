import styled from "styled-components";

const Spacer = ({ direction, spacing }) => {
  return (
    <SpacerTemplate direction={direction} spacing={spacing}></SpacerTemplate>
  );
};

const SpacerTemplate = styled.div`
  ${(props) => `margin-${props.direction}: ${props.spacing}`}
`;

export default Spacer;
