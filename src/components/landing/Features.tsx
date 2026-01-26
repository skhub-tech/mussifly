import { motion } from "framer-motion";
import { Cloud, Layers, Mic2, Sliders, Smartphone, Zap, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "Ultra HD Playback",
    description: "Experience crystal clear audio with our advanced sound engine supporting lossless formats.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
  },
  {
    icon: <Sliders className="w-8 h-8" />,
    title: "AI Bass Boost",
    description: "Smart equalizer with 3 custom modes and AI-driven bass enhancement technology.",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-400",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Sync",
    description: "Seamlessly sync your playlists across all your devices with secure cloud storage.",
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Dual UI Engines",
    description: "Switch between Spotify-style and Instagram-style player interfaces instantly.",
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-400",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Optimized for speed with smart caching and instant load times even on slow networks.",
    color: "from-yellow-500/20 to-yellow-600/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Offline Mode",
    description: "Download your favorite tracks and listen anywhere without an internet connection.",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-400",
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="features">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3 h-3" />
            Cutting Edge Power
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Powerful <span className="text-glow">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need for the ultimate music experience, packed into one beautiful, high-performance app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10"
                style={{ background: `linear-gradient(to bottom right, var(--primary), var(--secondary))` }} />

              <div className="glass-card p-8 md:p-10 rounded-3xl h-full flex flex-col items-start border-white/5 group-hover:border-white/20 relative overflow-hidden">
                {/* Decorative background element for card */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`mb-8 p-4 rounded-2xl bg-white/5 w-fit ${feature.iconColor} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-lg`}>
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Visual Accent */}
                <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <span className="text-lg">â†’</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

