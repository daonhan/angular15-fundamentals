export interface UserInfo {
  accessToken?: string;
  user?: User
}

export interface User {
  email: string;
  firstname: string;
  lastname: string;
  age: number;
  id: number;
}
