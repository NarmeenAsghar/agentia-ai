import React from "react";
import { MdCheckCircle } from "react-icons/md";

function Pricing() {
  return (
    <div
      id="pricing"
      className="py-16 px-4 sm:px-6 flex flex-col items-center min-h-screen bg-zinc-950"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
        Choose Your Plan
      </h2>
      <p className="text-gray-600 mt-4 text-lg sm:text-xl text-center max-w-2xl">
        Scale your AI capabilities with our flexible pricing
      </p>

      {/* Pricing Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-black text-left p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-white">Starter</h3>
          <p className="text-4xl font-bold mt-4 text-white">
            $499
            <span className="text-sm font-normal text-gray-600">/month</span>
          </p>
          <ul className="mt-8 space-y-4 text-gray-600">
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />2 AI
              Agent Instances
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Basic Neural Processing
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              24/7 Support
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Weekly Analytics
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Basic Integration Support
            </li>
          </ul>
          <button className="mt-8 w-full py-3 rounded-lg text-white font-semibold border-[1px] border-purple-500 transition-all duration-300 ease-in-out">
            Get Started
          </button>
        </div>

        {/* Professional Plan */}
        <div className="p-8 rounded-xl bg-gradient-to-b from-[#3d2263e0] to-[#0A021A] border-purple-50 text-white">
          <h3 className="text-2xl font-semibold text-white">Professional</h3>
          <p className="text-4xl font-bold mt-4 text-white">
            $999
            <span className="text-sm font-normal text-gray-600">/month</span>
          </p>
          <ul className="mt-8 space-y-4 text-gray-600">
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              10 AI Agent Instances
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Advanced Neural Networks
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Priority Support
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Real-time Analytics
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Custom Integration
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              API Access
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Advanced Security
            </li>
          </ul>
          <button className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-black text-left p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold text-white">Enterprise</h3>
          <p className="text-4xl font-bold mt-4 text-white">$Custom</p>
          <ul className="mt-8 space-y-4 text-gray-600">
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Unlimited Agents
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Full Neural Suite
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Dedicated Support Team
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Advanced Analytics Dashboard
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Custom Development
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Full API Access
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Enterprise Security
            </li>
            <li className="flex items-center">
              <MdCheckCircle className="text-purple-600 mr-3 text-xl" />
              Custom Training
            </li>
          </ul>
          <button className="mt-8 w-full py-3 rounded-lg text-white font-semibold border-[1px] border-purple-500 transition-all duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
