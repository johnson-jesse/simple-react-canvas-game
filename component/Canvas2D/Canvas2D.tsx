import React from "react";
import styles from "./Canvas2D.module.css";

type Props = {
  width: number;
  height: number;
  onContextReady(context: CanvasRenderingContext2D | null | undefined): void;
};

export default function Canvas2D(props: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    canvasRef.current?.focus();
    props.onContextReady(canvasRef.current?.getContext("2d"));
  }, []);

  return (
    <div className={styles.Canvas2D}>
      <canvas
        ref={canvasRef}
        width={props.width}
        height={props.height}
        tabIndex={1}
      ></canvas>
    </div>
  );
}
