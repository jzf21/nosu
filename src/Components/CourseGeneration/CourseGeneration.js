import React, { useState } from "react";

const CourseGenerator = () => {
  // State management for user input, loading state, errors, and course data
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [courseData, setCourseData] = useState(null);

  // Handle the course generation request
  const handleGenerateCourse = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/course/course`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic:prompt }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate course");
      }

      const data = await response.json();
      setCourseData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Course Generation Form Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Generate Your Cybersecurity Course
          </h2>
          <p className="text-gray-600 mt-2">
            Tell us what you'd like to learn about cybersecurity, and we'll
            create a personalized course for you.
          </p>
        </div>

        <form onSubmit={handleGenerateCourse} className="space-y-4">
          <input
            type="text"
            placeholder="e.g., I want to learn about network security fundamentals..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
            disabled={isLoading || !prompt.trim()}
          >
            {isLoading ? "Generating Course..." : "Generate Course"}
          </button>
        </form>
      </div>

      {/* Error Message Display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error generating course: {error}
        </div>
      )}

      {/* Course Content Display */}
      {courseData && !isLoading && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {courseData.topic}
            </h2>
          </div>

          <div className="p-6 space-y-6">
            {/* Main Content */}
            <div className="text-gray-700 leading-relaxed">
              {courseData.content}
            </div>

            {/* Example Section */}
            {courseData.example && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  Real-world Example
                </h3>
                <p className="text-amber-700">{courseData.example}</p>
              </div>
            )}

            {/* Related Topics Section */}
            {courseData.next_topic && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Related Topics to Explore:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {courseData.next_topic.map((topic, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseGenerator;
