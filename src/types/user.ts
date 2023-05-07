export interface UserId {
  loginId: string;
}

export interface UserPW {
  password: string;
}

export interface UserEmail {
  email: string;
}

export interface UserLogin extends UserId, UserPW {}

export interface UserJoin extends UserLogin, UserEmail {}

export interface ResponseUserCheckID {
  overlap: boolean;
}

export interface UserLoginResponse {
  AccessToken: string;
  RefreshToken?: string;
}

export interface ResetPassword {
  prePassword: string;
  newPassword: string;
}

export interface FindPassword extends UserId, UserEmail {}
