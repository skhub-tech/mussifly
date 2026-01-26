import { motion } from "framer-motion";
import strings from "@/config/strings.json";

export function Screenshots() {
  return (
    <section className="py-24 md:py-32 overflow-hidden relative" id="screenshots">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Stunning <span className="text-primary italic">Interface</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Designed with precision. Beautiful, intuitive, and fully customizable to match your style.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center h-[500px] sm:h-[600px] md:h-[750px] max-w-5xl mx-auto">
          {/* Left Phone - Playlist Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -25, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -15, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.95, rotate: -10, zIndex: 30 }}
            animate={{ y: [0, -15, 0] }}
            // @ts-ignore
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute left-[5%] sm:left-[10%] md:left-0 z-10 w-[200px] sm:w-[260px] md:w-[320px] aspect-[9/19] bg-black rounded-[2.5rem] border-4 md:border-8 border-gray-900 shadow-2xl overflow-hidden glass-panel origin-bottom"
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
              <span className="text-white text-[10px]">screenshot-left.png</span>
            </div>
          </motion.div>

          {/* Center Phone - Main Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            animate={{ y: [0, -25, 0] }}
            // @ts-ignore
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            className="relative z-20 w-[240px] sm:w-[300px] md:w-[380px] aspect-[9/19] bg-black rounded-[3rem] border-6 md:border-[10px] border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/20"
          >
            {/* Dynamic Camera Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-30 flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500/20 rounded-full" />
            </div>

            <img
              src={strings.screenshots.center}
              alt="Music Player Screenshot"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-full bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-5xl mb-4">📱</div>
                <p className="text-white text-xs font-bold uppercase tracking-widest">Main View</p>
              </div>
            </div>
          </motion.div>

          {/* Right Phone - Equalizer Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 25, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 15, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.95, rotate: 10, zIndex: 30 }}
            animate={{ y: [0, -15, 0] }}
            // @ts-ignore
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="absolute right-[5%] sm:right-[10%] md:right-0 z-10 w-[200px] sm:w-[260px] md:w-[320px] aspect-[9/19] bg-black rounded-[2.5rem] border-4 md:border-8 border-gray-900 shadow-2xl overflow-hidden glass-panel origin-bottom"
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
              <span className="text-white text-[10px]">screenshot-right.png</span>
            </div>
          </motion.div>
        </div>

        {/* Interaction Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-xs text-muted-foreground mt-12 uppercase tracking-[0.3em]"
        >
          Hover to inspect details
        </motion.p>
      </div>
    </section>
  );
}

