'use client'

import { motion } from 'framer-motion'
import { Heart, Moon, Music, Users } from 'lucide-react'

type TimelineItem = {
  time: string
  title: string
  desc: string
  icon: typeof Heart
  highlight: boolean
  align: 'left' | 'right'
}

export default function TimelineSection() {
  const timeline: TimelineItem[] = [
    {
      time: '14:00',
      title: '敬茶仪式',
      desc: '于酒店一楼客厅举行',
      icon: Heart,
      highlight: true,
      align: 'left',
    },
    {
      time: '16:00',
      title: '宾客签到',
      desc: '欢迎您的到来',
      icon: Users,
      highlight: false,
      align: 'right',
    },
    {
      time: '17:18',
      title: '婚礼仪式',
      desc: '仪式正式开始',
      icon: Heart,
      highlight: true,
      align: 'left',
    },
    {
      time: '18:18',
      title: '晚宴',
      desc: '一楼草坪晚宴',
      icon: Users,
      highlight: true,
      align: 'right',
    },
    {
      time: '20:00',
      title: 'After Party',
      desc: '派对时间',
      icon: Music,
      highlight: false,
      align: 'left',
    },
    {
      time: '22:00 - ♾️',
      title: 'DJ Time',
      desc: '音乐不停，欢乐继续',
      icon: Moon,
      highlight: true,
      align: 'right',
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
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wedding-apricot -translate-x-1/2" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-wedding-apricot" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                <div className="hidden md:flex items-center">
                  {item.align === 'left' ? (
                    <>
                      <div className="flex-1 pr-16 text-right">
                        <span className="text-lg font-medium text-wedding-gold whitespace-nowrap block leading-none">
                          {item.time}
                        </span>
                        <div className="mt-3 bg-wedding-cream rounded-xl p-4 w-full max-w-[360px] ml-auto text-left">
                          <h3 className="font-medium text-wedding-text">{item.title}</h3>
                          <p className="text-sm text-wedding-muted mt-1">{item.desc}</p>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-white rounded-full border-2 border-wedding-gold/40 flex items-center justify-center z-10 flex-shrink-0">
                        <item.icon className="w-5 h-5 text-wedding-gold" />
                      </div>
                      <div className="flex-1 pl-16" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-16" />
                      <div className="w-10 h-10 bg-white rounded-full border-2 border-wedding-gold/40 flex items-center justify-center z-10 flex-shrink-0">
                        <item.icon className="w-5 h-5 text-wedding-gold" />
                      </div>
                      <div className="flex-1 pl-16">
                        <span className="text-lg font-medium text-wedding-gold whitespace-nowrap block leading-none">
                          {item.time}
                        </span>
                        <div className="mt-3 bg-wedding-cream rounded-xl p-4 w-full max-w-[360px] text-left">
                          <h3 className="font-medium text-wedding-text">{item.title}</h3>
                          <p className="text-sm text-wedding-muted mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="md:hidden flex items-start gap-4 pl-2">
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-wedding-gold/40 flex items-center justify-center flex-shrink-0 z-10">
                    <item.icon className="w-4 h-4 text-wedding-gold" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-wedding-gold whitespace-nowrap block leading-none">
                      {item.time}
                    </span>
                    <div className="mt-2 bg-wedding-cream rounded-xl p-3">
                      <h3 className="font-medium text-wedding-text">{item.title}</h3>
                      <p className="text-xs text-wedding-muted mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
