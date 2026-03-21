'use client'

import { motion } from 'framer-motion'

export default function FoodSection() {
  const foodCategories = [
    {
      name: '早茶',
      items: ['虾饺', '烧卖', '凤爪', '肠粉'],
      desc: '广东人最爱的早茶文化，精致美味的点心',
      image: '/images/dimsum.jpg',
      color: 'bg-wedding-blush',
    },
    {
      name: '粤菜',
      items: ['白切鸡', '烧鹅', '叉烧'],
      desc: '正宗粤菜，清淡鲜美，讲究原汁原味',
      image: '/images/cantonese-cuisine.jpg',
      color: 'bg-wedding-apricot/30',
    },
    {
      name: '甜品',
      items: ['双皮奶', '姜撞奶', '糖水'],
      desc: '广东特色甜品，甜而不腻，口感细腻',
      image: '/images/dessert.jpg',
      color: 'bg-wedding-yellow',
    },
  ]

  const specialties = [
    {
      name: '桑拿鸡',
      desc: '顺德名菜，鸡肉在蒸汽中慢慢蒸熟，鲜嫩多汁',
      image: '/images/saunaj.jpg',
    },
    {
      name: '五指毛桃鸡',
      desc: '客家特色，用五指毛桃根炖煮，香气独特',
      image: '/images/wuzhimaotao.jpg',
    },
    {
      name: '窑鸡',
      desc: '传统做法，用锡纸包裹后在土窑中烤制，皮脆肉嫩',
      image: '/images/yaoji.jpg',
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
          <p className="text-wedding-gold text-sm tracking-widest mb-2">CANTONESE CUISINE</p>
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-text">广东美食推荐</h2>
          <p className="text-wedding-muted mt-4">来广东，怎能错过这些地道美食</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {foodCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className={`p-5 ${category.color}`}>
                <h3 className="text-xl font-medium text-wedding-text mb-2">{category.name}</h3>
                <p className="text-sm text-wedding-muted mb-3">{category.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white/70 rounded-full text-xs text-wedding-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8"
        >
          <h3 className="text-center text-xl font-medium text-wedding-text mb-6">广东特色美食</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specialties.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 + index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-wedding-text mb-1">{item.name}</h4>
                  <p className="text-sm text-wedding-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-wedding-muted">
            还有牛杂、鱼蛋、鸡蛋仔等街头小吃，以及新鲜的海鲜等着您来品尝
          </p>
        </motion.div>
      </div>
    </section>
  )
}
