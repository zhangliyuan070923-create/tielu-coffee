import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { PhotoRail } from './PhotoRail';

describe('PhotoRail', () => {
  test('exposes named controls and every supplied image', () => {
    render(
      <PhotoRail
        items={[
          { src: '/one.jpg', alt: '第一张' },
          { src: '/two.jpg', alt: '第二张' },
        ]}
      />,
    );

    expect(screen.getByRole('button', { name: '向前看' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '向后看' })).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
