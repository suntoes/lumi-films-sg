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
  IconButton
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
  const isHomeRender = path === '/' || path === '/#' ? true : false
  const delay = isHomeRender ? 3 : 0

  return (
    <Box
      position="fixed"
      as="nav"
      w="full"
      bgImage="linear-gradient(to bottom, #22222288, #ffffff00)"
      zIndex={99}
      {...props}
    >
      <Container
        display="flex"
        py={5}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Delayed onView={false} from="up" delay={delay}>
          <Logo />
        </Delayed>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="end"
          spacing="100"
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/#" path={path}>
            <Delayed onView={false} from="up" delay={delay}>
              Home
            </Delayed>
          </LinkItem>
          <LinkItem href="/about" path={path}>
            <Delayed onView={false} from="up" delay={delay}>
              About
            </Delayed>
          </LinkItem>
          <LinkItem href="/portfolio" path={path}>
            <Delayed onView={false} from="up" delay={delay}>
              Portfolio
            </Delayed>
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            <Delayed onView={false} from="up" delay={delay}>
              Contact
            </Delayed>
          </LinkItem>
          <Delayed onView={false} from="up" delay={delay}>
            <ThemeToggleButton />
          </Delayed>
        </Stack>
        <Box display={{ base: 'flex', md: 'none' }} alignItems="center">
          <Delayed onView={false} from="up" delay={delay}>
            <ThemeToggleButton transform="translateY(-2px)" />
          </Delayed>
          <Delayed onView={false} from="up" delay={delay}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                colorScheme="gray"
                opacity={0.3}
                variant="solid"
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
          </Delayed>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
