"use client";
import React, { useState, useEffect } from "react";
import { RiRobot2Line } from "react-icons/ri";

// Predefined Questions for AI Assistant
const questions = [
  "Welcome! How can I assist in optimizing your processes today?",
  "I can automate your workflows and save valuable time.",
  "Want to increase efficiency? Let's integrate AI into your daily operations.",
  "Looking for real-time recommendations? I can help with smart decision-making.",
  "Let's explore innovative AI solutions to enhance your customer experience.",
];

function Hero() {
  // State Variables for Typing Effect
  const [currentText, setCurrentText] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typing Speed Configuration
  const typingSpeed = isDeleting ? 40 : 80;

  // Typing Effect Logic using useEffect
  useEffect(() => {
    const interval = setTimeout(() => {
      const currentQuestion = questions[questionIndex];

      // Typing Effect
      if (!isDeleting) {
        if (charIndex < currentQuestion.length) {
          setCurrentText(currentQuestion.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
      // Deleting Effect
      else {
        if (charIndex > 0) {
          setCurrentText(currentQuestion.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setQuestionIndex((prev) => (prev + 1) % questions.length);
        }
      }
    }, typingSpeed);

    // Cleanup to avoid memory leaks
    return () => clearTimeout(interval);
  }, [charIndex, isDeleting, questionIndex, typingSpeed]);

  return (
    <div className="bg-gradient-to-b from-black via-black to-[#130111] md:h-screen h-full flex flex-col items-center justify-center px-4 pt-20 md:pt-6 pb-20 md:pb-0">
      {/* Powered by Panaversity */}
      <p className="text-[10px] sm:text-xs uppercase bg-black px-3 sm:px-4 py-2 rounded-full mx-auto flex items-center space-x-2 mb-8">
        <span className="relative flex h-3 w-3">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
        </span>
        <span className="text-purple-500 text-[12px]">
          Powered by Panaversity
        </span>
      </p>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-7xl font-bold text-white text-center max-w-4xl mb-6">
        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
          Enterprise AI Agents
        </span>
        <br /> for the Future
      </h1>

      {/* AI Assistant's Typing Effect */}
      <div className="lg:w-[60%] w-full mx-auto bg-white/5 rounded-xl p-6 mb-12 backdrop-blur-sm border border-purple-500/20">
        <div className="flex items-start space-x-4">
          {/* AI Avatar (FaRobot icon) */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
            {/* React Icon FaRobot */}
            <RiRobot2Line className="w-6 h-6 text-white" />
          </div>

          {/* Typing Effect */}
          <div className="flex-1 text-left">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-gray-300">
                {currentText}
                <span className="inline-block w-0.5 h-5 ml-1 bg-purple-500 animate-pulse"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-[20px] transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          Deploy your AI Agent
        </button>
        <button className="w-full sm:w-auto max-w-xs border-[1px] border-purple-500 px-6 py-3 lg:py-4 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          Watch Demo
        </button>
      </div>
    </div>
  );
}

export default Hero;
