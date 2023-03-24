import {
  Badge,
  Center,
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
// import NextLink from 'next/link'
import { PostGridItem } from '../components/grid-item'
import Layout from '../components/layouts/Article'
import Section from '../components/section'
import sfImg from '../public/images/salesforce.jpeg'
import sfIcon from '../public/images/salesforce1.svg'
import Image from 'next/image'

export async function getStaticProps() {
  const res = await fetch('https://abdelrahmandev-dev-ed.my.salesforce-sites.com/blogs/services/apexrest/api/blogs')
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

const stripTags = (str) => {
  if ((str === null) || (str === '') || (str === undefined)) {
    return false;
  }
  else {

    return str.replace(/(<([^>]+)>)/ig, '');
  }

}

const Posts = ({ posts }) => (

  <Layout title="Posts">
    {console.log(posts)}
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {posts.map((post) => (
          <Section key={post.Id}>
            {console.log(post.fs1__ds_Body__c)}
            {console.log(stripTags(post.fs1__ds_Body__c))}
            <PostGridItem
              id={post.Id}
              title={post.Name}
              thumbnail={sfImg}
            >
              {post.fs1__Short_Conent__c}
            </PostGridItem>
          </Section>
        ))}
      </SimpleGrid>
      {/* <Section delay={0.1}>
        <Text>This area is WIP</Text>
        <Divider my={6} />

        <Box my={6} align="center">
          <NextLink href="/">
            <Button colorScheme="teal">Return to home</Button>
          </NextLink>
        </Box>
      </Section> */}
    </Container>
    <Center my={3} align="center" verticalAlign="center">
      <Badge mr={3}>Powered By Salesforce</Badge>
      <Image width={32} height={32} priority src={sfIcon} alt="Salesforce - Icon" />
    </Center>
  </Layout>
)

export default Posts