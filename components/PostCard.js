import React from 'react'
import Router from 'next/router'

import { Card } from 'semantic-ui-react'

export default (props) => {
  return (
    <Card link onClick={() => Router.push(`/post?id=${props.id}`, `/p/${props.id}`)}>
      <style jsx global>{`
        .card-title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
      <Card.Content>
        <Card.Header className={'card-title'}>{props.title}</Card.Header>
        <Card.Description>
          {props.desc}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
