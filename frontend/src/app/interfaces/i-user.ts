export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  role?: string;
  isEmailConfirmed?: boolean;
  avatar: string;
}
