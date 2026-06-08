import { motion } from "framer-motion";
import { Github, Instagram, User, ArrowUpRight } from "lucide-react";
import strings from "@/config/strings.json";

export function Developer() {
  const skills = [
    "Kotlin",
    "Android SDK",
    "Jetpack Compose",
    "Audio DSP",
    "Vite / React",
    "Python",
    "Supabase"
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="developer">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
            <User className="w-3.5 h-3.5" />
            Official Creator
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Developer of <span className="text-glow text-secondary">Mussifly</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Who is the developer of Mussifly? Sahitya Kanojiya is the developer of the Mussifly music app, creating a high-performance Android audio experience.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md relative group"
          >
            {/* Outer card glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[32px] blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            {/* Main Card */}
            <div className="glass-panel p-8 md:p-10 rounded-[32px] border-white/10 hover:border-white/20 transition-all duration-500 relative flex flex-col items-center text-center">
              
              {/* Profile Image container with glowing ring */}
              <div className="relative mb-6">
                {/* Glowing ring animation */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse blur-md opacity-75" />
                {/* Outer border ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-primary p-[3px] shadow-[0_0_20px_rgba(236,72,153,0.5)]" />
                
                {/* Real Avatar */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-background bg-muted">
                  <img
                    src="https://github.com/skhub-tech.png"
                    alt="Sahitya Kanojiya"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback profile pic if github avatar fails
                      e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Developer Info */}
              <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                Sahitya Kanojiya
              </h3>

              {/* Translucent Glass Pill Badge */}
              <div className="mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
                Lead Developer & Creator
              </div>

              {/* Bio Description */}
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm font-light">
                Lead developer and architect behind Mussifly. Passionate about engineering premium, high-fidelity mobile audio systems, clean Kotlin/Compose codebases, and custom sound processing tools.
              </p>

              {/* Skills Section */}
              <div className="w-full mb-8">
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/80 group-hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href="https://github.com/skhub-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-12 rounded-2xl bg-white text-black font-semibold hover:bg-neutral-200 active:scale-95 transition-all text-sm shadow-lg"
                >
                  <Github className="w-4 h-4" />
                  GitHub Profile
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
                <a
                  href="https://instagram.com/sahitya_000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 h-12 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 hover:border-white/20 text-white font-semibold transition-all text-sm"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  Instagram
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
