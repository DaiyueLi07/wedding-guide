'use client'

import { motion } from 'framer-motion'
import { Camera, Clock, Heart, House, Phone, Sparkles, Users } from 'lucide-react'

export default function TipsSection() {
  const tips = [
    {
      icon: Users,
      title: '所有的宾客都是这场婚礼的伴郎/伴娘',
      desc: '感谢您的到来，与我们共同见证这份幸福',
    },
    {
      icon: Clock,
      title: '当日12:00以后方可进入婚礼场地',
      desc: '请合理安排您的到达时间',
    },
    {
      icon: Heart,
      title: '婚礼没有传统接亲环节',
      desc: '我们以更轻松的方式开始这一天',
    },
    {
      icon: Camera,
      title: '可自行决定是否参加14:00的敬茶仪式',
      desc: '有时间的宾客欢迎参加',
    },
    {
      icon: Sparkles,
      title: '强烈建议提早抵达',
      desc: '享受酒店与周边的美景，留下美好回忆',
    },
    {
      icon: Phone,
      title: '联系方式',
      desc: '代悦：13678421344；溟洋：15652908317',
    },
    {
      icon: House,
      title: '如有不周，敬请谅解',
      desc: '这是一场我们在工作地DIY的婚礼，从场地布置到流程设计，每一个细节都倾注了我们的心意。多数亲朋好友都远道而来，如有不周之处，还请多多包涵。',
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-wedding-gold text-sm tracking-widest mb-2">TIPS</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">温馨提示</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-wedding-cream rounded-xl p-5 hover:bg-wedding-apricot/20 transition-colors ${
                index === tips.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wedding-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-5 h-5 text-wedding-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-wedding-text mb-1">{tip.title}</h3>
                  <p className="text-sm text-wedding-muted">{tip.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
