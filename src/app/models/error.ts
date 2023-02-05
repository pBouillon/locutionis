export enum ErrorType {
  UnableToConnect,
  UnableToGenerateQuestions,
  UnknownFigureOfSpeech,
}

export interface Error {
  message: string
  type: ErrorType
}
