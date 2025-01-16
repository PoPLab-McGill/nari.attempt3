define(['pipAPI', 'https://cdn.jsdelivr.net/gh/PoPLab-McGill/nari.attempt2@main/nari.extension.js'], function(APIConstructor, stiatExtension){
    var API = new APIConstructor();

    return stiatExtension({
        remindErrorText: '<p align="center" style="font-size:4em; font-family:arial;">' +
            'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
            'Press the other key to continue.<p/>',
        category: {
            name: 'Autistics',
            title: {media: {word: 'Autistics'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
                {word: 'Person1'},
                {word: 'Person2'},
                {word: 'Person3'},
                {word: 'Person4'},
                {word: 'Person5'},
                {word: 'Person6'}
            ],
            css: {color: '#31b404', 'font-size': '3em'}
        },
        attribute1: {
            name: 'Unpleasant',
            title: {media: {word: 'Negative'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
                {word: 'Bomb'},
                {word: 'Abuse'},
                {word: 'Sadness'},
                {word: 'Pain'},
                {word: 'Poison'},
                {word: 'Grief'}
            ],
            css: {color: '#31b404', 'font-size': '3em'}
        },
        attribute2: {
            name: 'Pleasant',
            title: {media: {word: 'Positive'}, css: {color: '#31b404', 'font-size': '2em'}, height: 7},
            media: [
                {word: 'Paradise'},
                {word: 'Pleasure'},
                {word: 'Cheer'},
                {word: 'Wonderful'},
                {word: 'Splendid'},
                {word: 'Love'}
            ],
            css: {color: '#31b404', 'font-size': '3em'}
        }
    });
});
