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

import Paragraph from './paragraph'

const RecentWorks = () => (
  <Box
    display="flex"
    bg="black"
    borderRadius={25}
    color="white"
    mt={-4}
    minW="100vw"
    py={32}
    filter="drop-shadow(0 0 50px rgba(0, 0, 0, 0.5))"
  >
    <Container
      display="flex"
      flexDirection={{ base: 'column-reverse', md: 'column' }}
      w="100%"
      px={5}
      maxW="container.xl"
    >
      <Flex direction={{ base: 'column', md: 'row-reverse' }}>
        <Box
          overflow="hidden"
          w={{ base: '100%', md: 400, lg: 450, lg: 500 }}
          pb="1rem"
        >
          <Box overflow="hidden" borderRadius={10}>
            <Image
              _hover={{ transform: 'scale(1.2)' }}
              transition="all .5s"
              src="images/asset-1.jpg"
            />
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column">
          <Text display={{ base: 'none', md: 'block' }}>Recent Works</Text>
          <Heading as="h2" size={{ base: 'sm', md: 'md', lg: 'lg' }}>
            Shophouse Artwork
          </Heading>
          <Heading as="h5" fontWeight={400} fontSize="1.5rem">
            Talking Textiles
          </Heading>
          <Box w={{ md: '80%' }} mt={{ base: '2rem', md: '4rem' }} mb={'2rem'}>
            <Paragraph>
              Lumi Films is a film production company in Singapore. We strive
              not only create engaging content, but to also evoke emotions,
              share unique moments, and create memories through the craft of
              video.
            </Paragraph>
          </Box>
          <Button variant="teal">See all works</Button>
        </Box>
      </Flex>
      <Box>
        <Text display={{ base: 'block', md: 'none' }}>Recent Works</Text>
        <Stack
          direction="row"
          alignSelf="end"
          my={{ base: 3, md: 0 }}
          justify="end"
        >
          {[0, 1, 2, 3, 4].map(i => (
            <Box key={i} overflow="hidden" maxW={{ md: '11%' }} borderRadius={10}>
              <Image
                src="images/asset-1.jpg"
                _hover={{ transform: 'scale(1.2)' }}
                transition="all .5s"
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  </Box>
)

export default RecentWorks
