export type ConversationUser =
  | {
      id: string;
      name: string;
      info: string;
      avatar: string;
      status: string;
      unreadCount?: undefined;
      unreadDot?: undefined;
    }
  | {
      id: string;
      name: string;
      info: string;
      avatar: string;
      unreadCount: number;
      unreadDot: boolean;
      status: string;
    }
  | undefined
  | null;
