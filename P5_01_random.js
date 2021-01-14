
//Make sure DOM is ready
document.addEventListener("DOMContentLoaded", function () {


    let beg = [
        'I haven’t failed,  ',
        'I\’ve learned that people will forget what you said,',
        'Either you run the day,',
        'You must be the change, ',
        'Too many of us are not living, ',
        'All you need is love, ',
        'If more of us valued food and cheer and song,  ',
        'One cannot think well, ',
        'Cakes are healthy too,',
        'The only time to eat diet food, ',
    ];
    let middle = [
        'I’ve just found 10,000 ways',
        'people will forget what you did,',
        'or',
        'you wish',
        'our dreams because ',
        'but a little chocolate now ',
        'above hoarded gold,',
        'love well, sleep well,',
        ' you just ',
        ' is while you\'re waiting',
    ];

    let end = [
        'that won’t work',
        'but people will never forget how you made them feel.',
        'the day runs you',
        ' to see in the world.',
        'we are living our fears.',
        'and then doesn\'t hurt',
        'it would be a merrier world',
        ' if one has not dined well',
        'eat a small slice',
        'for the steak to cook',
    ];

    function getRandomQuote() {
        //generate random number for quotes

        let random = Math.floor(Math.random() * beg.length);
        let ranM = Math.floor(Math.random() * middle.length);
        let rane = Math.floor(Math.random() * end.length);
        let quote = '<p class="beg">' + '  <img src="icons/quo.png">' + ' ' + beg[random] + ' ' + middle[ranM] + ' ' + end[rane] + ' ' + '<img src="icons/quo2.png">' + '</p>';
        let div = document.getElementById('quote');
        div.innerHTML = quote;

    };

    //getting our elements
    let btn = document.querySelector('.btn');
    //adding event listener to button
    btn.addEventListener('click', getRandomQuote);

    getRandomQuote();


});