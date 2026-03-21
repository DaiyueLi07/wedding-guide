'use client'

import { motion } from 'framer-motion'
import { Bath, Glasses, Utensils, Waves } from 'lucide-react'

export default function HotelSection() {
  const facilities = [
    { icon: Waves, label: '泳池', desc: '住宿区设施皆可使用' },
    { icon: Bath, label: '泡池', desc: '放松身心的好去处' },
    { icon: Utensils, label: '餐厅', desc: '提供精美餐饮服务' },
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
          <p className="text-wedding-gold text-sm tracking-widest mb-2">HOTEL</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">关于酒店</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <img
              src="/images/hotel-3.jpg"
              alt="松善·SENSEA山海度假酒店"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white text-xl font-medium">松善·SENSEA山海度假酒店</h3>
              <p className="text-white/80 text-sm">溪涌滨海度假区</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="bg-wedding-cream rounded-2xl p-4">
            <div className="aspect-video rounded-xl overflow-hidden bg-black/5">
              <video controls className="w-full h-full" poster="/images/hotel-1.jpg">
                <source src="/images/hotel-video.mp4" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-wedding-cream rounded-2xl p-6 mb-8"
        >
          <p className="text-wedding-text/80 leading-relaxed">
            酒店分为三个区域，包括<span className="font-medium text-wedding-gold">住宿区</span>、
            <span className="font-medium text-wedding-gold">餐厅区</span>、
            <span className="font-medium text-wedding-gold">沙滩区</span>。
            住宿区的所有设施皆可使用，包括泳池与泡池。
            房间将作为未入住宾客的换洗间；具体房间请持续关注该网站。
          </p>
          <p className="text-wedding-text/80 leading-relaxed mt-4">
            婚礼当天除工作人员外，住宿区仅有本场婚礼的宾客；
            餐厅与沙滩区域为外来游客与宾客共同使用的空间，可前往拍照打卡。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {facilities.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className="bg-wedding-cream rounded-xl p-4 text-center hover:bg-wedding-apricot/30 transition-colors"
            >
              <item.icon className="w-8 h-8 text-wedding-gold mx-auto mb-2" />
              <p className="font-medium text-wedding-text">{item.label}</p>
              <p className="text-xs text-wedding-muted mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-wedding-apricot/20 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-wedding-gold rounded-full flex items-center justify-center">
              <Glasses className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-medium text-wedding-text">温馨提示</h3>
          </div>
          <div className="space-y-2 text-wedding-text/80">
            <p>• 建议大家准备泳衣，可以游泳、泡池泡澡</p>
            <p>• 请带上黑色墨镜，尤其是男生</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
