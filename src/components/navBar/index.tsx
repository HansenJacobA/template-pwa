import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { NavBarLinkNameAndUrl } from "../../types";
import { navBarLinkNames } from "../../utilities/navBar";

export default function NavBar() {
  return (
    <Flex
      w="100vw"
      align="center"
      justify="center"
      gap={10}
      p={3}
      bgColor="#4c5667"
      color="white"
      fontWeight="light"
      fontSize={18}
    >
      {navBarLinkNames.map(
        ({ linkName, url }: NavBarLinkNameAndUrl, index: number) => {
          return (
            <NextLink key={index} href={url} passHref>
              <Link
                textDecoration="none"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                {linkName}
              </Link>
            </NextLink>
          );
        }
      )}
    </Flex>
  );
}
