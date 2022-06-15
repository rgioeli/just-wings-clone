import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../../../context/orderContext";
import WingFlavors from "./WingFlavors";
import Beverages from "./Beverages";

const Modal = ({ modalData, setModalData }) => {
  const { name, description, numberOfSauceChoices, price, src, type } =
    modalData;

  const [order, setOrder] = useState({
    startingPrice: price,
    sauces: [], // selected sauces from user
    beverages: [], // selected beverages
    extras: [],
    total: 0,
  });

  const context = useContext(OrderContext);

  const handleCloseModal = () => {
    setModalData({ display: false });
  };

  useEffect(() => {
    console.log(order);
  }, [order]);

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
const DessertsWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  .desserts-outer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    margin-top: 0.5rem;
    padding: 0.25rem;
    .desserts-inner-wrapper {
      display: flex;
      align-items: center;
    }
    input {
      margin-right: 0.5rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

const FriesWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  .fries-outer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    margin-top: 0.5rem;
    padding: 0.25rem;
    .fries-inner-wrapper {
      display: flex;
      align-items: center;
    }
    input {
      margin-right: 0.5rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

const BeverageWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  .beverage-outer-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    margin-top: 0.5rem;
    padding: 0.25rem;
    .beverage-inner-wrapper {
      display: flex;
      align-items: center;
    }
    input {
      margin-right: 0.5rem;
    }
    p {
      font-size: 0.85rem;
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
