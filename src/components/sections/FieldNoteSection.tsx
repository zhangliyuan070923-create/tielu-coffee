import { ArrowRight } from '@phosphor-icons/react';
import { media } from '../../content/media';
import { brandCopy } from '../../content/site';

export function FieldNoteSection() {
  return (
    <section className="field-note section" aria-labelledby="field-note-title">
      <div className="field-note-copy">
        <span className="section-number">FIELD NOTE</span>
        <h2 id="field-note-title">{brandCopy.fieldNote}</h2>
        <p>一页页记下温度、时间，也记下人和城市的来去。</p>
        <a href="#stores">翻开笔记 <ArrowRight aria-hidden="true" /></a>
      </div>
      <div className="notebook-image">
        <img src={media.brandNotebook.src} alt={media.brandNotebook.alt} loading="lazy" />
      </div>
    </section>
  );
}
