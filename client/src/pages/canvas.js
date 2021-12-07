import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Box } from "@chakra-ui/react";

import { CanvasRadar } from "../components/CanvasRadar";

export default function Canvas() {
  const dataRef = useRef([]);

  useEffect(() => {
    const socket = io(`http://localhost:5000/radar`, {
      transports: ["websocket"],
    });

    socket.on("data", (message) => {
      dataRef.current = message;
    });

    return () => {
      socket.off();
      socket.disconnect();
    };
  });

  return (
    <Box p="24px">
      <CanvasRadar dataRef={dataRef} />
    </Box>
  );
}
