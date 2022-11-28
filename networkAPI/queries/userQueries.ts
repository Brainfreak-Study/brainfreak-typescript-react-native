import {
  fetchFollowersById,
  fetchFollowingById,
  fetchMyself,
  fetchTopUsers,
  fetchUserByUsername,
  getTopSubjects,
} from "../apis/get/user";
import { useInfiniteQuery, useQuery } from "react-query";

export const useMyself = () =>
  useQuery("myself", (): Promise<IProfileProps> => fetchMyself(), {
    staleTime: 10000,
  });

export const useUserByUsername = (username: string) =>
  useQuery(
    ["user", username],
    (): Promise<IProfileProps> => fetchUserByUsername(username),
    {
      staleTime: 10000,
      enabled: !!username,
    }
  );

export const useGetTopSubjects = (id: string) =>
  useQuery(
    ["topSubjects", id],
    (): Promise<TopSubjectProps[]> => getTopSubjects(id),
    {
      staleTime: 10000,
      enabled: !!id,
    }
  );

export const useTopUsers = () =>
  useQuery("topUsers", (): Promise<TopUsersProps[]> => fetchTopUsers(), {
    staleTime: 10000,
  });

export const useGetFollowersById = (id: string) =>
  useInfiniteQuery(
    ["followers", id],
    ({ pageParam = 1 }): Promise<FollowersProps> =>
      fetchFollowersById(id, pageParam),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
      staleTime: 10000,
      enabled: false,
    }
  );

export const useGetFollowingsById = (id: string) =>
  useInfiniteQuery(
    ["followings", id],
    ({ pageParam = 1 }): Promise<FollowingProps> =>
      fetchFollowingById(id, pageParam),
    {
      getNextPageParam: (lastPage: any) => {
        if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
      staleTime: 10000,
      enabled: false,
    }
  );
