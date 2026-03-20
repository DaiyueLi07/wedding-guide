'use client'

import { motion } from 'framer-motion'
import { MapPin, Train, Plane, Car } from 'lucide-react'

const MapButton = ({ address, label }: { address: string; label: string }) => {
  const amapUrl = `https://uri.amap.com/search?keyword=${encodeURIComponent(address)}`

  return (
    <a
      href={amapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-wedding-gold text-white rounded-full text-sm hover:bg-wedding-gold/90 transition-colors"
    >
      <MapPin className="w-4 h-4" />
      {label}
    </a>
  )
}

export default function TransportSection() {
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
          <p className="text-wedding-gold text-sm tracking-widest mb-2">TRANSPORT</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">关于交通</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 深圳市内 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-wedding-apricot rounded-full flex items-center justify-center">
                <Train className="w-5 h-5 text-wedding-gold" />
              </div>
              <h3 className="text-xl font-medium text-wedding-text">深圳市内</h3>
            </div>
            <div className="space-y-3 text-wedding-text/80">
              <p>地铁2/8号线溪涌站A口出站，步行约10分钟</p>
              <p>驾车距福田约45分钟车程</p>
              <div className="pt-2">
                <MapButton address="松善山海度假酒店" label="导航至酒店" />
              </div>
            </div>
          </motion.div>

          {/* 深圳市外 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-wedding-apricot rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5 text-wedding-gold" />
              </div>
              <h3 className="text-xl font-medium text-wedding-text">深圳市外</h3>
            </div>
            <div className="space-y-3 text-wedding-text/80 text-sm">
              <div className="flex items-start gap-2">
                <Train className="w-4 h-4 mt-0.5 text-wedding-gold" />
                <div>
                  <p className="font-medium">高铁</p>
                  <p>请至深圳坪山站，距酒店约35分钟车程</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Plane className="w-4 h-4 mt-0.5 text-wedding-gold" />
                <div>
                  <p className="font-medium">飞机</p>
                  <p>深圳宝安机场（约1小时10分钟）</p>
                  <p>惠州平潭机场（约1小时5分钟）</p>
                </div>
              </div>
              <p className="text-xs text-wedding-muted pt-2">
                * 市外前往请提前联系新郎或新娘，我们将安排车辆接送
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
