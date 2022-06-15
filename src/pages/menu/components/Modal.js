import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { menuItems } from "../../../data/menuItems";
import WingFlavors from "./WingFlavors";
import Beverages from "./Beverages";

const Modal = ({ modalData, setModalData }) => {
  const { name, description, numberOfSauceChoices, price, src, type } =
    modalData;

  const handleCloseModal = () => {
    setModalData({ display: false });
  };

  return (
    <ModalWrapper>
      <div className="interactive-modal-wrapper">
        <div className="modal-header">
          <div className="icon-wrapper" onClick={handleCloseModal}>
            <BsX className="icon" size={"2rem"} />
          </div>
          <h4>{name}</h4>
          <img src={src} alt="Menu item selected" />
          <p>{description}</p>
        </div>
        <WingFlavors
          setModalData={setModalData}
          numberOfSauceChoices={numberOfSauceChoices}
          modalData={modalData}
        />
        <Beverages
          type={type}
          modalData={modalData}
          setModalData={setModalData}
        />
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.5);

  .interactive-modal-wrapper {
    width: 100%;
    max-width: 400px;
    padding: 1rem;
    background-color: #fff;
  }

  .icon-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }

  .modal-header {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    img {
      margin-top: 1rem;
      width: 100%;
      max-width: 400px;
    }
  }
`;

const WingFlavorWrapper = styled.div`
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    padding: 0.25rem;
    input {
      margin-right: 0.5rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

export default Modal;
