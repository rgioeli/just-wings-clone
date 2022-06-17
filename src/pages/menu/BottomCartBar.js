import styled from "styled-components";
import Button from "../../layout/Button";
import OrderContext from "../../context/orderContext";
import { useContext, useState } from "react";
import { BsArrow90DegUp } from "react-icons/bs";
import Spacer from "../../helpers/Spacer";

const BottomCartBar = () => {
  const [preview, setPreview] = useState(false);
  const context = useContext(OrderContext);

  const handlePreview = () => setPreview(!preview);

  return (
    <BottomCartBarWrapper>
      <div className="right-side">
        {context.order.length > 0 && preview && (
          <div className="items-preview">
            <div className="selector">
              {preview &&
                context.order.map((x) => (
                  <div className="selector-items">
                    <p className="item-title">{x.name}</p>
                    <p className="small-title">Included</p>
                    {x.comboBeverage && (
                      <p className="item-name">{x.comboBeverage}</p>
                    )}
                    {x.sauces &&
                      x.sauces.map((sauce) => (
                        <p className="item-name">{sauce}</p>
                      ))}
                    {x.additionalItems && (
                      <>
                        <p className="small-title">Extras</p>
                        {x.additionalItems.map((y) => (
                          <p className="item-name">{`\n ${y.name}`}</p>
                        ))}
                      </>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
        <div className="buttons">
          <p className="subtotal">Subtotal: ${context.subtotal.toFixed(2)}</p>
          {context.order.length > 0 && !preview && (
            <Button
              bgColor={"#777"}
              color={"#fff"}
              handleClick={handlePreview}
              text={"Order Preview"}
            />
          )}
          {context.order.length > 0 && preview && (
            <Button
              bgColor={"#777"}
              color={"#fff"}
              handleClick={handlePreview}
              text={"Close Order Preview"}
            />
          )}
          <Spacer direction={"right"} spacing={"0.5rem"} />
          <Button color={"#fff"} bgColor={"#f47d20"} text={"Go to Cart"} />
        </div>
      </div>
    </BottomCartBarWrapper>
  );
};

const BottomCartBarWrapper = styled.div`
  border-top: 3px solid #f47d20;
  padding: 1rem;
  background-color: #222;
  color: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  .right-side {
    display: flex;
    align-items: center;
    flex-flow: column;
    align-items: flex-end;
    .buttons {
      display: flex;
    }
    p {
      margin-right: 1rem;
      font-weight: 700;
    }
    .items-preview {
      .item-title {
        color: #f47d20;
      }
    }
    .selector {
      overflow-y: auto;
      height: 100%;
      max-height: 500px;
      .selector-items {
        padding: 1rem;
        border: 1px solid #fff;
        margin-bottom: 0.5rem;
        .item-name {
          font-size: 0.8rem;
        }
        .small-title {
          color: #f47d20;
          font-size: 0.75rem;
        }
      }
    }
  }
`;

export default BottomCartBar;
