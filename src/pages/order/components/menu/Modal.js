import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { menuItems } from "../../../../data/menuItems";

const Modal = ({ modalData, setModalData }) => {
  const { name, description, numberOfSauceChoices, price, src, type } =
    modalData;
  const handleCloseModal = () => {
    setModalData({ display: false });
  };
  return (
    <ModalWrapper>
      <div className="modal-header">
        <div className="icon-wrapper" onClick={handleCloseModal}>
          <BsX className="icon" size={"2rem"} />
        </div>
        <h4>{name}</h4>
        <img src={src} alt="Menu item selected" />
        <p>{description}</p>
      </div>
      {Array.from(Array(numberOfSauceChoices)).map((_, index) => {
        return (
          <WingFlavorWrapper index={index}>
            <h4>
              Choose your sauce ({index + 1} of {numberOfSauceChoices})
            </h4>
            {menuItems.wingFlavors.map(({ name }) => (
              <div>
                <input type="radio" name={`sauces-${index}`} />
                <p>{name}</p>
              </div>
            ))}
          </WingFlavorWrapper>
        );
      })}
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 300px;
  padding: 1rem;
  height: 100vh;
  background-color: #fff;
  border-left: 2px solid #222;
  overflow-y: auto;

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
      max-width: 300px;
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
    margin-top: 0.5rem;
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
