export interface Token {
    text: string
    transliteration?: string | null
    type: 'WORD' | 'SPACE_OR_PUNCT'
  }
  