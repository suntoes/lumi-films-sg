import { Box, Container, Image, Heading, Stack } from '@chakra-ui/react'

import Delayed from '../components/delayed'

const clientList = [
  'images/client-1.png',
  'images/client-2.png',
  'images/client-3.png',
  'images/client-4.png'
]

const Clients = () => (
  <Box
    display="flex"
    bg="black"
    borderRadius={25}
    color="white"
    w="full"
    py={32}
    boxShadow="0px 0px 50px rgba(0, 0, 0, 0.5)"
    filter="drop-shadow(0 0 0 #00000000)"
  >
    <Container
      display="flex"
      flexDirection="column"
      maxW="container.xl"
      centerContent
    >
      <Heading as="h3" size={{ base: 'sm', md: 'md', lg: 'lg' }} mb={5}>
        <Delayed>
          <p>
            Our{' '}
            <span style={{ color: 'var(--chakra-colors-teal)' }}>Clients</span>
          </p>
        </Delayed>
      </Heading>
      <Stack
        w="100%"
        justify="center"
        align="center"
        direction="row"
        spacing={10}
      >
        {clientList.map((t, i) => (
          <Box key={'client-' + (i + 1)}>
            <Delayed from={i % 2 ? 'up' : 'down'} hoverable={true}>
              <Image src={t} />
            </Delayed>
          </Box>
        ))}
      </Stack>
    </Container>
  </Box>
)

export default Clients
