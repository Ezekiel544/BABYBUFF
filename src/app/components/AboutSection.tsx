import { motion } from 'motion/react';
import { Rocket, Users, Zap, TrendingUp } from 'lucide-react';
import './style.css'
export function AboutSection() {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fair Launch',
      description: 'Fair launch on Pump.fun - No insiders or VC allocations'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'Built by the community, for the community'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Meme-Driven Growth',
      description: 'Growing organically through memes and community energy'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Long-Term Vision',
      description: 'Building a recognizable brand on Solana'
    }
  ];

  return (
    <section id="about" className="relative py-16 bg-gradient-to-b from-black/80 to-[#0a0a0f] gig">
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
            ABOUT <span className="text-[#7FFF00]">BABYBUFF</span>
          </h2>
          <div className="w-24 h-1 bg-[#7FFF00] mx-auto mb-8" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-2xl p-8 sm:p-12 border border-[#7FFF00]/20 shadow-2xl">
            <h3 className="text-3xl font-black text-[#7FFF00] mb-4">Small body. Big pressure.</h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              <strong className="text-white">BABYBUFF</strong> is a Solana-based meme coin focused on community energy, humor, and organic participation. It represents the idea that even something small can create serious momentum.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              BABYBUFF is a community-driven meme coin launched on Pump.fun, built around memes, persistence, and organic growth. <strong className="text-white">No presale. No VCs. Just community.</strong>
            </p>
          </div>
        </motion.div>

        {/* Vision & Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-black text-white text-center mb-8">Vision & Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-xl p-6 border border-[#7FFF00]/20 hover:border-[#7FFF00]/50 transition-all hover:transform hover:scale-105"
              >
                <div className="text-[#7FFF00] mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why BABYBUFF Stands Out */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-black text-white text-center mb-8">
            Why <span className="text-[#7FFF00]">BABYBUFF</span> Stands Out
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Fair launch on Pump.fun',
              'No insiders or VC allocations',
              'Community-first mindset',
              'Meme-driven growth, not empty promises'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-[#1a1a2e] rounded-lg p-4 border border-[#7FFF00]/10"
              >
                <div className="w-2 h-2 bg-[#7FFF00] rounded-full" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
