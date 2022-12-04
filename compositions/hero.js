import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'

import { motion } from 'framer-motion'

import Delayed from '../components/delayed'

const Hero = () => (
  <>
    <Box
      zIndex={99}
      pointerEvents="none"
      position="absolute"
      display="flex"
      h="100vh"
      w="100vw"
      justifyContent="center"
    >
      <Container
      display="flex"
      flexDirection="column"
      position="absolute"
      bg="none"
      h="100%"
      w="100%"
      maxW="container.lg"
      justifyContent="center"
       >
      <Heading
        as="h1"
        size={{ base: 'md', md: 'lg', lg: 'xl' }}
        mb="1rem"
      >
        <Delayed>
          <motion.div
            initial={{opacity: 1}}
            animate={{opacity: 0}}
            transition={{duration: 1, delay: 2}}
          >
            <p>
            We{' '}
              <span style={{color: 'var(--chakra-colors-teal)'}}>
                help businesses 
              </span>
            {' '}with video marketing
            </p>
          </motion.div>
        </Delayed>
      </Heading>

      <Button visibility="hidden" fontWeight={700} variant="teal">Get a quote</Button>
      </Container>
    </Box> 

    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 2}}
    >
    <video
      autoPlay="autoplay"
      loop="loop"
      muted="muted"
      preload="auto"
      style={{
        position: 'absolute',
        opacity: 0.9,
        objectFit: 'cover',
        height: '100vh',
        width: '100vw',
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px'
      }}
    >
      <source src="/images/home-video.mp4" type="video/mp4" />
    </video>
    </motion.div>

  <Box
    display="flex"
    h="100vh"
    w="100vw"
    justifyContent="center"
    boxShadow="0px 0px 50px rgba(0, 0, 0, 0.5)"
    borderBottomRadius="25px"
    filter="drop-shadow(0 0 0 #00000000)"
  >
    <Container
      display="flex"
      flexDirection="column"
      position="absolute"
      bg="none"
      h="100%"
      w="100%"
      maxW="container.lg"
      justifyContent="center"
    >
      <Heading
        as="h1"
        color="white"
        size={{ base: 'md', md: 'lg', lg: 'xl' }}
        filter="drop-shadow(0 0 5px rgba(0, 0, 0, 0.25))"
        mb="1rem"
      >
        <Delayed>
          <p>
          We{' '}
            <span style={{color: 'var(--chakra-colors-teal)'}}>
            help businesses 
            </span>
          {' '}with video marketing
          </p>
        </Delayed>
      </Heading>

      <Delayed delay={0.2 + 3}>
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
      <Delayed onView={false} from="down" delay={3}>
      <TriangleDownIcon
        fontSize="2xl"
        color="teal"
      />
      </Delayed>
      </motion.div>
      </Box>
    </Container>
 </Box>
  </>
)

export default Hero
