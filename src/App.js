import Home from "./Components/Homepage/Home";
import Login from "./Components/LoginPage/Login";
import SignUp from "./Components/LoginPage/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Quiz1 from "./Components/Quizzes/Quiz1";
import Quiz2 from "./Components/Quizzes/Quiz2";
import Quiz3 from "./Components/Quizzes/Quiz3";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CourseGenerator from "./Components/CourseGeneration/CourseGeneration";
import ArticlesGeneration from "./Components/ArticlesGeneration/ArticlesGeneration";
import DynamicQuiz from "./Components/Quizzes/DynamicQuiz";

function App() {
  return (
    <>
      <Router>
        <NavBarWithLocation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/quiz/1" element={<Quiz1 />} />
          <Route path="/quiz/2" element={<Quiz2 />} />
          <Route path="/quiz/3" element={<Quiz3 />} />
          <Route path="/articles" element={<ArticlesGeneration />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<CourseGenerator/>} />
          <Route path="/generatequiz" element={<DynamicQuiz/>} />
        </Routes>
      </Router>
    </>
  );
}

function NavBarWithLocation() {
  const location = useLocation();
  return (
    <>
      {(location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contact") && <Navbar />}
    </>
  );
}

export default App;