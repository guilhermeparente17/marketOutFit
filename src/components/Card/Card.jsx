import React from 'react'

import {
    CardContainer,
    CardBackground,
    CardContent,
    CardTitle,
    CardValue,
    CardWrapper,
} from './Card.Elements'

const Card = ({item}) => {
  return (
    <CardContainer>
        <CardWrapper>
            <CardBackground style={{backgroundImage: `url(${item?.image})`}} />
        </CardWrapper>
        <CardContent>
            <CardTitle>{item.name}</CardTitle>
            <CardValue>{item.value}</CardValue>
        </CardContent>
    </CardContainer>
  )
}

export default Card