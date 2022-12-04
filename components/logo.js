import Link from 'next/link'
import { Image } from '@chakra-ui/react'

const Logo = props => (
  <Link href="/" scroll={false}>
    <a>
      <Image boxSize={50} src={'images/logo.png'} {...props} />
    </a>
  </Link>
)

export default Logo
