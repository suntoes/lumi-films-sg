import { Box, Button, Container, Heading } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'

import { motion } from 'framer-motion'

import Delayed from '../components/delayed'

const Hero = () => (
  <Box
    display="flex"
    h="100vh"
    w="100vw"
    justifyContent="center"
    boxShadow="0px 0px 50px rgba(0, 0, 0, 0.5)"
    filter="drop-shadow(0 0 0 #00000000)"
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
        mb="1rem"
      >
        <Delayed delay={0.2}>
        We help businesses with video marketing
        </Delayed>
      </Heading>
      <Delayed delay={0.4}>
      <Button fontWeight={700} variant="teal">Get a quote</Button>
      </Delayed>
      <Box
        position="absolute"
        alignSelf="center"
        transform="translateY(45vh)"
      >
      <motion.div
        animate={{y: -20}}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          duration: 1
        }}
      >
      <Delayed from="down">
      <TriangleDownIcon
        fontSize="2xl"
        color="teal"
      />
      </Delayed>
      </motion.div>
      </Box>
    </Container>
    <video
      autoPlay="autoplay"
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
