import { IUser } from "./user";

export type LiveQuestion = {
  _id: string;
  question: string;
};

export type TopQuestion = {
  count: number;
  question: LiveQuestion;
  user: IUser;
};
