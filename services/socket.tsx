import { useEffect } from "react";
import { store } from "../redux/store";
import { io } from "socket.io-client";
import SocketContext from "../hooks/useSocket";
import { useQueryClient } from "react-query";
import Toast from "react-native-toast-message";
import {
  SetConverstionToQuery,
  SetNewMessageToQuery,
} from "@network/mutate-local/updateNewMessages";
import { useSelector } from "react-redux";
import { useAppSelector } from "@redux/hooks";

const socket = io("http://192.168.1.2:5000");

const WebSocketProvider = ({ children }: any) => {
  const queryClient = useQueryClient();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to WebSocket -> " + "http://192.168.1.2:5000");
    });

    if (user && user._id) {
      socket.emit("active", user._id);
    }

    socket.on("receive-message", (message: any) => {
      console.log("receive-message", message);

      Toast.show({
        type: "messageToast",
        props: {
          message: message.message,
          avatar: message.sender.avatar,
          username: message.sender.username,
        },
      });

      //Set new message to query
      SetConverstionToQuery(queryClient, ["conversations"], {
        _id: message.conversationId,
        lastMessage: message.message,
        members: [message.sender],
        unreadCount: 0,
      });
      SetNewMessageToQuery(queryClient, ["messages", message.sender._id], {
        ...message,
        senderId: message.sender._id,
      });
    });

    socket.on("notification", (data: any) => {
      console.log(data);
    });

    socket.on("disconnect", () => {
      socket.removeAllListeners();
    });
  }, [user]);

  console.log({ socket });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default WebSocketProvider;
