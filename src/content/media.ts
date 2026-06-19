const image = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;

export const media = {
  logo: {
    src: image('logo-official.jpg'),
    alt: '铁炉咖啡官方 Logo',
  },
  heroDoor: {
    src: image('hero-door.jpg'),
    alt: '铁炉咖啡木门与院落入口',
  },
  coffeeFlower: {
    src: image('coffee-flower.jpg'),
    alt: '花枝旁的一杯热咖啡',
  },
  brandNotebook: {
    src: image('brand-notebook.jpg'),
    alt: '写有铁炉咖啡字样的笔记本与咖啡杯',
  },
  coffeeWindow: {
    src: image('coffee-window.jpg'),
    alt: '木窗边的铁炉咖啡外带杯',
  },
  storeLane: {
    src: image('store-lane.jpg'),
    alt: '河下古镇石板路与铁炉咖啡门店',
  },
  storeSign: {
    src: image('store-sign.jpg'),
    alt: '木门旁的铁炉咖啡招牌',
  },
  icedLatte: {
    src: image('iced-latte.jpg'),
    alt: '铁炉咖啡冰拿铁',
  },
  espressoMachine: {
    src: image('espresso-machine.jpg'),
    alt: '正在工作的意式咖啡机',
  },
  skyArchitecture: {
    src: image('sky-architecture.jpg'),
    alt: '海创空间店的白墙、楼梯与蓝天',
  },
} as const;

export type MediaKey = keyof typeof media;
