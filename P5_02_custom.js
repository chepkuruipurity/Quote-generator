//Make sure DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    let quotes = {
        inspiration: {
            beg: [
                'I haven’t failed,  ',
                'I\’ve learned that people will forget what you said,',
                'Either you run the day,',
                'You must be the change, ',
                'Too many of us are not living, ',
                'Change your thoughts',
                'That which does not ',
                'We must not allow other people’s',
            ],
            middle: [
                'I’ve just found 10,000 ways',
                'people will forget what you did,',
                'or',
                'you wish',
                'our dreams because ',
                'and you',
                'kill us',
                ' limited perceptions ',
            ],

            end: [
                'that won’t work',
                'but people will never forget how you made them feel.',
                'the day runs you',
                ' to see in the world.',
                'we are living our fears.',
                ' change your world.',
                ' makes us stronger.',
                'to define us.'
            ],
        },
        food: {
            beg: [
                'All you need is love, ',
                'If more of us valued food and cheer and song,  ',
                'One cannot think well, ',
                'Cakes are healthy too,',
                'The only time to eat diet food, ',
                'I love you',
                'Ask not what you can do ',
                'After a good dinner'
            ],
            middle: [
                'but a little chocolate now ',
                'above hoarded gold,',
                'love well, sleep well,',
                ' you just ',
                ' is while you\'re waiting',
                'like a fat kid',
                'for your country',
                ' one can forgive anybody,'
            ],
            end: [
                'and then doesn\'t hurt',
                'it would be a merrier world',
                ' if one has not dined well',
                'eat a small slice',
                'for the steak to cook',
                ' loves cake',
                ' Ask what’s for lunch',
                ' even one\'s own relations.'

            ],
        }
    };



    function randomNumber(num) {
        return Math.floor(Math.random() * num);

    }

    //inspiration category
    function randomQuote() {

        let number = numQuote();
        let category = quoteType();

        clearQuotes();

        let quote = '';

        for (let i = 0; i < number; i++) {

            let random = randomNumber(quotes[`${category}`].beg.length);
            let randomMid = randomNumber(quotes[`${category}`].middle.length);
            let randomEnd = randomNumber(quotes[`${category}`].end.length);


            let beg1 = quotes[`${category}`].beg[random];
            let middle2 = quotes[`${category}`].middle[randomMid]
            let end3 = quotes[`${category}`].end[randomEnd];

            quote += '<p class="beg" >' + '  <img src="icons/quo.png">' + ' '
                + beg1 + ' ' + middle2 + ' ' + end3 + ' ' + '<img src="icons/quo2.png">' + '</p>';

        }

        let div = document.querySelector('#quote');
        div.innerHTML = quote;


    };

    //choose between two categories
    let inspirationTag = document.getElementById('t1');
    let foodTag = document.getElementById('t2');

    function quoteType() {

        if (document.getElementById('t1').checked) {
            return inspirationTag.value;
        } else if (document.getElementById('t2').checked) {
            return foodTag.value;
        }

    }

    //dropdown number list variables
    let numValue = document.getElementById('num');
    let num = parseInt(document.getElementById('num').value);

    numValue.addEventListener('change', e => {
        num = parseInt(e.target.value);
    });

    //get number of quotes
    function numQuote() {
        return num;

    }

    //clear old quotes
    function clearQuotes() {
        document.getElementById('quote').innerHTML = "";
    }


    //getting our elements
    let btn2 = document.querySelector('.btn2');
    //adding event listener to button
    btn2.addEventListener('click', randomQuote);
    //closing page
    let btn3 = document.querySelector('.btn3');
    btn3.addEventListener('click', clearQuotes);
});