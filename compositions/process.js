import {
  AspectRatio,
  Box,
  Center,
  Container,
  Image,
  Heading,
  Stack,
  Slider,
  SliderTrack,
  SliderThumb
} from '@chakra-ui/react'

import { FaRegLightbulb, FaVideo, FaLaptopCode } from 'react-icons/fa'

import Paragraph from '../components/paragraph'
import Delayed from '../components/delayed'

const Process = () => (
  <Container
    display="flex"
    flexDirection={{ base: 'column', md: 'row' }}
    justifyContent="center"
    w="100%"
    py={32}
    maxW="container.lg"
  >
    <Stack
      direction={{ base: 'column', md: 'row' }}
      align={{ md: 'end' }}
      w={{ md: 175 }}
      spacing={0}
    >
      <Heading
        as="h4"
        w={{ md: '1em' }}
        size="sm"
        whiteSpace="pre"
        mr={{ md: 2 }}
        mb={{ base: 2, md: 0 }}
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
        <SliderTrack w={3} bg="gray" />
        <SliderThumb bg="teal" w={3} h={20} />
      </Slider>
      <Stack
        h={{ md: '70%' }}
        pl={{ base: 0, md: 3 }}
        direction={{ base: 'row', md: 'column' }}
        justify="space-between"
      >
        <Center>
          <FaRegLightbulb fontSize={74} opacity={0.5} />
        </Center>
        <Center>
          <FaVideo fontSize={74} opacity={0.5} />
        </Center>
        <Center>
          <FaLaptopCode color="var(--chakra-colors-teal)" fontSize={92} />
        </Center>
      </Stack>
    </Stack>

    <Delayed from="down" fromOpaque={false}>
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
    </Delayed>

    <Stack justify="end">
      <Heading as="h6" fontWeight={400} fontSize="1.5rem">
        3/3
      </Heading>
      <Heading as="h2" color="teal" size={{ base: 'sm', md: 'md', lg: 'lg' }}>
        Create
      </Heading>
      <Box maxW={{ md: 300 }}>
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
