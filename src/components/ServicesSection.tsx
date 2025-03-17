// import React from 'react';
// import ScrollAnimation from './ScrollAnimation';
// import { TrendingUpIcon, BarChartIcon, MessageSquareIcon, PenToolIcon, MonitorIcon, BriefcaseIcon } from 'lucide-react';
// const ServicesSection = () => {
//   const services = [{
//     icon: <TrendingUpIcon size={32} className="text-purple-600" />,
//     title: 'Social Media Strategy',
//     description: 'Develop comprehensive social media strategies tailored to your business goals and target audience.'
//   }, {
//     icon: <BarChartIcon size={32} className="text-blue-600" />,
//     title: 'Analytics & Reporting',
//     description: 'Track performance metrics and provide detailed reports to measure ROI and optimize campaigns.'
//   }, {
//     icon: <MessageSquareIcon size={32} className="text-pink-600" />,
//     title: 'Community Management',
//     description: 'Build and nurture online communities through consistent engagement and relationship building.'
//   }, {
//     icon: <PenToolIcon size={32} className="text-purple-600" />,
//     title: 'Content Creation',
//     description: 'Create compelling visual and written content that resonates with your audience and drives engagement.'
//   }, {
//     icon: <MonitorIcon size={32} className="text-blue-600" />,
//     title: 'Digital Marketing',
//     description: 'Implement comprehensive digital marketing campaigns across multiple channels to maximize reach.'
//   }, {
//     icon: <BriefcaseIcon size={32} className="text-pink-600" />,
//     title: 'Brand Development',
//     description: 'Establish and strengthen your brand identity to create a consistent and recognizable presence.'
//   }];
//   return <section id="services" className="w-full py-20 bg-gradient-to-br from-slate-50 to-purple-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <ScrollAnimation animation="animate-fade-in-up">
//           <div className="text-center mb-16">
//             <h2 className="text-sm md:text-base uppercase tracking-wider text-purple-600 font-semibold mb-2">
//               What I Offer
//             </h2>
//             <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
//               My Services
//             </h3>
//           </div>
//         </ScrollAnimation>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => <ScrollAnimation key={index} animation="animate-fade-in-up" delay={index * 100} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
//               <div className="mb-4">{service.icon}</div>
//               <h4 className="text-xl font-bold text-gray-800 mb-3">
//                 {service.title}
//               </h4>
//               <p className="text-gray-600">{service.description}</p>
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
//       `}</style>
//     </section>;
// };
// export default ServicesSection;