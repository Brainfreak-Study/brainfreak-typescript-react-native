import { askQuestion } from "../apis/post/question";
import { useMutation } from "react-query";

export const useAskQuestion = () =>
  useMutation(
    ({ question, points, subject }: AskQuestionProps): Promise<QuestionProps> =>
      askQuestion(question, points, subject)
  );
