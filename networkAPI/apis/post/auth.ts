import axios from "../../axios";

export const register = ({
  email,
  name,
  password,
  username,
}: IRegisterRequestProps): Promise<IRegisterResponseProps> =>
  axios
    .post("/auth/signup", {
      name,
      username,
      email,
      password,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const login = (
  username: string,
  password: string
): Promise<ILoginResponseProps> =>
  axios
    .post("/auth/signin", { username, password })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const logout = (): Promise<Object> =>
  axios
    .post("/auth/signout")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
