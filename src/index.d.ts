type EmojiProps = {
    author: string | void,
    size: number | void,
    type: string | void
}

declare function getLink(complexEmoji: string, props: EmojiProps): string
declare function emojiUnicodeChar(emoji: string): string

export default class Emoji {
    constructor(emojiProps: EmojiProps | void)
    setProps(emojiProps: EmojiProps) : void
    get(e: string): string
    static get(e: string, prop : EmojiProps|void): string
    set author(a: string)
    set type(a: string)
    set size(a: number)
}