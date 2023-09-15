var txt = "This rainbox has a unicorn flying over someting";
var order = 3;
var ngrams = [];

function setup() {
    noCanvas();

    for (var i = 0; i < txt.length; i++) {
        var gram = txt.substring(i, i + 3);
        ngrams.push(gram);
    }
    console.log(ngrams)

}








