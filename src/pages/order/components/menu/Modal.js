import styled from "styled-components";

const Modal = () => {
    return (
        <ModalWrapper>Hello Fuckheads</ModalWrapper>
    )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  height: 100vh;
  background-color:#fff;
  border-left: 2px solid #222;
`

export default Modal;