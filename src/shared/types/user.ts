type User = {
  id: string;
  email: string;
  login: string;
  createdAt: string;
};

type UserData = {
  likes: string[];
  id: string;
  comments: [];
};

type UserAuthRequest = {
  photo?: string;
  login?: string;
  email: string;
  password: string;
};

export { User, UserAuthRequest, UserData };
