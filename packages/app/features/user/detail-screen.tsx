import { Button, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { AutoComplete } from 'app/components/AutoComplete'
import { Rangeslider } from 'app/components/RangeSlider'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import { languageArray } from 'app/provider/static';

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const linkProps = useLink({ href: '/' })

  return (
    <YStack f={1} space p={"$10"} backgroundColor={"rgb(32, 34, 37)"}>
      <Button {...linkProps} icon={ChevronLeft}>
        Go Home
      </Button>
      <Rangeslider />
      <AutoComplete items={languageArray} labelKey="languageTitle" onSelect={() => { }} />
    </YStack>
  )
}
