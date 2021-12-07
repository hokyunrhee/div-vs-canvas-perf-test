import { Box } from "@chakra-ui/react";

export const DivRadar = ({ data }) => {
  return (
    <Box
      boxSize="400px"
      position="relative"
      borderRadius="50%"
      overflow="hidden"
      backgroundColor="#336234"
    >
      {data.map((item, index) => {
        return (
          <Box
            key={`${item.pos.x}-${item.pos.y}-${index}`}
            position="absolute"
            borderLeft={`${6}px solid transparent`}
            borderRight={`${6}px solid transparent`}
            borderBottom={`${12}px solid #5EBF60`}
            transform={`translate(calc(${item.pos.x}px - 50%), calc(${item.pos.y}px - 50%)) rotate(${item.heading}deg)`}
          />
        );
      })}
      <Box
        position="absolute"
        boxSize="12px"
        borderLeft={`${6}px solid transparent`}
        borderRight={`${6}px solid transparent`}
        borderBottom={`${12}px solid #FF0203`}
        transform={`translate(calc(200px - 50%), calc(200px - 50%))`}
      />
    </Box>
  );
};
