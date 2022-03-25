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
          Myreads <Badge>2021</Badge>
        </Title>
        <P>
          MyReads is a bookshelf web application, allows a user to categorize
          books in a shelves whether they&apos;ve read, currently reading or
          want to read. The project uses modern react hooks and demonstrates how
          data and state is managed in react.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/Homie980/myreads-reactnd">
              https://myreads.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/create-react-app.jpg" alt="react-app1" />
      </Container>
    </Layout>
  )
}

export default Work
