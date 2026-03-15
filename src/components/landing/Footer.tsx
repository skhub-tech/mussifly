import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import strings from "@/config/strings.json";
import { Link, useLocation } from "react-router";

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black/40 backdrop-blur-xl border-t border-white/10 pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">M</span>
              </div>
              <span className="text-2xl font-bold">{strings.app.name}</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              {strings.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to={isHomePage ? "#features" : "/#features"} className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to={isHomePage ? "#download" : "/#download"} className="hover:text-primary transition-colors">Download</Link></li>
              <li><Link to={isHomePage ? "#premium" : "/#premium"} className="hover:text-primary transition-colors">Premium</Link></li>
              <li><Link to={isHomePage ? "#changelog" : "/#changelog"} className="hover:text-primary transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Â© 2025 {strings.app.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href={strings.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href={strings.social.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href={strings.social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href={strings.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

