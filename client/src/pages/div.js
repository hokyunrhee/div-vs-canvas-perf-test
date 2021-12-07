import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Box } from "@chakra-ui/react";

import { DivRadar } from "../components/DivRadar";

export default function Div() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = io(`http://localhost:5000/radar`, {
      transports: ["websocket"],
    });

    socket.on("data", (message) => setData(message));

    return () => {
      socket.off();
      socket.disconnect();
    };
  });

  return (
    <Box p="24px">
      <DivRadar data={data} />
    </Box>
  );
}
