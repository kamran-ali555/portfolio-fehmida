// import React from 'react';
// import ScrollAnimation from './ScrollAnimation';
// import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
// const ExperienceSection = () => {
//   const experiences = [{
//     title: 'Co-Founder & Marketing Director',
//     company: 'North Elegance Hub',
//     period: '2020 - Present',
//     description: "Leading marketing initiatives and brand development for an organization focused on women's empowerment through skills training and freelancing opportunities.",
//     achievements: ['Grew community membership by 300% in first year', 'Developed and implemented successful social media strategy', 'Created partnerships with 15+ organizations for skills training', 'Organized 25+ workshops and training sessions']
//   }, {
//     title: 'Co-Founder & Chief Marketing Officer',
//     company: 'Info Finder',
//     period: '2019 - Present',
//     description: 'Spearheading marketing efforts for a location-based information platform connecting tourists with local experiences and businesses.',
//     achievements: ['Acquired 10,000+ users within first 6 months', 'Onboarded 200+ local businesses to the platform', 'Designed and executed digital marketing campaigns with 3.5% conversion rate', 'Established partnerships with tourism boards and travel agencies']
//   }, {
//     title: 'Social Media Strategist',
//     company: 'Digital Marketing Agency',
//     period: '2017 - 2019',
//     description: 'Managed social media accounts for multiple clients across various industries, developing and implementing effective social media strategies.',
//     achievements: ['Increased client engagement by an average of 45%', 'Managed campaigns with budgets exceeding $50,000', 'Developed content calendars and marketing materials', 'Trained junior team members on social media best practices']
//   }];
//   return <section id="experience" className="w-full py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-6">
//         <ScrollAnimation animation="animate-fade-in-up">
//           <div className="text-center mb-16">
//             <h2 className="text-sm md:text-base uppercase tracking-wider text-purple-600 font-semibold mb-2">
//               Professional Journey
//             </h2>
//             <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
//               My Experience
//             </h3>
//           </div>
//         </ScrollAnimation>
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-blue-500 to-pink-500"></div>
//           {experiences.map((exp, index) => <ScrollAnimation key={index} animation={index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} delay={index * 200} className="mb-12 md:mb-16">
//               <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                 {/* Timeline dot for desktop */}
//                 <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
//                   <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 border-4 border-white"></div>
//                 </div>
//                 {/* Content */}
//                 <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
//                   <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
//                     <div className="flex items-center mb-3">
//                       <BriefcaseIcon size={20} className="text-purple-600 mr-2" />
//                       <h4 className="text-xl font-bold text-gray-800">
//                         {exp.title}
//                       </h4>
//                     </div>
//                     <div className="flex items-center mb-4">
//                       <span className="text-lg font-semibold text-blue-600">
//                         {exp.company}
//                       </span>
//                       <span className="mx-2 text-gray-400">•</span>
//                       <div className="flex items-center text-gray-500">
//                         <CalendarIcon size={16} className="mr-1" />
//                         <span>{exp.period}</span>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-4">{exp.description}</p>
//                     <div className="mt-4">
//                       <h5 className="font-semibold text-gray-700 mb-2">
//                         Key Achievements:
//                       </h5>
//                       <ul className="space-y-1">
//                         {exp.achievements.map((achievement, idx) => <li key={idx} className="flex items-start">
//                             <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5 flex-shrink-0">
//                               <span className="text-purple-600 font-bold text-xs">
//                                 ✓
//                               </span>
//                             </div>
//                             <span className="ml-2 text-gray-600 text-sm">
//                               {achievement}
//                             </span>
//                           </li>)}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </ScrollAnimation>)}
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes animate-fade-in-up {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: animate-fade-in-up 0.6s forwards;
//         }
//         @keyframes animate-slide-in-left {
//           0% {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         .animate-slide-in-left {
//           animation: animate-slide-in-left 0.6s forwards;
//         }
//         @keyframes animate-slide-in-right {
//           0% {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         .animate-slide-in-right {
//           animation: animate-slide-in-right 0.6s forwards;
//         }
//       `}</style>
//     </section>;
// };
// export default ExperienceSection;