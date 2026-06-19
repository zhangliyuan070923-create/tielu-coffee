import { describe, expect, test } from 'vitest';
import { navigation, social, stores } from './site';

describe('verified site content', () => {
  test('keeps navigation targets unique', () => {
    expect(new Set(navigation.map((item) => item.href)).size).toBe(navigation.length);
  });

  test('contains only the two confirmed stores', () => {
    expect(stores.map((store) => store.name)).toEqual(['河下店', '海创空间店']);
  });

  test('links to the confirmed Douyin profile', () => {
    expect(social.douyin).toContain('douyin.com/user/');
    expect(social.douyinId).toBe('86535049653');
  });
});
