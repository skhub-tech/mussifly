<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Music, Smartphone, Zap } from "lucide-react";
import { useState } from "react";
import strings from "@/config/strings.json";

export function Hero() {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* App Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative mb-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-24 h-24 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
              <img src="/logo.png" alt="Musifly" className="w-16 h-16 object-contain" />
            </div>
          </motion.div>

          {/* Title & Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-foreground to-white drop-shadow-sm"
          >
            Musifly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-light tracking-wide"
          >
            Feel The Music, <span className="text-primary font-medium">Beyond Limits</span>.
          </motion.p>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative z-20"
          >
            {!showDownloadOptions ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="h-16 px-12 text-lg rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-[0_0_30px_rgba(var(--primary),0.5)] border-0"
                  onClick={() => setShowDownloadOptions(true)}
                >
                  <Download className="mr-2 h-6 w-6" />
                  Download Now
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-16 px-8 text-lg rounded-full border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 glass-panel"
                    onClick={() => window.open(strings.downloads.arm64, "_blank")}
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Download 64-bit
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-16 px-8 text-lg rounded-full border-secondary/50 hover:bg-secondary/20 hover:border-secondary transition-all duration-300 glass-panel"
                    onClick={() => window.open(strings.downloads.arm32, "_blank")}
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Download 32-bit
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {/* Stats / Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 md:gap-16 text-center"
          >
            {[
              { label: "Downloads", value: "1M+" },
              { label: "Rating", value: "4.9/5" },
              { label: "Songs", value: "Unlimited" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
=======
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Music, Smartphone, Zap } from "lucide-react";
import { useState } from "react";
import strings from "@/config/strings.json";

export function Hero() {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* App Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative mb-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-24 h-24 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
              <img src="/logo.png" alt="Musifly" className="w-16 h-16 object-contain" />
            </div>
          </motion.div>

          {/* Title & Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-foreground to-white drop-shadow-sm"
          >
            Musifly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-light tracking-wide"
          >
            Feel The Music, <span className="text-primary font-medium">Beyond Limits</span>.
          </motion.p>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative z-20"
          >
            {!showDownloadOptions ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="h-16 px-12 text-lg rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-[0_0_30px_rgba(var(--primary),0.5)] border-0"
                  onClick={() => setShowDownloadOptions(true)}
                >
                  <Download className="mr-2 h-6 w-6" />
                  Download Now
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-16 px-8 text-lg rounded-full border-primary/50 hover:bg-primary/20 hover:border-primary transition-all duration-300 glass-panel"
                    onClick={() => window.open(strings.downloads.arm64, "_blank")}
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Download 64-bit
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-16 px-8 text-lg rounded-full border-secondary/50 hover:bg-secondary/20 hover:border-secondary transition-all duration-300 glass-panel"
                    onClick={() => window.open(strings.downloads.arm32, "_blank")}
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Download 32-bit
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {/* Stats / Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 md:gap-16 text-center"
          >
            {[
              { label: "Downloads", value: "1M+" },
              { label: "Rating", value: "4.9/5" },
              { label: "Songs", value: "Unlimited" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
>>>>>>> 3c0bdd2eae304b2a15a2ff0ab5a6a4d84aa1b791
}