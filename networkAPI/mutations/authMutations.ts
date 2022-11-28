import { login, logout, register } from "../apis/post/auth";
import { useMutation } from "react-query";

export const useLogin = () =>
  useMutation(
    ({ username, password }: LoginProps): Promise<ILoginResponseProps> =>
      login(username, password)
  );

export const useRegister = () =>
  useMutation(
    ({
      name,
      username,
      email,
      password,
    }: IRegisterRequestProps): Promise<IRegisterResponseProps> =>
      register({ name, username, email, password })
  );

export const useLogout = () => useMutation((): Promise<Object> => logout());
