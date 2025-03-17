// import React, { useEffect, useState } from 'react';
// import ScrollAnimation from './ScrollAnimation';
// import { ArrowLeftIcon, ArrowRightIcon, ArrowDownIcon } from 'lucide-react';
// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [{
//     image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
//     subtitle: 'Social Media Marketing Expert',
//     title: 'Transforming Digital Presence',
//     description: 'Co-founder of North Elegance Hub and Info Finder. Helping businesses grow their online presence through strategic social media marketing, brand development, and digital innovation.'
//   }, {
//     image: 'https://images.unsplash.com/photo-1573164574472-719d4d856b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
//     subtitle: "Women's Empowerment",
//     title: 'North Elegance Hub',
//     description: 'Empowering women through freelancing opportunities, vocational training, and skills development programs. Building a community of successful digital entrepreneurs.'
//   }, {
//     image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
//     subtitle: 'Tourism Innovation',
//     title: 'Info Finder Platform',
//     description: 'Connecting travelers with authentic local experiences. A comprehensive platform for hotels, tours, and cultural experiences, empowering local businesses globally.'
//   }];
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);
//   const nextSlide = () => {
//     setCurrentSlide(prev => (prev + 1) % slides.length);
//   };
//   const prevSlide = () => {
//     setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
//   };
//   const scrollToNextSection = () => {
//     const companiesSection = document.getElementById('companies');
//     if (companiesSection) {
//       companiesSection.scrollIntoView({
//         behavior: 'smooth'
//       });
//     }
//   };
//   return <section id="hero" className="w-full min-h-screen relative overflow-hidden bg-gray-900">
//       {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10" />
//           <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
//         </div>)}
//       <div className="relative z-20 container mx-auto px-4 md:px-6 min-h-screen flex items-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="text-white">
//             <ScrollAnimation animation="animate-fade-in-up" className="transition duration-700 ease-out">
//               <h2 className="text-sm md:text-base uppercase tracking-wider text-purple-400 font-semibold mb-2">
//                 {slides[currentSlide].subtitle}
//               </h2>
//             </ScrollAnimation>
//             <ScrollAnimation animation="animate-fade-in-up" delay={200} className="transition duration-700 ease-out">
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
//                 {slides[currentSlide].title}
//               </h1>
//             </ScrollAnimation>
//             <ScrollAnimation animation="animate-fade-in-up" delay={400} className="transition duration-700 ease-out">
//               <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
//                 {slides[currentSlide].description}
//               </p>
//             </ScrollAnimation>
//             <ScrollAnimation animation="animate-fade-in-up" delay={600} className="transition duration-700 ease-out">
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg transition-all hover:-translate-y-1">
//                   View Portfolio
//                 </button>
//                 <button className="px-8 py-3 rounded-full border-2 border-purple-400 text-purple-400 font-medium hover:bg-purple-400/10 transition-all hover:-translate-y-1">
//                   Contact Me
//                 </button>
//               </div>
//             </ScrollAnimation>
//           </div>
//           <div className="hidden lg:flex justify-end gap-4">
//             <button onClick={prevSlide} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Previous slide">
//               <ArrowLeftIcon size={24} className="text-white" />
//             </button>
//             <button onClick={nextSlide} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Next slide">
//               <ArrowRightIcon size={24} className="text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
//         {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/75'}`} aria-label={`Go to slide ${index + 1}`} />)}
//       </div>
//       <ScrollAnimation animation="animate-bounce" delay={1000} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <button onClick={scrollToNextSection} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all" aria-label="Scroll down">
//           <ArrowDownIcon size={24} className="text-white" />
//         </button>
//       </ScrollAnimation>
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
//         .animate-bounce {
//           animation: bounce 2s infinite;
//         }
//         @keyframes bounce {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//       `}</style>
//     </section>;
// };
// export default HeroSection;