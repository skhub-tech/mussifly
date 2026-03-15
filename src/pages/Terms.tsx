import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import strings from "@/config/strings.json";
import { useEffect } from "react";
import { Link } from "react-router";

export default function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
            <Navbar />
            
            <main className="container mx-auto px-6 pt-32 pb-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <header className="space-y-4 border-b border-white/10 pb-8 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Terms & Conditions
                        </h1>
                        <p className="text-muted-foreground text-lg italic">
                            Last Updated: March 15, 2026
                        </p>
                    </header>

                    <section className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed text-lg">
                        
                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing or using {strings.app.name}, you confirm that you have read, understood, and agreed to be bound by these Terms & Conditions. If you do not agree, please do not use the application.
                            </p>
                        </div>

                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-secondary rounded-full" />
                                2. Usage License
                            </h2>
                            <p>
                                We grant you a personal, non-exclusive, non-transferable license to use {strings.app.name} for personal, non-commercial music streaming purposes.
                            </p>
                            <h3 className="text-xl font-semibold text-white/90">Restrictions:</h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>No reverse engineering or decompiling of the app.</li>
                                <li>No unauthorized distribution of content.</li>
                                <li>No attempts to bypass security features or API limits.</li>
                            </ul>
                        </div>

                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                3. Intellectual Property
                            </h2>
                            <p>
                                The software, design, logos, and UI of {strings.app.name} are the exclusive property of our development team. Music content streamed via the app is the property of its respective owners and is provided via third-party APIs/services.
                            </p>
                        </div>

                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-secondary rounded-full" />
                                4. Service Availability
                            </h2>
                            <p>
                                While we strive for 100% uptime, {strings.app.name} is provided "as is". We are not liable for any service interruptions, data loss, or technical issues beyond our control.
                            </p>
                        </div>

                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                5. User Conduct
                            </h2>
                            <p>
                                You agree not to use the app for any illegal activities or to harass, abuse, or harm others. We reserve the right to terminate access for users who violate these terms.
                            </p>
                        </div>

                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-secondary rounded-full" />
                                6. Changes to Terms
                            </h2>
                            <p>
                                We may update these terms from time to time. Your continued use of the app after changes are posted constitutes your acceptance of the new terms.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h2 className="text-3xl font-bold text-white tracking-tighter mb-4">Questions?</h2>
                            <p className="mb-6">
                                If you have any questions about these Terms, please contact us.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4">
                                <Link 
                                    to="/"
                                    className="px-8 py-4 bg-white/5 text-white rounded-2xl font-bold text-center border border-white/10 hover:bg-white/10 transition-all"
                                >
                                    ← Back to Home
                                </Link>
                                <a 
                                    href={strings.social.telegram}
                                    className="px-8 py-4 bg-secondary text-white rounded-2xl font-bold text-center hover:scale-105 transition-transform shadow-lg shadow-secondary/20"
                                >
                                    Telegram Community
                                </a>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
