<<<<<<< HEAD
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import strings from "@/config/strings.json";

const faqs = [
  {
    question: "Is Musifly free to use?",
    answer: "Yes! Musifly offers a robust free version with all essential features. We also offer a Premium tier for ad-free listening and exclusive themes.",
  },
  {
    question: "Does it support offline playback?",
    answer: "Absolutely. You can download your favorite songs and playlists for offline listening, perfect for when you're on the go without data.",
  },
  {
    question: "Which audio formats are supported?",
    answer: "Musifly supports all major audio formats including MP3, FLAC, WAV, AAC, and OGG, ensuring high-fidelity playback for all your files.",
  },
  {
    question: "How does the Cloud Sync work?",
    answer: "Simply sign in with your account, and your playlists, favorites, and settings will automatically sync across all your Android devices.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AccordionItem value={`item-${index}`} className="glass-card px-6 rounded-xl border-none">
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center glass-panel p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white border-none text-lg px-8 h-12"
                onClick={() => window.open(strings.social.telegram, "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Join Our Telegram
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
=======
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import strings from "@/config/strings.json";

const faqs = [
  {
    question: "Is Musifly free to use?",
    answer: "Yes! Musifly offers a robust free version with all essential features. We also offer a Premium tier for ad-free listening and exclusive themes.",
  },
  {
    question: "Does it support offline playback?",
    answer: "Absolutely. You can download your favorite songs and playlists for offline listening, perfect for when you're on the go without data.",
  },
  {
    question: "Which audio formats are supported?",
    answer: "Musifly supports all major audio formats including MP3, FLAC, WAV, AAC, and OGG, ensuring high-fidelity playback for all your files.",
  },
  {
    question: "How does the Cloud Sync work?",
    answer: "Simply sign in with your account, and your playlists, favorites, and settings will automatically sync across all your Android devices.",
  },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AccordionItem value={`item-${index}`} className="glass-card px-6 rounded-xl border-none">
                <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center glass-panel p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white border-none text-lg px-8 h-12"
                onClick={() => window.open(strings.social.telegram, "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                Join Our Telegram
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
>>>>>>> 3c0bdd2eae304b2a15a2ff0ab5a6a4d84aa1b791
}