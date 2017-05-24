import Link from 'next/link'
import Head from 'next/head'
import { Grid } from 'semantic-ui-react'

const linkStyle = {
  marginRight: 15,
}

const Header = () => (
    <Grid columns={1}>
      <Head>
        <title>SSRBlog</title>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
      </Head>
      <Grid.Row>
        <Grid.Column>
          <Link href='/'>
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href='/about'>
            <a style={linkStyle}>About</a>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)

export default Header
