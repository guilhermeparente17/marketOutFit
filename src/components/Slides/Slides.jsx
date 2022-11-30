import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {
    SlidesContainer,
    Image,
} from './Slides.elements'

const slideImages = [
    {
      url: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Slide 2'
    },
  ];

const Slides = () => {
  return (
    <SlidesContainer>
        <Slide style={{height: '100px'}}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <Image scale={0.4} style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </Image>
            </div>
          ))} 
        </Slide>
    </SlidesContainer>
  )
}

export default Slides