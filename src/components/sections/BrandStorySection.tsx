import { PhotoRail } from '../interactions/PhotoRail';
import { brandCopy } from '../../content/site';
import { media } from '../../content/media';

export function BrandStorySection() {
  const items = [
    { ...media.storeSign, caption: '木门旁，字在藤蔓里。' },
    { ...media.brandNotebook, caption: '写下一杯咖啡的时间。' },
    { ...media.coffeeWindow, caption: '窗边，光慢下来。' },
    { ...media.coffeeFlower, caption: '花开着，咖啡也刚好。' },
  ];

  return (
    <section className="story-section section" id="story" aria-labelledby="story-title">
      <div className="section-heading story-heading">
        <span className="section-number">01 / 品牌</span>
        <h2 id="story-title">{brandCopy.storyTitle}</h2>
        <p>{brandCopy.storyBody}</p>
      </div>
      <div className="split-characters" aria-hidden="true">
        <span>铁</span><span>炉</span><span>咖</span><span>啡</span>
      </div>
      <PhotoRail items={items} />
    </section>
  );
}
