import React from "react";
import { LuServer, LuShield } from "react-icons/lu";
import { HiOutlineGlobe } from "react-icons/hi";

function Agents() {
  return (
    <div
      id="agents"
      className="bg-zinc-950 min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-0"
    >
      {/* Main Title and Paragraph */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
          AI Solutions
        </h1>
        <p className="text-lg text-gray-400">
          Transforming industries with intelligent agents
        </p>
      </div>

      {/* Four Divs with Icons, Heading, and Paragraph */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-16 px-4">
        <div className="bg-black text-left p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="mb-4">
            <HiOutlineGlobe
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Enterprise AI</h3>
          <p className="text-sm text-gray-400">
            Custom AI agents designed for enterprise-scale operations and
            decision-making
          </p>
        </div>

        <div className="bg-black text-left p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="mb-4">
            <LuServer
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Neural Operations</h3>
          <p className="text-sm text-gray-400">
            Automated workflow optimization through distributed neural networks
          </p>
        </div>

        <div className="bg-black text-left p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="mb-4">
            <LuShield
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Secure Intelligence</h3>
          <p className="text-sm text-gray-400">
            Privacy-first AI solutions with military-grade security protocols
          </p>
        </div>
      </div>
    </div>
  );
}

export default Agents;
