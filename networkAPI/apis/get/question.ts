import axios from "../../axios";

export const getAllQuestions = ({
  pageParam = 1,
  subject,
}: {
  pageParam: number;
  subject: string;
}): Promise<QuestionsResponseProps> =>
  axios
    .get<QuestionsResponseProps>(
      `/question?subject=${subject}&page=${pageParam}&limit=8`
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const getMyQuestions = ({
  pageParam = 1,
  subject,
}: {
  pageParam: number;
  subject: string;
}): Promise<QuestionsResponseProps> =>
  axios
    .get<QuestionsResponseProps>(
      `/question/me?subject=${subject}&page=${pageParam}&limit=8`
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const getQuestionById = (id: string): Promise<QuestionResponseProps> =>
  axios
    .get(`/question/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
