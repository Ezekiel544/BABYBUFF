import { motion } from 'motion/react';
import { Send, Twitter } from 'lucide-react';

export function CommunitySection() {
  return (
    <section id="community" className="relative py-24 bg-gradient-to-b from-black to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            JOIN THE <span className="text-[#7FFF00]">COMMUNITY</span>
          </h2>
          <div className="w-24 h-1 bg-[#7FFF00] mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with fellow BABYBUFFers and stay updated on the latest news
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Telegram Card */}
          <motion.a
            href="https://t.me/babybuffchat"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-[#0088cc]/20 to-[#1a1a2e] rounded-2xl p-8 border border-[#0088cc]/30 hover:border-[#0088cc]/60 transition-all hover:transform hover:scale-105 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#0088cc] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Telegram</h3>
              <p className="text-gray-400 mb-4">
                Join our active community chat, get updates, and participate in events
              </p>
              <div className="text-[#0088cc] font-bold text-lg group-hover:underline">
                Join Now →
              </div>
            </div>
          </motion.a>

          {/* Twitter/X Card */}
          <motion.a
            href="https://x.com/BabyBuffSol"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-white/20 to-[#1a1a2e] rounded-2xl p-8 border border-white/30 hover:border-white/60 transition-all hover:transform hover:scale-105 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Twitter className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">X (Twitter)</h3>
              <p className="text-gray-400 mb-4">
                Follow us for memes, announcements, and community highlights
              </p>
              <div className="text-white font-bold text-lg group-hover:underline">
                Follow Us →
              </div>
            </div>
          </motion.a>
        </div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#7FFF00]/20 to-[#1a1a2e] rounded-2xl p-8 border border-[#7FFF00]/30 shadow-2xl text-center">
            <h3 className="text-2xl font-black text-white mb-4">Launch Platform</h3>
            <p className="text-gray-300 mb-6">
              BABYBUFF launched on Pump.fun - the premier fair launch platform on Solana
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#7FFF00] text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#6FEF00] transition-all transform hover:scale-105"
            >
              Buy on Pump.fun
            </a>
          </div>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: 'Fair Launch', icon: '✅' },
            { label: 'Community Driven', icon: '👥' },
            { label: 'Active Chat', icon: '💬' },
            { label: 'Daily Memes', icon: '🔥' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a2e] rounded-xl p-6 text-center border border-[#7FFF00]/10"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-white font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
