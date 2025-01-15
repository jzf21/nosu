import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Quiz1.css";

const Quiz3 = () => {
  const quizData = {
    title: "Ethical Hacking Quiz",
    description:
      "Test your knowledge of ethical hacking techniques and concepts",
    questions: [
      {
        question: "What is the primary goal of ethical hacking?",
        options: [
          "To damage systems to test their resilience",
          "To secure systems by identifying vulnerabilities",
          "To create viruses for testing antivirus programs",
          "To bypass security for unauthorized access",
        ],
        answer: "To secure systems by identifying vulnerabilities",
      },
      {
        question: "What is a penetration test?",
        options: [
          "A simulation of an attack to identify security weaknesses",
          "A test to determine system speed",
          "A method for encrypting sensitive data",
          "A process to back up system data",
        ],
        answer: "A simulation of an attack to identify security weaknesses",
      },
      {
        question: "Which tool is commonly used for network scanning?",
        options: ["Nmap", "Photoshop", "Slack", "Dropbox"],
        answer: "Nmap",
      },
      {
        question: "What is social engineering in ethical hacking?",
        options: [
          "The use of software to attack systems",
          "Manipulating people into revealing confidential information",
          "A method for encrypting user data",
          "Using AI to predict system vulnerabilities",
        ],
        answer: "Manipulating people into revealing confidential information",
      },
      {
        question: "What is the OSI model's role in ethical hacking?",
        options: [
          "To provide a framework for understanding and securing network communication",
          "To encrypt data during communication",
          "To manage hardware and software updates",
          "To restrict access to certain websites",
        ],
        answer:
          "To provide a framework for understanding and securing network communication",
      },
    ],
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = (answer) => {
    const isCorrect =
      answer === quizData.questions[currentQuestionIndex].answer;

    setSelectedAnswer(answer);

    // Show snackbar with feedback
    setSnackbarMessage(isCorrect ? "Correct!" : "Wrong!");
    setSnackbarSeverity(isCorrect ? "success" : "error");
    setShowSnackbar(true);

    // Update score if correct
    if (isCorrect) {
      setScore(score + 1);
    }

    // Automatically move to the next question after a short delay
    setTimeout(() => {
      setShowSnackbar(false);

      if (currentQuestionIndex < quizData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
      } else {
        setQuizCompleted(true); // End the quiz
      }
    }, 1000);
  };

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className="quiz-container bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] min-h-screen flex flex-col items-center justify-center text-white p-6">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl opacity-30 rounded-full"></div>

      {quizCompleted ? (
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold">Quiz Completed!</h2>
          <p className="text-2xl mt-4">
            Your score: {score} out of {quizData.questions.length}
          </p>
          <button
            className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg"
            onClick={() => window.location.reload()}
          >
            Retry Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="relative z-10 text-center max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold">{quizData.title}</h2>
            <p className="text-lg md:text-xl text-gray-300 mt-2">
              {quizData.description}
            </p>
          </div>

          <div className="relative z-10 mt-8 w-full max-w-2xl bg-[#1b263b] p-6 rounded-lg shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              {currentQuestion.question}
            </p>
            <div className="options-container mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => (
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
              ))}
            </div>
          </div>
        </>
      )}

      {/* Snackbar for feedback */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ fontSize: "1.25rem", width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Quiz3;
