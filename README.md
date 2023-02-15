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
import Emoji from 'emoji-store'

function App() {
   const e = new Emoji()
   return (
      <div>
         <img src={e.get('😜')} /> {/*Use like this*/}
         {/*Default style is apple-png-160px*/}
         <img src={Emoji.get('👨🏻‍💻', { author: 'apple', size: 64, type: 'png' })} />
         {/*Or you can use like this*/}
      </div>
   )
}

export default App
```

## Set properties
```tsx
const e = new Emoji()
e.author = 'facebook'
e.size = 96
e.type = 'png'

// or like this
e.setProps({
   author : 'facebook',
   size : 96,
   type : 'png'
})
```
## Supporting Emojis
> It supports the following emojis.
- apple
   - png type
      - 64x64px
      - 160x160px
- facebook
   - png type
      - 64x64px
      - 96x96px

## How it works
It returns the link of the specified emoji that is displayed in the browser.