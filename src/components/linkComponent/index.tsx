import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function LinkComponent({ url, component }) {
  return (
    <NextLink href={url}>
      <Link
        href={url}
        _hover={{
          textDecoration: "none",
        }}
      >
        {component}
      </Link>
    </NextLink>
  );
}
