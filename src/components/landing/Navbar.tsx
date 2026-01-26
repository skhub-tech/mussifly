import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Music2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import strings from "@/config/strings.json";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Screenshots", href: "#screenshots" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "py-4 bg-background/90 backdrop-blur-2xl border-b border-white/5" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Music2 className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-white">
                        {strings.app.name.split(' ')[0]}
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        size="sm"
                        className="rounded-full bg-primary/20 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all px-6"
                        onClick={() => document.getElementById('screenshots')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Get App
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-bold text-white hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button
                                className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-secondary text-lg font-bold"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.open(strings.downloads.arm64, "_blank");
                                }}
                            >
                                <Download className="w-5 h-5 mr-3" />
                                Download APK
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
