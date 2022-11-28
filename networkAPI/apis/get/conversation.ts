import axios from "../../axios";

export const fetchConversationUser = (
  userId: string
): Promise<ConversationUserResponseProps> =>
  axios
    .get<ConversationUserResponseProps>(`/users/conversation-user/${userId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const fetchAllConversations = (
  pageParam: number = 1
): Promise<ConversationResponseProps> =>
  axios
    .get<ConversationResponseProps>(
      `/message/conversations?page=${pageParam}&limit=10`
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export const fetchAllMessagesByUserId = (
  userId: string,
  pageParam: number = 1
): Promise<MessagePaginationResponseProps> =>
  axios
    .get<MessagePaginationResponseProps>(
      `/message/${userId}?page=${pageParam}&limit=20`
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
