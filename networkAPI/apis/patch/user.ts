import axios from "../../axios";

export const updateMyself = (
  myself: UpdateMyselfRequestProps
): Promise<IProfileProps> =>
  axios
    .patch(`/users/me/update`, myself)
    .then((response) => response.data.user)
    .catch((error) => {
      throw error;
    });

export const updatePassword = (
  currentPassword: string,
  newPassword: string
): Promise<MessageResponseProps> =>
  axios
    .patch(`/users/me/update-password`, { currentPassword, newPassword })
    .then((response) => response.data.user)
    .catch((error) => {
      throw error;
    });

export const followUserById = (id: string): Promise<SuccessAndMessageProps> =>
  axios
    .patch(`/users/follow/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const unfollowUserById = (id: string): Promise<SuccessAndMessageProps> =>
  axios
    .patch(`/users/unfollow/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
