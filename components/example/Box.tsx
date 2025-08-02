// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef } from "react";

// export default function SimpleScrollBox() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const y = useTransform(scrollYProgress, [0, 0.3], ["0px", "100px"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

//   useEffect(() => {
//   const unsubscribe = scrollYProgress.on("change", (v) => {
//     console.log("scroll progress:", v);
//   });

//   return () => unsubscribe(); // Cleanup
// }, [scrollYProgress]);

//   return (
//     <div className="min-h-[200vh] bg-gray-900 p-20 " ref={containerRef}>
//       <motion.div
        
//         className="h-screen flex items-center justify-center"
//       >
//         <motion.div
//         //   style={{ y, opacity }}
//           className="w-64 h-64 bg-blue-500 rounded-xl  shadow-xl"
//         />
//       </motion.div>
//     </div>
//   );
// }
