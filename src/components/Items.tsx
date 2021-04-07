import { Flex, Image, Text } from "@chakra-ui/react";

interface ItemsProps {
  title: string;
  slugImg: string;
  img: string;
}

export function Items({title, slugImg, img}: ItemsProps) {
  return(
    <Flex maxW="1160px" w="100%" align="center" p="2">
      <Flex justify="center" width="100%" m="0 16px" align="center">
        <Flex width="100%" align="center" direction="column">
          <Image src={img} alt={slugImg} />
          <Text fontWeight="500" fontSize="0.8rem" 
            textAlign="center" lineHeight="2" mt="2"
          >
            {title}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}