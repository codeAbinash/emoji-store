import { expect, test } from 'vitest';
import emoji, { Apple160, Emoji, Facebook64, Apple64, Facebook96 } from './index.ts';

test('All exports are defined', () => {
  expect(emoji).toBeDefined();
  expect(Emoji).toBeDefined();
  expect(Apple160).toBeDefined();
  expect(Facebook64).toBeDefined();
  expect(Apple64).toBeDefined();
  expect(Facebook96).toBeDefined();
});

test('Default emoji function', () => {
  let e = emoji();
  expect(e).toBe('https://dataabinash.github.io/emoji/apple/png/64/emojis/1f600.png');
});

test('Default emoji function with options and emoji', () => {
  let e = emoji('😗', Apple160);
  expect(e).toBe('https://dataabinash.github.io/emoji/apple/png/160/emojis/1f617.png');
});

test('Emoji factory', () => {
  let e = new Emoji();
  expect(e()).toBe('https://dataabinash.github.io/emoji/apple/png/64/emojis/1f600.png');
});

test('Emoji factory with options', () => {
  let e = new Emoji(Apple160);
  expect(e()).toBe('https://dataabinash.github.io/emoji/apple/png/160/emojis/1f600.png');
});

test('Emoji factory with emoji', () => {
  let e = new Emoji();
  expect(e('😗')).toBe('https://dataabinash.github.io/emoji/apple/png/64/emojis/1f617.png');
});

test('Emoji factory with emoji and options', () => {
  let e = new Emoji(Apple160);
  expect(e('😗')).toBe('https://dataabinash.github.io/emoji/apple/png/160/emojis/1f617.png');
});

test('Latest emoji factory', () => {
  let e = new Emoji();
  expect(e('❤️‍🔥')).toBe('https://dataabinash.github.io/emoji/apple/png/64/emojis/2764-fe0f-200d-1f525.png');
});

test('Latest emoji factory with options', () => {
  let e = new Emoji(Apple160);
  expect(e('❤️‍🔥')).toBe('https://dataabinash.github.io/emoji/apple/png/160/emojis/2764-fe0f-200d-1f525.png');
});

test('Latest emoji function', () => {
  let e = emoji('❤️‍🔥');
  expect(e).toBe('https://dataabinash.github.io/emoji/apple/png/64/emojis/2764-fe0f-200d-1f525.png');
});

test('Latest emoji function with options', () => {
  let e = emoji('❤️‍🔥', Apple160);
  expect(e).toBe('https://dataabinash.github.io/emoji/apple/png/160/emojis/2764-fe0f-200d-1f525.png');
});

test('Custom props emoji function', () => {
  const prop = {
    size: 160,
    type: 'png',
    author: 'apple',
  };
  let e = emoji('😗', prop);
  expect(e).toBe('https://dataabinash.github.io/emoji/apple/png/160/emojis/1f617.png');
});

test('Custom props emoji factory', () => {
  const prop = {
    size: 160,
    type: 'png',
    author: 'apple',
  };
  let e = new Emoji(prop);
  expect(e('😗')).toBe('https://dataabinash.github.io/emoji/apple/png/160/emojis/1f617.png');
});

test('Console Test', () => {
  const props = {
    author: 'apple',
    size: 160,
    type: 'png',
  };

  const customEmoji = Emoji(props);
  console.log(customEmoji('🫢'));
  console.log(customEmoji('❤️‍🔥'));
  console.log(customEmoji('👨‍👩‍👧‍👦'));
  console.log(customEmoji('🧑🏻‍💻'));
});
