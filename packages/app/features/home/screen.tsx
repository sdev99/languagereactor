import { Anchor, Button, H1, Input, Paragraph, ScrollView, Separator, Text, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  const headings = [
    {
      title: "Wow, it's Mr. Tama.",
      language: "japanese",
      texts: [
        {
          en: "ui",
          translated: "うい"
        },
        {
          translated: ' '
        },
        {
          translated: 'ー'
        },
        {
          translated: ' '
        },
        {
          en: "ssu",
          translated: "っす"
        },
        {
          translated: ' '
        },
        {
          en: "konchi",
          translated: "こんち"
        },
        {
          translated: ' '
        },
        {
          en: "ha",
          translated: "は"
        },
        {
          translated: ' '
        },
        {
          en: "tama",
          translated: "玉"
        },
        {
          translated: ' '
        },
        {
          en: "sensei",
          translated: "先生"
        },
        {
          translated: ' '
        },
        {
          en: "ya",
          translated: "や"
        },
        {
          translated: ' '
        },
        {
          en: "de",
          translated: "で"
        },

      ]

    },
    {
      title: "Hi, I'm I.R. Leader Yu.",
      language: "korean",
      texts: [
        {
          en: "annyeonghase-yo",
          translated: "안녕하세요"
        },
        {
          translated: ' '
        },
        {
          translated: 'IT리더'
        },
        {
          translated: ' '
        },
        {
          en: "lideo-yu-ibnida",
          translated: "리더유입니다",
        },
      ]

    },
    {
      title: "Hello and joy to all!",
      language: "greek",
      texts: [
        {
          translated: "Γεια"
        },
        {
          translated: ' '
        },
        {
          translated: 'και'
        },
        {
          translated: ' '
        },
        {
          translated: 'χαρά'
        },
        {
          translated: ' '
        },
        {
          translated: 'σε'
        },
        {
          translated: ' '
        },
        {
          translated: 'όλους'
        },
        {
          translated: '!'
        },

      ]
    },
    {
      title: "The sweet one loves the name of God on him, my beloved,",
      language: "arabic",
      texts: [
        {
          translated: "الله"
        },
        {
          translated: ' '
        },
        {
          translated: 'اسم'
        },
        {
          translated: ' '
        },
        {
          translated: 'يحبي'
        },
        {
          translated: ' '
        },
        {
          translated: 'صار'
        },
        {
          translated: ' '
        },
        {
          translated: 'الحلو'
        },
        {
          translated: ' '
        },
        {
          translated: '‍ي'
        },
        {
          translated: "قلب‍"
        },
        {
          translated: ' '
        },
        {
          translated: "حبيب"
        },
        {
          translated: ' '
        },
        {
          translated: "‍ه"
        },
        {
          translated: "علي‍"
        }

      ]
    },
    {
      title: "Ma Yun is a very thinking person, so he feels that he is very smart and wise. This is something that many entrepreneurs have not done. Therefore, he cannot achieve Ma Yun's thought pattern.",
      language: "chinese",
      texts: [
        {
          en: "mǎ yún",
          translated: "马云"
        },
        {
          en: "shì",
          translated: "是"
        },
        {
          en: "gè",
          translated: "个"
        },
        {
          en: "hěn",
          translated: "很"
        },
        {
          en: "huì",
          translated: "会"
        },
        {
          en: "sī kǎo",
          translated: "思考"
        },
        {
          en: "de",
          translated: "的"
        },
        {
          en: "rén",
          translated: "人"
        },
        {
          translated: ','
        },
        {
          en: "suǒ yǐ",
          translated: "所以"
        },
        {
          en: "gǎn jué",
          translated: "感觉"
        },
        {
          en: "tā",
          translated: "他"
        },
        {
          en: "hěn",
          translated: "很"
        },
        {
          en: "cōng míng",
          translated: "聪明"
        },
        {
          translated: "、"
        },
        {
          en: "hěn",
          translated: "很"
        }
        ,
        {
          en: "zhì huì",
          translated: "智慧"
        }
        ,
        {
          translated: ","
        },
        {
          en: "zhè shì",
          translated: "这是"
        }
        ,
        {
          en: "hěn duō",
          translated: "很多"
        }
        ,
        {
          en: "qǐ yè jiā",
          translated: "企业家"
        }
        ,
        {
          en: "suǒ",
          translated: "所"
        }
        ,
        {
          en: "méi yǒu",
          translated: "没有"
        }
        ,
        {
          en: "zuò dào",
          translated: "做到"
        }
        ,
        {
          en: "de",
          translated: "的"
        },
        {
          translated: ","
        },
        {
          en: "suǒ yǐ",
          translated: "所以"
        },
        {
          translated: ","
        },
        {
          en: "dá",
          translated: "达"
        },
        {
          en: "bù",
          translated: "不"
        },
        {
          en: "dào",
          translated: "到"
        },
        {
          en: "mǎ yún",
          translated: "马云"
        },
        {
          en: "nà yàng",
          translated: "那样"
        }
        ,
        {
          en: "de",
          translated: "的"
        }
        ,
        {
          en: "sī xiǎng",
          translated: "思想"
        }
        ,
        {
          en: "gé jú",
          translated: "格局"
        },
        {
          translated: "。"
        }
      ]
    }
  ]
  return (
    <ScrollView f={1} p="$4" space backgroundColor={"rgb(32, 34, 37)"}>
      {
        headings.map((item, key) => {
          return (
            <XStack style={{ backgroundColor: "rgba(46, 49, 54, 0.5)" }} p="$4" key={key}>
              <XStack flex={1.2} flexWrap='wrap' flexDirection={item.language === "arabic" ? 'row-reverse' : 'row'}>
                {
                  item.texts.map((titem, key) => {
                    return (
                      <YStack key={key} jc="flex-end" hoverStyle={{
                        backgroundColor: 'hsla(0,0%,100%,.1333333333)',
                        outlineColor: "rgb(255, 189, 128)",
                        outlineWidth: "1px",
                        outlineStyle: "solid"
                      }}>
                        {
                          titem.en && (
                            <Text whiteSpace='pre' fontSize={'16px'} ta={'center'} color="#fff" paddingVertical="$1.5" >{titem.en}</Text>
                          )
                        }
                        {
                          titem.translated && (
                            <Text whiteSpace='pre' fontSize={'20px'} ta={'center'} color="#fff" paddingVertical="$1.5" >{titem.translated}</Text>
                          )
                        }
                      </YStack>
                    )
                  })
                }
              </XStack>
              <XStack flex={1}>
                <Text color="#fff" p="$2" fontSize={'17px'}>{item.title}</Text>
              </XStack>
            </XStack>
          )
        })
      }

    </ScrollView>
  )
}


