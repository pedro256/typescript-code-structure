import { User } from '@models/User'

export class UsersController {
  show () {
    const user = new User('Pedro', 'Henrique')
    return user
  }
}
