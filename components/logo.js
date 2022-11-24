import Link from 'next/link'
import { Image, Text } from '@chakra-ui/react'
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

const Logo = props => (
  <Link href="/" scroll={false}>
    <a>
      <LogoBox>
        <Image boxSize={50} src={'images/logo.png'} {...props} />
        <Text
          position="absolute"
          color={{
            base: 'red',
            sm: 'orange',
            md: 'yellow',
            lg: 'green',
            xl: 'blue'
          }}
        >
          under development
        </Text>
      </LogoBox>
    </a>
  </Link>
)

export default Logo
