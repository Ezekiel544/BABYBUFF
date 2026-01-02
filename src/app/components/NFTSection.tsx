import { motion } from 'motion/react';
import { Image, Gift, Vote, Trophy } from 'lucide-react';
import NFTImage from './figma/image.png';
export function NFTSection() {
  const utilities = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Special Community Status',
      description: 'NFT holders get exclusive recognition and status'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Potential Future Rewards',
      description: 'Active members may receive special rewards'
    },
    {
      icon: <Vote className="w-8 h-8" />,
      title: 'Additional Perks',
      description: 'Access to voting, contests, and exclusive events'
    }
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0f]">
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
            NFT <span className="text-[#7FFF00]">COLLECTION</span>
          </h2>
          <div className="w-24 h-1 bg-[#7FFF00] mx-auto mb-8" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-[#1a1a2e] rounded-2xl p-8 sm:p-12 border border-purple-500/30 shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full mb-6">
              {/* <Image className="w-10 h-10 text-white" /> */}
              <img src={NFTImage} alt="" className='rounded-2xl'/>
            </div>
            <h3 className="text-3xl font-black text-white mb-4">
              BABYBUFF NFT Collection 
            </h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              The BABYBUFF NFT collection is currently in development, focused on community and meme culture.
            </p>
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-6 py-3">
              {/* <span className="text-yellow-500 text-lg">⚙️</span> */}
              <span className="text-yellow-500 font-bold">Coming Soon</span>
            </div>
          </div>
        </motion.div>

        {/* Planned Utility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-black text-white text-center mb-8">Planned Utility</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {utilities.map((utility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4">{utility.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{utility.title}</h4>
                <p className="text-gray-400">{utility.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-[#1a1a2e] rounded-xl p-6 border border-[#7FFF00]/20 text-center">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Note:</strong> NFTs are not a required part of the project, but are being built as added value for the community. More details will be shared once development is complete.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
