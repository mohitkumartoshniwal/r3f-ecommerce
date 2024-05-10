import { Container } from "@react-three/uikit";
import { PRODUCTS } from "../constants";
import ImageCard from "../components/ImageCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container
      justifyContent={"center"}
      sm={{
        padding: 20,
        width: "70%",
      }}
      width={"80%"}
      height={"100%"}
      flexWrap={"wrap"}
      gapColumn={20}
      overflow={"scroll"}
      marginX={"auto"}
      padding={10}
    >
      {Object.values(PRODUCTS).map((product) => (
        <ImageCard
          key={product.id}
          height={290}
          width={300}
          imgPath={product.imgPath}
          onClick={() => navigate(`/details/${product.id}`)}
        />
      ))}
    </Container>
  );
};

export default Home;
