import axios from "../../axios";

export const fetchMyself = (): Promise<IProfileProps> =>
  axios
    .get<IProfileProps>(`/users/me`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const getTopSubjects = (id: string): Promise<TopSubjectProps[]> =>
  axios
    .get<TopSubjectProps[]>(`/answer/top-subjects/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const fetchTopUsers = (): Promise<TopUsersProps[]> =>
  axios
    .get<TopUsersProps[]>(`/users/get-top-users`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const fetchUserByUsername = (id: string): Promise<IProfileProps> =>
  axios
    .get<IProfileProps>(`/users/get-profile/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const fetchFollowersById = (
  id: string,
  pageParam = 1
): Promise<FollowersProps> =>
  axios
    .get<FollowersProps>(`/users/followers/${id}?page=${pageParam}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const fetchFollowingById = (
  id: string,
  pageParam = 1
): Promise<FollowingProps> =>
  axios
    .get<FollowingProps>(`/users/followings/${id}?page=${pageParam}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
