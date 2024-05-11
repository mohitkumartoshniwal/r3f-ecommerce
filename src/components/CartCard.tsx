import { Container, Text } from "@react-three/uikit";
import { ProductType } from "../constants";
import { Card } from "./default/card";
import ImageCard from "./ImageCard";
import { Button } from "./default/button";
import { removeItem, updateItemInCart } from "../store/cartStore";

type Props = Omit<ProductType, "scale" | "src"> & {
  width: `${number}%`;
  height: number;
  quantity: number;
  refetch: () => void;
};

enum ACTIONS {
  ADD,
  REMOVE,
}

const CartCard = (props: Props) => {
  function handleUpdate(action: ACTIONS) {
    if (action === ACTIONS.ADD) {
      updateItemInCart({ id: props.id, updatedQuantity: props.quantity + 1 });
    } else if (action === ACTIONS.REMOVE) {
      if (props.quantity === 1) {
        const response = confirm(`Remove ${props.name} from Cart?`);
        if (response) {
          removeItem(props.id);
        }
      } else {
        updateItemInCart({ id: props.id, updatedQuantity: props.quantity - 1 });
      }
    }
    props.refetch();
  }

  return (
    <Card
      width={props.width}
      height={props.height}
      flexDirection={"row"}
      paddingX={10}
      alignItems={"center"}
      gap={10}
      borderColor={"gray"}
    >
      <ImageCard width={100} height={100} imgPath={props.imgPath} />
      <Container flexDirection={"column"}>
        <Container>
          <Text marginRight={10}>Name</Text>
          <Text fontWeight={"bold"}>{props.name}</Text>
        </Container>
        <Container>
          <Text marginRight={10}>Price</Text>
          <Text fontWeight={"bold"}>$ {props.price.toFixed(2)}</Text>
        </Container>
        <Container gap={12}>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleUpdate(ACTIONS.REMOVE);
            }}
            backgroundColor={"red"}
          >
            <Text>-</Text>
          </Button>
          <Text>{String(props.quantity)}</Text>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleUpdate(ACTIONS.ADD);
            }}
          >
            <Text>+</Text>
          </Button>
        </Container>
      </Container>
    </Card>
  );
};

export default CartCard;
