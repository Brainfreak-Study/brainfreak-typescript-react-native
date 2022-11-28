import axios from "../../axios";

export const askQuestion = (
  question: string,
  points: number,
  subject: string
): Promise<QuestionProps> =>
  axios
    .post("/question/ask", { question, points, subject })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
