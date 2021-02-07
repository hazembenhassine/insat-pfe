export interface Student {
  id: string
  nce: string
  name: string
  lastName: string
  cin: string
  email: string
  field: string
  level: string
}

export enum Field {
  "GL",
  "RT",
  "IMI",
  "IIA",
  "CH",
  "BIO",
}

export enum Level {
  "CYCLE",
  "LICENCE",
  "MASTER"
}
