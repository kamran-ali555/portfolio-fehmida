// import React, { useState } from 'react';
// import ScrollAnimation from './ScrollAnimation';
// import { ExternalLinkIcon } from 'lucide-react';
// const ProjectsSection = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const projects = [{
//     title: "Women's Empowerment Campaign",
//     category: 'social-media',
//     image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'A social media campaign for North Elegance Hub that reached over 50,000 women and increased workshop participation by 200%.',
//     tags: ['Social Media', 'Campaign', "Women's Empowerment"]
//   }, {
//     title: 'Tourism Platform Launch',
//     category: 'marketing',
//     image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Comprehensive marketing strategy for the launch of Info Finder, including digital advertising, content marketing, and influencer partnerships.',
//     tags: ['Marketing Strategy', 'Platform Launch', 'Tourism']
//   }, {
//     title: 'Skills Development Workshop Series',
//     category: 'event',
//     image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Organized and promoted a series of 10 workshops focused on digital skills development for women entrepreneurs.',
//     tags: ['Event Planning', 'Workshops', 'Skills Development']
//   }, {
//     title: 'Local Business Spotlight Campaign',
//     category: 'social-media',
//     image: 'https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'A social media initiative highlighting local businesses on the Info Finder platform, increasing partner sign-ups by 75%.',
//     tags: ['Social Media', 'Local Business', 'Campaign']
//   }, {
//     title: 'Freelancing Opportunities Webinar',
//     category: 'event',
//     image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Virtual event connecting women with freelancing opportunities, attended by over 300 participants from 15 countries.',
//     tags: ['Webinar', 'Freelancing', 'Virtual Event']
//   }, {
//     title: 'Adventure Tourism Promotion',
//     category: 'marketing',
//     image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     description: 'Multi-channel marketing campaign promoting adventure tourism experiences on the Info Finder platform.',
//     tags: ['Marketing', 'Adventure Tourism', 'Campaign']
//   }];
//   const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
//   return <section id="projects" className="w-full py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-6">
//         <ScrollAnimation animation="animate-fade-in-up">
//           <div className="text-center mb-12">
//             <h2 className="text-sm md:text-base uppercase tracking-wider text-purple-600 font-semibold mb-2">
//               Featured Work
//             </h2>
//             <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-8">
//               My Projects
//             </h3>
//             <div className="flex flex-wrap justify-center gap-3 mb-8">
//               {['all', 'social-media', 'marketing', 'event'].map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
//                   {filter === 'all' ? 'All Projects' : filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//                 </button>)}
//             </div>
//           </div>
//         </ScrollAnimation>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => <ScrollAnimation key={index} animation="animate-fade-in-up" delay={index * 100} className="group">
//               <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
//                 <div className="relative overflow-hidden h-56">
//                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                     <div className="p-4">
//                       <button className="px-4 py-2 rounded-full bg-white text-purple-600 font-medium text-sm flex items-center gap-2 hover:bg-purple-50 transition-colors">
//                         View Details
//                         <ExternalLinkIcon size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h4 className="text-xl font-bold text-gray-800 mb-2">
//                     {project.title}
//                   </h4>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.tags.map((tag, idx) => <span key={idx} className="text-xs font-medium px-2 py-1 rounded-full bg-purple-50 text-purple-600">
//                         {tag}
//                       </span>)}
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
//       `}</style>
//     </section>;
// };
// export default ProjectsSection;