// import React from 'react';
// import { InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon, HeartIcon } from 'lucide-react';
// const Footer = () => {
//   return <footer className="w-full bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* About */}
//           <div className="col-span-1 md:col-span-2">
//             <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//               Portfolio
//             </h4>
//             <p className="text-gray-400 mb-6 max-w-md">
//               Social media marketing expert and co-founder of North Elegance Hub
//               and Info Finder, dedicated to empowering businesses and
//               individuals through digital strategies and innovative solutions.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
//                 <InstagramIcon size={18} className="text-purple-400" />
//               </a>
//               <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
//                 <TwitterIcon size={18} className="text-blue-400" />
//               </a>
//               <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
//                 <LinkedinIcon size={18} className="text-blue-400" />
//               </a>
//               <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
//                 <FacebookIcon size={18} className="text-blue-400" />
//               </a>
//             </div>
//           </div>
//           {/* Quick Links */}
//           <div>
//             <h5 className="text-lg font-semibold mb-4 text-gray-300">
//               Quick Links
//             </h5>
//             <ul className="space-y-2">
//               {['About', 'Services', 'Projects', 'Experience', 'Contact'].map(item => <li key={item}>
//                     <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition-colors">
//                       {item}
//                     </a>
//                   </li>)}
//             </ul>
//           </div>
//           {/* Companies */}
//           <div>
//             <h5 className="text-lg font-semibold mb-4 text-gray-300">
//               My Companies
//             </h5>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
//                   North Elegance Hub
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
//                   Info Finder
//                 </a>
//               </li>
//             </ul>
//             <div className="mt-6">
//               <h5 className="text-lg font-semibold mb-4 text-gray-300">
//                 Contact
//               </h5>
//               <p className="text-gray-400">contact@yourportfolio.com</p>
//               <p className="text-gray-400">+1 (555) 123-4567</p>
//             </div>
//           </div>
//         </div>
//         <div className="pt-8 border-t border-gray-800 text-center">
//           <p className="text-gray-500 flex items-center justify-center gap-1">
//             © {new Date().getFullYear()} Portfolio. Made with
//             <HeartIcon size={16} className="text-red-500" />
//             All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>;
// };
// export default Footer;