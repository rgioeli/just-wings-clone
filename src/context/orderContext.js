import { createContext, useState } from "react";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState({});
  const updateOrder = (item) => {
    // we need to update our order
    setOrder((prevState) => ({ ...prevState, item }));
  };
  return (
    <OrderContext.Provider value={updateOrder}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
