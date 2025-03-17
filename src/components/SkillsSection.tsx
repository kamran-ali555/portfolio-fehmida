// import React from 'react';
// import ScrollAnimation from './ScrollAnimation';
// const SkillsSection = () => {
//   const marketingSkills = [{
//     name: 'Social Media Strategy',
//     level: 95
//   }, {
//     name: 'Content Creation',
//     level: 90
//   }, {
//     name: 'Community Management',
//     level: 85
//   }, {
//     name: 'Digital Marketing',
//     level: 92
//   }, {
//     name: 'Brand Development',
//     level: 88
//   }, {
//     name: 'Campaign Management',
//     level: 90
//   }];
//   const technicalSkills = [{
//     name: 'Analytics & Data Interpretation',
//     level: 85
//   }, {
//     name: 'SEO & SEM',
//     level: 80
//   }, {
//     name: 'Email Marketing',
//     level: 75
//   }, {
//     name: 'Graphic Design',
//     level: 70
//   }, {
//     name: 'Video Production',
//     level: 65
//   }, {
//     name: 'CRM Management',
//     level: 78
//   }];
//   const softSkills = [{
//     name: 'Leadership',
//     level: 90
//   }, {
//     name: 'Communication',
//     level: 95
//   }, {
//     name: 'Project Management',
//     level: 85
//   }, {
//     name: 'Team Collaboration',
//     level: 92
//   }, {
//     name: 'Problem Solving',
//     level: 88
//   }, {
//     name: 'Adaptability',
//     level: 90
//   }];
//   return <section id="skills" className="w-full py-20 bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <ScrollAnimation animation="animate-fade-in-up">
//           <div className="text-center mb-16">
//             <h2 className="text-sm md:text-base uppercase tracking-wider text-purple-600 font-semibold mb-2">
//               Professional Expertise
//             </h2>
//             <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
//               My Skills
//             </h3>
//           </div>
//         </ScrollAnimation>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Marketing Skills */}
//           <ScrollAnimation animation="animate-fade-in-up" className="space-y-6">
//             <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
//               Marketing Skills
//             </h4>
//             {marketingSkills.map((skill, index) => <div key={index} className="mb-4">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-gray-700 font-medium">
//                     {skill.name}
//                   </span>
//                   <span className="text-purple-600 font-medium">
//                     {skill.level}%
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" style={{
//                 width: `${skill.level}%`,
//                 transition: 'width 1s ease-in-out'
//               }}></div>
//                 </div>
//               </div>)}
//           </ScrollAnimation>
//           {/* Technical Skills */}
//           <ScrollAnimation animation="animate-fade-in-up" delay={200} className="space-y-6">
//             <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
//               Technical Skills
//             </h4>
//             {technicalSkills.map((skill, index) => <div key={index} className="mb-4">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-gray-700 font-medium">
//                     {skill.name}
//                   </span>
//                   <span className="text-blue-600 font-medium">
//                     {skill.level}%
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" style={{
//                 width: `${skill.level}%`,
//                 transition: 'width 1s ease-in-out'
//               }}></div>
//                 </div>
//               </div>)}
//           </ScrollAnimation>
//           {/* Soft Skills */}
//           <ScrollAnimation animation="animate-fade-in-up" delay={400} className="space-y-6">
//             <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
//               Soft Skills
//             </h4>
//             {softSkills.map((skill, index) => <div key={index} className="mb-4">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-gray-700 font-medium">
//                     {skill.name}
//                   </span>
//                   <span className="text-pink-600 font-medium">
//                     {skill.level}%
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div className="h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600" style={{
//                 width: `${skill.level}%`,
//                 transition: 'width 1s ease-in-out'
//               }}></div>
//                 </div>
//               </div>)}
//           </ScrollAnimation>
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
//       `}</style>
//     </section>;
// };
// export default SkillsSection;