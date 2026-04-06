import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "kumarprince39243@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).
            then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            }).catch(err => {
                console.error("Failed to copy email: ", err);
            });
    };

    return (
        <motion.button
            onClick={copyToClipboard}
            disabled={copied}
            whileTap={{ scale: 1.05 }}
            whileHover={{ y: -5 }}
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-48 cursor-pointer overflow-hidden"
        >
            <AnimatePresence mode="wait">
                <motion.p
                    className="flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    exit={{ opacity: 0, y: -10 }}
                    key={copied ? "copied" : "copy"}
                >
                    <img src={copied ? "assets/done.png" : "assets/copy.svg"} className="w-5" alt="copy icon" />
                    {copied ? "Email Copied!" : "Copy Email Address"}
                </motion.p>
            </AnimatePresence>
        </motion.button>
    )
}

export default CopyEmailButton;