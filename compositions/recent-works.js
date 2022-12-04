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

import Paragraph from '../components/paragraph'
import Delayed from '../components/delayed'

const RecentWorks = () => (
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
      <Flex direction={{ base: 'column', md: 'row-reverse' }}>
        <Box
          overflow="hidden"
          w={{ base: '100%', md: 400, lg: 450, lg: 500 }}
          pb="1rem"
        >
          <Delayed from="down">
            <Box w="100%" overflow="hidden" borderRadius={10}>
              <Image
                w="100%"
                _hover={{ transform: 'scale(1.2)' }}
                transition="all .5s"
                src="images/asset-1.jpg"
              />
            </Box>
          </Delayed>
        </Box>
        <Box flex={1}>
          <Delayed>
            <Text display={{ base: 'none', md: 'block' }}>Recent Works</Text>
            <Heading as="h2" size={{ base: 'sm', md: 'md', lg: 'lg' }}>
              <p>
              Shophouse{' '}
                <span style={{color: 'var(--chakra-colors-teal)'}}>
                  Artwork
                </span>
              </p>
            </Heading>
            <Heading as="h5" fontWeight={400} fontSize="1.5rem">
              Talking Textiles
            </Heading>
          </Delayed>
          <Box w={{ md: '80%' }} mt={{ base: '2rem', md: '4rem' }} mb={'3em'}>
            <Delayed>
              <Paragraph>
                Lumi Films is a film production company in Singapore. We strive
                not only create engaging content, but to also evoke emotions,
                share unique moments, and create memories through the craft of
                video.
              </Paragraph>
            </Delayed>
          </Box>
          <Delayed>
            <Button variant="teal">See all works</Button>
          </Delayed>
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
            <Box key={i} maxW={{ md: '11%' }}>
              <Delayed from="right" delay={0.1 * i}>
                <Box
                  overflow="hidden"
                  borderRadius={10}
                  opacity={i === 1 ? 0.4 : 1}
                >
                  <Image
                    src="images/asset-1.jpg"
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

export default RecentWorks
