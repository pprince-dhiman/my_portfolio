import { motion } from "motion/react";

const DownloadResumeBtn = () => {
    return (
        <motion.div
            whileTap={{ scale: 1.05 }}
            whileHover={{ y: -5 }}
            className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-48 cursor-pointer overflow-hidden"
        >
            <div className="flex items-center justify-center gap-2">
                <img src="assets/download.webp" alt="download"
                    className='w-8 rounded-lg' />
                <p className="text-xl">Download</p>
            </div>
        </motion.div>
    )
}

export default DownloadResumeBtn;