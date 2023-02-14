type EmojiProps = {
    author: string | void,
    size: number | void,
    type: string | void
}

function getLink(complexEmoji: string, props: EmojiProps) {
    const simplifiedEmojis = [...complexEmoji]
    const emojiCount = simplifiedEmojis.length
    let emojiCode = ''

    for (let i = 0; i < emojiCount; i++)
        emojiCode += emojiUnicodeChar(simplifiedEmojis[i]) + '-'

    emojiCode = emojiCode.substring(0, emojiCode.length - 1)

    return `https://dataabinash.github.io/emoji/${props.author}/${props.type}/${props.size}/emojis/${emojiCode}.${props.type}`
}

function emojiUnicodeChar(emoji: string): string {
    let unicode: number = 0
    if (emoji.length == 1) {
        unicode = emoji.charCodeAt(0)
    }
    else if (emoji.length == 2) {
        unicode = (emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
    }
    else {
        console.warn(`The emoji '${emoji}' is not suported.`)
    }
    return unicode.toString(16)
}

export default class Emoji {
    #props: EmojiProps = {
        author: 'apple',
        type: 'png',
        size: 160
    }
    constructor(emojiProps: EmojiProps | void) {
        if (emojiProps)
            this.setProps(emojiProps)
    }
    setProps(emojiProps: EmojiProps) {
        if (emojiProps.author) this.#props.author = emojiProps.author
        if (emojiProps.size) this.#props.size = emojiProps.size
        if (emojiProps.type) this.#props.type = emojiProps.type
    }
    set author(auth: string) {
        this.#props.author = auth
    }
    set type(typ: string) {
        this.#props.type = typ
    }
    set size(z: number) {
        this.#props.size = z
    }
    get(e: string) {
        return getLink(e, this.#props)
    }
    static get(e: string, prop = {
        author: 'apple',
        type: 'png',
        size: 160
    }) {
        return getLink(e, prop)
    }
}