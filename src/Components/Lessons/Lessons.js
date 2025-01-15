import React from "react";


const Lessons = () => {
  const topicData = {
    topic: "Hacking",
    content:
      "Hacking refers to the unauthorized access, use, disclosure, disruption, modification, or destruction of computer systems, networks, or electronic data. It involves exploiting vulnerabilities or weaknesses in software, hardware, or configurations to gain unauthorized access or control. Hacking can be categorized into different types, including black-hat, white-hat, and grey-hat hacking. Black-hat hacking involves malicious activities such as stealing sensitive information, disrupting operations, or spreading malware. White-hat hacking, also known as ethical hacking, involves identifying vulnerabilities to improve security and prevent potential threats. Grey-hat hacking falls in between, where hackers may engage in both malicious and benevolent activities.",
    example:
      "A real-life example of hacking is the 2017 Equifax breach, where hackers exploited a vulnerability in the Apache Struts software to gain unauthorized access to sensitive data, including Social Security numbers, birth dates, and addresses of over 147 million people. Another example is the WannaCry ransomware attack in 2017, which spread globally and affected over 200,000 computers in 150 countries, highlighting the importance of keeping software up-to-date and patching vulnerabilities.",
    difficulty: "intermediate",
    next_topic: [
      "Types of Malware",
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
    ],
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="p-6 space-y-1 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* <Shield className="h-6 w-6 text-blue-600" /> */}
              <h2 className="text-2xl font-bold text-gray-800">
                {topicData.topic}
              </h2>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                topicData.difficulty
              )}`}
            >
              {topicData.difficulty.charAt(0).toUpperCase() +
                topicData.difficulty.slice(1)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {topicData.content}
              </p>
            </div>

            {/* Alert */}
            <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
              <div className="flex items-center space-x-2">
                {/* <AlertTriangle className="h-5 w-5 text-amber-600" /> */}
                <h3 className="text-amber-800 font-semibold">
                  Real-world Example
                </h3>
              </div>
              <p className="mt-2 text-amber-700">{topicData.example}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6">
          <div className="w-full">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Related Topics:
            </h3>
            <div className="flex flex-wrap gap-2">
              {topicData.next_topic.map((topic, index) => (
                <button
                  key={index}
                  className="inline-flex items-center space-x-1 px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  <span>{topic}</span>
                  {/* <ArrowRight className="h-4 w-4" /> */}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
