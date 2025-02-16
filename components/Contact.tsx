import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

function Contact() {
  return (
    // Main container for the Contact Form
    <div
      id="contact"
      className="min-h-screen bg-black flex items-center justify-center p-6"
    >
      <div className="max-w-4xl w-full">
        {/* Heading Section */}
        <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-400 mt-2 text-lg sm:text-xl">
          Ready to transform your business with AI?
        </p>

        {/* Main Content Container: Contact Info and Form */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mt-8 gap-8 md:gap-20">
          {/* Left Side: Contact Information */}
          <div className="text-white w-full md:w-[35%]">
            <h3 className="font-semibold text-[20px]">Contact Information</h3>

            {/* Contact Details */}
            <div className="mt-6 space-y-4 text-gray-300">
              <p className="flex items-center">
                <MdEmail className="text-purple-500 mr-2 w-5 h-5" />
                contact@agentiaworld.com
              </p>
              <p className="flex items-center">
                <BsGlobe className="text-purple-500 mr-2 w-5 h-5" />
                www.agentiaworld.com
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-6">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                >
                  {/* GitHub Icon */}
                  <FaGithub className="w-6 h-6" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                >
                  {/* LinkedIn Icon */}
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                >
                  {/* Twitter Icon */}
                  <FaTwitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full md:w-2/3">
            <form className="space-y-6">
              {/* Name Fields: First and Last Name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full sm:w-1/2 p-3 bg-black border-[1px] border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full sm:w-1/2 p-3 bg-black border-[1px] border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Email Field */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-black border-[1px] border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Message Textarea */}
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-black border-[1px] border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-36"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
