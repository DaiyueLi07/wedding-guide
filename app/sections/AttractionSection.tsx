'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const MapButton = ({ address, label }: { address: string; label: string }) => {
  const amapUrl = `https://uri.amap.com/search?keyword=${encodeURIComponent(address)}`

  return (
    <a
      href={amapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-3 py-1.5 bg-wedding-gold/10 text-wedding-gold rounded-full text-xs hover:bg-wedding-gold/20 transition-colors"
    >
      <MapPin className="w-3 h-3" />
      {label}
    </a>
  )
}

export default function AttractionSection() {
  const attractions = [
    {
      name: '溪涌滨海栈道',
      desc: '栈道长约5km，出酒店即可进入，沿途欣赏山海美景',
      image: '/images/xichong-2.jpg',
      mapQuery: '溪涌滨海栈道',
    },
    {
      name: '观海平台云桥',
      desc: '出酒店左行可步行至观海平台云桥，欣赏沿途山海美景',
      image: '/images/guanhai.jpg',
      mapQuery: '溪涌观海平台',
    },
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
          <p className="text-wedding-gold text-sm tracking-widest mb-2">ATTRACTIONS</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">附近景点</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-wedding-text mb-2">
                  {attraction.name}
                </h3>
                <p className="text-sm text-wedding-muted mb-4">{attraction.desc}</p>
                <MapButton address={attraction.mapQuery} label="查看地图" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
