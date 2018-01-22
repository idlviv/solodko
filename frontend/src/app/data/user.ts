import {IUser} from '../interfaces/i-user';

export const emptyUser: IUser = {
  _id: '',
  username: '',
  email: '',
  password: '',
  name: '',
  surname: '',
  role: 'Guest',
  isEmailConfirmed: false,
};
