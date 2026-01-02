import { motion } from 'motion/react';

export function TaglineSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(127,255,0,0.5)',
                '0 0 40px rgba(127,255,0,0.8)',
                '0 0 20px rgba(127,255,0,0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            BABYBUFF
          </motion.h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7FFF00] mb-6">
            Small body. Big pressure.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#7FFF00] to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
