import { ArrowUpRight, MapPin } from '@phosphor-icons/react';
import { media, type MediaKey } from '../../content/media';
import { stores } from '../../content/site';

export function StoresSection() {
  return (
    <section className="stores-section section" id="stores" aria-labelledby="stores-title">
      <div className="section-heading horizontal-heading">
        <span className="section-number">03 / 门店</span>
        <h2 id="stores-title">两家店</h2>
        <p>在不同的角落，等你进门。</p>
      </div>
      <div className="store-chapters">
        {stores.map((store, index) => {
          const image = media[store.image as MediaKey];
          return (
            <article className="store-chapter" key={store.name}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="store-overlay">
                <span>CHAPTER 0{index + 1}</span>
                <h3>{store.name}</h3>
                <p>{store.description}</p>
                <a href={store.mapUrl} target="_blank" rel="noreferrer">
                  <MapPin aria-hidden="true" /> 查看路线 <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
