import Link from 'next/link'
import { getLocationOrigin } from 'next/dist/lib/utils'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

const Index = (props) => {
  return (
    <Layout>
      <style jsx>
      {`
        h1, a {
          font-family: "Arial";
        }
        ul {
          padding: 0;
        }
      `}
      </style>
      <p>My Blog</p>
      <ul>
        {props.blogs.map((b, index)=> {
          return <PostLink key={index} id={index} title={b.title} />
        })}
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async ({req, res})=> {
  const nowUrl = res && res.statusCode? `http://${req.headers.host}`: getLocationOrigin()
  const fetchres = await fetch(`${nowUrl}/api/blogs`)
  const blogs = await fetchres.json()
  return {
    blogs,
  }
}

export default Index
