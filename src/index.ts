/**
 * @version 2.0.0
 * @since 2021-10-14 12:00:00
 * @license MIT
 * @author Abinash Karmakar
 * @description A JavaScript library for platform independent Emojis 😍
 */

type EmojiProps = typeof Apple160 | typeof Apple64 | typeof Facebook64 | typeof Facebook96;

export const Apple160 = {
  author: 'apple' as const,
  size: 160 as const,
  type: 'png' as const,
};

export const Apple64 = {
  author: 'apple' as const,
  size: 64 as const,
  type: 'png' as const,
};

export const Facebook96 = {
  author: 'facebook' as const,
  size: 96 as const,
  type: 'png' as const,
};

export const Facebook64 = {
  author: 'facebook' as const,
  size: 64 as const,
  type: 'png' as const,
};

const DefaultEmojiProps: EmojiProps = {
  author: 'apple',
  type: 'png',
  size: 64,
};

export default function emoji(e = '😀', props = DefaultEmojiProps) {
  return getLink(e, props);
}

export function Emoji(props = DefaultEmojiProps) {
  return function (e = '😀') {
    return getLink(e, props);
  };
}

function getLink(complexEmoji: string, props: EmojiProps) {
  const simplifiedEmojis = [...complexEmoji];
  const emojiCount = simplifiedEmojis.length;
  let emojiCode = '';
  for (let i = 0; i < emojiCount; i++) emojiCode += emojiUnicodeChar(simplifiedEmojis[i]) + '-';
  emojiCode = emojiCode.substring(0, emojiCode.length - 1);
  return `https://dataabinash.github.io/emoji/${props.author}/${props.type}/${props.size}/emojis/${emojiCode}.${props.type}`;
}

function emojiUnicodeChar(emoji: string): string {
  let unicode: number = 0;
  if (emoji.length == 1) unicode = emoji.charCodeAt(0);
  else if (emoji.length == 2)
    unicode = (emoji.charCodeAt(0) - 0xd800) * 0x400 + (emoji.charCodeAt(1) - 0xdc00) + 0x10000;
  else console.warn(`The emoji '${emoji}' is not supported.`);
  return unicode.toString(16);
}
