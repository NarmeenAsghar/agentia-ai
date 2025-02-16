import React from "react";
import { LuBrain, LuCodeXml, LuCpu } from "react-icons/lu";
import { HiOutlineGlobe } from "react-icons/hi";

function Technology() {
  return (
    <div id="technology" className="bg-zinc-950 min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-0">
      {/* Main Title and Paragraph */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
          Powered by Advanced AI
        </h1>
        <p className="text-lg text-gray-400">
          Built on cutting-edge neural architectures
        </p>
      </div>

      {/* Four Divs with Icons, Heading, and Paragraph */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-16 px-4">
        <div className="bg-black text-center p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="flex justify-center items-center mb-4">
            <LuBrain
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Neural Networks</h3>
          <p className="text-sm text-gray-400">
            Advanced neural architectures for complex decision making
          </p>
        </div>

        <div className="bg-black text-center p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="flex justify-center items-center mb-4">
            <LuCpu
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Deep Learning</h3>
          <p className="text-sm text-gray-400">
            Sophisticated deep learning models for pattern recognition
          </p>
        </div>

        <div className="bg-black text-center p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="flex justify-center items-center mb-4">
            <LuCodeXml
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Advanced ML</h3>
          <p className="text-sm text-gray-400">
            Cutting-edge machine learning algorithms
          </p>
        </div>

        <div className="bg-black text-center p-6 border-[1px] border-purple-500 rounded-lg text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
          <div className="flex justify-center items-center mb-4">
            <HiOutlineGlobe
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4px] p-2"
              size={40}
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Global Scale</h3>
          <p className="text-sm text-gray-400">
            Distributed AI processing across global networks
          </p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
