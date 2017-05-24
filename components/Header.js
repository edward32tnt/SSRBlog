import Link from 'next/link'
import Head from 'next/head'

const linkStyle = {
  marginRight: 15,
}

const Header = () => (
  <div>
    <Head>
      <title>SSRBlog</title>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header
