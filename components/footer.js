import NextLink from 'next/link'
import { Box, Container, Flex, Link, Spacer, Stack, Text } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import Logo from './logo.js'

const FooterMenu = ({title, path, menus}) => (
  <Stack spacing="0">
    <Text my="0.5rem">
      {title}
    </Text>
    {
      menus.map(t => (
        <NextLink href={path+t.toLowerCase().replace(/\n/, "-")} scroll={false}>
          <Link fontSize="sm" opacity="0.5">{t}</Link>
        </NextLink>
      ))
    }
  </Stack>
)

const Footer = () => {

  const navs = [
    {
      title: "Services",
      path: "/about#",
      menus: [
        "Core Services",
        "Animation & Motion",
        "Transcription",
        "Subtitles",
        "SocMed Marketing",
        "360° & VR Video",
        "Voicer-over"
      ]
    },
    {
      title: "Works",
      path: "/portfolio?category=",
      menus: [
        "All",
        "Events",
        "Interviews",
        "Portrait",
        "Product",
        "Voicer-over"
      ]
    },
    {
      title: "Contact",
      path: "/",
      menus: [
        "Contact Us",
        "Instant Quote"
      ]
    }
  ]
  
  return (
    <Box w="full">
      <Container 
        display="flex"
        px={5}
        py={32}
        w="100%"
        maxW="container.xl"
        wrap="wrap"
        justifyContent="space-between"
      >
        <Stack>
          <Logo />
          <Stack spacing="0">
            <Link href="tel:+6589062903">
              <PhoneIcon color="teal" mr={1}/>+65 8906 2903
            </Link>
            <Link href="mailto:hello@lumifilms.sg">
              <EmailIcon color="teal" mr={1}/>hello@lumifilms.sg
            </Link>
          </Stack>
          <Text fontSize="sm" opacity="0.5">
            Copyright © Lumi Films Pte. Ltd. All rights reserved.
          </Text>
        </Stack>
        <Flex pt={50} pl={20} pr={0} w="full" maxW="container.md">
          {
            navs.map((item, i) => <>
              <FooterMenu {...item}/>
              {i !== navs.length-1 ? <Spacer/> : <></>}
            </>)
          }
        </Flex>
        <div>
        </div>
      </Container>
    </Box>
  )
}

export default Footer
