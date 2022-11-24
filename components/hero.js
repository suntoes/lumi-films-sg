import { Box, Button, Container, Heading } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'

const Hero = () => (
  <Box
    display="flex"
    h="100vh"
    w="100vw"
    justifyContent="center"
    filter="drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.5))"
  >
    <Container
      display="flex"
      flexDirection="column"
      position="absolute"
      bg="none"
      p={{ base: 5, md: 125 }}
      h="100%"
      w="100%"
      maxW="container.xl"
      justifyContent="center"
    >
      <Heading
        as="h1"
        color="white"
        size={{ base: 'md', md: 'lg', lg: 'xl' }}
        filter="drop-shadow(0 0 5px rgba(0, 0, 0, 0.25))"
      >
        We help businesses with video marketing
      </Heading>
      <Button variant="teal">Get a quote</Button>
      <TriangleDownIcon
        position="absolute"
        fontSize="xl"
        alignSelf="center"
        color="teal"
        transform="translateY(45vh)"
      />
    </Container>
    <video
      autoplay="autoplay"
      loop="loop"
      muted="muted"
      preload="auto"
      style={{
        objectFit: 'cover',
        height: '100vh',
        width: '100vw',
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px'
      }}
    >
      <source src="/images/home-video.mp4" type="video/mp4" />
    </video>
  </Box>
)

export default Hero
