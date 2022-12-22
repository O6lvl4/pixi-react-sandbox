import { Stage, Sprite, useTick } from "@inlet/react-pixi";
import { useReducer, useRef } from "react";
import { Container } from "./components/pixi/Container";
import { useWindowSize } from "./hooks/useWindowSize";

export const App = () => {
  const windowSize = useWindowSize();
  return (
    <Stage width={windowSize.width} height={windowSize.height}>
      <Container
        x={windowSize.width * 0.5 - 30 * 0.5}
        y={windowSize.height * 0.5 - 30 * 0.5}
      >
        <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" />
      </Container>
    </Stage>
  );
};
