import { useState, useEffect } from 'react'

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

import { AnimatePresence, motion } from 'framer-motion'

import { FaRegLightbulb, FaVideo, FaLaptopCode } from 'react-icons/fa'

import Paragraph from '../components/paragraph'
import Delayed from '../components/delayed'

const processList = [
  {
    title: 'Ideate',
    Icon: FaRegLightbulb,
    picSrc: 'images/asset-1.jpg',
    description: `It all starts with an idea and a clear brief. We wil lwork with you to find out your requirements and explore the best way to tell your story that best fits your audience.` 
  },
  {
    title: 'Shoot',
    Icon: FaVideo,
    picSrc: 'images/asset-1.jpg',
    description: `With a well-planned shoot, we will deliver a smooth and efficient production, ensuring quality while being on time and on budget.`
  },
  {
    title: 'Create',
    Icon: FaLaptopCode,
    picSrc: 'images/asset-1.jpg',
    description: `Our in-house editing team will start working on your project once we finish filming. We will put in the time and effort to craft your video to the best it can be.`
  }
]

const Process = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    clearTimeout(localStorage.getItem('process-timer'))
    const newIndex = index + 1 > processList.length - 1 ? 0 : index + 1 
    const timer = setTimeout(() => setIndex(newIndex), 5000)
    localStorage.setItem('process-timer', timer)

    return () => {
      clearTimeout(localStorage.getItem('process-timer'))
    }
  }, [index])

  const handleChange = i => {
    clearTimeout(localStorage.getItem('process-timer'))
    setIndex(i)
  }

  return (
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
          value={
            index === 0 
            ? 90 
            : index === 1 
              ? 50 
              : 10}
          onChange={(val) => {
            if(val < 20) handleChange(2)
            else if(val > 40 && val < 60) handleChange(1)
            else if(val >80) handleChange(0)
          }}
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
          {
            processList.map(({Icon}, i) => (
              <Center cursor="pointer" boxSize={92} onClick={() => handleChange(i)}>
                <Icon color={index === i && 'var(--chakra-colors-teal)'} fontSize={index === i ? 92 : 64} opacity={index === i ? 1 : 0.5} />
              </Center>   
            )) 
          }
        </Stack>
      </Stack>

      <Delayed from="down" fromOpaque={false}>
          <AnimatePresence exitBeforeEnter mode="wait">
            <motion.div
              key={'process-image-' + index}
              initial={{y: 50, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              exit={{y: 50, opacity: 0}}
              transition={{duration: 0.4, delay: 0.2}}
            >
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
            src={processList[index].picSrc}
          />
        </AspectRatio>
            </motion.div>
          </AnimatePresence>
      </Delayed>

      <Stack justify="end">
        <Heading as="h6" fontWeight={400} fontSize="1.5rem">
          {`${index+1}/${processList.length}`}
        </Heading>
        <Heading as="h2" color="teal" size={{ base: 'sm', md: 'md', lg: 'lg' }}>
          <AnimatePresence exitBeforeEnter mode="wait">
            <motion.div
              key={'process-title-' + index}
              initial={{x: -50, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              exit={{x: -50, opacity: 0}}
              transition={{duration: 0.4}}
            >
          {processList[index].title}
            </motion.div>
          </AnimatePresence>
        </Heading>
        <Box maxW={{ md: 300 }}>
          <AnimatePresence exitBeforeEnter mode="wait">
            <motion.div
              key={'process-description-' + index}
              initial={{x: -50, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              exit={{x: -50, opacity: 0}}
              transition={{duration: 0.4, delay: 0.1}}
            >
          <Paragraph>
            {processList[index].description}
          </Paragraph>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Stack>
    </Container>
  )
}

export default Process
