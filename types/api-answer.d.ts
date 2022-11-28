interface AnswerProps {
  _id: string;
  answer: string;
  questionId: string | QuestionProps;
  author: Myself;
  comments: string[];
  points: number;
  isAuthor: boolean;
  likes: string[];
  createdAt: string;
  subject: string;
}

interface AnswerResponseProps {
  answers: AnswerProps[];
  totalPages: number;
  nextPage: number;
}

interface GiveAnswerProps {
  answer: string;
  questionId: string;
}
