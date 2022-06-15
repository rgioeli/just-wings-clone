import styled from "styled-components";
import { menuItems } from "../../../data/menuItems";
import ModalInput from "./ModalInput";

const Beverages = ({ modalData, setModalData, type }) => {
  const handleRequiredDrink = (e) => {
    const beverageName = e.target.value;
    setModalData((prevState) => ({
      ...prevState,
      comboBeverage: beverageName,
    }));
  };
  return (
    <BeveragesWrapper>
      {type === "combo" && (
        <div>
          <h4>Choose your beverage</h4>
          {menuItems.beverages.map((x) => (
            <div className="individual-beverage-wrapper">
              <ModalInput
                type={"radio"}
                handleClick={handleRequiredDrink}
                name={"beverage"}
                value={x.name}
              />
              <p>{x.name}</p>
            </div>
          ))}
        </div>
      )}
    </BeveragesWrapper>
  );
};

const BeveragesWrapper = styled.div`
  .individual-beverage-wrapper {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #333;
    margin-top: 0.25rem;
  }

  p {
    margin-left: 0.5rem;
    font-weight: 700;
  }
  margin-bottom: 2rem;
`;

export default Beverages;
