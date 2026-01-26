import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, Smartphone, Zap, Music2 } from "lucide-react";
import { useState, useEffect } from "react";
import strings from "@/config/strings.json";

export function Hero() {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const shadowX = useSpring(useTransform(mouseX, [-500, 500], [20, -20]), springConfig);
  const shadowY = useSpring(useTransform(mouseY, [-500, 500], [20, -20]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
           style={{ x: shadowX, y: shadowY }}
           className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-primary/20 rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div
          style={{ x: useTransform(shadowX, (v) => -v), y: useTransform(shadowY, (v) => -v) }}
          className="absolute bottom-1/4 right-1/4 w-[18rem] h-[18rem] md:w-[35rem] md:h-[35rem] bg-secondary/20 rounded-full blur-[80px] md:blur-[120px]"
        />
        
        {/* Floating Icons for Dynamism */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[10%] opacity-20 hidden lg:block"
        >
          <Music2 size={48} className="text-primary" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-[10%] opacity-20 hidden lg:block"
        >
          <Zap size={48} className="text-secondary" />
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Enhanced App Icon with Pulse */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            className="relative mb-6 md:mb-10 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
            <div className="relative w-20 h-20 md:w-28 md:h-28 bg-black/40 backdrop-blur-2xl border border-white/20 rounded-[2rem] flex items-center justify-center shadow-2xl overflow-hidden">
              <img src="/logo.png" alt="Musifly" className="w-14 h-14 md:w-20 md:h-20 object-contain z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Title & Tagline with Adaptive Sizing */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl"
          >
            {strings.app.name.split(' ')[0]}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl font-light tracking-wide px-4"
          >
            {strings.app.tagline.split(',')[0]}, <span className="text-primary font-semibold text-glow">{strings.app.tagline.split(',')[1]}</span>
          </motion.p>

          {/* Adaptive Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative z-20 w-full max-w-md"
          >
            {!showDownloadOptions ? (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-2xl bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(var(--primary),0.6)] transition-all duration-500 border-0 group"
                  onClick={() => setShowDownloadOptions(true)}
                >
                  <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Download Now
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col sm:flex-row gap-4 px-4"
              >
                <Button
                  variant="outline"
                  className="flex-1 h-16 text-lg rounded-2xl border-primary/30 hover:border-primary bg-primary/5 backdrop-blur-md transition-all group"
                  onClick={() => window.open(strings.downloads.arm64, "_blank")}
                >
                  <Smartphone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  ARM 64-bit
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-16 text-lg rounded-2xl border-secondary/30 hover:border-secondary bg-secondary/5 backdrop-blur-md transition-all group"
                  onClick={() => window.open(strings.downloads.arm32, "_blank")}
                >
                  <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  ARM 32-bit
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Stats Section - Adaptive Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 text-center border-t border-white/5 pt-10"
          >
            {[
              { label: "Downloads", value: strings.stats.downloads },
              { label: "Rating", value: strings.stats.rating },
              { label: "Music", value: strings.stats.songs },
            ].map((stat, index) => (
              <div key={index} className={`flex flex-col ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter">{stat.value}</span>
                <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

