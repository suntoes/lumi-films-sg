import {
  AspectRatio,
  Box,
  Button,
  Container,
  Image,
  Heading,
  Flex,
  Spacer,
  Stack,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderMark,
  Text
} from '@chakra-ui/react'

import { FaRegLightbulb, FaVideo, FaLaptopCode } from 'react-icons/fa'

import Paragraph from './paragraph'

const Process = () => (
  <Container
    bg="none"
    display="flex"
    flexDirection={{ base: 'column', md: 'row' }}
    justifyContent="center"
    w="100%"
    py={32}
    maxW="container.xl"
  >
    <Stack direction="row" align="end" w={175} spacing={0}>
      <Heading
        as="h4"
        w={{ md: '1em' }}
        size="sm"
        whiteSpace="pre"
        mr={{ md: 2 }}
        transform={{ md: 'rotate(-90deg)' }}
      >
        Our Process
      </Heading>
      <Slider
        w={10}
        h="70%"
        display={{ base: 'none', md: 'block' }}
        defaultValue={70}
        orientation="vertical"
      >
        <SliderMark value={75} ml={12} opacity={0.5}>
          <FaRegLightbulb fontSize={92} />
        </SliderMark>
        <SliderMark value={37.5} ml={12} opacity={0.5}>
          <FaVideo fontSize={92} />
        </SliderMark>
        <SliderMark value={0} ml={12}>
          <FaLaptopCode fontSize={92} />
        </SliderMark>
        <SliderTrack w={3} bg="gray" />
        <SliderThumb bg="teal" borderRadius={0} w={3} h={20} />
      </Slider>
    </Stack>

    <AspectRatio
      overflow="hidden"
      borderRadius={25}
      boxShadow="0px 0px 50px rgba(0, 0, 0, 0.5)"
      w={{ md: 350 }}
      mx={{ md: 24 }}
      my={{ base: 4, md: 0 }}
      ratio={{ base: 1 / 1, md: 10 / 16 }}
    >
      <Image
        _hover={{ transform: 'scale(1.2)' }}
        transition="all .5s"
        src="images/asset-1.jpg"
      />
    </AspectRatio>

    <Stack justify="end">
      <Heading as="h6" fontWeight={400} fontSize="1.5rem">
        3/3
      </Heading>
      <Heading as="h2" size={{ base: 'sm', md: 'md', lg: 'lg' }}>
        Create
      </Heading>
      <Box maxW={300}>
        <Paragraph>
          Our inhouse editing team will start working on your project once we
          finish filming. We will put in the time and effort to craft your video
          to the best it can be.
        </Paragraph>
      </Box>
    </Stack>
  </Container>
)

export default Process
