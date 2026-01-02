import { motion } from 'motion/react';
import { Zap, TrendingUp } from 'lucide-react';

export function BuyNowSection() {
  return (
    <section className="relative py-8 bg-gradient-to-r from-[#7FFF00] to-green-400 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Zap className="w-8 h-8 text-black" />
              <h2 className="text-3xl sm:text-4xl font-black text-black">
                Live on Pump.fun!
              </h2>
            </div>
            <p className="text-black text-lg sm:text-xl font-bold">
              Don't miss out - Join the BABYBUFF revolution now!
            </p>
          </motion.div>

          {/* Right side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-black text-[#7FFF00] px-8 py-4 rounded-lg font-black text-xl hover:bg-gray-900 transition-all transform hover:scale-105 shadow-2xl"
            >
              <TrendingUp className="w-6 h-6" />
              <span>Buy on Pump.fun</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
