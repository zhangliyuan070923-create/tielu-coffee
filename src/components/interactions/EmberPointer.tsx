import { Fire } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export function EmberPointer() {
  const [position, setPosition] = useState({ x: -40, y: -40 });

  useEffect(() => {
    const move = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <span
      className="ember-pointer"
      aria-hidden="true"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <Fire weight="fill" />
    </span>
  );
}
