import {
  fetchAllConversations,
  fetchAllMessagesByUserId,
  fetchConversationUser,
} from "../apis/get/conversation";
import { useInfiniteQuery, useQuery } from "react-query";

export const useGetConversationUser = (userId: string) =>
  useQuery(
    ["conversation-user", userId],
    (): Promise<ConversationUserResponseProps> => fetchConversationUser(userId),
    {
      staleTime: 10000,
      enabled: !!userId,
    }
  );

export const useGetAllConversations = () =>
  useInfiniteQuery(
    ["conversations"],
    ({ pageParam = 1 }): Promise<ConversationResponseProps> =>
      fetchAllConversations(pageParam),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  );

export const useGetAllMessagesByUserId = (userId: string) =>
  useInfiniteQuery(
    ["messages", userId],
    ({ pageParam = 1 }): Promise<MessagePaginationResponseProps> =>
      fetchAllMessagesByUserId(userId, pageParam),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
      // select: (data) => ({
      //     pages: [...data.pages].reverse(),
      //     pageParams: [...data.pageParams].reverse(),
      // }),
      enabled: !!userId,
    }
  );
