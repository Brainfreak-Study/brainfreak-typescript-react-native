import {
  followUserById,
  unfollowUserById,
  updateMyself,
  updatePassword,
} from "../apis/patch/user";
import { FollowUnfollowUser } from "networkAPI/types";
import { useMutation } from "react-query";

export const useFollowUser = () =>
  useMutation(
    ({ id }: FollowUnfollowUser): Promise<SuccessAndMessageProps> =>
      followUserById(id)
  );

export const useUnfollowUser = () =>
  useMutation(
    ({ id }: FollowUnfollowUser): Promise<SuccessAndMessageProps> =>
      unfollowUserById(id)
  );

export const useUpdateMyself = () =>
  useMutation(
    ({ name, description }: UpdateMyselfRequestProps): Promise<IProfileProps> =>
      updateMyself({ name, description })
  );

export const useUpdatePassword = () =>
  useMutation(
    ({
      currentPassword,
      newPassword,
    }: UpdatePasswordRequestProps): Promise<MessageResponseProps> =>
      updatePassword(currentPassword, newPassword)
  );
