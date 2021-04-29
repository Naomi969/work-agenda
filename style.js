//current date at the top
var day = moment().format("dddd, MMMM Do YYYY");
document.getElementById('currentDay').textContent = (day)
//time 
var time = moment().format("h:mm a");
console.log(time)
// all timeblock id's
var h1El = $('#9:00');
var h2El = $('#h2');
var h3El = $('#h3');
var h4El = $('#h4');
var h5El = $('#h5');
var h6El = $('#h6');
var h7El = $('#h7');
var h8El = $('#h8');
var h9El = $('#h9');


if(h1El <= time) {
    console.log('is this working')
}

