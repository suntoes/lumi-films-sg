import Link from 'next/link'
import { Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  display: block;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => (
  <Link href="/" scroll={false}>
    <a>
      <LogoBox>
        <Image boxSize="50px" src={"images/logo.png"} />
        <Text position="absolute" color={{base: "red", sm: "orange", md: "yellow", lg: "green", xl: "blue"}} >|||</Text>
      </LogoBox>
    </a>
  </Link>
)

export default Logo
