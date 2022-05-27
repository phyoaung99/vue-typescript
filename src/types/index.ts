export interface Users {
  id: number | string;
  username: string;
  gender: string;
  email: string;
  address: string;
  role: string;
  dateofbirth: string;
}

export interface Error {
  username_err: string;
  email_err: string;
}
