type BaseProfile = {
  id: number
  avatar: string
  account: string
  nickname?: string
}
export type LoginResult = BaseProfile & {
  mobile: string
  token: string
}

export type ProfileDetail = BaseProfile & {
  gender?: Gender
  birthday?: string
  fullLocation?: string
  profession?: string
}

export type Gender = '女' | '男'
