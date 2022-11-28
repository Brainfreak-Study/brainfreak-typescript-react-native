import {
  getAllQuestions,
  getMyQuestions,
  getQuestionById,
} from "../apis/get/question";
import { useInfiniteQuery, useQuery } from "react-query";

export const useGetQuestionById = (id: string) =>
  useQuery(
    ["question", id],
    (): Promise<QuestionResponseProps> => getQuestionById(id)
  );

export const useGetAllQuestions = (subject: string) =>
  useInfiniteQuery(
    ["questions", subject],
    ({ pageParam = 1 }): Promise<QuestionsResponseProps> =>
      getAllQuestions({ subject, pageParam }),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );

export const useGetMyQuestions = (subject: string) =>
  useInfiniteQuery(
    ["my-questions", subject],
    ({ pageParam = 1 }): Promise<QuestionsResponseProps> =>
      getMyQuestions({ subject, pageParam }),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );
