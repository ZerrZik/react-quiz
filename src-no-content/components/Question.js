import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Question() {
  const { question, answer, dispatch } = useQuiz();

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;