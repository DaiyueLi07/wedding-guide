'use client'

import { motion } from 'framer-motion'

export default function DressCodeSection() {
  const colors = [
    { name: '香槟色', hex: '#FAF0E6' },
    { name: '卡其色', hex: '#E8E0D0' },
    { name: '淡蓝色', hex: '#E0E8F0' },
    { name: '淡黄色', hex: '#F8F5E0' },
    { name: '淡绿色', hex: '#E8F0E8' },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-wedding-cream">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-wedding-gold text-sm tracking-widest mb-2">DRESS CODE</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">着装建议</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 mb-8 text-center"
        >
          <h3 className="text-xl font-medium text-wedding-text mb-3">浅色无印花套装或裙子</h3>
          <p className="text-wedding-muted">
            为了让婚礼现场更加和谐美观，建议您选择浅色系的纯色服装，避免过于鲜艳、深色或带有印花的服饰。
            男士可选择浅色西装或衬衫，女士可选择浅色连衣裙或套装。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <h3 className="text-center text-lg font-medium text-wedding-text mb-6">推荐色系</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {colors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-sm hover:scale-110 transition-transform border border-gray-100"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="mt-2 text-sm text-wedding-text">{color.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl p-6"
        >
          <h3 className="text-center text-lg font-medium text-wedding-text mb-6">着装参考</h3>
          <div className="rounded-2xl overflow-hidden border border-wedding-apricot/40 bg-wedding-cream mb-6">
            <img
              src="/images/dress-code-reference.png"
              alt="着装参考图"
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-wedding-cream rounded-xl p-4">
              <p className="font-medium text-wedding-text mb-2">女士可参考</p>
              <p className="text-sm text-wedding-muted">
                浅蓝、米白、淡黄、淡绿等纯色或低饱和度连衣裙、长裙、小礼服、套装都合适，尽量避免大面积印花和过深颜色。
              </p>
            </div>
            <div className="bg-wedding-cream rounded-xl p-4">
              <p className="font-medium text-wedding-text mb-2">男士可参考</p>
              <p className="text-sm text-wedding-muted">
                浅色衬衫、薄西装、针织搭肩、浅色长裤或整洁的度假风穿搭都可以，以清爽、轻松、不过分正式为主。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
