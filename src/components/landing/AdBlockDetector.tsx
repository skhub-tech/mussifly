import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, RefreshCw, Heart } from "lucide-react";
import { toast } from "sonner";

export function AdBlockDetector() {
  const [isDetected, setIsDetected] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const runDetection = async (): Promise<boolean> => {
    // If user is offline, don't flag as AdBlock since network calls will fail naturally
    if (!navigator.onLine) {
      return false;
    }

    // 1. Check using a DOM bait element with standard ad classes
    const bait = document.createElement("div");
    bait.className = "pub_300x250 pub_300x250m ad-box ad-container adsbox advertisement header-ad";
    bait.setAttribute(
      "style",
      "position: absolute; left: -9999px; width: 1px; height: 1px; display: block !important;"
    );
    document.body.appendChild(bait);

    const computedStyle = window.getComputedStyle(bait);
    const isBaitBlocked =
      computedStyle.getPropertyValue("display") === "none" ||
      computedStyle.getPropertyValue("visibility") === "hidden" ||
      bait.offsetHeight === 0 ||
      bait.clientHeight === 0;

    document.body.removeChild(bait);

    if (isBaitBlocked) {
      return true;
    }

    // 2. Check by trying to fetch common ad scripts
    const adUrls = [
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      "https://signedquick.com/35/41/e9/3541e932cb25237e89e4d40ce6461dff.js"
    ];

    for (const url of adUrls) {
      try {
        await fetch(url, { method: "HEAD", mode: "no-cors", cache: "no-store" });
      } catch (err) {
        return true; // Request failed/blocked
      }
    }

    return false;
  };

  useEffect(() => {
    const detect = async () => {
      const detected = await runDetection();
      if (detected) {
        setIsDetected(true);
      }
    };

    // Run check after a 1.2s delay to let ad blocker extensions hook/block elements first
    const timer = setTimeout(detect, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleRecheck = async () => {
    setIsChecking(true);
    toast.loading("Re-checking for AdBlocker...", { id: "adblock-check" });

    // Simulate a brief delay for user feedback
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const stillBlocked = await runDetection();

    if (stillBlocked) {
      toast.error("AdBlocker is still active. Please disable it to access Mussifly.", {
        id: "adblock-check",
      });
      setIsChecking(false);
      // Also reload the page to be sure, since AdBlockers might require a fresh reload
      // to let Google ads scripts execute.
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      toast.success("Thank you for supporting us! Loading Mussifly...", {
        id: "adblock-check",
      });
      setIsDetected(false);
      setIsChecking(false);
      window.location.reload(); // Refresh to properly load all ad scripts
    }
  };

  return (
    <AnimatePresence>
      {isDetected && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-background/80 backdrop-blur-xl select-none">
          {/* Animated Background Gradients for Premium Visual Appeal */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-1/4 w-[25rem] h-[25rem] bg-primary/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-secondary/30 rounded-full blur-[100px] animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative max-w-md w-full mx-4 p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col items-center text-center overflow-hidden"
          >
            {/* Ambient Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />

            {/* Shield Icon container with pulsing border */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-40 animate-pulse" />
              <div className="relative w-20 h-20 bg-background/60 border border-white/10 rounded-full flex items-center justify-center shadow-xl">
                <ShieldAlert className="w-10 h-10 text-primary" />
              </div>
            </div>

            {/* Header Text */}
            <h2 className="text-3xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
              Hello Friend! 🎵
            </h2>

            {/* Supportive, Friendly Message in Basic English */}
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base font-light leading-relaxed mb-8 px-2">
              <p>
                We noticed you are using an <span className="text-primary font-semibold">AdBlocker</span> or{" "}
                <span className="text-secondary font-semibold">AdGuard</span>.
              </p>
              <p>
                Mussifly is a free project created with love. Ads help us pay for servers and keep the app completely
                free for everyone.
              </p>
              <p className="text-white/80 font-medium flex items-center justify-center gap-1.5">
                Please turn off AdBlocker for our site to support us! <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-beat" />
              </p>
            </div>

            {/* Refresh/Re-check Button */}
            <button
              onClick={handleRecheck}
              disabled={isChecking}
              className="w-full h-14 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all duration-300 rounded-2xl text-lg font-bold text-white flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${isChecking ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`} />
              {isChecking ? "Checking..." : "I've disabled it (Refresh)"}
            </button>

            {/* Subtle help footer */}
            <p className="mt-4 text-[11px] text-muted-foreground/60 uppercase tracking-widest font-mono">
              mussifly needs ads to survive
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
