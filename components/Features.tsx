import React from "react";
import { LuBrain, LuShield } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { FaTerminal } from "react-icons/fa6";

function Features() {
  return (
    <div
      id="features"
      className="bg-zinc-950 min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-0"
    >
      {/* Main Title and Paragraph */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
          Neural Capabilities
        </h1>
        <p className="text-lg text-gray-400">
          Powered by next-generation artificial intelligence
        </p>
      </div>

      {/* Four Divs with Icons, Heading, and Paragraph */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-16 px-4">
        <div className="bg-black text-left p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="mb-4">
            <LuBrain
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Autonomous Learning</h3>
          <p className="text-sm text-gray-400">
            Self-evolving neural networks that continuously adapt to your
            business needs through reinforcement learning
          </p>
        </div>

        <div className="bg-black text-left p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="mb-4">
            <FiMessageSquare
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">
            Multi-Modal Intelligence
          </h3>
          <p className="text-sm text-gray-400">
            Advanced agents capable of processing text, voice, and visual data
            for comprehensive understanding
          </p>
        </div>

        <div className="bg-black text-left p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="mb-4">
            <FaTerminal
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Cognitive Integration</h3>
          <p className="text-sm text-gray-400">
            Seamless integration with existing systems through advanced
            cognitive APIs and neural bridges
          </p>
        </div>

        <div className="bg-black text-left p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="mb-4">
            <LuShield
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Ethical AI Framework</h3>
          <p className="text-sm text-gray-400">
            Built-in ethical guidelines and safety protocols ensuring
            responsible AI deployment
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
