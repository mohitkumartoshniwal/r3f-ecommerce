import { useGLTF } from "@react-three/drei";

export type ProductType = {
  id: number;
  src: string;
  name: string;
  scale?: number;
  price: number;
  imgPath: string;
};

export const PRODUCTS: Record<number, ProductType> = {
  1: {
    id: 1,
    src: "/models/pot.glb",
    imgPath: "/images/pot.png",
    name: "Pot",
    scale: 1,
    price: 5,
  },
  2: {
    id: 2,
    src: "/models/bookcase.glb",
    imgPath: "/images/bookcase.png",
    name: "Bookcase",
    scale: 1 / 1.5,
    price: 10,
  },
  3: {
    id: 3,
    src: "/models/bookcase_wide.glb",
    imgPath: "/images/bookcase_wide.png",
    name: "Wide Bookcase",
    scale: 1 / 1.5,
    price: 12,
  },
  4: {
    id: 4,
    src: "/models/macbook.glb",
    imgPath: "/images/macbook.png",
    name: "Macbook",
    scale: 1 / 2,
    price: 100,
  },
  5: {
    id: 5,
    src: "/models/iphone.glb",
    imgPath: "/images/iphone.png",
    name: "IPhone",
    scale: 1 / 2.5,
    price: 50,
  },
};

Object.values(PRODUCTS).forEach((product) => {
  useGLTF.preload(product.src);
});
