import React from 'react'
import ContentFilter from '../ContentFilter/ContentFilter';
import ContentItems from '../ContentItems/ContentItems';
import Slides from '../Slides/Slides';


import {
    ContentContainer,
    ContentElements
} from './Content.Elements';

const Content = () => {
  return (
    <ContentContainer>
        <Slides />
        <ContentElements>
          <ContentFilter />
          <ContentItems />
        </ContentElements>
    </ContentContainer>
  )
}

export default Content