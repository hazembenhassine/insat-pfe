export class Professor {

  constructor(public id: string,
              public name: string,
              public lastName: string,
              public email: string,
              public department: string,
              public rank: string) {}

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
