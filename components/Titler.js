import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

import { getLocationOrigin } from 'next/dist/lib/utils'
import fetch from 'isomorphic-unfetch'

class Titler extends Component {

  constructor(props) {
    super(props)
    this.state = {title: 'SSRBlog'}
  }
  async componentDidMount() {
    console.log('componentDidMount only run in frontend')
    const res = await fetch(getLocationOrigin()+'/api/header')
    const data = await res.json()
    console.log('componentDidMount get data', data)
    this.setState({
      title: data.body,
    })
  }

  render() {
    const { title } = this.state
    return (
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <p>{title}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }
}

export default Titler
