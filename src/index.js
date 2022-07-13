const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function getMorseCodeFromBinCode(binCode) {
    const morseCode = [];
    const size = 2;

    for (let begin = 0; begin + size <= binCode.length; begin += size) {
        const num = +(binCode.substring(begin, begin + size));
        if (num === 10) {
            morseCode.push('.');
        } else if (num === 11) {
            morseCode.push('-');
        }
    }

    return morseCode.join('');
}

function decode(expr) {
    const resultLineArray = [];
    const size = 10;
    const space = '*'.repeat(size);

    for (let begin = 0; begin + size <= expr.length; begin += size) {
        const code = expr.substring(begin, begin + size);
        const char = code === space ? ' ' : MORSE_TABLE[getMorseCodeFromBinCode(code)];
        resultLineArray.push(char);
    }

    return resultLineArray.join('');
}

module.exports = {
    decode
}
