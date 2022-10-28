import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function CardExampleCard  (props) {

const {name,
  status,
  species,
  type,
  gender
  } = props.info;


  <Card>
    {/* <Image src={} wrapped ui={false} /> */}
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{status}</span>
      </Card.Meta>
      <Card.Description>
        {species}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon gender= {gender} />
      
      </a>
    </Card.Content>
  </Card>
}

export default CardExampleCard