import { sendMessage } from "../apis/post/conversation";
import { useMutation } from "react-query";

export const useSendMessage = () =>
  useMutation(
    ({ receiverId, message }: SendMessageProps): Promise<MessageProps> =>
      sendMessage(receiverId, message)
  );
