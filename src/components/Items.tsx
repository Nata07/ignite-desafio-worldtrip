import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface ItemsProps {
  title: string;
  slugImg: string;
  img: string;
}

export function Items({title, slugImg, img}: ItemsProps) {
  const isMobileScreen = useBreakpointValue({
    base: true,
    md: false
  })
  return(
    <>
      {isMobileScreen !== undefined && (
        <Flex direction='column' align="center">
          <Image
            src={img}
            alt={slugImg}
            w={isMobileScreen ? '50px' : '85px'}
            h={isMobileScreen ? '50px' : '85px'}
            m="0 auto"
          />
          <Text
            fontWeight="600"
            lineHeight="9"
            textAlign="center"
            fontSize={["1.125rem", "1.25rem", "1.25rem"]}
            p="0 8px"
          >
            {title}
          </Text>
        </Flex>
      )}
    </>
  )
}