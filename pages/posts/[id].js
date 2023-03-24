import { Container, Badge, Center } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/post'
import Layout from '../../components/layouts/Article'
import Image from 'next/image'
import sfIcon from '../../public/images/salesforce1.svg'

export async function getStaticPaths() {
    const res = await fetch('https://abdelrahmandev-dev-ed.my.salesforce-sites.com/blogs/services/apexrest/api/blogs')
    const blogs = await res.json()

    const paths = blogs.map((blog) => ({
        params: { id: blog.Id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://abdelrahmandev-dev-ed.my.salesforce-sites.com/blogs/services/apexrest/api/blogs/${params.id}`)
    const post = await res.json()

    return {
        props: {
            post
        },
        revalidate: 10
    }
}

const Post = ({ post }) => {
    return (
        <Layout title={post[0].Name}>
            <Container>
                <Title>
                    {post[0].fs1__Short_Conent__c} <Badge>2023</Badge>
                </Title>
                <div dangerouslySetInnerHTML={{ __html: post[0].fs1__Short_Body__c }}>
                </div>
                <WorkImage src="/images/works/create-react-app.jpg" alt="react-app1" />
            </Container>

            <Center my={3} align="center" verticalAlign="center">
                <Badge mr={3}>Powered By Salesforce</Badge>
                <Image width={32} height={32} priority src={sfIcon} alt="Salesforce - Icon" />
            </Center>
        </Layout>
    )
}

export default Post
