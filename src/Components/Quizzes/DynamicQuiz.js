import React, { useState, useEffect,useRef } from "react";
import cat from "../../assets/cat.gif";
import song from "../../assets/oeea.mp3";
const TimerProgressBar = ({ duration, onTimeUp }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);

      if (remaining === 0) {
        clearInterval(interval);
        onTimeUp();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onTimeUp]);

  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
      <div
        className="h-full bg-cyan-500 rounded-full transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const DynamicQuiz = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("success");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const QUESTION_DURATION = 10000; // 10 seconds per question


    
  const handleTimeUp = () => {
    if (!selectedAnswer) {
      setFeedbackMessage("Time's up!");
      setFeedbackType("error");
      setShowFeedback(true);

      setTimeout(() => {
        setShowFeedback(false);
        handleNextQuestion();
      }, 1000);
    }
  };

  const handleGenerateQuiz = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setQuizData(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/course/quiz`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic: prompt }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate quiz");
      }

      const data = await response.json();
      setQuizData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerSelection = (answer) => {
    if (!quizData?.questions) return;

    const isCorrect =
      answer === quizData.questions[currentQuestionIndex].answer;

    setSelectedAnswer(answer);
    setFeedbackMessage(isCorrect ? "Correct!" : "Wrong!");
    setFeedbackType(isCorrect ? "success" : "error");
    setShowFeedback(true);

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className=" bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] min-h-screen flex flex-col items-center justify-center text-white p-6">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl opacity-30 rounded-full"></div>

      {!quizData && !quizCompleted && (
        <div className="relative z-10 w-full max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Generate Your Quiz
          </h2>
          
          <form onSubmit={handleGenerateQuiz} className="space-y-4">
            <input
              type="text"
              placeholder="Enter a topic for your quiz..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full p-4 bg-[#1b263b] border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg disabled:bg-cyan-700 disabled:cursor-not-allowed"
              disabled={isLoading || !prompt.trim()}
            >
              {isLoading ? "Generating Quiz..." : "Generate Quiz"}
            </button>
          </form>
        </div>
      )}

      {error && (
        <div className="relative z-10 w-full max-w-xl bg-red-500 text-white p-4 rounded-lg flex items-center mt-4">
          Error generating quiz: {error}
        </div>
      )}

      {quizData && !quizCompleted && (
        <>
          <div className="relative z-10 text-center max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold">{quizData.title}</h2>
            <p className="text-lg md:text-xl text-gray-300 mt-2">
              {quizData.description}
            </p>
          </div>
          <img
            src={cat}
            alt="cat"
            className="absolute bottom-0 right-0 w-40 h-40"
          />

          <div className="relative z-10 mt-8 w-full max-w-2xl bg-[#1b263b] p-6 rounded-lg shadow-lg">
            <TimerProgressBar
              duration={QUESTION_DURATION}
              onTimeUp={handleTimeUp}
            />
            <p className="text-xl md:text-2xl font-semibold">
              {quizData.questions[currentQuestionIndex].question}
            </p>
            <div className="options-container mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizData.questions[currentQuestionIndex].options.map(
                (option, index) => (
                  <button
                    key={index}
                    className={`option-btn w-full py-3 px-4 rounded-lg ${
                      selectedAnswer
                        ? option ===
                          quizData.questions[currentQuestionIndex].answer
                          ? "bg-green-500 text-black"
                          : option === selectedAnswer
                          ? "bg-red-500 text-black"
                          : "bg-[#415a77]"
                        : "bg-[#415a77] hover:bg-cyan-600"
                    }`}
                    onClick={() => handleAnswerSelection(option)}
                    disabled={!!selectedAnswer}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>
        </>
      )}

      {quizCompleted && (
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold">Quiz Completed!</h2>
          <p className="text-2xl mt-4">
            Your score: {score} out of {quizData?.questions?.length}
          </p>
          <button
            className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg"
            onClick={() => {
              setQuizData(null);
              setPrompt("");
              setScore(0);
              setCurrentQuestionIndex(0);
              setQuizCompleted(false);
            }}
          >
            Try Another Quiz
          </button>
        </div>
      )}

      {/* Feedback Toast */}
      {showFeedback && (
        <div
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white text-lg font-semibold ${
            feedbackType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {feedbackMessage}
        </div>
      )}
    </div>
  );
};

export default DynamicQuiz;
