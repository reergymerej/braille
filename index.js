/**
 * braille
 * https://github.com/Nonemoticoner/braille
 *
 * Copyright (c) 2015-2018 Nonemoticoner
 * Licensed under the MIT license.
 */

var BRAILLE = {
        ' ': '⠀',   // space bar to dot-0
        '_': '⠸',
        '-': '⠤',
        ',': '⠠',
        ';': '⠰',
        ':': '⠱',
        '!': '⠖',
        '?': '⠹',
        '.': '⠨',
        '(': '⠷',
        '[': '⠪',
        '@': '⠈',
        '*': '⠡',
        '/': '⠌',
        '\'': '⠄',
        '\"': '⠐',
        '\\': '⠳',
        '&': '⠯',
        '%': '⠩',
        '^': '⠘',
        '+': '⠬',
        '<': '⠣',
        '>': '⠜',
        '$': '⠫',
        '0': '⠴',
        '1': '⠂',
        '2': '⠆',
        '3': '⠒',
        '4': '⠲',
        '5': '⠢',
        '6': '⠋',
        '7': '⠶',
        '8': '⠦',
        '9': '⠔',
        'A': '⠁',
        'B': '⠃',
        'C': '⠉',
        'D': '⠙',
        'E': '⠑',
        'F': '⠋',
        'G': '⠛',
        'H': '⠓',
        'I': '⠊',
        'J': '⠚',
        'K': '⠅',
        'L': '⠇',
        'M': '⠍',
        'N': '⠝',
        'O': '⠕',
        'P': '⠏',
        'Q': '⠟',
        'R': '⠗',
        'S': '⠎',
        'T': '⠞',
        'U': '⠥',
        'V': '⠧',
        'W': '⠺',
        'X': '⠭',
        'Z': '⠵',
        ']': '⠻',
        '#': '⠼',
        'Y': '⠽',
        ')': '⠾',
        '=': '⠿'
    },

    ASCII = {
        '⠀': ' ',   // dot-0 to space bar
        '⠸': '_',
        '⠤': '-',
        '⠠': ',',
        '⠰': ';',
        '⠱': ':',
        '⠖': '!',
        '⠹': '?',
        '⠨': '.',
        '⠷': '(',
        '⠪': '[',
        '⠈': '@',
        '⠡': '*',
        '⠌': '/',
        '⠄': '\'',
        '⠐': '\"',
        '⠳': '\\',
        '⠯': '&',
        '⠩': '%',
        '⠘': '^',
        '⠬': '+',
        '⠣': '<',
        '⠜': '>',
        '⠫': '$',
      // TODO: add number indicator	⠼	3456
        '⠴': '0',
        '⠂': '1',
        '⠆': '2',
        '⠒': '3',
        '⠲': '4',
        '⠢': '5',
        '⠋': '6',
        '⠶': '7',
        '⠦': '8',
        '⠔': '9',
        '⠁': 'A',
        '⠃': 'B',
        '⠉': 'C',
        '⠙': 'D',
        '⠑': 'E',
        '⠋': 'F',
        '⠛': 'G',
        '⠓': 'H',
        '⠊': 'I',
        '⠚': 'J',
        '⠅': 'K',
        '⠇': 'L',
        '⠍': 'M',
        '⠝': 'N',
        '⠕': 'O',
        '⠏': 'P',
        '⠟': 'Q',
        '⠗': 'R',
        '⠎': 'S',
        '⠞': 'T',
        '⠥': 'U',
        '⠧': 'V',
        '⠺': 'W',
        '⠭': 'X',
        '⠵': 'Z',
        '⠻': ']',
        '⠼': '#',
        '⠽': 'Y',
        '⠾': ')',
        '⠿': '='
    },

    CONTRACTIONS = {
      // spacing in intentional. ' wholeWord ' , ' wholeWordOrPrefix', 'contraction'
      // best if sorted by pattern length (desc).
      ' ⠅ ': ' knowledge ',
      ' ⠢ ': ' enough ',
      ' ⠏ ': ' people ',
      ' ⠗ ': ' rather ',
      ' ⠡': 'child ',
      ' ⠑': 'every ',
      ' ⠟ ': ' quite ',
      ' ⠩ ': ' shall ',
      ' ⠌ ': ' still ',
      ' ⠱ ': ' which ',
      ' ⠋ ': ' from ',
      ' ⠚ ': ' just ',
      ' ⠇ ': ' like ',
      ' ⠍ ': ' more ',
      ' ⠞ ': ' that ',
      ' ⠹ ': ' this ',
      ' ⠧ ': ' very ',
      ' ⠶ ': ' were ',
      ' ⠾ ': ' with ',
      ' ⠯ ': ' and ',
      ' ⠃ ': ' but ',
      ' ⠉ ': ' can ',
      '⠤': 'com',
      '⠒': 'con',
      '⠲': 'dis',
      '⠿': 'for',
      '⠬': 'ing',
      ' ⠝ ': ' not ',
      '⠳': 'out',
      '⠮': 'the',
      '⠴': 'was',
      ' ⠽ ': ' you ',
      '⠜': 'ar',
      ' ⠵ ': ' as ',
      '⠴': 'by',
      '⠒': 'cc',
      '⠡': 'ch',
      '⠲': 'dd',
      ' ⠙ ': ' do ',
      '⠂': 'ea',
      '⠫': 'ed',
      '⠢': 'en',
      '⠻': 'er',
      '⠖': 'ff',
      '⠶': 'gg',
      '⠣': 'gh',
      ' ⠛ ': ' go ',
      '⠔': 'in',
      ' ⠭ ': ' it ',
      '⠷': 'of',
      '⠳': 'ou',
      '⠪': 'ow',
      '⠩': 'sh',
      ' ⠎ ': ' so ',
      '⠌': 'st',
      '⠹': 'th',
      '⠖': 'to',
      ' ⠥ ': ' us ',
      '⠱': 'wh'
    };

Object.assign(ASCII, CONTRACTIONS)

var contractions = Object.keys(CONTRACTIONS);

var isConverted = function (character) {
    return !!ASCII.hasOwnProperty(character);
};

var replaceContractions = function (text) {
    for (var i = 0; i < contractions.length; i++) {
        var braille = contractions[i];
        var regex = new RegExp(CONTRACTIONS[braille], 'gi');
        text = text.replace(regex, braille);
    }
    return text;
};

var markCapitals = function (text) {
  return text.replace(/([A-Z])/g, "⠠$1").toLowerCase();
}

var markNumerals = function (text) {
  return text.replace(/(\d+)/g, "⠼$1").toLowerCase();
}

var convert = function (character) {
    return !!BRAILLE[character] ? BRAILLE[character] : '?';
};

var toBraille = function (text) {
  var upperText, upperTextLength, brailleText, i;
    text = markCapitals(text);
    text = markNumerals(text);
    text = replaceContractions(text);
    upperText = text.toUpperCase();
    upperTextLength = upperText.length;
    brailleText = '';

    for (i = 0; i < upperTextLength; i++) {
        var character = upperText[i]
        brailleText += isConverted(character)
            ? character
            : convert(character);
    }

    return brailleText;
};

module.exports = {
    convert: convert,

    read: function (symbol) {
        return !!ASCII[symbol] ? ASCII[symbol] : '?';
    },

    toBraille: toBraille,

    toText: function (code) {
        var codeLength, asciiText, i;

        codeLength = code.length;
        asciiText = '';

        for (i = 0; i < codeLength; i++) {
            asciiText += this.read(code[i]);
        }

        return asciiText;
    }
};
