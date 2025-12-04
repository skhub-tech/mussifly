<<<<<<< HEAD
import { motion } from "framer-motion";

export function Description() {
  return (
    <section className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            The Future of Mobile Audio
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-white">Musifly</strong> is not just another music player; it is an AI-powered audio ecosystem designed for audiophiles and casual listeners alike. Built with a cutting-edge audio engine, Musifly delivers <span className="text-primary">Ultra HD sound quality</span> that breathes new life into your favorite tracks. Whether you are streaming from the cloud or listening offline, our adaptive technology ensures the perfect listening experience every time.
            </p>
            <p>
              At the core of Musifly is our proprietary <span className="text-secondary">AI Bass Boost technology</span>, which analyzes your music in real-time to enhance depth and clarity without distortion. Combined with three professional-grade equalizers and seamless cloud synchronization, your music library travels with you, sounding better than ever before.
            </p>
            <p>
              Experience the freedom of choice with our dual UI engines—switch between a classic Spotify-inspired layout or a modern, visual-first interface. With features like a sleep timer, crossfade playback, and smart lyrics integration, Musifly is the only music player you will ever need on your Android device.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
=======
import { motion } from "framer-motion";

export function Description() {
  return (
    <section className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            The Future of Mobile Audio
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-white">Musifly</strong> is not just another music player; it is an AI-powered audio ecosystem designed for audiophiles and casual listeners alike. Built with a cutting-edge audio engine, Musifly delivers <span className="text-primary">Ultra HD sound quality</span> that breathes new life into your favorite tracks. Whether you are streaming from the cloud or listening offline, our adaptive technology ensures the perfect listening experience every time.
            </p>
            <p>
              At the core of Musifly is our proprietary <span className="text-secondary">AI Bass Boost technology</span>, which analyzes your music in real-time to enhance depth and clarity without distortion. Combined with three professional-grade equalizers and seamless cloud synchronization, your music library travels with you, sounding better than ever before.
            </p>
            <p>
              Experience the freedom of choice with our dual UI engines—switch between a classic Spotify-inspired layout or a modern, visual-first interface. With features like a sleep timer, crossfade playback, and smart lyrics integration, Musifly is the only music player you will ever need on your Android device.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
>>>>>>> 3c0bdd2eae304b2a15a2ff0ab5a6a4d84aa1b791
}