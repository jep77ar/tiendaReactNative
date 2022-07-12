import { addDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { auth } from "../app/firebase";
import { getCurrentUser } from "./services/authApi";
import {
  createOrder,
  getAllOrders,
  getOrdersByBuyer,
} from "./services/orderApi";

const ShopProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const isInCart = (product) => {
    return (
      carrito.filter(
        (productInCart) => productInCart.productID === product.productID
      ).length > 0
    );
  };

  const addToCart = (product) => {
    console.log("carrito", carrito);
    console.log("agregando: ", product);
    if (isInCart(product)) {
      alert("El producto ya está en el carrito");
    } else {
      setCarrito([...carrito, { ...product }]);
      alert("El producto se agregó en el carrito");
    }
  };

  const deleteToCart = (product) => {
    console.log("carrito", carrito);
    console.log("eliminando: ", product);
    setCarrito(carrito.filter((item) => item.productID !== product.productID));
  };

  const generateOrder = async () => {
    console.log("carrito", carrito);
    console.log("generando orden");
    const total = carrito.reduce(
      (acumulado, currentValue) => acumulado + currentValue.price,
      0
    );

    const user = await auth.currentUser;

    const order = {
      items: [...carrito],
      buyer: user.email,
      total,
      date: new Date().toLocaleString(),
      id: new Date().getTime(),
    };

    console.log("orden: ", order);

    try {
      const docRef = createOrder(order);
      //const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e.message);
    }

    setCarrito([]);
  };

  const getOrders = async () => {
    let user = await getCurrentUser();
    console.log("en getOrders del provider", user.email);
    const orders = await getOrdersByBuyer(user.email);
    //const orders = await getDocs(collection(db, "orders"));
    console.log("orders: ", orders);
    return orders;
  };

  return (
    <AppContext.Provider
      value={{ carrito, addToCart, deleteToCart, generateOrder, getOrders }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ShopProvider;
export const AppContext = createContext();
