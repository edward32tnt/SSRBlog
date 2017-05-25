import Header from './Header'
import Head from 'next/head'
import Titler from './Titler'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <Head>
        <title>SSRBlog</title>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
      </Head>
      <Header />
      <Titler />
      {props.children}
    </div>
  )
}

export default Layout
