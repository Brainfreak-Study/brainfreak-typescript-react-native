interface IProfileProps {
  _id: string;
  name: string;
  points: number;
  username: string;
  email: string;
  description: string;
  avatar: string;
  role: string;
  createdAt: string;
  followers: number;
  following: number;
  questions: number;
  answerCount: number;
  questionCount: number;
  isMyself: boolean;
  isFollowed: boolean;
}

interface UpdateMyselfRequestProps {
  name: string;
  description: string;
}

interface UpdatePasswordRequestProps {
  currentPassword: string;
  newPassword: string;
}

interface TopSubjectProps {
  _id: string;
  count: number;
  points: number;
}

interface TopUsersProps {
  _id: string;
  name: string;
  points: number;
  username: string;
  avatar: string;
}

interface FollowersProps {
  followers: Profile[];
  totalPages: number;
  nextPage: number;
}

interface FollowingProps {
  followings: Profile[];
  totalPages: number;
  nextPage: number;
}
