import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import AOS from "aos"; 
import "aos/dist/aos.css";

export default function QuizInHome() {
  const navigate = useNavigate();

  const quizCategories = [
    {
      title: "Cybersecurity Basics",
      description: "Test your knowledge of fundamental cybersecurity concepts",
      difficulty: "Beginner",
      questionsCount: 10,
    },
    {
      title: "Network Security",
      description: "Challenge yourself with network security principles",
      difficulty: "Intermediate",
      questionsCount: 15,
    },
    {
      title: "Ethical Hacking",
      description: "Explore ethical hacking and penetration testing concepts",
      difficulty: "Advanced",
      questionsCount: 12,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 700, 
      offset: 100, 
      easing: "ease-out", 
      once: false, 
      delay: 100, 
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto textTop">
      <h2 className="text-4xl font-extrabold text-white text-center mb-16 drop-shadow-lg">
        Choose Your Challenge
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {quizCategories.map((quiz, index) => (
          <div
            key={index}
            data-aos="zoom-in" 
            data-aos-delay={`${index * 100}`} 
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-4">
                {quiz.title}
              </h3>
              <p className="text-gray-300 mb-6 flex-grow">{quiz.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-200 font-semibold mb-4">
                <span className="bg-cyan-200/80 text-black px-3 py-1 rounded-full">
                  {quiz.difficulty}
                </span>
                <span>{quiz.questionsCount} Questions</span>
              </div>
              <button
                className="mt-auto w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg transition-colors duration-300"
                onClick={() => navigate(`/quiz/${index + 1}`)} 
              >
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
