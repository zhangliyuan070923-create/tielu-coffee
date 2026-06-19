import { type CSSProperties, useState } from 'react';
import { media } from '../../content/media';
import { TemperatureSlider } from '../interactions/TemperatureSlider';

export function CityTemperatureSection() {
  const [mix, setMix] = useState(28);

  return (
    <section
      className="city-section section"
      style={{ '--city-mix': `${mix}%` } as CSSProperties}
      aria-label="两种城市呼吸"
    >
      <div className="city-images" aria-hidden="true">
        <img className="city-old" src={media.storeSign.src} alt="" />
        <img className="city-new" src={media.skyArchitecture.src} alt="" />
        <img className="city-cup" src={media.icedLatte.src} alt="" />
      </div>
      <TemperatureSlider onChange={setMix} />
      <div className="city-copy" aria-live="polite">
        <p>{mix < 50 ? '旧街的木门呼吸，风穿过巷子，脚步自然慢下来。' : '新城的光落在白墙上，咖啡香沿着楼梯轻轻上升。'}</p>
      </div>
    </section>
  );
}
