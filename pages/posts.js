import {
  Container,
  Heading,
  Text,
  Divider,
  Box,
  Button,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/Article'
import Section from '../components/section'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={3}>
        Posts
      </Heading>
      <Section delay={0.1}>
        <Text>This area is WIP</Text>
        <Divider my={6} />

        <Box my={6} align="center">
          <NextLink href="/">
            <Button colorScheme="teal">Return to home</Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Posts
