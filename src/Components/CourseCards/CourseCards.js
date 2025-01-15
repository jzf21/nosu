import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CourseAndArticleCards = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <div
      ref={ref}
      className="min-h-[500px] bg-gradient-to-b from-[#1B2838] via-[#243B53] to-[#2A4157]"
    >
      <h2 className="text-5xl font-bold text-white mb-10 text-center">
        Explore More
      </h2>
      <div className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto px-4">
        <div className="relative w-96 h-64 group [perspective:1000px] hover:scale-105 transition-transform">
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front side */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm p-8 [backface-visibility:hidden] border border-green-400/20">
              <h3 className="text-2xl font-bold mb-4">Cybersecurity Course</h3>
              <p className="text-lg">
                Master the fundamentals of cybersecurity through our
                comprehensive course.
              </p>
              <div className="absolute bottom-8 left-8">
                <span className="text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  Interactive Lessons
                </span>
              </div>
            </div>
            {/* Back side */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4">Start Learning</h3>
              <p className="text-lg mb-6">
                Get hands-on experience with real-world scenarios and
                definitions
              </p>
              <button
                onClick={() => navigate("/Course")}
                className="bg-white/90 text-green-700 px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors"
              >
                Check it Now
              </button>
            </div>
          </div>
        </div>
        {/* Article Card */}
        <div className="relative w-96 h-64 group [perspective:1000px] hover:scale-105 transition-transform">
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front side */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm p-8 [backface-visibility:hidden] border border-blue-400/20">
              <h3 className="text-2xl font-bold mb-4">Security Articles</h3>
              <p className="text-lg">
                Stay informed with the latest cybersecurity trends and insights.
              </p>
              <div className="absolute bottom-8 left-8">
                <span className="text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  Updated Weekly
                </span>
              </div>
            </div>
            {/* Back side */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4">Dive Deeper</h3>
              <p className="text-lg mb-6">
                Explore our collection of expert articles and analysis.
              </p>
              <button
                onClick={() => navigate("/articles")}
                className="bg-white/90 text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors"
              >
                Read Articles
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-96 h-64 group [perspective:1000px] hover:scale-105 transition-transform">
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front side */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm p-8 [backface-visibility:hidden] border border-blue-400/20">
              <h3 className="text-2xl font-bold mb-4">Test your knowledge </h3>
              <p className="text-lg">
                Test your knowledge by generating quizzes on the topic you want
              </p>
              <div className="absolute bottom-8 left-8">
                <span className="text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  AI generated
                </span>
              </div>
            </div>
            {/* Back side */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4">Dive Deeper</h3>
              <p className="text-lg mb-6">
                Explore our collection of expert articles and analysis.
              </p>
              <button
                onClick={() => navigate("/generatequiz")}
                className="bg-white/90 text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors"
              >
                Get your Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CourseAndArticleCards;
