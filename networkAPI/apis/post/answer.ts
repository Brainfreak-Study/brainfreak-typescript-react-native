import axios from "../../axios";

export const giveAnswer = (
  questionId: string,
  answer: string
): Promise<AnswerProps> =>
  axios
    .post("/answer/give/" + questionId, { answer })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
