import { Button, Input, Text, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'
import { ChevronDown } from '@tamagui/lucide-icons'
import { Virtuoso } from 'react-virtuoso'



export function AutoComplete() {
    const [showList, setShowList] = useState(false);
    const [showInput, setShowInput] = useState<any>({});
    const languageArray = [

        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "purple",
        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "brown",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "orange",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "pink",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "blue",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "gray",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "green",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "yellow",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "black",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "red",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "brown",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "orange",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "pink",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "blue",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "gray",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "green",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "yellow",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "black",

        },
        {
            languageTitle: "English",
            lahguageKey: "E",
            backgroundcolor: "red",

        },
    ]
    const openList = () => {
        setShowList(true);

    }
    return (
        <YStack>

            <XStack height={45} borderWidth={2} borderRadius={4} backgroundColor={"black"} borderColor={"white"} alignItems={'center'} >
                <Input value={showInput.user?.lahguageKey} size="$1.5" width={'23px'} display='flex' justifyContent='center' alignItems='center' textAlign='center' borderRadius={100} marginLeft={'10px'} fontSize={'14px'} onChangeText={setShowInput} hoverStyle={{ borderColor: "black" }} borderColor={"black"} color={'white'} backgroundColor={showInput.user?.backgroundcolor} focusStyle={{ borderWidth: '$0' }} />

                <Input onClick={() => {
                    openList()
                }} value={showInput.user?.languageTitle} onChangeText={setShowInput} hoverStyle={{ borderColor: "black" }} borderColor={"black"} color={'white'} size="$3" backgroundColor={"black"} flex={1} focusStyle={{ borderWidth: '$0' }} />
                <Button marginRight={15} borderRadius={1} borderWidth={0} size='$1' backgroundColor={"black"} icon={<ChevronDown size="$0" color='white' />}>

                </Button>
            </XStack>

            {showList &&
                <Virtuoso
                    style={{ height: 200 }}
                    totalCount={languageArray.length}
                    itemContent={(index) => {
                        const user = languageArray[index]
                        return (
                            <XStack p={"$2.5"}
                                hoverStyle={{
                                    backgroundColor: 'hsla(0,0%,100%,.1333333333)',
                                    outlineColor: "hsla(0,0%,100%,.1333333333)",
                                    outlineWidth: "1px",
                                    outlineStyle: "solid"
                                }}
                                onClick={() => {
                                    setShowInput({ user })
                                    setShowList(false)
                                }}
                            >
                                <Text color="white" width={'20px'} height={"20px"} backgroundColor={user?.backgroundcolor} borderColor={'gray'} display='flex' justifyContent='center' alignItems={'center'} borderRadius={100} marginLeft={'10px'} fontSize={'14px'}>{user?.lahguageKey}</Text>


                                <Text color="white" marginLeft={'10px'} fontSize={'14px'}>{user?.languageTitle}</Text>


                            </XStack>
                        )
                    }}
                />
            }
        </YStack>
    )
}