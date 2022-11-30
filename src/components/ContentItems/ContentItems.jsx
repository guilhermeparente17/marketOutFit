import React from 'react'
import { Data } from '../../data'
import Card from '../Card/Card';

import {
  ContentItemsContainer
} from './ContentItems.Elements'

const ContentItems = () => {
  return (
    <ContentItemsContainer>
      {Data.map(item => {
        return(
          <Card key={item.id} item={item} />
        )
      })}
    </ContentItemsContainer>
  )
}

export default ContentItems