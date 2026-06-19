import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { App } from './App';

describe('App', () => {
  test('renders the approved story and official identity', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: '进来坐坐' })).toBeInTheDocument();
    expect(screen.getByAltText('铁炉咖啡官方 Logo')).toBeInTheDocument();

    for (const text of [
      '一扇门，两种城市呼吸',
      '炉边日常',
      '我们把旧街的慢，带进新城的光。',
      '两家店',
      '把今天留一会儿',
    ]) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });

  test('opens and closes the mobile navigation', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: '打开菜单' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('{Escape}');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  test('uses safe external links', () => {
    render(<App />);
    for (const link of screen.getAllByRole('link', { name: '去抖音看看' })) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    }
  });
});
