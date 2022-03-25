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
          Sample Project <Badge>2020</Badge>
        </Title>
        <P>
          Eiusmod sit ea exercitation do tempor fugiat nulla Lorem pariatur
          Lorem. Aliqua pariatur tempor sunt ad mollit aute enim duis id tempor
          exercitation commodo labore aliqua. Dolore nostrud dolor laboris
          fugiat minim incididunt occaecat do. Eiusmod tempor excepteur ad irure
          proident non eiusmod sint mollit ullamco nostrud nostrud commodo.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/Homie980">
              https://sample.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js, Next.js</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/vite-placeholder.jpg" alt="vite-app1" />
      </Container>
    </Layout>
  )
}

export default Work
