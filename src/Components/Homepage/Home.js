import { React, useEffect, useRef } from 'react';
import './Home.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import QuizInHome from '../QuizInHome/QuizInHome';
import Footer from '../Footer/Footer';
import CourseCards from '../CourseCards/CourseCards';

export default function Home() {
  const courseCardsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700, 
      once: true, 
    });
  }, []);

  const scrollToCourseCards = () => {
    if (courseCardsRef.current) {
      courseCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="h-full fulls bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] relative overflow-auto">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 blur-3xl opacity-30 rounded-full"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-center textTop">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          >
            Welcome to CyberSec
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg"
          >
            Become a cybersecurity pro with hands-on lessons, practical tips, and expert insights
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-sans font-semibold antialiased rounded-lg shadow-md text-lg"
            onClick={scrollToCourseCards}
          >
            Learn More
          </button>
        </div>
        <QuizInHome />
      </div>
      <CourseCards ref={courseCardsRef} />
      <Footer />
    </div>
  );
}
