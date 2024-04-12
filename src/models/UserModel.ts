export interface CreateUserInput {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface UpdateUserInput {
  username?: Nullable<string>;
  email?: Nullable<string>;
  phone?: Nullable<string>;
  password?: Nullable<string>;
  name?: Nullable<string>;
  photo?: Nullable<string>;
  dob?: Nullable<DateTime>;
  role?: Nullable<string>;
  address?: Nullable<string>;
  state?: Nullable<string>;
  city?: Nullable<string>;
  zip?: Nullable<string>;
  isDeleted?: Nullable<boolean>;
  status?: Nullable<string>;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  phone: string;
  name?: Nullable<string>;
  photo?: Nullable<string>;
  dob?: Nullable<string>;
  role?: Nullable<string>;
  address?: Nullable<string>;
  state?: Nullable<string>;
  city?: Nullable<string>;
  zip?: Nullable<string>;
}

export enum UserRole {
  admin = 'admin',
  both = 'both',
  tenant = 'tenant',
  owner = 'owner',
}
export interface LoginResult {
  user: User;
  token: string;
}
export type DateTime = any;
type Nullable<T> = T | null;
