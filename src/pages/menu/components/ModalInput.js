import styled from "styled-components";

const ModalInput = ({ name, value, handleClick, type }) => {
  return (
    <ModalInputWrapper>
      <input type={type} name={name} value={value} onClick={handleClick} />
    </ModalInputWrapper>
  );
};

const ModalInputWrapper = styled.div``;

export default ModalInput;
