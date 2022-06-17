import { createContext, useEffect, useState } from "react";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const updateOrder = (item) => {
    let totalPrice = 0;

    const {
      name,
      description,
      src,
      additionalItems,
      price,
      sauces,
      comboBeverage,
    } = item;

    // if we have additional items in the order, add them to the total price
    if (additionalItems) {
      additionalItems.forEach((item) => {
        totalPrice += item.price;
      });
    }

    totalPrice += price; // add the price of the meal to the total price

    const finalizedItem = {
      name,
      description,
      src,
      sauces,
      totalPrice,
      additionalItems,
      comboBeverage,
    };
    // we need to update our order
    setOrder((prevState) => [...prevState, finalizedItem]);
  };

  useEffect(() => {
    const calculatedSubtotalOfAllItems = order.reduce((acc, curr) => {
      acc = acc + curr.totalPrice;
      return acc;
    }, 0);

    console.log(calculatedSubtotalOfAllItems);

    setSubtotal(calculatedSubtotalOfAllItems);
  }, [order]);
  return (
    <OrderContext.Provider value={{ updateOrder, subtotal, order }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
