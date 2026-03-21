'use client'

import { motion } from 'framer-motion'

export default function FooterSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.06, opacity: 0.92 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <motion.img
          src="/images/footer-couple-6.jpg"
          alt="新人照片"
          className="w-full h-full object-cover object-[46%_80%] md:object-[44%_72%]"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-5xl md:text-7xl font-poetic text-shadow-soft leading-[1.8] md:leading-[1.95] mb-6"
        >
          <span className="block">好久不见</span>
          <span className="block">婚礼见</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-6 h-px w-28 md:w-40 bg-white/55"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-white/80 text-xs md:text-sm leading-7 md:leading-8"
        >
          李代悦 & 杨溟洋
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 text-center">
        <p className="text-white/45 text-xs tracking-[0.18em]">© Wedding Guide · 2026 · by Davida</p>
      </div>
    </section>
  )
}
