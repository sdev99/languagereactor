import { Text, XStack, YStack, Button } from '@my/ui'
import React from 'react'
import { Stack } from 'tamagui'
import { SubTitle } from 'app/components/SubTitle'
import { listData, ListItem } from 'app/provider/static'
import { VirtualizedList, Dimensions } from 'react-native';
import { useLink } from 'solito/link'

const { height } = Dimensions.get("window");

const getItemCount = () => listData.length;
const getItem = (_data: unknown, index: number): ListItem => listData[index]!;

export function HomeScreen() {
  const linkProps = useLink({ href: '/user/1' })

  return (
    <YStack height={height ? height : '100vh'} style={{ overflow: 'hidden' }} backgroundColor={"rgb(32, 34, 37)"}>
      <Stack p={'$5'}>
        <Button {...linkProps}>View Components</Button>
      </Stack>

      <VirtualizedList
        data={listData}
        style={{ flex: 1 }}
        initialNumToRender={10}
        renderItem={({ item }) => (
          <XStack style={{ backgroundColor: "rgba(46, 49, 54, 0.5)" }} p="$4" m="$2" br={8}>
            <XStack flex={1.2} flexWrap='wrap' flexDirection={item.language === "arabic" ? 'row-reverse' : 'row'}>
              <SubTitle list={item.subtitles}></SubTitle>
            </XStack>
            <XStack flex={1}>
              <Text color="#fff" p="$2" fontSize={'17px'}>{item.title}</Text>
            </XStack>
          </XStack>
        )}
        keyExtractor={(_, index) => `${index}`}
        getItemCount={getItemCount}
        getItem={getItem}
      />

    </YStack>
  )
}


