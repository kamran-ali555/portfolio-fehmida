// import React from 'react';
// import ScrollAnimation from './ScrollAnimation';
// import { TrendingUpIcon, UsersIcon, GlobeIcon, BookOpenIcon, AwardIcon, ZapIcon } from 'lucide-react';
// const FuturePlansSection = () => {
//   const plans = [{
//     icon: <GlobeIcon size={24} className="text-white" />,
//     title: 'Expand Info Finder Internationally',
//     description: 'Scale the platform to cover international tourist destinations and connect travelers with authentic local experiences worldwide.'
//   }, {
//     icon: <UsersIcon size={24} className="text-white" />,
//     title: 'Launch NEH Mentorship Program',
//     description: 'Create a structured mentorship program connecting experienced professionals with women entering the freelancing and digital skills marketplace.'
//   }, {
//     icon: <BookOpenIcon size={24} className="text-white" />,
//     title: 'Publish Digital Marketing Guide',
//     description: 'Share expertise through a comprehensive guide to help small businesses navigate the digital marketing landscape effectively.'
//   }, {
//     icon: <AwardIcon size={24} className="text-white" />,
//     title: 'Establish Industry Recognition Awards',
//     description: 'Create an annual awards program recognizing excellence in women-led businesses and innovative tourism initiatives.'
//   }, {
//     icon: <TrendingUpIcon size={24} className="text-white" />,
//     title: 'Launch Marketing Consultancy',
//     description: 'Establish a specialized consultancy focusing on social media strategy and digital transformation for small to medium businesses.'
//   }, {
//     icon: <ZapIcon size={24} className="text-white" />,
//     title: 'Develop Digital Skills Academy',
//     description: 'Create an online academy offering comprehensive courses in digital marketing, social media management, and online business development.'
//   }];
//   return <section id="future-plans" className="w-full py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
//       <div className="container mx-auto px-4 md:px-6">
//         <ScrollAnimation animation="animate-fade-in-up">
//           <div className="text-center mb-16">
//             <h2 className="text-sm md:text-base uppercase tracking-wider text-blue-200 font-semibold mb-2">
//               Looking Forward
//             </h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Future Plans & Vision
//             </h3>
//             <p className="max-w-3xl mx-auto text-blue-100">
//               I'm constantly evolving and looking for new opportunities to make
//               an impact. Here are some of the initiatives and projects I\'m
//               planning for the future.
//             </p>
//           </div>
//         </ScrollAnimation>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {plans.map((plan, index) => <ScrollAnimation key={index} animation="animate-fade-in-up" delay={index * 100} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
//               <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 inline-block mb-4 shadow-lg">
//                 {plan.icon}
//               </div>
//               <h4 className="text-xl font-bold text-white mb-3">
//                 {plan.title}
//               </h4>
//               <p className="text-blue-100">{plan.description}</p>
//             </ScrollAnimation>)}
//         </div>
//         <ScrollAnimation animation="animate-fade-in-up" delay={600}>
//           <div className="mt-16 text-center">
//             <button className="px-8 py-3 rounded-full bg-white text-purple-600 font-medium hover:shadow-lg transition-all hover:-translate-y-1">
//               Discuss Collaboration Opportunities
//             </button>
//           </div>
//         </ScrollAnimation>
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
// export default FuturePlansSection;