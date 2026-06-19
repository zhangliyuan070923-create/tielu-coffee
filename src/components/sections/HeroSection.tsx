import { ArrowDown, ArrowRight } from '@phosphor-icons/react';
import { brandCopy, social } from '../../content/site';
import { media } from '../../content/media';

export function HeroSection() {
  return (
    <section className="hero" id="now" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="vertical-brand">铁炉咖啡</p>
        <h1 id="hero-title">{brandCopy.heroTitle}</h1>
        <p className="hero-intro">{brandCopy.heroBody}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#stores">
            到店坐坐 <ArrowRight aria-hidden="true" />
          </a>
          <a className="button button-secondary" href={social.douyin} target="_blank" rel="noreferrer">
            去抖音看看 <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <p className="opening-note">咖啡现做，谢绝催促，请等一等。</p>
      </div>
      <div className="hero-image-wrap">
        <img src={media.heroDoor.src} alt={media.heroDoor.alt} fetchPriority="high" />
        <a className="push-door" href="#story">
          <span>推门</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </div>
      <p className="scroll-index" aria-hidden="true">SCROLL · 01</p>
    </section>
  );
}
