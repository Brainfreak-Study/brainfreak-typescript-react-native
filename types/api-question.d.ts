interface QuestionProps {
  _id: string;
  question: string;
  answers: string[] | AnswerProps[];
  author: Myself;
  subject: string;
  comments: string[];
  points: number;
  isBrainlist: boolean;
  createdAt: string;
  updatedAt: string;
  isAuthor: boolean;
  isAnswerable: boolean;
}

interface QuestionsResponseProps {
  questions: QuestionProps[];
  totalPages: number;
  nextPage: number;
}

interface QuestionSuggestionProps {
  _id: string;
  question: string;
}

interface QuestionResponseProps {
  question: QuestionProps;
  recommendations: QuestionSuggestionProps[];
  related: QuestionSuggestionProps[];
}

interface AskQuestionProps {
  question: string;
  points: number;
  subject: string;
}
