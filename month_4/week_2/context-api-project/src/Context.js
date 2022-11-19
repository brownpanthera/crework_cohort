import { createContext, useContext, useState } from "react";
import { faker } from '@faker-js/faker';

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const productsArray = [...Array(20)].map((p) => ({
    id:faker.datatype.uuid(),
        name:faker.name.firstName(),
        price:faker.commerce.price(),
        image:faker.image.image(),
  }));

  const [products] = useState(productsArray);

  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;