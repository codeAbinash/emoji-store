import { expect, test } from 'vitest';
import Emoji from './index.ts';

test('Emoji is defined', () => {
  expect(Emoji).toBeDefined();
});

test('Emoji Links', () => {
  const emoji = new Emoji();
  const links = emoji.get('😊');
  expect(links).toBeDefined();
});
