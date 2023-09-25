'use strict';
let temp = '%22';

const copy = function() {
    let copyText = document.getElementById('output');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
};

const generate = function() {
    try {
        let inputText = document.getElementById('input').value;
        let separator = document.getElementById('separator').value;
        let separatorChar = getSeparatorChar(separator);
        let lyrics = JSON.parse(inputText).map((lyric) => lyric.bar + separatorChar + lyric.text).join('\n');
        let copyText = document.getElementById('output');
        copyText.innerHTML = lyrics;
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        let message = document.getElementById('message');
        message.style.color = 'black';
        message.innerHTML = 'copied to clipboard!'
    } catch (e) {
        let message = document.getElementById('message');
        message.style.color = 'red';
        message.innerHTML = e;
    }
};

const getSeparatorChar = function(text) {
    switch(text) {
        case 'comma': return ',';
        case 'colon': return ':';
        case 'space': return ' ';
        case 'pipe': return '|';
        case 'tab':
        default: return '\t';
    }
}