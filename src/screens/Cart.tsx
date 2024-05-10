import { Container, Text } from "@react-three/uikit";
import { useCallback, useEffect, useState } from "react";
import { PRODUCTS, ProductType } from "../constants";
import { getCartItems } from "../store/cartStore";
import CartCard from "../components/CartCard";

type Item = ProductType & {
  quantity: number;
};

const Cart = () => {
  const [items, setItems] = useState<Item[]>([]);

  const fetchCartItems = useCallback(() => {
    const cartItems = getCartItems();
    setItems(
      cartItems.map((item) => {
        const product = PRODUCTS[item.id];

        return {
          ...product,
          quantity: item.quantity,
        };
      })
    );
  }, []);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  if (items.length === 0) {
    return (
      <Container marginX={"auto"} marginTop={10}>
        <Text color={"red"}>Add Items to Cart</Text>
      </Container>
    );
  }

  const totalPrice = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <Container
      sm={{
        width: "50%",
      }}
      lg={{
        width: "30%",
      }}
      width={"100%"}
      height={"100%"}
      marginX={"auto"}
      flexDirection={"column"}
      gap={10}
      padding={10}
      overflow={"scroll"}
      alignItems={"center"}
    >
      {items.map((item) => (
        <CartCard
          key={item.id}
          height={130}
          width="100%"
          id={item.id}
          imgPath={item.imgPath}
          price={item.price}
          name={item.name}
          quantity={item.quantity}
          refetch={fetchCartItems}
        />
      ))}

      <Container flexDirection={"column"} alignItems={"center"}>
        <Text>Total Price</Text>
        <Text color={"orangered"} fontWeight={"bold"}>
          {totalPrice.toFixed(2).toString()}
        </Text>
      </Container>
    </Container>
  );
};

export default Cart;
