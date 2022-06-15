import styled from "styled-components";
import GetOrderLocation from "../../locations/components/GetOrderLocation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cookieParser } from "../../../cookieParser/cookieParser";
import Menu from "../../menu/components/Menu";
import Button from "../../../layout/Button";
import { FaMapMarkerAlt } from "react-icons/fa";

const Order = () => {
  const [deliveryMethod, setDeliveryMethod] = useState();
  const [orderLocation, setOrderLocation] = useState(null);
  const [cookieLocation, setCookieLocation] = useState(null);
  const { method } = useParams();

  useEffect(() => {
    setDeliveryMethod(method);

    const [selectedAddress] = cookieParser(document.cookie).filter(
      (x) => x.selectedAddress
    );

    setOrderLocation(selectedAddress);
  }, []);

  const handleResetLocation = () => {
    setOrderLocation(null);
  };

  return (
    <OrderWrapper>
      {!orderLocation ? (
        <GetOrderLocation setOrderLocation={setOrderLocation} />
      ) : (
        <SelectedAddress>
          <h4>Your selected store</h4>
          <p>
            {orderLocation.formatted_address || orderLocation.selectedAddress}
          </p>
          <h5 onClick={handleResetLocation}>
            Change Location
            <span>
              <FaMapMarkerAlt />
            </span>
          </h5>
        </SelectedAddress>
      )}
      <Menu />
    </OrderWrapper>
  );
};

const OrderWrapper = styled.div`
  margin: auto;
`;

const SelectedAddress = styled.div`
  max-width: 1024px;
  margin: auto;
  text-align: center;
  h4 {
    margin-bottom: 0.25rem;
    color: #f47d20;
  }
  p {
    margin: 0;
    font-weight: bold;
  }
  h5 {
    margin-top: 0.5rem;
    color: #555;
    cursor: pointer;
    span {
      margin-left: 0.25rem;
    }
  }
`;

export default Order;
