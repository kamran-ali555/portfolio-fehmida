import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { UsersIcon, MapPinIcon } from 'lucide-react';
const CompaniesSection = () => {
  return <section id="companies" className="w-full py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation animation="animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-sm md:text-base uppercase tracking-wider text-purple-600 font-semibold mb-2">
              Co-Founder
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              My Companies
            </h3>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* North Elegance Hub */}
          <ScrollAnimation animation="animate-slide-in-left" className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-blue-50 border border-gray-100">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
                  <UsersIcon size={28} className="text-white" />
                </div>
                <h4 className="ml-4 text-2xl font-bold text-gray-800">
                  North Elegance Hub
                </h4>
              </div>
              <p className="text-gray-700 mb-6">
                NEH is an organization dedicated to women's empowerment through
                various initiatives:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <span className="text-purple-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Freelancing opportunities and training
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <span className="text-purple-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Vocational training programs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <span className="text-purple-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Skills development workshops
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <span className="text-purple-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Community building and networking
                  </span>
                </li>
              </ul>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg transition-all hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </ScrollAnimation>
          {/* Info Finder */}
          <ScrollAnimation animation="animate-slide-in-right" delay={300} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-100">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <MapPinIcon size={28} className="text-white" />
                </div>
                <h4 className="ml-4 text-2xl font-bold text-gray-800">
                  Info Finder
                </h4>
              </div>
              <p className="text-gray-700 mb-6">
                A web-based platform providing location-based information and
                seamless online booking:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Connects tourists with hotels, adventure tours, and
                    experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Information on camping spots and trekking routes
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Cultural experiences and local attractions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Empowers local businesses with online presence
                  </span>
                </li>
              </ul>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all hover:-translate-y-1">
                Explore Platform
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <style jsx>{`
        @keyframes animate-fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: animate-fade-in-up 0.6s forwards;
        }
        @keyframes animate-slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: animate-slide-in-left 0.6s forwards;
        }
        @keyframes animate-slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: animate-slide-in-right 0.6s forwards;
        }
      `}</style>
    </section>;
};
export default CompaniesSection;