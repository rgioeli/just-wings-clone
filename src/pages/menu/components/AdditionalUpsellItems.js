import styled from "styled-components";
import { menuItems } from "../../../data/menuItems";
import ModalInput from "./ModalInput";

const AdditionalUpsellItems = ({ modalData, setModalData }) => {
  const addAdditionalItem = (e, name, price) => {
    const item = { name, price };
    const isChecked = e.target.checked;

    const addItem = () => {
      if (!modalData.additionalItems) {
        setModalData((prevState) => ({
          ...prevState,
          additionalItems: [item],
        }));
      } else {
        setModalData((prevState) => ({
          ...prevState,
          additionalItems: [...prevState.additionalItems, item],
        }));
      }
    };

    const removeItem = () => {
      const updatedArr = modalData.additionalItems.filter(
        (x) => x.name !== name
      );
      setModalData((prevState) => ({
        ...prevState,
        additionalItems: updatedArr,
      }));
    };

    if (isChecked) {
      addItem();
    } else {
      removeItem();
    }
  };

  return (
    <AdditionalUpsellItemsWrapper>
      <div className="beverages each-item-wrapper">
        <h4>Add beverages (add-ons)</h4>
        {menuItems.beverages.map(({ name, price }) => {
          return (
            <div key={name} className="item-wrapper">
              <ModalInput
                type={"checkbox"}
                name={name}
                value={name}
                handleClick={(e) => addAdditionalItem(e, name, price)}
              />
              <div className="description">
                <p className="bold-string">{name}</p>
                <p>${price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fries each-item-wrapper">
        <h4>Add fries (add-ons)</h4>
        {menuItems.fries.map(({ name, price }) => {
          return (
            <div key={name} className="item-wrapper">
              <ModalInput
                type={"checkbox"}
                name={name}
                value={name}
                handleClick={(e) => addAdditionalItem(e, name, price)}
              />
              <div className="description">
                <p className="bold-string">{name}</p>
                <p>${price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="desserts each-item-wrapper">
        <h4>Add dessert (add-ons)</h4>
        {menuItems.desserts.map(({ name, price }) => {
          return (
            <div key={name} className="item-wrapper">
              <ModalInput
                type={"checkbox"}
                name={name}
                value={name}
                handleClick={(e) => addAdditionalItem(e, name, price)}
              />
              <div className="description">
                <p className="bold-string">{name}</p>
                <p>${price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AdditionalUpsellItemsWrapper>
  );
};

const AdditionalUpsellItemsWrapper = styled.div`
  .each-item-wrapper {
    margin-bottom: 2rem;
    h4 {
      margin-bottom: 0.5rem;
    }
  }
  .item-wrapper {
    border: 1px solid #222;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-top: 0.25rem;
    p {
      margin-left: 0.25rem;
    }
    .bold-string {
      font-weight: 700;
    }
    .description {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
`;

export default AdditionalUpsellItems;
