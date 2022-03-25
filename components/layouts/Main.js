import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NoSsr from '../no-ssr'
import NavBar from '../NavBar'
import CommPet from '../commodore-pet'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Abdelrahman Khaled - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <CommPet />
        </NoSsr>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
