import Link from 'next/link'
import { Image, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Logo = props => (
  <Link href="/" scroll={false}>
    <a>
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
    </a>
  </Link>
)

export default Logo
