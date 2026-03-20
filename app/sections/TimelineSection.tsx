'use client'

import { motion } from 'framer-motion'
import { Clock, Heart, Camera, Users, Moon } from 'lucide-react'

export default function TimelineSection() {
  const timeline = [
    {
      time: '12:00',
      title: '宾客入场',
      desc: '宾客可进入婚礼场地',
      icon: Users,
      highlight: false,
    },
    {
      time: '14:00',
      title: '敬茶仪式',
      desc: '于酒店一楼客厅举行',
      icon: Heart,
      highlight: true,
    },
    {
      time: '14:30',
      title: 'First Look',
      desc: '新人初见 + 敬茶',
      icon: Heart,
      highlight: false,
    },
    {
      time: '15:00',
      title: '彩排',
      desc: '仪式流程彩排',
      icon: Users,
      highlight: false,
    },
    {
      time: '16:00',
      title: '迎宾拍照',
      desc: '与宾客合影留念',
      icon: Camera,
      highlight: false,
    },
    {
      time: '17:00',
      title: '宾客就座',
      desc: '暖场、主持开场',
      icon: Users,
      highlight: false,
    },
    {
      time: '17:18',
      title: '婚礼仪式',
      desc: '仪式正式开始',
      icon: Heart,
      highlight: true,
    },
    {
      time: '17:48',
      title: '合影转场',
      desc: '仪式后合影，转场晚宴',
      icon: Camera,
      highlight: false,
    },
    {
      time: '18:18',
      title: '晚宴开始',
      desc: '四楼室外平台晚宴',
      icon: Users,
      highlight: true,
    },
    {
      time: '20:00',
      title: 'After Party',
      desc: '一楼草坪派对时间',
      icon: Moon,
      highlight: true,
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
          <p className="text-wedding-gold text-sm tracking-widest mb-2">SCHEDULE</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">婚礼当天流程</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-wedding-apricot md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Time - Mobile */}
                <div className="md:hidden w-16 flex-shrink-0">
                  <span className={`text-sm font-medium ${
                    item.highlight ? 'text-wedding-gold' : 'text-wedding-muted'
                  }`}>
                    {item.time}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  {/* Time - Desktop */}
                  <div className={`hidden md:block mb-1 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <span className={`text-lg font-medium ${
                      item.highlight ? 'text-wedding-gold' : 'text-wedding-muted'
                    }`}>
                      {item.time}
                    </span>
                  </div>

                  <div className={`bg-wedding-cream rounded-xl p-4 inline-block ${
                    item.highlight ? 'ring-2 ring-wedding-gold/30' : ''
                  }`}>
                    <h3 className="font-medium text-wedding-text">{item.title}</h3>
                    <p className="text-sm text-wedding-muted mt-1">{item.desc}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full border-2 border-wedding-apricot flex items-center justify-center md:-translate-x-1/2 z-10">
                  <item.icon className={`w-4 h-4 ${
                    item.highlight ? 'text-wedding-gold' : 'text-wedding-muted'
                  }`} />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
