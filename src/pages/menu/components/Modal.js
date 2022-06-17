import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../../../context/orderContext";
import WingFlavors from "./WingFlavors";
import Beverages from "./Beverages";
import AdditionalUpsellItems from "./AdditionalUpsellItems";
import Button from "../../../layout/Button";

const Modal = ({ modalData, setModalData }) => {
  const { name, description, numberOfSauceChoices, price, src, type } =
    modalData;

  const context = useContext(OrderContext);
  console.log(context);

  const handleAddToOrder = () => {
    // add this order to the global state and then clear the modal data
    context.updateOrder(modalData);
    handleCloseModal();
  };

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
        <AdditionalUpsellItems
          modalData={modalData}
          setModalData={setModalData}
        />
        <Button
          width={"100%"}
          text={"Add to Order"}
          color={"#fff"}
          bgColor={"#f47d20"}
          handleClick={handleAddToOrder}
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
  z-index: 200;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-shadow: -1px 0 2.5px 0.5px #222;
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

  .required-or-optional {
    font-size: 0.75rem;
    color: #333;
  }
`;

export default Modal;
