import { dailyMoments } from '../../content/site';
import { media, type MediaKey } from '../../content/media';

export function DailyRhythmSection() {
  return (
    <section className="daily-section section" id="daily" aria-labelledby="daily-title">
      <div className="section-heading horizontal-heading">
        <span className="section-number">02 / 日常</span>
        <h2 id="daily-title">炉边日常</h2>
        <p>我们的一天，不赶时间。</p>
      </div>
      <div className="daily-track">
        {dailyMoments.map((moment) => {
          const image = media[moment.image as MediaKey];
          return (
            <article className="daily-moment" key={moment.time}>
              <div className="moment-copy">
                <time>{moment.time}</time>
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
              </div>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
