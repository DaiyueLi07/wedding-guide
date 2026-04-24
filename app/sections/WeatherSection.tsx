'use client'

import { motion } from 'framer-motion'
import { CalendarDays, Cloud, CloudSun, Shirt, Thermometer } from 'lucide-react'

export default function WeatherSection() {
  const weatherCards = [
    { icon: CloudSun, label: '天气', value: '多云到晴，白天有薄雾' },
    { icon: Thermometer, label: '气温', value: '20-31°C' },
    { icon: Cloud, label: '湿度', value: '65-88%' },
    { icon: Shirt, label: '体感', value: '23-34°C（偏闷热）' },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-wedding-cream">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12"
        >
          <p className="text-wedding-gold text-sm tracking-widest mb-2">WEATHER</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">关于天气</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="bg-white rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-wedding-cream flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-wedding-gold" />
            </div>
            <h3 className="text-lg md:text-xl font-medium text-wedding-text">4月26日天气预报</h3>
          </div>

          <p className="text-sm md:text-base text-wedding-muted mb-6">
            目标日期：2026年4月26日（深圳大鹏）。以下为截至4月24日的预测，后续仍可能小幅波动：
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {weatherCards.map((item) => (
              <div key={item.label} className="bg-wedding-cream rounded-xl p-4 text-center">
                <item.icon className="w-5 h-5 text-wedding-gold mx-auto mb-2" />
                <p className="text-xs md:text-sm text-wedding-muted mb-1">{item.label}</p>
                <p className="text-sm md:text-base font-semibold text-wedding-text">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 mb-6"
        >
          <h3 className="text-lg md:text-xl font-medium text-wedding-text mb-4">穿衣建议</h3>
          <ul className="space-y-2 text-wedding-muted text-xs md:text-sm leading-relaxed">
            <li>• 建议穿着轻薄透气的春夏季服装，如衬衫、短袖、连衣裙等</li>
            <li>• 白天偏热、日照较强，建议遮阳帽和防晒用品随身携带</li>
            <li>• 海边早晚仍有温差，建议携带一件薄外套</li>
            <li>• 婚礼场地在海边，建议穿舒适的鞋子，方便在沙滩行走</li>
            <li>• 沿海天气变化快，建议随身备一把轻便折叠伞</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="rounded-2xl bg-wedding-apricot/20 px-6 py-4 flex items-center gap-3"
        >
          <CalendarDays className="w-5 h-5 text-wedding-gold flex-shrink-0" />
          <p className="text-wedding-muted text-sm md:text-base">
            温馨提示：我们会在婚礼前1天再做一次天气确认，请以临近预报为准
          </p>
        </motion.div>
      </div>
    </section>
  )
}
