import { Flex, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      bg="dark.1000"
      pos="relative"
      justify="center"
    >
      <Image src="/banner.svg" alt="Banner" />

      <Image maxH="270"
        position="absolute"
        right="140"
        mt="60px"
        src="/airplane.svg" alt="Airplane" 
        transform="rotate(5deg)"
      />
       
    </Flex>
  )
}