export interface INotifcation {
  newFollower: boolean;
  messageRequest: boolean;
  message: boolean;
  likesAndCommentOnYourAnswer: boolean;
  newAnswerOnYourQuestion: boolean;
  questionSuggestion: boolean;
  followRequest: boolean;
}

export interface IProfile {
  name: string;
  email: string;
  bio: string;
}

export interface ICropperPosition {
  x: number;
  y: number;
}

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ISecurity {
  receiveMessagesFromAnyone: boolean;
}
