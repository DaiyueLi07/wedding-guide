'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function FooterSection() {
  return (
    <footer className="py-12 px-4 md:px-8 bg-wedding-text text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heart className="w-8 h-8 text-wedding-gold mx-auto mb-4" />
          <h3 className="text-2xl font-serif mb-2">感谢您见证我们的幸福时刻</h3>
          <p className="text-white/60 text-sm">
            期待与您相见，共同度过这美好的一天
          </p>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs">
              Wedding Guide · 2026
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
