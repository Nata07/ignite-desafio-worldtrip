import { Image, Flex, useBreakpointValue } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex align="center" h="100px">
      <Image src="/logo.svg" alt="Logo"/>
    </Flex>

  )
}