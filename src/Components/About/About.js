import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import afreen from '../Assests/Photos/Afreen.jpg';
import chi from '../Assests/Photos/Chidinma.jpg';
import jfz from '../Assests/Photos/jzf.jpg';
import pixy from '../Assests/Photos/pixypie.jpg';


export default function About() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is CyberSec?",
      answer:
        "CyberSec is a platform for accessible and practical cybersecurity education.",
    },
    {
      question: "How can I start?",
      answer:
        "Click on the 'Get Started' button at the top of the page to sign up for free.",
    },
    {
      question: "Is the content free?",
      answer:
        "Yes, most of our content is free. Advanced courses are available at affordable prices.",
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] relative overflow-hidden text-white">
      {/* About Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 h-screen" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 animate-fade-in">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl animate-fade-in delay-300">
          At <span className="text-cyan-500 font-bold">CyberSec</span>, our
          mission is to empower individuals and organizations with the knowledge
          and tools to navigate the ever-evolving world of cybersecurity.
        </p>
      </section>

      
      <section className="relative py-24" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-[#0d1b2a] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              Expert Guidance
            </h3>
            <p>
              Learn from professionals with years of experience in
              cybersecurity.
            </p>
          </div>
          <div className="p-6 bg-[#0d1b2a] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              Interactive Learning
            </h3>
            <p>Engage with quizzes, exercises, and practical simulations.</p>
          </div>
          <div className="p-6 bg-[#0d1b2a] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              Community Support
            </h3>
            <p>
              Join a community of learners and professionals sharing knowledge.
            </p>
          </div>
        </div>
      </section>

      
      <section className="relative py-24" data-aos="fade-up">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Meet Our Team
  </h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {[
      {
        name: "Afreen",
        role: "UI/UX Designer",
        photo: afreen,
      },
      {
        name: "Chidinma",
        role: "Backend Manager",
        photo: chi,
      },
      {
        name: "Pixypie",
        role: "UI/UX Designer",
        photo: pixy,
      },
      {
        name: "Jzf",
        role: "Backend Manager",
        photo: jfz,
      },
    ].map((member, index) => (
      <div className="text-center" key={index}>
        <img
          src={member.photo}
          alt={member.name}
          className="rounded-full w-32 mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-cyan-400">
          {member.name}
        </h3>
        <p>{member.role}</p>
      </div>
    ))}
  </div>
</section>



      
      <section className="relative py-24" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0d1b2a] p-4 rounded-lg shadow-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-cyan-400">
                  {faq.question}
                </h3>
                <span className="text-cyan-400 text-xl">
                  {activeFAQ === index ? "-" : "+"}
                </span>
              </div>
              {activeFAQ === index && (
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      
      <section className="relative py-24" data-aos="fade-up">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Empower yourself with the tools and knowledge to stay safe online.
            Join thousands of learners worldwide.
          </p>
          <Link to="/signup">
            <button className="px-6 py-3 bg-gray-800 text-cyan-400 rounded-lg hover:bg-gray-700">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      
      <Footer/>
    </div>
  );
}
