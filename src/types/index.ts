
export interface PersonInfo {
  id: string,
  name: string,
  age: number,
  sex: string,
}

export type Persons = PersonInfo[]

// export type Persons = Array<PersonInfo