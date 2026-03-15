import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import strings from "@/config/strings.json";
import { useEffect } from "react";

export default function Privacy() {
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
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground text-lg italic">
                            Effective Date: March 15, 2026
                        </p>
                    </header>

                    <section className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed text-lg">
                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                1. Information We Collect
                            </h2>
                            <p>
                                {strings.app.name} collects only the minimum information necessary to provide and improve its services.
                            </p>
                            <h3 className="text-xl font-semibold text-white/90">a. Personal Information</h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Email address (for account synchronization and updates)</li>
                                <li>Display name (to personalize your experience)</li>
                                <li>Authentication identifiers provided by our secure authentication service</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-white/90">b. Technical Data</h3>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Device information (model, OS version)</li>
                                <li>App performance metrics and crash logs (to improve stability)</li>
                            </ul>
                        </div>

                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-secondary rounded-full" />
                                2. How We Use Information
                            </h2>
                            <p>
                                Your data is used strictly for enhancement of the user experience:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>To manage your account and stored playlists/preferences.</li>
                                <li>To analyze app performance and fix bugs.</li>
                                <li>To provide seamless music streaming across devices.</li>
                            </ul>
                        </div>

                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                3. Third-Party Services
                            </h2>
                            <p>
                                We may utilize third-party services such as Google Firebase for analytics and authentication. These services may collect information sent by your device as part of a web page request, such as cookies or your IP address.
                            </p>
                        </div>

                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-secondary rounded-full" />
                                4. Children's Privacy
                            </h2>
                            <p>
                                {strings.app.name} does not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                            </p>
                        </div>

                        <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                5. Security
                            </h2>
                            <p>
                                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h2 className="text-3xl font-bold text-white tracking-tighter mb-4">Contact Us</h2>
                            <p className="mb-6">
                                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4">
                                <a 
                                    href={strings.social.telegram}
                                    className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-center hover:scale-105 transition-transform"
                                >
                                    Telegram Support
                                </a>
                                <a 
                                    href={`mailto:support@mussifly.in`}
                                    className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold text-center border border-white/10 hover:bg-white/20 transition-all"
                                >
                                    Email Us
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
