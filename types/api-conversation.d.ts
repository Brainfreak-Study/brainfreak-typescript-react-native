interface ConversationUserProps {
  _id: string;
  username: string;
  name: string;
  avatar: string;
}

interface ConversationUserResponseProps {
  myself: ConversationUserProps;
  user: ConversationUserProps;
}

interface ConversationProps {
  _id: string;
  createdAt: string;
  lastMessage: string;
  members: ConversationUserProps[];
  unreadCount: number;
  updatedAt: string;
}

interface ConversationResponseProps {
  conversations: ConversationProps[];
  totalPages: number;
  nextPage: number;
}

interface MessageProps {
  _id: string;
  conversationId: string;
  senderId: string;
  message: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
  sender?: ConversationUserProps;
}

interface MessagePaginationResponseProps {
  messages: MessageProps[];
  totalPages: number;
  nextPage: number;
}

interface SendMessageProps {
  message: string;
  receiverId: string;
}
