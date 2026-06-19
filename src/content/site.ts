export const navigation = [
  { label: '现在', href: '#now' },
  { label: '日常', href: '#daily' },
  { label: '关于', href: '#story' },
  { label: '门店', href: '#stores' },
  { label: '去坐坐', href: '#visit' },
] as const;

export const social = {
  douyin:
    'https://www.douyin.com/user/MS4wLjABAAAArd6AAm6eCrn5dAxFVryaIm7kbcafBz19Xd8iOWI_yIw',
  douyinId: '86535049653',
} as const;

export const stores = [
  {
    name: '河下店',
    pace: '慢',
    description: '旧街转角，木门半开。把脚步放慢一点，进来坐坐。',
    mapUrl: 'https://uri.amap.com/search?keyword=淮安铁炉咖啡河下店',
    image: 'storeLane',
  },
  {
    name: '海创空间店',
    pace: '轻快',
    description: '新城的光落进杯里，也留下一段安静的时间。',
    mapUrl: 'https://uri.amap.com/search?keyword=淮安铁炉咖啡海创空间店',
    image: 'skyArchitecture',
  },
] as const;

export const dailyMoments = [
  {
    time: '08:30',
    title: '点火',
    text: '第一杯开始，机器醒来，屋里有了咖啡香。',
    image: 'espressoMachine',
  },
  {
    time: '13:20',
    title: '窗边',
    text: '阳光慢下来，花开着，也有人坐了一会儿。',
    image: 'coffeeFlower',
  },
  {
    time: '18:10',
    title: '收杯',
    text: '最后一杯不催促，把今天轻轻收好。',
    image: 'brandNotebook',
  },
] as const;

export const brandCopy = {
  heroTitle: '进来坐坐',
  heroBody: '一扇旧木门，打开的是一段可以停下来的时间。',
  storyTitle: '一扇门，两种城市呼吸',
  storyBody: '咖啡不是赶路的燃料，是一天里可以停下来的地方。',
  fieldNote: '我们把旧街的慢，带进新城的光。',
  finalTitle: '把今天留一会儿',
} as const;
