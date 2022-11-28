import axios from "../../axios";

export const sendMessage = async (
  receiverId: string,
  message: string
): Promise<MessageProps> =>
  await axios
    .post(`/message/${receiverId}`, {
      message,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
