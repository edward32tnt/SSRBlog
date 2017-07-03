import React from 'react'

import { getLocationOrigin } from 'next/dist/lib/utils'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'

const Content = ({ blog = {} }) => (
  <div>
    <h1>{blog.title}</h1>
    <article dangerouslySetInnerHTML={{ __html: blog.body }}></article>
  </div>
)

const Post = (props) => (
  <Layout seoTitle={props.seoTitle}>
    <Content blog={props.blog}/>
  </Layout>
)

Post.getInitialProps = async ({ req, res, query }) => {
  const nowUrl = res && res.statusCode ? `http://${req.headers.host}` : getLocationOrigin()

  const fetchres = await fetch(`${nowUrl}/api/blog/${query.id}`)
  const { data } = await fetchres.json()
  const seoTitle = data.seo_title
  return {
    blog: data,
    seoTitle
  }
}

export default Post
