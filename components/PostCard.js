import React from 'react'
import Router from 'next/router'

import { Card } from 'semantic-ui-react'

export default (props) => {
  return (
    <Card link onClick={()=>Router.push(`/post?id=${props.id}`, `/p/${props.id}`)}>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>
          {props.desc}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
