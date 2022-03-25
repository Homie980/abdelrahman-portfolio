import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/Article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/gatsby-js.png'
import thumbWalknote from '../public/images/works/nextjs.png'
import thumbFourPainters from '../public/images/works/vite-placeholder.jpg'
import thumbMenkiki from '../public/images/works/nextjs.png'
import thumbModeTokyo from '../public/images/works/gatsby-js.png'
import thumbStyly from '../public/images/works/nextjs.png'
import thumbPichu2 from '../public/images/works/vite-placeholder.jpg'
import thumbFreeDBTagger from '../public/images/works/nextjs.png'
import thumbAmembo from '../public/images/works/gatsby-js.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="starfish"
              title="Starfish"
              thumbnail={thumbInkdrop}
            >
              Marketing Agency Landing Page
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="myreads"
              title="Myreads"
              thumbnail={thumbWalknote}
            >
              A Bookshelf Web Application
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="project3"
              title="Project 3"
              thumbnail={thumbFourPainters}
            >
              Sit adipisicing cupidatat eu do laboris sit.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="project4"
              thumbnail={thumbMenkiki}
              title="Project 4"
            >
              Commodo ullamco reprehenderit magna.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="project5"
              thumbnail={thumbModeTokyo}
              title="Project 5"
            >
              Pariatur eiusmod aute elit consequat consequat.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="project6"
              thumbnail={thumbStyly}
              title="Project 6"
            >
              Consectetur ipsum ex velit aliqua.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="project7"
              thumbnail={thumbPichu2}
              title="Project 7"
            >
              Excepteur sit Lorem mollit magna excepteur.
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="project8"
              thumbnail={thumbFreeDBTagger}
              title="Project 8"
            >
              Lorem ad minim commodo aute et est laborum.
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="project9"
              thumbnail={thumbAmembo}
              title="Project 9"
            >
              Est ad sint adipisicing velit deserunt.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
