# Emoji Store

![Release Date](https://img.shields.io/github/release-date/codeabinash/emoji-store?color=limegreen)
![Tag](https://img.shields.io/github/tag/codeabinash/emoji-store?color=limegreen)

A JavaScript library for platform independent Emojis 😍.

<img src='https://codeAbinash.github.io/emoji-store/images/logo.jpg' style="width:100%">

Supports most of the web technologies : React, React-Native Vue, Angular, Preact, Lit, Svelte etc.

## Install

```bash
npm i emoji-store
```

## Use

```tsx
import emoji, { Apple160 } from 'emoji-store';

function App() {
  return (
    <div>
      <img src={emoji('❤️‍🔥')} /> {/*Default Apple64*/}
      <img src={emoji('❤️‍🔥', Apple160)} />
    </div>
  );
}

export default App;
```

```tsx
import { Emoji, Facebook96 } from 'emoji-store';

const customEmoji = Emoji(Facebook96);

function App() {
  return (
    <div>
      <img src={customEmoji('❤️‍🔥')} />
    </div>
  );
}
```

## Custom Emoji Config

```ts
const props = {
  author: 'apple',
  size: 160,
  type: 'png',
};

const customEmoji = Emoji(props);

console.log(customEmoji('🫢'));
console.log(customEmoji('❤️‍🔥'));
console.log(customEmoji('🏄🏻‍♂️'));
console.log(customEmoji('🧑🏻‍💻'));
```

<img src="https://dataabinash.github.io/emoji/apple/png/160/emojis/1fae2.png" 
  width="70px" height="70px" alt="🫢" />
<img src="https://dataabinash.github.io/emoji/apple/png/160/emojis/2764-fe0f-200d-1f525.png" 
  width="70px" height="70px" alt="❤️‍🔥" />
<img src="https://dataabinash.github.io/emoji/apple/png/160/emojis/1f3c4-1f3fb-200d-2642-fe0f.png" 
  width="70px" height="70px" alt="🏄🏻‍♂️" />
<img src="https://dataabinash.github.io/emoji/apple/png/160/emojis/1f9d1-1f3fb-200d-1f4bb.png" width="70px" height="70px" alt="🧑🏻‍💻" />

## Supporting Emojis

| Platform | Type | Size(px) | Constant   |
| -------- | ---- | -------- | ---------- |
| Apple    | PNG  | 64       | Apple64    |
| Apple    | PNG  | 160      | Apple160   |
| Facebook | PNG  | 64       | Facebook64 |
| Facebook | PNG  | 96       | Facebook96 |

## How it works

It returns the link of the specified emoji that is displayed in the browser.
