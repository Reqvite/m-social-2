import { UserAuthRequest } from "../../types/user";

export const validateUserAuthForm = ({
  body,
  isRegister = false,
}: {
  body: UserAuthRequest;
  isRegister?: boolean;
}) => {
  const errors = {} as UserAuthRequest;

  if (isRegister) {
    if (!body.login) {
      errors.login = "Login is required.";
    }
  }

  if (!body.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(body.email)) {
    errors.email = "Email is invalid.";
  }

  if (!body.password) {
    errors.password = "Password is required.";
  } else if (body.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  const isFormValid = Object.keys(errors).length === 0;

  const fields = Object.values(errors).join("");

  if (!isFormValid) {
    const error = new Error();
    error.message = fields;
    throw error;
  }
};
