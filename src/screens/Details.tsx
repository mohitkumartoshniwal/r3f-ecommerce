import {
  Environment,
  Gltf,
  MeshPortalMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Container, Content, Text } from "@react-three/uikit";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants";
import { Button } from "../components/default/button";
import { addItemToCart } from "../store/cartStore";
import { toast } from "react-toastify";

const Details = () => {
  const params = useParams();

  const id = Number(params.id);

  const productDetails = PRODUCTS[id];

  return (
    <Container
      width={"100%"}
      height={"100%"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={20}
    >
      <Content width={"100%"} height={"65%"} borderWidth={1} marginTop={10}>
        <mesh>
          <planeGeometry />
          <MeshPortalMaterial>
            <Environment preset="sunset" />
            <Gltf
              position-y={-0.3}
              src={productDetails.src}
              scale={productDetails.scale}
            />
            <PerspectiveCamera makeDefault position={[0, 1, 4]} />
            <OrbitControls />
          </MeshPortalMaterial>
        </mesh>
      </Content>
      <Container
        width={"100%"}
        height={"30%"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Container>
          <Text marginRight={10}>Name</Text>
          <Text fontWeight={"bold"}>{productDetails.name}</Text>
        </Container>
        <Container>
          <Text marginRight={10}>Price</Text>
          <Text fontWeight={"bold"}>$ {productDetails.price.toFixed(2)}</Text>
        </Container>
        <Button
          backgroundColor={"hotpink"}
          onClick={(e) => {
            e.stopPropagation();
            addItemToCart({
              id: productDetails.id,
              quantity: 1,
            });
            toast(`Added ${productDetails.name} to Cart`);
          }}
        >
          <Text>Add to Cart</Text>
        </Button>
      </Container>
    </Container>
  );
};

export default Details;
