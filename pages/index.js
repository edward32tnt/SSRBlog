import Link from 'next/link'
import { getLocationOrigin } from 'next/dist/lib/utils'
import fetch from 'isomorphic-unfetch'

import { Card, Grid } from 'semantic-ui-react'
const CardGroup = Card.Group

import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

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
      <Grid columns={4}>
        <Grid.Row>
          {props.blogs.map((b, index) => (
            <Grid.Column key={index}>
              <PostCard id={index} title={b.title} desc={b.title} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
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
