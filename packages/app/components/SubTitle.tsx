import { Text, YStack } from '@my/ui'
import { Token } from 'app/types/token'

interface props {
    list: Array<Token>
}

export const SubTitle = ({ list }: props) => {
    return (
        <>
            {
                list && list.map((titem, key) => {
                    return (
                        <YStack key={key} jc="flex-end" hoverStyle={titem.type === "WORD" ? {
                            backgroundColor: 'hsla(0,0%,100%,.1333333333)',
                            outlineColor: "rgb(255, 189, 128)",
                            outlineWidth: "1px",
                            outlineStyle: "solid"
                        } : null}>
                            {
                                titem.transliteration && (
                                    <Text whiteSpace='pre' fontSize={'16px'} textAlign={'center'} color="#fff" paddingVertical="$1.5" >{titem.transliteration}</Text>
                                )
                            }
                            {
                                titem.text && (
                                    <Text whiteSpace='pre' fontSize={'20px'} textAlign={'center'} color="#fff" paddingVertical="$1.5" >{titem.text}</Text>
                                )
                            }
                        </YStack>
                    )
                })
            }
        </>
    )

}