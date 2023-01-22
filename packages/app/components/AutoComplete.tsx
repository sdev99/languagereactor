import { Input, Stack, Text, XStack, YStack, Label } from '@my/ui'
import React, { useState, useEffect } from 'react'
import { ChevronDown } from '@tamagui/lucide-icons'
import { VirtualizedList } from 'react-native';

export const AutoComplete = ({ items, labelKey, onSelect }) => {

    const [list, setList] = useState<any>(items);
    const [isSearched, setIsSearched] = useState<boolean>(false);
    const [showList, setShowList] = useState(false);
    const [showInput, setShowInput] = useState<any>(items[0]);
    const [searchText, setSearchText] = useState<string>("");

    const getItemCount = () => list.length;
    const getItem = (_data: unknown, index: number): any => list[index]!;

    useEffect(() => {
        if (searchText && isSearched) {
            const filteredList = items.filter((item) => !searchText || item[labelKey].toLowerCase().includes(searchText.toLowerCase()));
            console.log("filteredList", filteredList)
            setList(filteredList)
        } else {
            setList(items)
        }
    }, [searchText, isSearched])

    const onInputFocus = () => {
        setSearchText(showInput[labelKey]);
        setShowList(true);
        setIsSearched(false)
    };


    const onInputFocusOut = () => {
        setTimeout(() => {
            setShowList(false);
            setSearchText("");
            setIsSearched(false)
        }, 100)
    }

    return (
        <YStack>
            <XStack onClick={onInputFocus} paddingHorizontal={"$3"} height={45} borderWidth={2} borderRadius={4} backgroundColor={"black"} borderColor={"white"} alignItems={'center'} >
                <Stack borderRadius={15} jc="center" ai={"center"} backgroundColor="blueviolet" width={30} height={30} >
                    <Label color="#fff">{showInput[labelKey]?.charAt(0) || ""}</Label>
                </Stack>
                <Input onEndEditing={onInputFocusOut} onClick={onInputFocus} onFocus={onInputFocus} onBlur={onInputFocusOut} value={showList ? searchText : showInput[labelKey]} onChangeText={(text) => {
                    setShowList(true);
                    setIsSearched(true)
                    setSearchText(text)
                }} hoverStyle={{ borderColor: "black" }} borderColor={"black"} color={'white'} size="$3" backgroundColor={"black"} flex={1} focusStyle={{ borderWidth: '$0' }} />
                <ChevronDown size={24} color='white' />
            </XStack>

            {
                showList && (
                    <Stack borderBottomEndRadius={10} borderBottomStartRadius={10} maxHeight={200} overflow="hidden" backgroundColor="rgba(46, 49, 54, 0.5)">
                        {
                            list && list.length > 0 ? <VirtualizedList
                                data={list}
                                initialNumToRender={10}
                                renderItem={({ item }) => (
                                    <XStack paddingHorizontal={"$3"} paddingVertical={"$2.5"}
                                        ai="center"
                                        hoverStyle={{
                                            backgroundColor: 'hsla(0,0%,100%,.1333333333)',
                                            outlineColor: "hsla(0,0%,100%,.1333333333)",
                                            outlineWidth: "1px",
                                            outlineStyle: "solid"
                                        }}
                                        onClick={() => {
                                            setSearchText("");
                                            setShowInput(item)
                                            setShowList(false)
                                            setIsSearched(false)
                                            onSelect && onSelect(item)
                                        }}
                                    >
                                        <Stack width={30} height={30} backgroundColor={item?.backgroundcolor} borderColor={'gray'} display='flex' jc='center' ai={'center'} borderRadius={100} >
                                            <Text color="white" fontSize={'14px'}>{item[labelKey]?.charAt(0) || ""}</Text>
                                        </Stack>
                                        <Text color="white" marginLeft={10} fontSize={'14px'}>{item[labelKey]}</Text>
                                    </XStack>
                                )}
                                keyExtractor={(_, index) => `${index}`}
                                getItemCount={getItemCount}
                                getItem={getItem}
                            /> : <Label paddingHorizontal={"$3"} color={"#999"}>No options</Label>
                        }

                    </Stack>
                )
            }


        </YStack>
    )
}