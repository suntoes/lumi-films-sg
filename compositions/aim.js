import {
  Box,
  Button,
  Container,
  Heading,
  Flex,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react'

import ParallaxImage from '../components/parallax-image'
import Paragraph from '../components/paragraph'
import Delayed from '../components/delayed'

const Aim = () => (
  <Container
    display="flex"
    flexDirection={{ base: 'column-reverse', md: 'row' }}
    w="100%"
    pt={32}
    maxW="container.xl"
  >
    <Box
      w={{ base: '100%', md: '50%' }}
      mt={{ base: -14, md: 0 }}
      h={{ base: '400px', md: '600px' }}
      alignSelf="start"
    >
      <ParallaxImage />
    </Box>
    <Flex w={{ md: '50%' }} direction="column">
      <Heading
        w={{ md: '120%' }}
        transform={{ md: 'translateX(-15%)' }}
        size={{ base: 'sm', md: 'md', lg: 'lg' }}
      >
        <Delayed from="right">
          <p>
            We aim to{' '}
            <span style={{ color: 'var(--chakra-colors-teal)' }}>
              share your moments
            </span>{' '}
            with others
          </p>
        </Delayed>
      </Heading>
      <Spacer />
      <Stack
        pt={{ base: '2rem', md: 0 }}
        pl={{ md: 5 }}
        pr={{ md: 50 }}
        pb={{ base: 5, md: 36 }}
        spacing={5}
        alignSelf="end"
      >
        <Delayed from="right">
          <Paragraph>
            Lumi Films is a film production company in Singapore. We strive to
            not only create engaging content, but to also evoke emotions, share
            unique moments, and create memories through the craft of video.
            {
              '\n\nDo you need help bringing your ideas to video? Contact us today to learn more!'
            }
          </Paragraph>
        </Delayed>
        <Box alignSelf={{ base: 'end', md: 'start' }}>
          <Delayed from="right" delay={0.2}>
            <Button variant="teal">Learn more</Button>
          </Delayed>
        </Box>
      </Stack>
    </Flex>
  </Container>
)

export default Aim
