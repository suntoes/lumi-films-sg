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
    w="100%"
    pt={32}
    maxW="container.xl"
  >
   <Box bg="gray" w="50%" h="600px" alignSelf="start">
      parallax image
    </Box>
    <Flex w="50%" direction="column">
       <Heading
        w="120%"
        transform="translateX(-15%)"
        size={{base: "sm", md: "md", lg: "lg"}} 
        > 
        We aim to share your moments with others
      </Heading>
    <Spacer/>
      <Stack pl={5} pr={50} pb={36} spacing={5} alignSelf="end">
      <Paragraph>
        Lumi Films is a film production company in Singapore. We strive to not only create engaging content, but to also evoke emotions, share unique moments, and create memories through the craft of video.
      </Paragraph>
      <Paragraph>
        Do you need help bringing your ideas to video? Contact us today to learn more!
      </Paragraph>
      <Button variant="teal">
        Learn more
      </Button>
    </Stack>
    </Flex>
  </Container>
)

export default Aim
