type User = {
  id: string;
  email: string;
  login: string;
  createdAt: string;
};

type UserAuthResponse = User;

type UserLoginRequestDto = {
  email: string;
  password: string;
};

type UserLoginResponseDto = {
  user: UserAuthResponse;
  token: string;
};

type UserRegisterRequestDto = {
  email: string;
  username: string;
  password: string;
};

type UserRegisterResponseDto = UserLoginResponseDto;

export {
  User,
  UserAuthResponse,
  UserLoginRequestDto,
  UserLoginResponseDto,
  UserRegisterRequestDto,
  UserRegisterResponseDto,
};
