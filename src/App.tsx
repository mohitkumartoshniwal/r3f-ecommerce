import { Canvas } from "@react-three/fiber";
import { Defaults } from "./components/default/theme";
import { Container, Fullscreen } from "@react-three/uikit";
import { Environment, OrbitControls } from "@react-three/drei";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Canvas
        flat
        gl={{ localClippingEnabled: true }}
        style={{ height: "100dvh", touchAction: "none" }}
      >
        <Defaults>
          <ambientLight />
          <Environment preset="sunset" />
          <OrbitControls />
          <Fullscreen>
            <Container width={"100%"} height={"100%"} flexDirection={"column"}>
              <Header />
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Details />} path="/details/:id" />
                <Route element={<Cart />} path="/cart" />
              </Routes>
            </Container>
          </Fullscreen>
        </Defaults>
      </Canvas>
      <ToastContainer autoClose={1500} />
    </>
  );
}
