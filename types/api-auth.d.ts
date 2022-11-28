interface ILoginResponseProps {
  message: string;
  success: boolean;
  user: IProfileProps;
}

interface IRegisterRequestProps {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface IRegisterResponseProps {
  message: string;
  success: boolean;
  user: IProfileProps;
}

interface LoginProps {
  username: string;
  password: string;
}
