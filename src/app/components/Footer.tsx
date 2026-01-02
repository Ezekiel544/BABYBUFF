import { motion } from 'motion/react';
import { Send, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#7FFF00]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4">BABYBUFF</h3>
            <p className="text-gray-400 mb-4">
              Small body. Big pressure.
            </p>
            <p className="text-sm text-gray-500">
              Community-driven meme coin on Solana
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#7FFF00] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-400 hover:text-[#7FFF00] transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-[#7FFF00] transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            <div className="space-y-3 mb-4">
              <a
                href="mailto:Babybuff@inbox.lt"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#7FFF00] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Babybuff@inbox.lt</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://t.me/babybuffchat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Send className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://x.com/BabyBuffSol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Twitter className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
            <h5 className="text-yellow-500 font-bold mb-2">⚠️ Disclaimer</h5>
            <p className="text-sm text-gray-400 leading-relaxed">
              BABYBUFF is a community-driven meme token created purely for fun and entertainment. It holds no intrinsic value, promises of profit, or guarantees of future utility. The project is not associated with any investment vehicle, and participation is at your own risk. This is not financial advice. Always do your own research (DYOR) before engaging in any crypto-related activity. The $BABYBUFF team is not liable for any financial loss or decision made based on community activity or project participation.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2026 BABYBUFF. All rights reserved. Built with by the community.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
