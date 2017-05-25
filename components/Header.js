import React, {Component} from 'react'
import Link from 'next/link'
import { Grid } from 'semantic-ui-react'

const linkStyle = {
  marginRight: 15,
}

class Header extends Component {
  render() {
    const {title = 'SSRBlog'} = this.state || {}
    return (
      <Grid columns={1}>
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
  }
}

export default Header
