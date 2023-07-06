import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <stron>{points}</stron> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
