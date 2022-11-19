import Head from 'next/head'
//import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Blur from '../blur'
//import MarryGoLoader from '../merry-go-loader'

//const LazyMarryGo = dynamic(() => import('../merry-go'), {
//  ssr: false,
//  loading: () => <MarryGoLoader />
//})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="suntoes" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:title" content="Lumi Films" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Lumi Films" />
        <meta name="twitter:creator" content="Lumi Films" />
        <meta name="twitter:image" content="" />
        <meta property="og:site_name" content="Lumi Films" />
        <meta name="og:title" content="Lumi Films" />
        <meta property="og:type" content="" />
        <meta property="og:image" content="" />
        <title>Lumi Films | Video Production</title>
      </Head>

      <Blur 
          position="fixed"
          opacity={0.8}
          style={{filter:"blur(400px)"}}
        />

      <NavBar path={router.asPath} />
        {children}
      <Footer />
    </Box>
  )
}

export default Main
