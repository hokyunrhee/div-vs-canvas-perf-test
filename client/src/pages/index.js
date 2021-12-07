import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="ul" p="24px">
      <Box as="li" listStyleType="none">
        <NextLink href="/div" passHref>
          <Link>div</Link>
        </NextLink>
      </Box>
      <Box as="li" listStyleType="none">
        <NextLink href="/canvas" passHref>
          <Link>canvas</Link>
        </NextLink>
      </Box>
    </Box>
  );
}
