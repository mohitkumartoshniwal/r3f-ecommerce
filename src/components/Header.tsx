import { Container } from "@react-three/uikit";
import { Home, ShoppingCart } from "@react-three/uikit-lucide";
import { Button } from "./default/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container
      height={64}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottomWidth={1}
    >
      <Button variant="ghost" onClick={() => navigate("/")}>
        <Home />
      </Button>
      <Button variant="ghost" onClick={() => navigate("/cart")}>
        <ShoppingCart />
      </Button>
    </Container>
  );
};

export default Header;
