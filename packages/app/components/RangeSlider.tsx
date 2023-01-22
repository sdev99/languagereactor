import React, { useState } from 'react'
import { Slider } from 'tamagui'

export function Rangeslider() {

  return (
      
      <Slider size="$2" width={'auto'} minStepsBetweenThumbs={10} borderTopColor={'blue'} backgroundColor={'blue'} defaultValue={[10, 30]} max={100} step={1}>

        <Slider.Track borderColor={'#B7E2F0'} backgroundColor={'#B7E2F0'}>

          <Slider.TrackActive borderColor={'blue'} backgroundColor={'blue'} />

        </Slider.Track>

        <Slider.Thumb backgroundColor={'blue'} borderColor='blue' circular index={0} hoverStyle={{ backgroundColor: 'blue', borderColor: "blue" }} />
        <Slider.Thumb backgroundColor={'blue'} borderColor='blue' circular index={1} hoverStyle={{ backgroundColor: 'blue', borderColor: "blue" }} />

      </Slider>
     
  )
}


