import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Link,
  Container,
  Heading,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import Hero from '../components/hero'
import Aim from '../components/aim'
import RecentWorks from '../components/recent-works'

import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import QuoteGenerate from '../components/quote-generate'

import thumbInstagram from '../public/images/links/instagram.png'
import thumbYouTube from '../public/images/contents/youtube-my-desk-setup.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Hero />
    <Aim />
    <RecentWorks />
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
