import { useEffect } from "react";
import styled from "styled-components";
import { menuItems } from "../../../data/menuItems";
import ModalInput from "./ModalInput";

const WingFlavors = ({ numberOfSauceChoices, modalData, setModalData }) => {
  const handleChooseWingFlavor = (e) => {
    const wingFlavor = e.target.value;
    const wingIndex = e.target.name;
    const updatedSaucesArray = modalData.sauces ? [...modalData.sauces] : [];
    updatedSaucesArray[wingIndex] = wingFlavor;

    setModalData((prevState) => ({ ...prevState, sauces: updatedSaucesArray }));
  };

  const boldString = (string, char) => {
    // get the string we need, split it, and return the first part and second part of the string.
    const splitString = string.split(char);
    return (
      <p>
        {splitString[0]} -<span>{splitString[1]}</span>
      </p>
    );
  };

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  return (
    <WingFlavorsWrapper>
      {Array.from(Array(numberOfSauceChoices)).map((_, index) => {
        return (
          <div className={"each-sauce-choice-wrapper"} key={index}>
            <h4>
              Choose your sauce ({index + 1} of {numberOfSauceChoices})
            </h4>
            {menuItems.wingFlavors.map((data, indexKey) => (
              <div className="item-wrapper">
                <ModalInput
                  key={indexKey}
                  type={"radio"}
                  handleClick={handleChooseWingFlavor}
                  name={index}
                  value={data.name}
                />
                <div className="bold-string">{boldString(data.name, "-")}</div>
              </div>
            ))}
          </div>
        );
      })}
    </WingFlavorsWrapper>
  );
};

const WingFlavorsWrapper = styled.div`
  .each-sauce-choice-wrapper {
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
      p {
        font-weight: 700;
      }

      span {
        font-weight: 500;
      }
    }
  }
`;

export default WingFlavors;
