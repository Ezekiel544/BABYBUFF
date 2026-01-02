import { motion } from 'motion/react';
import { Rocket, TrendingUp, Target, Star } from 'lucide-react';

export function RoadmapSection() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Launch & Foundation',
      icon: <Rocket className="w-10 h-10" />,
      color: 'from-[#7FFF00] to-green-400',
      items: [
        'Token launch on Pump.fun',
        'Telegram & X setup',
        'Meme contests',
        'Community growth'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Expansion',
      icon: <TrendingUp className="w-10 h-10" />,
      color: 'from-yellow-400 to-orange-400',
      items: [
        'Community rewards',
        'Influencer meme sharing',
        'Listings on tracking platforms'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Growth',
      icon: <Target className="w-10 h-10" />,
      color: 'from-purple-400 to-pink-400',
      items: [
        'Possible liquidity migration (Raydium)',
        'More community-driven initiatives',
        'Brand & meme expansion'
      ]
    }
  ];

  return (
    <section id="roadmap" className="relative py-16 bg-gradient-to-b from-[#0a0a0f] to-black">
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
            <span className="text-[#7FFF00]">ROADMAP</span>
          </h2>
          <div className="w-24 h-1 bg-[#7FFF00] mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our journey to domination - one meme at a time
          </p>
        </motion.div>

        {/* Roadmap Phases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-2xl p-8 border border-[#7FFF00]/20 hover:border-[#7FFF00]/50 transition-all hover:transform hover:scale-105 h-full">
                {/* Phase Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} mb-6`}>
                  <div className="text-white">
                    {phase.icon}
                  </div>
                </div>

                {/* Phase Number */}
                <div className="text-[#7FFF00] font-black text-lg mb-2">{phase.phase}</div>
                
                {/* Phase Title */}
                <h3 className="text-2xl font-black text-white mb-6">{phase.title}</h3>

                {/* Phase Items */}
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-[#7FFF00] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector Line (desktop only) */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#7FFF00] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-white font-bold mb-6">
            Join us on this epic journey! 
          </p>
          <a
            href="https://t.me/babybuffchat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7FFF00] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#6FEF00] transition-all transform hover:scale-105"
          >
            Join the Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}
