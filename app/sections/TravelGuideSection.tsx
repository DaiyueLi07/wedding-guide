'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Car, Hotel, Info, MapPin } from 'lucide-react'

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
  highlight: string
  hotel: string
  hotelDesc: string
  distance?: string
  food?: string
  foodDesc?: string
}

interface FoodSpot {
  name: string
  desc: string
  mapQuery: string
}

export default function TravelGuideSection() {
  const [activeTab, setActiveTab] = useState<'shenzhen' | 'hongkong'>('shenzhen')

  const shenzhenSpots: Spot[] = [
    {
      name: '深圳天文台',
      desc: '大鹏半岛上的海景栈道与观景平台，风景非常出片',
      image: '/images/tianwentai-new.jpg',
      highlight: '适合上午或傍晚前往，沿线海天视野开阔，是深圳东部热门打卡点',
      hotel: '推荐住宿：大鹏新区',
      hotelDesc: '靠近东部海岸线，往返景点更方便',
    },
    {
      name: '杨梅坑',
      desc: '深圳东部经典海岸目的地，适合骑行、看海和拍照',
      image: '/images/yangmeikeng.jpg',
      highlight: '鹿嘴山庄沿线景色很美，喜欢海边慢节奏行程的朋友会很适合',
      hotel: '推荐住宿：大鹏新区',
      hotelDesc: '离东部海岸景点集中区更近',
    },
    {
      name: '梅沙尖',
      desc: '深圳第三高峰，海拔753米，360°山海观景台',
      image: '/images/meishajian.jpg',
      highlight: '适合喜欢徒步的朋友，可俯瞰东部华侨城、三洲田水库及大鹏湾的绝美景色',
      hotel: '推荐住宿：盐田区/大鹏新区',
      hotelDesc: '距离梅沙尖较近，方便早起登山',
    },
    {
      name: '云海广场',
      desc: '海拔380米的半山建筑，纯白「太空船」造型观景台',
      image: '/images/yunhai-square.jpg',
      highlight: '可以远眺盐田港，建筑造型独特如游艇，三层设计包含观景平台和书咖，是拍照打卡的绝佳地点',
      hotel: '推荐住宿：盐田区',
      hotelDesc: '靠近云海广场，方便观赏日出日落',
    },
    {
      name: '大华兴寺',
      desc: '深圳海拔最高的寺庙，位于东部华侨城',
      image: '/images/dahuaxing-temple.jpg',
      highlight: '寺内有壮观的四面观音金像，登顶可远观云海谷、茶溪谷和大峡谷的绝美景色，据说求姻缘、事业、学业都很灵验',
      hotel: '推荐住宿：盐田区/东部华侨城',
      hotelDesc: '靠近大华兴寺，可体验禅意住宿',
    },
    {
      name: '莲花山公园',
      desc: '深圳市中心的绿色氧吧，可俯瞰城市全景',
      image: '/images/lianhuashan-v2.jpg',
      highlight: '在山顶可以眺望深圳夜景和灯光秀，感受这座城市的繁华与活力',
      hotel: '推荐住宿：福田区',
      hotelDesc: '市中心位置，交通便利',
      food: '美食推荐：润园四季椰子鸡',
      foodDesc: '深圳知名椰子鸡连锁品牌，福田区有多家分店',
    },
    {
      name: '深圳湾公园',
      desc: '沿海而建，可远眺香港，是观鸟和散步的好去处',
      image: '/images/shenzhen-bay.jpg',
      highlight: '在这里可以感受深圳的海滨风光，远眺香港，是放松身心的好地方',
      hotel: '推荐住宿：深圳湾口岸附近',
      hotelDesc: '深圳著名景点',
      food: '美食推荐：润园四季椰子鸡',
      foodDesc: '深圳知名椰子鸡连锁品牌，南山区有多家分店',
    },
    {
      name: '南油服装批发市场',
      desc: '深圳最大的服装批发市场，购物天堂',
      image: '/images/nanyou.jpg',
      highlight: '款式多、价格实惠，是购买衣服的好去处',
      hotel: '推荐住宿：南山区',
      hotelDesc: '距离南油近，交通便利',
      distance: '距酒店约45公里，驾车约55分钟',
      food: '美食推荐：马春花贵州烙锅',
      foodDesc: '地址：南山区南油路1083号',
    },
  ]

  const hongkongSpots: Spot[] = [
    {
      name: '维多利亚港',
      desc: '世界三大夜景之一，香港标志性景观',
      image: '/images/victoria-harbor.jpg',
      highlight: '夜幕降临后可欣赏维港两岸天际线和灯光秀，是香港最经典的城市名片。',
      hotel: '推荐住宿：莲塘（深圳）',
      hotelDesc: '经莲塘口岸前往香港，交通便利',
    },
    {
      name: '尖沙咀',
      desc: '购物天堂，汇集各大品牌和国际美食',
      image: '/images/tsim-sha-tsui.jpg',
      highlight: '海港城、星光大道和维港沿线步道都在附近，适合一整天慢慢逛。',
      hotel: '推荐住宿：莲塘（深圳）',
      hotelDesc: '经莲塘口岸前往香港，地铁直达尖沙咀',
    },
  ]

  const spots = activeTab === 'shenzhen' ? shenzhenSpots : hongkongSpots

  const liantangFoods: FoodSpot[] = [
    {
      name: '莲塘荆州大赛麻辣烫',
      desc: 'Omakase风格的麻辣烫，别具一格',
      mapQuery: '莲塘荆州大赛麻辣烫',
    },
    {
      name: '味宝园牛杂',
      desc: '20年老店，正宗牛杂风味',
      mapQuery: '味宝园牛杂 莲塘',
    },
    {
      name: '秋记大排档',
      desc: '正宗潮汕菜，味道地道',
      mapQuery: '秋记大排档 莲塘',
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
          <p className="text-wedding-gold text-sm tracking-widest mb-2">TRAVEL GUIDE</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">提前一天到达游玩推荐</h2>
          <p className="text-wedding-muted mt-4">如果您提前一天到达，不妨去这些地方逛逛</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-wedding-gold/10 rounded-2xl p-4 mb-8 flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-wedding-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-wedding-text/80">
            <span className="font-medium">温馨提示：</span>我们会为外地的朋友包一晚周日（26日）的住宿哦
          </p>
        </motion.div>

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
                <h3 className="text-lg font-medium text-wedding-text mb-2">{spot.name}</h3>
                <p className="text-sm text-wedding-muted mb-2">{spot.desc}</p>
                <p className="text-sm text-wedding-gold mb-3">{spot.highlight}</p>

                {spot.food && (
                  <div className="bg-white/70 rounded-lg p-3 mb-3">
                    <p className="text-sm font-medium text-wedding-gold">{spot.food}</p>
                    <p className="text-xs text-wedding-muted">{spot.foodDesc}</p>
                  </div>
                )}

                {spot.distance && (
                  <div className="bg-white/70 rounded-lg p-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-wedding-gold" />
                      <p className="text-sm text-wedding-text/80">{spot.distance}</p>
                    </div>
                  </div>
                )}

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

        {activeTab === 'hongkong' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="mt-8 bg-wedding-cream rounded-2xl p-6"
          >
            <h3 className="text-2xl font-medium text-wedding-text mb-4">莲塘美食推荐</h3>
            <p className="text-wedding-muted mb-5">如果您选择住在莲塘，以下美食不容错过：</p>
            <div className="space-y-4">
              {liantangFoods.map((food) => (
                <div key={food.name} className="bg-white rounded-xl p-5">
                  <p className="text-xl font-medium text-wedding-text mb-1">{food.name}</p>
                  <p className="text-wedding-muted mb-2">{food.desc}</p>
                  <MapButton address={food.mapQuery} label="查看地图" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
