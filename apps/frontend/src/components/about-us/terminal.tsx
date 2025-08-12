import React from 'react';
import Text from "@/components/about-us/hero-text";

export default function Terminal() {
  return (
    <div className='space-y-5'>
        <Text/>
        <div className="max-w-6xl w-full mx-auto ">
          <div className="bg-gray-900 border-gray-800 border-t-1 border-x-1 pl-8 rounded-t-2xl">
            <div className="flex gap-5 items-center py-6">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono ml-4">terminal</span>
            </div>

            <div className="font-mono  pb-2">
              {/* Step 1 */}
              <div className="mb-1 text-gray-500">
                <span># Clone the repository into the my-app directory</span>
              </div>
              <div className="mb-2 text-gray-300">
                <span className="text-green-400">$</span> git clone https://github.com/m1tra/stars-starter my-app
              </div>

              {/* Step 2 */}
              <div className="mb-1 text-gray-500">
                <span># Navigate to the project directory</span>
              </div>
              <div className="mb-2 text-gray-300">
                <span className="text-green-400">$</span> cd my-app
              </div>

              {/* Step 3 */}
              <div className="mb-1 text-gray-500">
                <span># Install project dependencies</span>
              </div>
              <div className="mb-2 text-gray-300">
                <span className="text-green-400">$</span> yarn install
              </div>

              {/* Step 4 — env files */}
              <div className="mb-1 text-gray-500">
                <span># Copy all sample .env files to their respective locations</span>
              </div>
              <div className="text-gray-300">
                <span className="text-green-400">$</span> cp apps/frontend/.env.sample apps/frontend/.env
              </div>
              <div className="text-gray-300">
                <span className="text-green-400">$</span> cp apps/backend/.env.sample apps/backend/.env
              </div>
              <div className="text-gray-300">
                <span className="text-green-400">$</span> cp apps/mobile/.env.sample apps/mobile/.env
              </div>
              <div className="mb-2 text-gray-300">
                <span className="text-green-400">$</span> cp packages/db/.env.sample packages/db/.env
              </div>

              {/* Step 5 */}
              <div className="mb-1 text-gray-500">
                <span># Start the development servers</span>
              </div>
              <div className="mb-2 text-gray-300">
                <span className="text-green-400">$</span> yarn dev
              </div>

              {/* Final */}
              <span className="text-blue-400 ">
                ✨ Ready! Your monorepo is running
              </span>
            </div>
          </div>
        </div>
    </div>
  );
}
