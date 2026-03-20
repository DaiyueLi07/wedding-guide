'use client'

import { motion } from 'framer-motion'

export default function DressCodeSection() {
  const colors = [
    { name: '香槟色', hex: '#F5E6D3', textColor: '#4A4A4A' },
    { name: '卡其色', hex: '#D4C4A8', textColor: '#4A4A4A' },
    { name: '淡蓝色', hex: '#C5D5E4', textColor: '#4A4A4A' },
    { name: '淡黄色', hex: '#F5E6B8', textColor: '#4A4A4A' },
    { name: '淡绿色', hex: '#D4E4D4', textColor: '#4A4A4A' },
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

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="rounded-2xl overflow-hidden shadow-sm bg-white p-4">
            <img
              src="/images/dress-code-new.png"
              alt="着装建议"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Dress Code Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 mb-8 text-center"
        >
          <h3 className="text-xl font-medium text-wedding-text mb-3">
            浅色无印花套装或裙子
          </h3>
          <p className="text-wedding-muted">
            为了让婚礼现场更加和谐美观，建议您选择浅色系的纯色服装，避免过于鲜艳、深色或带有印花的服饰。
            男士可选择浅色西装或衬衫，女士可选择浅色连衣裙或套装。
          </p>
        </motion.div>

        {/* Color Palette */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-center text-lg font-medium text-wedding-text mb-6">
            推荐色系
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
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
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md hover:scale-110 transition-transform"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="mt-2 text-sm text-wedding-text">{color.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
