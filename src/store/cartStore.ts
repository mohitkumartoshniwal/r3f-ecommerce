import { ProductType } from "../constants";
import { getData, storeData } from "./store.utils";

const KEY = "R3F E-COMMERCE";

export type CartItemType = Pick<ProductType, "id"> & {
  quantity: number;
};

export function getCartItems() {
  return getData(KEY) as CartItemType[];
}

export function addItemToCart({ id, quantity }: CartItemType) {
  const cartItems = getCartItems();

  const existingCartItem = cartItems.find((item) => item.id === id);

  if (existingCartItem) {
    existingCartItem.quantity = existingCartItem.quantity + 1;
  } else {
    cartItems.push({
      id,
      quantity,
    });
  }

  storeData(KEY, cartItems);
}

export function updateItemInCart({
  id,
  updatedQuantity,
}: {
  id: CartItemType["id"];
  updatedQuantity: CartItemType["quantity"];
}) {
  const cartItems = getCartItems();

  const item = cartItems.find((item) => item.id === id);

  if (!item) return;

  item.quantity = updatedQuantity;

  storeData(KEY, cartItems);
}

export function removeItem(id: CartItemType["id"]) {
  let cartItems = getCartItems();

  cartItems = cartItems.filter((cartItem) => cartItem.id !== id);

  storeData(KEY, cartItems);
}
