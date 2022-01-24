export interface UserInt {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verifiedEmail?: boolean;
  secret2FA?: string;
  googleId?: string;
}

export type NewUser = Omit<UserInt, "id">;
