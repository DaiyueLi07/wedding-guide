'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Hotel, Info } from 'lucide-react'

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

interface Spot {
  name: string
  desc: string
  image: string
  hotel: string
  hotelDesc: string
  food?: string
  foodAddress?: string
}

export default function TravelGuideSection() {
  const [activeTab, setActiveTab] = useState<'shenzhen' | 'hongkong'>('shenzhen')

  const shenzhenSpots: Spot[] = [
    {
      name: '深圳天文台',
      desc: '位于大鹏半岛，拥有绝美海景栈道，是观海和拍照的绝佳地点',
      image: '/images/tianwentai.png',
      hotel: '推荐住宿：大鹏新区',
      hotelDesc: '距离天文台较近，方便游玩',
    },
    {
      name: '南油服装批发市场',
      desc: '深圳最大的服装批发市场，购物天堂，款式多价格实惠',
      image: '/images/nanyou.jpg',
      hotel: '推荐住宿：南山区',
      hotelDesc: '距离南油近，交通便利',
      food: '美食推荐：马春花贵州烙锅',
      foodAddress: '地址：南山区南油路1083号',
    },
    {
      name: '莲花山公园',
      desc: '深圳市中心的绿色氧吧，可俯瞰城市全景',
      image: '/images/lianhuashan.jpg',
      hotel: '推荐住宿：福田区',
      hotelDesc: '市中心位置，交通便利',
    },
    {
      name: '深圳湾公园',
      desc: '沿海而建，可远眺香港，是观鸟和散步的好去处',
      image: '/images/shenzhen-bay.jpg',
      hotel: '推荐住宿：深圳湾口岸附近',
      hotelDesc: '方便前往香港，海景优美',
    },
  ]

  const hongkongSpots: Spot[] = [
    {
      name: '维多利亚港',
      desc: '世界三大夜景之一，香港标志性景观',
      image: '/images/victoria-harbor.jpg',
      hotel: '推荐住宿：莲塘（深圳）',
      hotelDesc: '经莲塘口岸前往香港，交通便利',
    },
    {
      name: '尖沙咀',
      desc: '购物天堂，汇集各大品牌和国际美食',
      image: '/images/tsim-sha-tsui.jpg',
      hotel: '推荐住宿：莲塘（深圳）',
      hotelDesc: '经莲塘口岸前往香港，地铁直达尖沙咀',
    },
  ]

  const spots = activeTab === 'shenzhen' ? shenzhenSpots : hongkongSpots

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
          <p className="text-wedding-gold text-sm tracking-widest mb-2">TRAVEL GUIDE</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">提前一天到达游玩推荐</h2>
          <p className="text-wedding-muted mt-4">
            如果您提前一天到达，不妨去这些地方逛逛
          </p>
        </motion.div>

        {/* Free Accommodation Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-wedding-gold/10 rounded-2xl p-4 mb-8 flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-wedding-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-wedding-text/80">
            <span className="font-medium">温馨提示：</span>我们会为外地的朋友包一晚周日的住宿
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setActiveTab('shenzhen')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'shenzhen'
                ? 'bg-wedding-gold text-white'
                : 'bg-wedding-cream text-wedding-text hover:bg-wedding-apricot/30'
            }`}
          >
            深圳
          </button>
          <button
            onClick={() => setActiveTab('hongkong')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'hongkong'
                ? 'bg-wedding-gold text-white'
                : 'bg-wedding-cream text-wedding-text hover:bg-wedding-apricot/30'
            }`}
          >
            香港
          </button>
        </motion.div>

        {/* Spots Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {spots.map((spot, index) => (
            <motion.div
              key={spot.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-wedding-cream rounded-2xl overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-wedding-text mb-2">
                  {spot.name}
                </h3>
                <p className="text-sm text-wedding-muted mb-3">
                  {spot.desc}
                </p>

                {/* Food Recommendation for Nanyou */}
                {spot.food && (
                  <div className="bg-white/70 rounded-lg p-3 mb-3">
                    <p className="text-sm font-medium text-wedding-gold">{spot.food}</p>
                    <p className="text-xs text-wedding-muted">{spot.foodAddress}</p>
                  </div>
                )}

                {/* Hotel Recommendation */}
                <div className="bg-white/50 rounded-lg p-3 mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Hotel className="w-4 h-4 text-wedding-gold" />
                    <span className="text-sm font-medium text-wedding-text">{spot.hotel}</span>
                  </div>
                  <p className="text-xs text-wedding-muted ml-6">{spot.hotelDesc}</p>
                </div>

                <MapButton address={spot.name} label="查看地图" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
