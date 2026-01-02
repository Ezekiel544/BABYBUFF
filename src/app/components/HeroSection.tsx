import { motion } from 'motion/react';
import heroImage from './figma/imageone.png';
import './style.css'
export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden dd" style={{ paddingTop: '96px' }}>
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div> */}

  
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-black text-white mb-4 tracking-tight">
            JOIN THE ULTIMATE RAIDERS
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-4xl font-black text-[#7FFF00] mb-6 drop-shadow-[0_0_30px_rgba(127,255,0,0.5)]">
            EARN. WIN. DOMINATE.
          </h2>
          <p className="text-xl sm:text-2xl text-white mb-6 max-w-3xl mx-auto">
            Make Your Move Before It's Too Late!
          </p>

         
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.a
              href="https://t.me/babybuffchat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7FFF00] text-black px-8 py-4 rounded-lg font-bold text-md hover:bg-[#6FEF00] transition-all transform hover:scale-105 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN THE COMMUNITY
            </motion.a>
            <motion.button
              onClick={() => {
                const element = document.getElementById('roadmap');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-md hover:bg-white hover:text-black transition-all transform hover:scale-105 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW THE ROADMAP
            </motion.button>
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-[#7FFF00]/20">
              <div className="text-4xl font-black text-[#7FFF00] mb-2">1500+</div>
              <div className="text-white text-lg">Members</div>
            </div>
            <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-[#7FFF00]/20">
              <div className="text-4xl font-black text-[#7FFF00] mb-2">250+</div>
              <div className="text-white text-lg">NFTs Minted</div>
            </div>
            <div className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-[#7FFF00]/20">
              <div className="text-4xl font-black text-[#7FFF00] mb-2">75+</div>
              <div className="text-white text-lg">Raids Completed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}