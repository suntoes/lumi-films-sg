import { Box, Container, Image, Heading, Stack } from '@chakra-ui/react'

const Clients = () => (
  <Box
    display="flex"
    bg="black"
    borderRadius={25}
    color="white"
    minW="100vw"
    py={32}
    filter="drop-shadow(0 0 50px rgba(0, 0, 0, 0.5))"
  >
    <Container
      display="flex"
      flexDirection="column"
      w="100%"
      px={5}
      maxW="container.xl"
      centerContent
    >
      <Heading as="h3" size={{ base: 'sm', md: 'md', lg: 'lg' }} mb={5}>
        Our Clients
      </Heading>
      <Stack
        w="100%"
        justify="center"
        align="center"
        direction="row"
        spacing={10}
      >
        <Box>
          <Image src="images/client-1.png" />
        </Box>
        <Box>
          <Image src="images/client-2.png" />
        </Box>
        <Box>
          <Image src="images/client-3.png" />
        </Box>
        <Box>
          <Image src="images/client-4.png" />
        </Box>
      </Stack>
    </Container>
  </Box>
)

export default Clients
