import { getLocationOrigin } from 'next/dist/lib/utils'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'



const Content = ({blog={}}) => (
  <div>
    <h1>{blog.title}</h1>
    <p>{blog.desc}</p>
  </div>
)

const Post = (props) => (
  <Layout>
    <Content blog={props.blog}/>
  </Layout>
)

Post.getInitialProps = async ({req, res, query}) => {
  const nowUrl = res && res.statusCode ? `http://${req.headers.host}`: getLocationOrigin()

  const fetchres = await fetch(`${nowUrl}/api/blog/${query.id}`)
  const blog = await fetchres.json()
  return {
    blog,
  }
}

export default Post
