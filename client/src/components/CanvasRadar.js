import { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const X2 = 2;

export const CanvasRadar = ({ dataRef }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    let animationId;

    const draw = () => {
      clearCanvas();
      drawBackground(200, "#336234");
      dataRef.current.forEach((ship) => {
        drawShip(ship.pos.x, ship.pos.y, 28, ship.bearing, "#5EBF60");
      });
      drawShip(200, 200, 28, 0, "#FF0203");

      animationId = requestAnimationFrame(draw);
    };

    prepareCanvas(400);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dataRef]);

  const prepareCanvas = (canvasSize) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = canvasSize * X2;
    canvas.height = canvasSize * X2;
    canvas.style.width = `${canvasSize}px`;
    canvas.style.height = `${canvasSize}px`;
    contextRef.current = canvas.getContext("2d");
  };

  const drawBackground = (radius, color) => {
    if (!contextRef.current) return;

    const ctx = contextRef.current;

    const r = radius * X2;

    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.clip();
  };

  const drawShip = (xPosition, yPosition, side, heading, color) => {
    if (!contextRef.current) return;

    const ctx = contextRef.current;

    const x = xPosition * X2;
    const y = yPosition * X2;
    const h = side * (Math.sqrt(3) / 2);

    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate((Math.PI / 180) * heading);
    ctx.moveTo(0, -h / 2);
    ctx.lineTo(0 + h / 2, +h / 2);
    ctx.lineTo(0 - h / 2, +h / 2);
    ctx.lineTo(0, -h / 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.rotate((Math.PI / 180) * -heading);
    ctx.translate(-x, -y);
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    if (!contextRef.current) return;

    const canvas = canvasRef.current;
    const ctx = contextRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return <Box as="canvas" ref={canvasRef} />;
};
