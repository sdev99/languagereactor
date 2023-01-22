import { Token } from 'app/types/token'

export interface ListItem {
  title: string
  language: string
  subtitles: Array<Token>
}

export const demoData: Array<ListItem> = [
  {
    title: "Wow, it's Mr. Tama.",
    language: 'japanese',
    subtitles: [
      {
        transliteration: 'ui',
        text: 'うい',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'ー',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'ssu',
        text: 'っす',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'konchi',
        text: 'こんち',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'ha',
        text: 'は',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'tama',
        text: '玉',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'sensei',
        text: '先生',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'ya',
        text: 'や',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'de',
        text: 'で',
        type: 'WORD',
      },
    ],
  },
  {
    title: "Hi, I'm I.R. Leader Yu.",
    language: 'korean',
    subtitles: [
      {
        transliteration: 'annyeonghase-yo',
        text: '안녕하세요',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'IT리더',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'lideo-yu-ibnida',
        text: '리더유입니다',
        type: 'WORD',
      },
    ],
  },
  {
    title: 'Hello and joy to all!',
    language: 'greek',
    subtitles: [
      {
        text: 'Γεια',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'και',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'χαρά',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'σε',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'όλους',
        type: 'WORD',
      },
      {
        text: '!',
        type: 'WORD',
      },
    ],
  },
  {
    title: 'The sweet one loves the name of God on him, my beloved,',
    language: 'arabic',
    subtitles: [
      {
        text: 'الله',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'اسم',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'يحبي',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'صار',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'الحلو',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: '‍ي',
        type: 'WORD',
      },
      {
        text: 'قلب‍',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: 'حبيب',
        type: 'WORD',
      },
      {
        text: ' ',
        type: 'SPACE_OR_PUNCT',
      },
      {
        text: '‍ه',
        type: 'WORD',
      },
      {
        text: 'علي‍',
        type: 'WORD',
      },
    ],
  },
  {
    title:
      "Ma Yun is a very thinking person, so he feels that he is very smart and wise. This is something that many entrepreneurs have not done. Therefore, he cannot achieve Ma Yun's thought pattern.",
    language: 'chinese',
    subtitles: [
      {
        transliteration: 'mǎ yún',
        text: '马云',
        type: 'WORD',
      },
      {
        transliteration: 'shì',
        text: '是',
        type: 'WORD',
      },
      {
        transliteration: 'gè',
        text: '个',
        type: 'WORD',
      },
      {
        transliteration: 'hěn',
        text: '很',
        type: 'WORD',
      },
      {
        transliteration: 'huì',
        text: '会',
        type: 'WORD',
      },
      {
        transliteration: 'sī kǎo',
        text: '思考',
        type: 'WORD',
      },
      {
        transliteration: 'de',
        text: '的',
        type: 'WORD',
      },
      {
        transliteration: 'rén',
        text: '人',
        type: 'WORD',
      },
      {
        text: ',',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'suǒ yǐ',
        text: '所以',
        type: 'WORD',
      },
      {
        transliteration: 'gǎn jué',
        text: '感觉',
        type: 'WORD',
      },
      {
        transliteration: 'tā',
        text: '他',
        type: 'WORD',
      },
      {
        transliteration: 'hěn',
        text: '很',
        type: 'WORD',
      },
      {
        transliteration: 'cōng míng',
        text: '聪明',
        type: 'WORD',
      },
      {
        text: '、',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'hěn',
        text: '很',
        type: 'WORD',
      },
      {
        transliteration: 'zhì huì',
        text: '智慧',
        type: 'WORD',
      },
      {
        text: ',',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'zhè shì',
        text: '这是',
        type: 'WORD',
      },
      {
        transliteration: 'hěn duō',
        text: '很多',
        type: 'WORD',
      },
      {
        transliteration: 'qǐ yè jiā',
        text: '企业家',
        type: 'WORD',
      },
      {
        transliteration: 'suǒ',
        text: '所',
        type: 'WORD',
      },
      {
        transliteration: 'méi yǒu',
        text: '没有',
        type: 'WORD',
      },
      {
        transliteration: 'zuò dào',
        text: '做到',
        type: 'WORD',
      },
      {
        transliteration: 'de',
        text: '的',
        type: 'WORD',
      },
      {
        text: ',',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'suǒ yǐ',
        text: '所以',
        type: 'WORD',
      },
      {
        text: ',',
        type: 'SPACE_OR_PUNCT',
      },
      {
        transliteration: 'dá',
        text: '达',
        type: 'WORD',
      },
      {
        transliteration: 'bù',
        text: '不',
        type: 'WORD',
      },
      {
        transliteration: 'dào',
        text: '到',
        type: 'WORD',
      },
      {
        transliteration: 'mǎ yún',
        text: '马云',
        type: 'WORD',
      },
      {
        transliteration: 'nà yàng',
        text: '那样',
        type: 'WORD',
      },
      {
        transliteration: 'de',
        text: '的',
        type: 'WORD',
      },
      {
        transliteration: 'sī xiǎng',
        text: '思想',
        type: 'WORD',
      },
      {
        transliteration: 'gé jú',
        text: '格局',
        type: 'WORD',
      },
      {
        text: '。',
        type: 'SPACE_OR_PUNCT',
      },
    ],
  },
]



export const listData: Array<ListItem> = [
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
    ...demoData,
]