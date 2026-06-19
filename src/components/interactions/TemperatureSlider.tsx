import { type CSSProperties, useState } from 'react';

type TemperatureSliderProps = {
  onChange?: (value: number) => void;
};

export function TemperatureSlider({ onChange }: TemperatureSliderProps) {
  const [value, setValue] = useState(28);
  const modern = value >= 50;

  return (
    <div
      className="temperature-control"
      style={{ '--city-mix': `${value}%` } as CSSProperties}
    >
      <div className="temperature-labels" aria-hidden="true">
        <span>
          <strong data-active={String(!modern)}>河下古镇</strong>
          <small>慢</small>
        </span>
        <span className="temperature-title">城市温度</span>
        <span>
          <strong data-active={String(modern)}>海创空间</strong>
          <small>轻快</small>
        </span>
      </div>
      <input
        aria-label="切换城市呼吸"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => {
          const next = Number(event.target.value);
          setValue(next);
          onChange?.(next);
        }}
      />
      <p className="temperature-hint">左右拖动，切换两种城市呼吸</p>
    </div>
  );
}
