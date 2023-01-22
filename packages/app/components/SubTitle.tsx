import React, { useState } from 'react'
import { Text, YStack, AlertDialog } from '@my/ui'
import { Token } from 'app/types/token'
import { DialogModal } from './Dialog'

const Label = ({ title, ...rest }) => (
    <Text whiteSpace='pre' textAlign={'center'} color="#fff" paddingVertical="$1.5" {...rest}>{title}</Text>
)

interface props {
    list: Array<Token>
}

export const SubTitle = ({ list }: props) => {
    const [showAlert, setShowAlert] = useState(false)
    const [selectedSubtitle, setSelectedSubtitle] = useState<Token>()
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
                        } : null} onClick={() => {
                            if (titem.type === "WORD") {
                                setShowAlert(true)
                                setSelectedSubtitle(titem)
                            }
                        }}>
                            {
                                titem.transliteration && (<Label fontSize={'16px'} title={titem.transliteration} />)
                            }
                            {
                                titem.text && (<Label fontSize={'20px'} title={titem.text} />)
                            }
                        </YStack>
                    )
                })
            }

            <DialogModal open={showAlert} text={selectedSubtitle?.text} onClose={() => setShowAlert(false)} />

        </>
    )

}