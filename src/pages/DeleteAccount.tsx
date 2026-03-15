import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router";

export default function DeleteAccount() {
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
                            Mussifly Account Deletion
                        </h1>
                        <p className="text-muted-foreground text-lg italic">
                            How to remove your data from Mussifly
                        </p>
                    </header>

                    <section className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed text-lg">
                        <div className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                Deleting via the App
                            </h2>
                            <p>
                                Users can delete their account directly inside the Mussifly app by navigating to:
                            </p>
                            <div className="bg-white/10 p-4 rounded-xl inline-block font-mono text-primary font-bold">
                                Settings → Delete Account
                            </div>
                            <p>
                                When the <span className="text-red-500 font-bold underline">Delete</span> button is pressed, the account and all associated data are permanently removed. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>Custom Playlists</li>
                                <li>Listening History</li>
                                <li>Profile Information & Preferences</li>
                            </ul>
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-200 text-sm">
                                <strong>Warning:</strong> This action is irreversible. Once deleted, your data cannot be recovered.
                            </div>
                        </div>

                        <div className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-2 h-8 bg-secondary rounded-full" />
                                Request Deletion via Email
                            </h2>
                            <p>
                                If you cannot access the app or prefer a manual request, you can request account deletion by emailing us at:
                            </p>
                            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl w-fit">
                                <a 
                                    href="mailto:report.musifly@gmail.com" 
                                    className="text-primary font-bold hover:underline"
                                >
                                    report.musifly@gmail.com
                                </a>
                            </div>
                            <p className="text-sm">
                                Please ensure you send the email from the address associated with your Mussifly account to verify ownership.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <div className="flex flex-col md:flex-row gap-4">
                                <Link 
                                    to="/"
                                    className="px-8 py-4 bg-white/5 text-white rounded-2xl font-bold text-center border border-white/10 hover:bg-white/10 transition-all"
                                >
                                    ← Back to Home
                                </Link>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
