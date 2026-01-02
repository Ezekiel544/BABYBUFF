import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#7FFF00] to-green-400 py-3 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <motion.p
            className="text-black font-bold text-sm sm:text-base"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            🔥 <span className="hidden sm:inline">BABYBUFF is LIVE on Pump.fun!</span>
            <span className="sm:hidden">LIVE NOW!</span> Join the community today! 🚀
          </motion.p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-black hover:text-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
