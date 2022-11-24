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

import Paragraph from './paragraph'

const Aim = () => (
  <Container
    display="flex"
    flexDirection={{ base: 'column-reverse', md: 'row' }}
    w="100%"
    pt={32}
    maxW="container.xl"
  >
    <Box
      bg="gray"
      w={{ base: '100%', md: '50%' }}
      mt={{ base: -14, md: 0 }}
      h={{ base: '400px', md: '600px' }}
      alignSelf="start"
    >
      parallax image
    </Box>
    <Flex w={{ md: '50%' }} direction="column">
      <Heading
        w={{ md: '120%' }}
        transform={{ md: 'translateX(-15%)' }}
        size={{ base: 'sm', md: 'md', lg: 'lg' }}
      >
        We aim to share your moments with others
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
        <Paragraph>
          Lumi Films is a film production company in Singapore. We strive to not
          only create engaging content, but to also evoke emotions, share unique
          moments, and create memories through the craft of video.
          {
            '\n\nDo you need help bringing your ideas to video? Contact us today to learn more!'
          }
        </Paragraph>
        <Button alignSelf={{ base: 'end', md: 'start' }} variant="teal">
          Learn more
        </Button>
      </Stack>
    </Flex>
  </Container>
)

export default Aim
