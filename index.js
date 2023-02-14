var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Emoji_props;
function getLink(complexEmoji, props) {
    const simplifiedEmojis = [...complexEmoji];
    const emojiCount = simplifiedEmojis.length;
    let emojiCode = '';
    for (let i = 0; i < emojiCount; i++)
        emojiCode += emojiUnicodeChar(simplifiedEmojis[i]) + '-';
    emojiCode = emojiCode.substring(0, emojiCode.length - 1);
    return `https://dataabinash.github.io/emoji/${props.author}/${props.type}/${props.size}/emojis/${emojiCode}.${props.type}`;
}
function emojiUnicodeChar(emoji) {
    let unicode = 0;
    if (emoji.length == 1) {
        unicode = emoji.charCodeAt(0);
    }
    else if (emoji.length == 2) {
        unicode = (emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000;
    }
    else {
        console.warn(`The emoji '${emoji}' is not suported.`);
    }
    return unicode.toString(16);
}
export default class Emoji {
    constructor(emojiProps) {
        _Emoji_props.set(this, {
            author: 'apple',
            type: 'png',
            size: 160
        });
        if (emojiProps)
            this.setProps(emojiProps);
    }
    setProps(emojiProps) {
        if (emojiProps.author)
            __classPrivateFieldGet(this, _Emoji_props, "f").author = emojiProps.author;
        if (emojiProps.size)
            __classPrivateFieldGet(this, _Emoji_props, "f").size = emojiProps.size;
        if (emojiProps.type)
            __classPrivateFieldGet(this, _Emoji_props, "f").type = emojiProps.type;
    }
    set author(auth) {
        __classPrivateFieldGet(this, _Emoji_props, "f").author = auth;
    }
    set type(typ) {
        __classPrivateFieldGet(this, _Emoji_props, "f").type = typ;
    }
    set size(z) {
        __classPrivateFieldGet(this, _Emoji_props, "f").size = z;
    }
    get(e) {
        return getLink(e, __classPrivateFieldGet(this, _Emoji_props, "f"));
    }
    static get(e, prop = {
        author: 'apple',
        type: 'png',
        size: 160
    }) {
        return getLink(e, prop);
    }
}
_Emoji_props = new WeakMap();
