export enum ErrorType {
  UnknownFigureOfSpeech,
  UnableToConnect,
}

export interface Error {
  message: string
  type: ErrorType
}
