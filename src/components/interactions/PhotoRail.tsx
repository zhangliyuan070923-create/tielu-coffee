import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { useRef } from 'react';

type RailItem = {
  src: string;
  alt: string;
  caption?: string;
};

type PhotoRailProps = {
  items: readonly RailItem[];
};

export function PhotoRail({ items }: PhotoRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    railRef.current?.scrollBy({
      left: direction * Math.max(280, railRef.current.clientWidth * 0.64),
      behavior: 'smooth',
    });
  };

  return (
    <div className="photo-rail-shell">
      <div className="photo-rail" ref={railRef} tabIndex={0} aria-label="铁炉咖啡影像">
        {items.map((item, index) => (
          <figure className="photo-rail-item" key={item.src}>
            <img src={item.src} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'} />
            {item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        ))}
      </div>
      <div className="rail-controls">
        <button type="button" onClick={() => move(-1)} aria-label="向前看">
          <ArrowLeft aria-hidden="true" />
        </button>
        <span>拖动翻页</span>
        <button type="button" onClick={() => move(1)} aria-label="向后看">
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
