import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/Article'

const Work = () => {
  return (
    <Layout title="Starfish">
      <Container>
        <Title>
          Starfish <Badge>2019</Badge>
        </Title>
        <P>Marketing agency landing page built with Gatsby.js</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/homie980">
              https://starfish.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js, Gatsby.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/gatsby-js.png" alt="gatsby-app1" />
        <WorkImage src="/images/works/gatsby-js.png" alt="gatsby-app2" />
      </Container>
    </Layout>
  )
}

export default Work
