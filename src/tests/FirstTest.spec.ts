import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User('Nome', 'email@gmail.com')

  expect(user.nome).toEqual('Nome')
})
