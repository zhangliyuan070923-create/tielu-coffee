import { ArrowRight } from '@phosphor-icons/react';
import { media } from '../../content/media';
import { brandCopy, social } from '../../content/site';

export function FinalCtaSection() {
  return (
    <section className="final-cta section" id="visit" aria-labelledby="visit-title">
      <img src={media.logo.src} alt="" aria-hidden="true" />
      <div>
        <h2 id="visit-title">{brandCopy.finalTitle}</h2>
        <p>不赶路，不过撑。铁炉咖啡，等你来坐坐。</p>
      </div>
      <div className="final-actions">
        <a className="button button-primary" href="#stores">到店坐坐 <ArrowRight aria-hidden="true" /></a>
        <a className="button button-secondary" href={social.douyin} target="_blank" rel="noreferrer">
          去抖音看看 <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
