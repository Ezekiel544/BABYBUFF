import { motion } from 'motion/react';
import { User, Briefcase, Users, Shield, Palette } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      role: 'Founder ',
      name: 'Babybuff dev',
      description: 'Visionary behind the project, builder of the code, and brain behind $BABYBUFF. Focused on long-term sustainability and innovation.',
      icon: <User className="w-8 h-8" />,
      color: 'from-[#7FFF00] to-green-400'
    },
    {
      role: 'Project Manager',
      name: 'Nelson D Enthusiast',
      social: 'Tg: @magu_wire | X: @NelsonAkinwand1',
      description: 'The true backbone of this project handling everything from content creation to strategic planning, community moderation, and promotion. Every piece of growth, engagement, and visibility has his effort behind it. A core force behind the success so far.',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      role: 'Community Manager',
      name: 'Nimsky',
      social: 'Tg: @NimskyCrypt',
      description: 'The voice of the people. Organizes events, keeps the vibe strong, and ensures everyone stays engaged.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-400 to-pink-400'
    }
  ];

  const moderators = [
    { name: 'Rašh', handle: '@rash7ofweb3' },
    { name: 'QUDRA', handle: '@officialsirjhay1' },
    { name: 'Clinton', handle: '@Clintonways001' }
  ];

  const designers = [
    'D.Malachovičius',
    'Nelson D Enthusiast'
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-black to-[#0a0a0f]">
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
            MEET THE <span className="text-[#7FFF00]">TEAM</span>
          </h2>
          <div className="w-24 h-1 bg-[#7FFF00] mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The amazing people making BABYBUFF a reality
          </p>
        </motion.div>

        {/* Core Team */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-2xl p-8 border border-[#7FFF00]/20 hover:border-[#7FFF00]/50 transition-all hover:transform hover:scale-105 h-full"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${member.color} mb-6`}>
                <div className="text-white">
                  {member.icon}
                </div>
              </div>

              {/* Role */}
              <div className="text-[#7FFF00] font-black text-lg mb-2">{member.role}</div>
              
              {/* Name */}
              <h3 className="text-2xl font-black text-white mb-2">{member.name}</h3>

              {/* Social */}
              {member.social && (
                <p className="text-sm text-gray-500 mb-4 font-mono">{member.social}</p>
              )}

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Moderators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-2xl p-8 border border-[#7FFF00]/20 mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black text-white">Moderator Team</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Trusted guardians of the chat. They help maintain order, answer questions, and guide new members.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {moderators.map((mod, index) => (
              <div
                key={index}
                className="bg-[#0a0a0f] rounded-xl p-4 border border-orange-500/20"
              >
                <p className="text-white font-bold mb-1">{mod.name}</p>
                <p className="text-sm text-gray-500 font-mono">{mod.handle}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Design Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-2xl p-8 border border-[#7FFF00]/20"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black text-white">Design and Content Team</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Meme masters and graphic wizards — they bring the project to life with content, visuals, and hype.
          </p>
          <div className="flex flex-wrap gap-3">
            {designers.map((designer, index) => (
              <div
                key={index}
                className="bg-[#0a0a0f] rounded-lg px-4 py-2 border border-pink-500/20"
              >
                <p className="text-white font-bold">{designer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
