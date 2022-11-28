import { giveAnswer } from "../apis/post/answer";
import { useMutation } from "react-query";

export const useGiveAnswer = () =>
  useMutation(
    ({ answer, questionId }: GiveAnswerProps): Promise<AnswerProps> =>
      giveAnswer(questionId, answer)
  );
