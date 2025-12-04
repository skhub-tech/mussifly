<<<<<<< HEAD
import { motion } from "framer-motion";
import strings from "@/config/strings.json";

export function Screenshots() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Stunning Interface</h2>
          <p className="text-muted-foreground">
            Designed with precision. Beautiful, intuitive, and fully customizable.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center h-[600px] md:h-[700px]">
          {/* Center Phone - Main Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            animate={{ y: [0, -15, 0] }}
            // @ts-ignore - framer motion types issue with transition prop on animate
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
            className="relative z-20 w-[300px] md:w-[350px] h-[600px] md:h-[700px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden"
          >
            {/* Screenshot Image */}
            <img
              src={strings.screenshots.center}
              alt="Music Player Screenshot"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder */}
            <div className="hidden w-full h-full bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-white text-sm">Add your screenshot:</p>
                <p className="text-gray-400 text-xs mt-2">public/screenshot-center.png</p>
              </div>
            </div>
          </motion.div>

          {/* Left Phone - Playlist Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -25 }}
            whileInView={{ opacity: 1, x: 0, rotate: -15 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            animate={{ y: [0, -20, 0] }}
            // @ts-ignore
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }
            }}
            className="absolute left-1/2 -translate-x-[120%] md:-translate-x-[110%] top-20 z-10 w-[260px] md:w-[300px] h-[550px] md:h-[600px] bg-black rounded-[2.5rem] border-8 border-gray-900 shadow-xl opacity-80 blur-[1px] hidden md:block overflow-hidden"
          >
            <img
              src={strings.screenshots.left}
              alt="Playlist Screenshot"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-full bg-gray-900 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-white text-xs">screenshot-left.png</p>
              </div>
            </div>
          </motion.div>

          {/* Right Phone - Equalizer Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 25 }}
            whileInView={{ opacity: 1, x: 0, rotate: 15 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            animate={{ y: [0, -20, 0] }}
            // @ts-ignore
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }
            }}
            className="absolute right-1/2 translate-x-[120%] md:translate-x-[110%] top-20 z-10 w-[260px] md:w-[300px] h-[550px] md:h-[600px] bg-black rounded-[2.5rem] border-8 border-gray-900 shadow-xl opacity-80 blur-[1px] hidden md:block overflow-hidden"
          >
            <img
              src={strings.screenshots.right}
              alt="Equalizer Screenshot"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-full bg-gray-900 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-white text-xs">screenshot-right.png</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
=======
import { motion } from "framer-motion";
import strings from "@/config/strings.json";

export function Screenshots() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Stunning Interface</h2>
          <p className="text-muted-foreground">
            Designed with precision. Beautiful, intuitive, and fully customizable.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center h-[600px] md:h-[700px]">
          {/* Center Phone - Main Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            animate={{ y: [0, -15, 0] }}
            // @ts-ignore - framer motion types issue with transition prop on animate
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
            className="relative z-20 w-[300px] md:w-[350px] h-[600px] md:h-[700px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden"
          >
            {/* Screenshot Image */}
            <img
              src={strings.screenshots.center}
              alt="Music Player Screenshot"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Placeholder */}
            <div className="hidden w-full h-full bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-white text-sm">Add your screenshot:</p>
                <p className="text-gray-400 text-xs mt-2">public/screenshot-center.png</p>
              </div>
            </div>
          </motion.div>

          {/* Left Phone - Playlist Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -25 }}
            whileInView={{ opacity: 1, x: 0, rotate: -15 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            animate={{ y: [0, -20, 0] }}
            // @ts-ignore
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }
            }}
            className="absolute left-1/2 -translate-x-[120%] md:-translate-x-[110%] top-20 z-10 w-[260px] md:w-[300px] h-[550px] md:h-[600px] bg-black rounded-[2.5rem] border-8 border-gray-900 shadow-xl opacity-80 blur-[1px] hidden md:block overflow-hidden"
          >
            <img
              src={strings.screenshots.left}
              alt="Playlist Screenshot"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-full bg-gray-900 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-white text-xs">screenshot-left.png</p>
              </div>
            </div>
          </motion.div>

          {/* Right Phone - Equalizer Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 25 }}
            whileInView={{ opacity: 1, x: 0, rotate: 15 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            animate={{ y: [0, -20, 0] }}
            // @ts-ignore
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }
            }}
            className="absolute right-1/2 translate-x-[120%] md:translate-x-[110%] top-20 z-10 w-[260px] md:w-[300px] h-[550px] md:h-[600px] bg-black rounded-[2.5rem] border-8 border-gray-900 shadow-xl opacity-80 blur-[1px] hidden md:block overflow-hidden"
          >
            <img
              src={strings.screenshots.right}
              alt="Equalizer Screenshot"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-full bg-gray-900 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-white text-xs">screenshot-right.png</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
>>>>>>> 3c0bdd2eae304b2a15a2ff0ab5a6a4d84aa1b791
}