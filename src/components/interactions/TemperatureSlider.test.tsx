import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { TemperatureSlider } from './TemperatureSlider';

describe('TemperatureSlider', () => {
  test('switches to the modern store with an accessible range control', () => {
    render(<TemperatureSlider />);
    const slider = screen.getByRole('slider', { name: '切换城市呼吸' });

    fireEvent.change(slider, { target: { value: '100' } });

    expect(screen.getByText('海创空间')).toHaveAttribute('data-active', 'true');
    expect(screen.getByText('河下古镇')).toHaveAttribute('data-active', 'false');
  });
});
