import { Image } from "@react-three/uikit";
import { ProductType } from "../constants";
import { Card } from "./default/card";

type Props = Pick<ProductType, "imgPath"> & {
  width: number;
  height: number;
  onClick?: () => void;
};

const ImageCard = ({ width, height, imgPath, onClick }: Props) => {
  return (
    <Card
      width={width}
      height={height}
      onClick={onClick}
      cursor="pointer"
      borderColor={"gray"}
      marginBottom={20}
    >
      <Image src={imgPath} />
    </Card>
  );
};

export default ImageCard;
