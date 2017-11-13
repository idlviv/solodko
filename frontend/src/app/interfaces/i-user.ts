export interface IUser {
  username: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  role?: string;
  isEmailConfirmed?: boolean;
};
