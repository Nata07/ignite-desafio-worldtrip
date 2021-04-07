import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex
      w="100%"
      bg="dark.100"
      pos="relative"
      justify="center"
    >
      <Image src="/banner.svg" alt="Banner" />

      {isWideVersion && (
        <Image maxH="270"
          position="absolute"
          right="120"
          mt="15px"
          src="/airplane.svg" alt="Airplane" 
          transform="rotate(5deg)" 
          
        />
      )}
       
    </Flex>
  )
}