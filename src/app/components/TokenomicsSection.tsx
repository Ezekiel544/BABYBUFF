import { motion } from 'motion/react';
import { Flame, DollarSign, Shield, Coins } from 'lucide-react';
import './style.css'
export function TokenomicsSection() {
  return (
    <section className="relative py-16 bg-[#0a0a0f] gig">
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
            <span className="text-[#7FFF00]">TOKENOMICS</span>
          </h2>
          <div className="w-24 h-1 bg-[#7FFF00] mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fair and transparent tokenomics designed for the community
          </p>
        </motion.div>

        {/* Main Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#7FFF00]/20 to-[#1a1a2e] rounded-2xl p-8 border border-[#7FFF00]/30 shadow-2xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Coins className="w-12 h-12 text-[#7FFF00]" />
              <div>
                <h3 className="text-2xl font-black text-white">Token Name</h3>
                <p className="text-3xl font-black text-[#7FFF00]">BABYBUFF</p>
              </div>
            </div>
            <div className="border-t border-[#7FFF00]/20 pt-6">
              <div className="flex items-center space-x-4">
                <DollarSign className="w-10 h-10 text-[#7FFF00]" />
                <div>
                  <h4 className="text-lg font-bold text-gray-400">Total Supply</h4>
                  <p className="text-2xl font-black text-white">1,000,000,000 BABYBUFF</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-500/20 to-[#1a1a2e] rounded-2xl p-8 border border-red-500/30 shadow-2xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Flame className="w-12 h-12 text-red-500" />
              <div>
                <h3 className="text-2xl font-black text-white">Token Burn </h3>
                <p className="text-3xl font-black text-red-500">10% Burned</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg">
              10% of total supply burned at launch to create scarcity and increase value for holders
            </p>
          </motion.div>
        </div>

        {/* Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-2xl p-8 sm:p-12 border border-[#7FFF00]/20 shadow-2xl mb-12"
        >
          <h3 className="text-3xl font-black text-white mb-8 text-center">Distribution</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: '100% fair launch via Pump.fun', icon: '✅' },
              { label: 'No team allocation', icon: '🚫' },
              { label: 'No private sale', icon: '🚫' },
              { label: 'No presale', icon: '🚫' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0f] rounded-xl p-6 text-center border border-[#7FFF00]/10 hover:border-[#7FFF00]/30 transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-white font-bold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tax Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-green-500/20 to-[#1a1a2e] rounded-2xl p-8 border border-green-500/30 shadow-2xl">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="w-12 h-12 text-green-500" />
              <h3 className="text-3xl font-black text-white">Zero Tax Policy</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0a0a0f] rounded-xl p-6 text-center">
                <p className="text-4xl font-black text-green-500 mb-2">0%</p>
                <p className="text-white font-bold">Buy Tax</p>
              </div>
              <div className="bg-[#0a0a0f] rounded-xl p-6 text-center">
                <p className="text-4xl font-black text-green-500 mb-2">0%</p>
                <p className="text-white font-bold">Sell Tax</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
