import { Box, Flex, HStack, Divider, Text, Stack, Image, useBreakpointValue } from "@chakra-ui/react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { Items } from "../components/Items";


export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex w="100%" minH="100vh" direction="column" align="center">
      <Header />

      <Banner />

      <Flex justify={isWideVersion ? "center" : "space-between"} mt="16" align="center">
        {isWideVersion ? (
          <HStack spacing="16">
            <Items title="vida noturna" slugImg="vida noturna" img="/cocktail.svg" />
            <Items title="praia" slugImg="praia" img="/surf.svg" />
            <Items title="moderno" slugImg="moderno" img="/building.svg" />
            <Items title="clássico" slugImg="clássico" img="/museum.svg" />
            <Items title="e mais..." slugImg="e mais..." img="/earth.svg" />
          </HStack>
        ): (
          <Stack spacing="16">
            <Items title="vida noturna" slugImg="vida noturna" img="/cocktail.svg" />
            <Items title="praia" slugImg="praia" img="/surf.svg" />
            <Items title="moderno" slugImg="moderno" img="/building.svg" />
            <Items title="clássico" slugImg="clássico" img="/museum.svg" />
            <Items title="e mais..." slugImg="e mais..." img="/earth.svg" />
          </Stack>
        )}
      </Flex>

      <Divider variant="solid" border="2px" mt="16" borderColor="gray.700" w="90px"/>

      <Flex mt="16" align="center" textAlign="center">
        <Text as="h1" fontWeight="500" fontSize={ isWideVersion ? "32px" : '20px'} lineHeight="54px">
          Vamos nessa? <br/> 
          Então escolha seu continente
        </Text>
      </Flex>

      <Flex w="100%" mt="16" maxW="1140px" mb="10" position="relative" align="center" justify="center">
        <Carousel />
      </Flex>
    </Flex>
  )
}
