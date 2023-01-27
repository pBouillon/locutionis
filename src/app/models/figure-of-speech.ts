import { type Source } from './source'
import { type Usage } from './usage'

/**
 * Define a figure of speech along with some examples
 */
export interface FigureOfSpeech {
  name: string
  description: string
  purpose: string
  sources: Source[]
  usages: Usage[]
}

/**
 * Define the preview of a {@link FigureOfSpeech}
 */
export interface FigureOfSpeechPreview {
  name: string
  preview: string
}
