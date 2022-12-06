import { useState, useEffect } from 'react'

import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'

import { AnimatePresence, motion } from 'framer-motion'

import Paragraph from '../components/paragraph'
import Delayed from '../components/delayed'

const works = [
  {
    title: 'Test 1 Artwork',
    company: 'Talking Textiles',
    picSrc: 'images/asset-1.jpg',
    description: `Lumi Films is a film production company in Singapore. We strive not only create engaging content, but to also evoke emotions, share unique moments, and create memories through the craft of video.`
  },
  {
    title: 'Test 2 Artwor',
    company: 'Talking Textiles',
    picSrc: 'images/asset-1.jpg',
    description: `Lumi Films is a film production company in Singapore. We strive not only create engaging content, but to also evoke emotions, share unique moments, and create memories through the craft of video.`
  },
  {
    title: 'Test 3 Artwo',
    company: 'Talking Textiles',
    picSrc: 'images/asset-1.jpg',
    description: `Lumi Films is a film production company in Singapore. We strive not only create engaging content, but to also evoke emotions, share unique moments, and create memories through the craft of video.`
  },
  {
    title: 'Test 4 Artw',
    company: 'Talking Textiles',
    picSrc: 'images/asset-1.jpg',
    description: `Lumi Films is a film production company in Singapore. We strive not only create engaging content, but to also evoke emotions, share unique moments, and create memories through the craft of video.`
  },
  {
    title: 'Test 5 Art',
    company: 'Talking Textiles',
    picSrc: 'images/asset-1.jpg',
    description: `Lumi Films is a film production company in Singapore. We strive not only create engaging content, but to also evoke emotions, share unique moments, and create memories through the craft of video.`
  }
]

const WorkContent = ({ index }) => (
  <Flex direction={{ base: 'column', md: 'row-reverse' }}>
    <Box
      overflow="hidden"
      w={{ base: '100%', md: 400, lg: 450, lg: 500 }}
      pb="1rem"
    >
      <Delayed from="down">
        <Box w="100%" overflow="hidden" borderRadius={10}>
          <AnimatePresence exitBeforeEnter mode="wait">
            <motion.div
              key={'recent-work-img-' + index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Image
                w="100%"
                _hover={{ transform: 'scale(1.2)' }}
                transition="all .5s"
                src={works[index].picSrc}
              />
            </motion.div>
          </AnimatePresence>
        </Box>
      </Delayed>
    </Box>
    <Box flex={1}>
      <Text display={{ base: 'none', md: 'block' }}>Recent Works</Text>
      <Delayed>
        <AnimatePresence exitBeforeEnter mode="wait">
          <motion.div
            key={'recent-work-img-' + index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Heading as="h2" size={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <p>
                {works[index].title
                  .split(' ')
                  .slice(0, works[index].title.split(' ').length - 1)
                  .join(' ')}{' '}
                <span style={{ color: 'var(--chakra-colors-teal)' }}>
                  {
                    works[index].title.split(' ')[
                      works[index].title.split(' ').length - 1
                    ]
                  }
                </span>
              </p>
            </Heading>
            <Heading as="h5" fontWeight={400} fontSize="1.5rem">
              {works[index].company}
            </Heading>
          </motion.div>
        </AnimatePresence>
      </Delayed>
      <Box w={{ md: '80%' }} mt={{ base: '2rem', md: '4rem' }} mb={'3em'}>
        <Delayed>
          <AnimatePresence exitBeforeEnter mode="wait">
            <motion.div
              key={'recent-work-img-' + index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Paragraph>{works[index].description}</Paragraph>
            </motion.div>
          </AnimatePresence>
        </Delayed>
      </Box>
      <Delayed>
        <Button variant="teal">See all works</Button>
      </Delayed>
    </Box>
  </Flex>
)

const RecentWorks = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    clearTimeout(localStorage.getItem('works-timer'))
    const newIndex = index + 1 > works.length - 1 ? 0 : index + 1
    const timer = setTimeout(() => setIndex(newIndex), 5000)
    localStorage.setItem('works-timer', timer)

    return () => {
      clearTimeout(localStorage.getItem('works-timer'))
    }
  }, [index])

  const handleChange = i => {
    clearTimeout(localStorage.getItem('process-timer'))
    setIndex(i)
  }

  return (
    <Box
      display="flex"
      bg="black"
      borderRadius={25}
      color="white"
      mt={-4}
      w="full"
      py={32}
      boxShadow="0px 0px 50px rgba(0, 0, 0, 0.5)"
      filter="drop-shadow(0 0 0 #00000000)"
    >
      <Container
        display="flex"
        flexDirection={{ base: 'column-reverse', md: 'column' }}
        maxW="container.xl"
      >
        <WorkContent index={index} />
        <Box>
          <Text display={{ base: 'block', md: 'none' }}>Recent Works</Text>
          <Stack
            direction="row"
            alignSelf="end"
            my={{ base: 3, md: 0 }}
            justify="end"
          >
            {works.map(({ picSrc }, i) => (
              <Box key={i} maxW={{ md: '11%' }}>
                <Delayed from="right" delay={0.1 * i}>
                  <Box
                    onClick={() => handleChange(i)}
                    overflow="hidden"
                    borderRadius={10}
                    opacity={i === index ? 0.4 : 1}
                  >
                    <Image
                      src={picSrc}
                      _hover={{ transform: 'scale(1.2)' }}
                      transition="all .5s"
                    />
                  </Box>
                </Delayed>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default RecentWorks
