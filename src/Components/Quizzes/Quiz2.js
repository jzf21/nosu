import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Quiz1.css";

const Quiz2 = () => {
  const quizData = {
    title: "Network Security Quiz",
    description:
      "Test your knowledge of network security concepts and practices",
    questions: [
      {
        question: "What does a VPN primarily provide?",
        options: [
          "Faster internet speeds",
          "Secure and encrypted connection over an unsecured network",
          "Free internet access",
          "Protection against viruses",
        ],
        answer: "Secure and encrypted connection over an unsecured network",
      },
      {
        question: "What is the purpose of a DMZ in network security?",
        options: [
          "To host public-facing services while protecting the internal network",
          "To increase the speed of the network",
          "To block phishing attempts",
          "To store backup data securely",
        ],
        answer:
          "To host public-facing services while protecting the internal network",
      },
      {
        question: "What is a common use of port 443?",
        options: [
          "Email communication (SMTP)",
          "Secure web traffic (HTTPS)",
          "File Transfer Protocol (FTP)",
          "Domain Name System (DNS)",
        ],
        answer: "Secure web traffic (HTTPS)",
      },
      {
        question: "What is a common form of network attack?",
        options: [
          "Denial of Service (DoS)",
          "Hypertext Transfer Protocol (HTTP)",
          "Simple Mail Transfer Protocol (SMTP)",
          "Remote Desktop Protocol (RDP)",
        ],
        answer: "Denial of Service (DoS)",
      },
      {
        question: "What is network segmentation used for?",
        options: [
          "Improving the physical security of a network",
          "Dividing a network into sections to improve security and performance",
          "Allowing unrestricted access across the network",
          "Increasing internet bandwidth",
        ],
        answer:
          "Dividing a network into sections to improve security and performance",
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

export default Quiz2;
