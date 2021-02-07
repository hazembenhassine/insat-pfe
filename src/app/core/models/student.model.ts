export class Student {

  constructor(public id: string,
              public name: string,
              public lastName: string,
              public email: string,
              public field: string,
              public level: string) {

  }


}

export  enum Field {
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
