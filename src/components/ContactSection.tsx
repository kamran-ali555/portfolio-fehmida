// import React from 'react';
// import ScrollAnimation from './ScrollAnimation';
// import { PhoneIcon, MailIcon, MapPinIcon, SendIcon, InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from 'lucide-react';
// const ContactSection = () => {
//   return <section id="contact" className="w-full py-20 bg-gradient-to-br from-purple-50 to-blue-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <ScrollAnimation animation="animate-fade-in-up">
//           <div className="text-center mb-16">
//             <h2 className="text-sm md:text-base uppercase tracking-wider text-purple-600 font-semibold mb-2">
//               Get In Touch
//             </h2>
//             <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
//               Contact Me
//             </h3>
//           </div>
//         </ScrollAnimation>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <ScrollAnimation animation="animate-slide-in-left">
//             <div className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full border border-gray-100">
//               <h4 className="text-2xl font-bold text-gray-800 mb-6">
//                 Let's Connect
//               </h4>
//               <p className="text-gray-600 mb-8">
//                 Whether you\'re looking to grow your business through social
//                 media marketing, want to collaborate on a project, or just want
//                 to say hello, I\'d love to hear from you!
//               </p>
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="p-3 rounded-full bg-purple-100 mr-4">
//                     <PhoneIcon size={20} className="text-purple-600" />
//                   </div>
//                   <div>
//                     <h5 className="font-semibold text-gray-800 mb-1">Phone</h5>
//                     <p className="text-gray-600">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="p-3 rounded-full bg-blue-100 mr-4">
//                     <MailIcon size={20} className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h5 className="font-semibold text-gray-800 mb-1">Email</h5>
//                     <p className="text-gray-600">contact@yourportfolio.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="p-3 rounded-full bg-purple-100 mr-4">
//                     <MapPinIcon size={20} className="text-purple-600" />
//                   </div>
//                   <div>
//                     <h5 className="font-semibold text-gray-800 mb-1">
//                       Location
//                     </h5>
//                     <p className="text-gray-600">San Francisco, CA</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-10">
//                 <h5 className="font-semibold text-gray-800 mb-4">Follow Me</h5>
//                 <div className="flex space-x-4">
//                   <a href="#" className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:shadow-lg transition-all">
//                     <InstagramIcon size={20} />
//                   </a>
//                   <a href="#" className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all">
//                     <TwitterIcon size={20} />
//                   </a>
//                   <a href="#" className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:shadow-lg transition-all">
//                     <LinkedinIcon size={20} />
//                   </a>
//                   <a href="#" className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all">
//                     <FacebookIcon size={20} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </ScrollAnimation>
//           {/* Contact Form */}
//           <ScrollAnimation animation="animate-slide-in-right">
//             <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
//               <h4 className="text-2xl font-bold text-gray-800 mb-6">
//                 Send a Message
//               </h4>
//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                       Name
//                     </label>
//                     <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Your name" />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                       Email
//                     </label>
//                     <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Your email" />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                     Subject
//                   </label>
//                   <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Subject" />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Your message"></textarea>
//                 </div>
//                 <button type="submit" className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2">
//                   Send Message
//                   <SendIcon size={18} />
//                 </button>
//               </form>
//             </div>
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
// export default ContactSection;