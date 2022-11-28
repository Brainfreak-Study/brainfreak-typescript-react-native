import { getMyAnswers } from "../apis/get/answer";
import { useInfiniteQuery } from "react-query";

export const useGetMyAnswers = (subject: string) =>
  useInfiniteQuery(
    ["my-answers", subject],
    ({ pageParam = 1 }): Promise<AnswerResponseProps> =>
      getMyAnswers({ subject, pageParam }),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );
