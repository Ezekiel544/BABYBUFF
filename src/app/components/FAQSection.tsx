import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Q1: What is BABYBUFF?',
      answer: 'BABYBUFF is a meme coin launched on Solana via Pump.fun — fully community-driven, with no presale, no whitelist, and no VCs.'
    },
    {
      question: 'Q2: How do I buy BABYBUFF?',
      answer: 'You can buy BABYBUFF directly on Pump.fun. After launch, it will also be available on secondary markets like Raydium.'
    },
    {
      question: 'Q3: Is there a token tax?',
      answer: 'No. BABYBUFF has 0% buy tax and 0% sell tax.'
    },
    {
      question: 'Q4: Will any tokens be burned?',
      answer: 'Yes! 10% of the total supply was burned at launch to create scarcity and value for holders.'
    },
    {
      question: 'Q5: Are there rewards for the community?',
      answer: 'Absolutely. Active and loyal members are eligible for airdrops, giveaways, and leaderboard contests.'
    },
    {
      question: 'Q6: Is this a long-term project?',
      answer: 'Yes. While BABYBUFF starts as a meme, we\'re building a strong, sustainable community with plans to grow over time.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#0a0a0f] to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            <span className="text-[#7FFF00]">FAQ</span>
          </h2>
          <div className="w-24 h-1 bg-[#7FFF00] mx-auto mb-8" />
          <p className="text-xl text-gray-400">
            Frequently Asked Questions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-xl border border-[#7FFF00]/20 overflow-hidden hover:border-[#7FFF00]/40 transition-all"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all hover:bg-[#7FFF00]/5"
              >
                <span className="text-white font-bold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-[#7FFF00] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="border-t border-[#7FFF00]/10 pt-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Have more questions? Join our{' '}
            <a
              href="https://t.me/babybuffchat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7FFF00] hover:underline font-bold"
            >
              Telegram community
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
