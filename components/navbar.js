import NextLink from 'next/link'

import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import Logo from './logo'
import Delayed from './delayed'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link color={active ? 'teal' : 'white'} target={target} {...props}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="full"
      bgImage="linear-gradient(to bottom, #22222288, #ffffff00)"
      zIndex={2}
      {...props}
    >
      <Delayed>
      <Container
        display="flex"
        p={5}
        w="100%"
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Logo />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="end"
          spacing="100"
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/#" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
          <ThemeToggleButton />
        </Stack>
        <Box display={{ base: 'flex', md: 'none' }} alignItems="center">
          <ThemeToggleButton transform="translateY(-2px)" />
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              colorScheme="whiteAlpha"
              variant="ghost"
              aria-label="Options"
            />
            <MenuList>
              <NextLink href="/" passHref>
                <MenuItem as={Link}>Home</MenuItem>
              </NextLink>
              <NextLink href="/about" passHref>
                <MenuItem as={Link}>About</MenuItem>
              </NextLink>
              <NextLink href="/portfolio" passHref>
                <MenuItem as={Link}>Portfolio</MenuItem>
              </NextLink>
              <NextLink href="/contact" passHref>
                <MenuItem as={Link}>Contact</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      </Container>
      </Delayed>
    </Box>
  )
}

export default Navbar
