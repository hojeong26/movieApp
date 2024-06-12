import { Store } from "../core/heropy"

interface State {
    photo: string
    name: string
    email: string
    blog: string
    github: string
    repository: string
  }

export default new Store<State>({
    photo: 'https://heropy.blog/css/images/logo.png',
    name: 'HOJEONG / KangHoJeong',
    email:'hojeong@mail.com',
    blog: 'https://heropy.blog',
    github:'https://github.com/hojeong26',
    repository: 'https://github.com/hojeong26'
})