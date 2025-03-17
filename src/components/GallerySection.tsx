// import React, { useState } from 'react';
// import ScrollAnimation from './ScrollAnimation';
// import { XIcon, ZoomInIcon } from 'lucide-react';
// const GallerySection = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const images = [{
//     url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'neh',
//     title: "Women's Empowerment Workshop"
//   }, {
//     url: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'neh',
//     title: 'Digital Skills Training'
//   }, {
//     url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'info-finder',
//     title: 'Adventure Tourism'
//   }, {
//     url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'info-finder',
//     title: 'Travel Experiences'
//   }, {
//     url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'neh',
//     title: 'Freelancing Workshop'
//   }, {
//     url: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'info-finder',
//     title: 'Camping Experience'
//   }, {
//     url: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'neh',
//     title: 'Community Event'
//   }, {
//     url: 'https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'info-finder',
//     title: 'Local Business Partnership'
//   }, {
//     url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     category: 'neh',
//     title: 'Skills Development'
//   }];
//   const filteredImages = activeFilter === 'all' ? images : images.filter(image => image.category === activeFilter);
//   return <section id="gallery" className="w-full py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-6">
//         <ScrollAnimation animation="animate-fade-in-up">
//           <div className="text-center mb-12">
//             <h2 className="text-sm md:text-base uppercase tracking-wider text-purple-600 font-semibold mb-2">
//               Visual Journey
//             </h2>
//             <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-8">
//               Gallery
//             </h3>
//             <div className="flex flex-wrap justify-center gap-3 mb-12">
//               {['all', 'neh', 'info-finder'].map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
//                   {filter === 'all' ? 'All Projects' : filter === 'neh' ? 'North Elegance Hub' : 'Info Finder'}
//                 </button>)}
//             </div>
//           </div>
//         </ScrollAnimation>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredImages.map((image, index) => <ScrollAnimation key={index} animation="animate-fade-in-up" delay={index * 100} className="group relative overflow-hidden rounded-xl">
//               <div className="aspect-w-4 aspect-h-3">
//                 <img src={image.url} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <h4 className="text-white font-semibold text-lg mb-2">
//                       {image.title}
//                     </h4>
//                     <button onClick={() => setSelectedImage(image.url)} className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white">
//                       <ZoomInIcon size={16} />
//                       View Larger
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </ScrollAnimation>)}
//         </div>
//       </div>
//       {/* Lightbox */}
//       {selectedImage && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//           <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors">
//             <XIcon size={24} />
//           </button>
//           <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain" />
//         </div>}
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
// export default GallerySection;