import { Stage, Sprite } from "@inlet/react-pixi";
import { useWindowSize } from "./hooks/useWindowSize";

export const App = () => {
  const windowSize = useWindowSize();
  return <Stage width={windowSize.width} height={windowSize.height}></Stage>;
};
