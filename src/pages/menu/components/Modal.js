import styled from "styled-components";
import { BsX } from "react-icons/bs";
<<<<<<< HEAD:src/pages/menu/components/Modal.js
import { menuItems } from "../../../data/menuItems";
import WingFlavors from "./WingFlavors";
import Beverages from "./Beverages";
=======
import { menuItems } from "../../../../data/menuItems";
import Button from "../../../../layout/Button";
import Spacer from "../../../../helpers/Spacer";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../../../../context/orderContext";
>>>>>>> a1be36629b5668c35f7f31b7365b314dcc148995:src/pages/order/components/menu/Modal.js

const Modal = ({ modalData, setModalData }) => {
  const { name, description, numberOfSauceChoices, price, src, type } =
    modalData;

<<<<<<< HEAD:src/pages/menu/components/Modal.js
=======
  const [order, setOrder] = useState({
    startingPrice: price,
    sauces: [], // selected sauces from user
    beverages: [], // selected beverages
    extras: [],
    total: 0,
  });

  const context = useContext(OrderContext);

>>>>>>> a1be36629b5668c35f7f31b7365b314dcc148995:src/pages/order/components/menu/Modal.js
  const handleCloseModal = () => {
    setModalData({ display: false });
  };

<<<<<<< HEAD:src/pages/menu/components/Modal.js
=======
  const handleUpdateDessert = (e) => {
    console.log(JSON.stringify(e.target.value));
  };

  const handleUpdateSauce = (e) => {
    const index = parseInt(e.target.name);
    const sauce = e.target.value;
    const sauceArr = [...order.sauces];
    sauceArr[index] = sauce;

    setOrder((prevState) => {
      return {
        ...prevState,
        sauces: sauceArr,
      };
    });
  };

  useEffect(() => {
    console.log(order);
  }, [order]);

  const handleSubmitOrderItem = () => {};

>>>>>>> a1be36629b5668c35f7f31b7365b314dcc148995:src/pages/order/components/menu/Modal.js
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
<<<<<<< HEAD:src/pages/menu/components/Modal.js
=======
      {Array.from(Array(numberOfSauceChoices)).map((_, index) => {
        return (
          <WingFlavorWrapper index={index}>
            <h4>
              Choose your sauce ({index + 1} of {numberOfSauceChoices})
              <span className="required-or-optional"> (required)</span>
            </h4>
            {menuItems.wingFlavors.map(({ name }) => (
              <div>
                <input
                  onChange={handleUpdateSauce}
                  type="radio"
                  name={index}
                  value={name}
                  required
                />
                <p>{name}</p>
              </div>
            ))}
          </WingFlavorWrapper>
        );
      })}
      {type === "combo" ? (
        <>
          <BeverageWrapper>
            <h4>
              Choose your beverage
              <span className="required-or-optional"> (required)</span>
            </h4>
            {menuItems.beverages.map((props, index) => (
              <div className="beverage-outer-wrapper">
                <div className="beverage-inner-wrapper">
                  <input
                    type="radio"
                    value={{ name: props.name, price: props.price }}
                    name={"beverages-required"}
                  />
                  <p>{props.name}</p>
                </div>
              </div>
            ))}
          </BeverageWrapper>
          <BeverageWrapper>
            <h4>
              Add extra beverages
              <span className="required-or-optional"> (optional)</span>
            </h4>
            {menuItems.beverages.map((props, index) => (
              <div className="beverage-outer-wrapper">
                <div className="beverage-inner-wrapper">
                  <input
                    type="checkbox"
                    name={`beverages-${index}`}
                    value={{ name: props.name, price: props.price }}
                  />
                  <p>{props.name}</p>
                </div>
                <div className="beverage-inner-wrapper">
                  <p>+${props.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </BeverageWrapper>
        </>
      ) : (
        <BeverageWrapper>
          <h4>
            Add a beverage
            <span className="required-or-optional"> (optional)</span>
          </h4>
          {menuItems.beverages.map((props, index) => (
            <div className="beverage-outer-wrapper">
              <div className="beverage-inner-wrapper">
                <input
                  type="checkbox"
                  name="beverages-optional"
                  value={{ name: props.name, price: props.price }}
                />
                <p>{props.name}</p>
              </div>
              <div className="beverage-inner-wrapper">
                <p>+${props.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </BeverageWrapper>
      )}

      <FriesWrapper>
        <h4>
          Add extra fries
          <span className="required-or-optional"> (optional)</span>
        </h4>
        {menuItems.fries.map((props, index) => (
          <div className="fries-outer-wrapper">
            <div className="fries-inner-wrapper">
              <input type="checkbox" value={props.name} />
              <p>{props.name}</p>
            </div>
            <div className="fries-inner-wrapper">
              <p>+${props.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </FriesWrapper>
      <DessertsWrapper>
        <h4>
          Add dessert
          <span className="required-or-optional"> (optional)</span>
        </h4>
        {menuItems.desserts.map((props, index) => (
          <div className="desserts-outer-wrapper">
            <div className="desserts-inner-wrapper">
              <input
                type="checkbox"
                onChange={handleUpdateDessert}
                value={{ name: props.name, price: props.price }}
              />
              <p>{props.name}</p>
            </div>
            <div className="desserts-inner-wrapper">
              <p>+${props.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </DessertsWrapper>
      <Button
        bgColor={"#f47d20"}
        text={"Update Order"}
        color={"#fff"}
        width={"100%"}
        handleClick={handleSubmitOrderItem}
      />
      <Spacer direction={"bottom"} spacing={"2rem"} />
>>>>>>> a1be36629b5668c35f7f31b7365b314dcc148995:src/pages/order/components/menu/Modal.js
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
<<<<<<< HEAD:src/pages/menu/components/Modal.js
=======
  background-color: #fff;
  box-shadow: -1px 0 2.5px 0.5px #222;
>>>>>>> a1be36629b5668c35f7f31b7365b314dcc148995:src/pages/order/components/menu/Modal.js
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
