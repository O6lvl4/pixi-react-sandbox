import { Container as PixiContainer, _ReactPixi } from "@inlet/react-pixi";
import { ReactNode } from "react";

export interface ContainerProps {
  x?: number;
  y?: number;
  scale?: number;
  rotation?: number;
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, ...pixiContainerProps } = props;
  return <PixiContainer {...pixiContainerProps}>{children}</PixiContainer>;
};
