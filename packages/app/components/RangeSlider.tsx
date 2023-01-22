import React from 'react'
import { YStack, XStack, Text } from '@my/ui'

import { Slider } from 'tamagui'
export const Rangeslider = () => {
  return (
    <YStack>
      <Slider size="$2" width={'auto'} minStepsBetweenThumbs={10} borderTopColor={'blue'} backgroundColor={'blue'} defaultValue={[10, 30]} max={100} step={1}>
        <Slider.Track borderColor={'#B7E2F0'} backgroundColor={'#B7E2F0'}>
          <Slider.TrackActive borderColor={'blue'} backgroundColor={'blue'} />
        </Slider.Track>
        <Slider.Thumb backgroundColor={'blue'} borderColor='blue' circular index={0} hoverStyle={{ backgroundColor: 'blue', borderColor: "blue" }} />
        <Slider.Thumb backgroundColor={'blue'} borderColor='blue' circular index={1} hoverStyle={{ backgroundColor: 'blue', borderColor: "blue" }} />
      </Slider>
      <XStack width={"100%"} height={40} ai="center" >
        <Text color="#fff" flex={1} ta="left">0</Text>
        <Text color="#fff" flex={1} ta="center">20</Text>
        <Text color="#fff" flex={1} ta="center">40</Text>
        <Text color="#fff" flex={1} ta="center">60</Text>
        <Text color="#fff" flex={1} ta="center">80</Text>
        <Text color="#fff" flex={1} ta="right">100</Text>
      </XStack>
    </YStack>
  )
}


