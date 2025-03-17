// import React, { useEffect, useRef } from 'react';
// interface ScrollAnimationProps {
//   children: ReactNode;
//   animation: string;
//   delay?: number;
//   threshold?: number;
//   className?: string;
// }
// const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
//   children,
//   animation,
//   delay = 0,
//   threshold = 0.1,
//   className = ''
// }) => {
//   const elementRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             entry.target.classList.add(animation);
//             entry.target.classList.remove('opacity-0');
//           }, delay);
//           observer.unobserve(entry.target);
//         }
//       });
//     }, {
//       threshold
//     });
//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }
//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, [animation, delay, threshold]);
//   return <div ref={elementRef} className={`opacity-0 ${className}`}>
//       {children}
//     </div>;
// };
// export default ScrollAnimation;