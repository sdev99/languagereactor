import { Text, XStack } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { Stack } from 'tamagui'
import { Virtuoso } from 'react-virtuoso'
import { SubTitle } from 'app/components/SubTitle'
import { listData } from 'app/provider/static'




export function HomeScreen() {

  const linkProps = useLink({
    href: '/user/nate',
  })


  return (
    <Stack style={{overflow:'hidden'}} backgroundColor={"rgb(32, 34, 37)"}>
      <Virtuoso
        style={{ height: '100vh', width:'100%' }}
        totalCount={listData.length}
        itemContent={(index: number) => {
          const item = listData[index]!;
          return (
            <XStack style={{ backgroundColor: "rgba(46, 49, 54, 0.5)" }} p="$4" key={index}>
              <XStack flex={1.2} flexWrap='wrap' flexDirection={item.language === "arabic" ? 'row-reverse' : 'row'}>
                <SubTitle list={item.subtitles}></SubTitle>
              </XStack>
              <XStack flex={1}>
                <Text color="#fff" p="$2" fontSize={'17px'}>{item.title}</Text>
              </XStack>
            </XStack>
          )

        }}
      />
    </Stack>
  )
}


