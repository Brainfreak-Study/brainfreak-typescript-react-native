import axios from "../../axios";

export const getMyAnswers = ({
  pageParam = 1,
  subject,
}: {
  pageParam: number;
  subject: string;
}): Promise<AnswerResponseProps> =>
  axios
    .get<AnswerResponseProps>(
      `/answer/me?subject=${subject}&page=${pageParam}&limit=10`
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
