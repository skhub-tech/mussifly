<<<<<<< HEAD
import { motion } from "framer-motion";
import { Cloud, Layers, Mic2, Sliders, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "Ultra HD Playback",
    description: "Experience crystal clear audio with our advanced sound engine supporting lossless formats.",
    color: "text-blue-400",
  },
  {
    icon: <Sliders className="w-8 h-8" />,
    title: "AI Bass Boost",
    description: "Smart equalizer with 3 custom modes and AI-driven bass enhancement technology.",
    color: "text-purple-400",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Sync",
    description: "Seamlessly sync your playlists across all your devices with secure cloud storage.",
    color: "text-cyan-400",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Dual UI Engines",
    description: "Switch between Spotify-style and Instagram-style player interfaces instantly.",
    color: "text-pink-400",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Optimized for speed with smart caching and instant load times even on slow networks.",
    color: "text-yellow-400",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Offline Mode",
    description: "Download your favorite tracks and listen anywhere without an internet connection.",
    color: "text-green-400",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the ultimate music experience, packed into one beautiful app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-2xl group"
            >
              <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
=======
import { motion } from "framer-motion";
import { Cloud, Layers, Mic2, Sliders, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "Ultra HD Playback",
    description: "Experience crystal clear audio with our advanced sound engine supporting lossless formats.",
    color: "text-blue-400",
  },
  {
    icon: <Sliders className="w-8 h-8" />,
    title: "AI Bass Boost",
    description: "Smart equalizer with 3 custom modes and AI-driven bass enhancement technology.",
    color: "text-purple-400",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Sync",
    description: "Seamlessly sync your playlists across all your devices with secure cloud storage.",
    color: "text-cyan-400",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Dual UI Engines",
    description: "Switch between Spotify-style and Instagram-style player interfaces instantly.",
    color: "text-pink-400",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Optimized for speed with smart caching and instant load times even on slow networks.",
    color: "text-yellow-400",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Offline Mode",
    description: "Download your favorite tracks and listen anywhere without an internet connection.",
    color: "text-green-400",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the ultimate music experience, packed into one beautiful app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-2xl group"
            >
              <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
>>>>>>> 3c0bdd2eae304b2a15a2ff0ab5a6a4d84aa1b791
}