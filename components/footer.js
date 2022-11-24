import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Flex,
  Link,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import Logo from './logo.js'

const FooterMenu = ({ title, path, menus }) => (
  <Stack spacing="0">
    <Text my="0.5rem">{title}</Text>
    {menus.map(t => (
      <NextLink href={path + t.toLowerCase().replace(/\n/, '-')} scroll={false}>
        <Link fontSize="sm" opacity="0.5">
          {t}
        </Link>
      </NextLink>
    ))}
  </Stack>
)

const Footer = () => {
  const navs = [
    {
      title: 'Services',
      path: '/about#',
      menus: [
        'Core Services',
        'Animation & Motion',
        'Transcription',
        'Subtitles',
        'SocMed Marketing',
        '360° & VR Video',
        'Voicer-over'
      ]
    },
    {
      title: 'Works',
      path: '/portfolio?category=',
      menus: [
        'All',
        'Events',
        'Interviews',
        'Portrait',
        'Product',
        'Voicer-over'
      ]
    },
    {
      title: 'Contact',
      path: '/',
      menus: ['Contact Us', 'Instant Quote']
    }
  ]

  return (
    <Box w="full">
      <Container px={5} py={32} w="100%" maxW="container.xl">
        <Heading as="h3" size={{ base: 'xs', md: 'sm', lg: 'md' }} mb={5}>
          Ready to create something remarkable?
        </Heading>
        <Button variant="teal">Get in touch</Button>
        <Box
          mt={20}
          display="flex"
          wrap="wrap"
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          <Stack align={{ base: 'center', md: 'start' }}>
            <Logo boxSize={{ base: 100, md: 50 }} mb={{ base: -5, md: 0 }} />
            <Stack spacing="0">
              <Link href="tel:+6589062903">
                <PhoneIcon color="teal" mr={1} />
                +65 8906 2903
              </Link>
              <Link href="mailto:hello@lumifilms.sg">
                <EmailIcon color="teal" mr={1} />
                hello@lumifilms.sg
              </Link>
            </Stack>
            <Text fontSize="sm" opacity="0.5">
              Copyright © Lumi Films Pte. Ltd. All rights reserved.
            </Text>
          </Stack>
          <Flex
            display={{ base: 'none', md: 'flex' }}
            pt={50}
            pl={20}
            pr={0}
            w="full"
            maxW="container.md"
          >
            {navs.map((item, i) => (
              <>
                <FooterMenu {...item} />
                {i !== navs.length - 1 ? <Spacer /> : <></>}
              </>
            ))}
          </Flex>
          <div></div>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
