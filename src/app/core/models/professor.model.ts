
export interface Professor {
  _id?: string
  id?: string
  name: string
  lastName: string
  cin: string
  email: string
  department: string
  rank: string
}

export enum Department {
  "GPI",
  "GBG",
  "GMI"
}
export enum Rank {
  "PROFESSOR",
  "MAITRE DE CONFERENCES",
  "MAITRE ASSISTANT",
  "ASSISTANT"
}
