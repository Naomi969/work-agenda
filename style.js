//current date at the top
var day = moment().format("dddd, MMMM Do YYYY");
document.getElementById('currentDay').textContent = (day)
//time 
var time = moment().format("h a");
console.log(time)
// all timeblock id's
var h1El = $('#9:00').text();
var h2El = $('#10').text();
var h3El = $('#11').text();
var h4El = $('#12').text();
var h5El = $('#13').text();
var h6El = $('#14').text();
var h7El = $('#15').text();
var h8El = $('#16').text();
var h9El = $('#17').text();

$('#t1').text(localStorage.getItem('9am'));
$('#t2').text(localStorage.getItem('10am'));
$('#t3').text(localStorage.getItem('11am'));
$('#t4').text(localStorage.getItem('12pm'));
$('#t5').text(localStorage.getItem('1pm'));
$('#t6').text(localStorage.getItem('2pm'));
$('#t7').text(localStorage.getItem('3pm'));
$('#t8').text(localStorage.getItem('4pm'));
$('#t9').text(localStorage.getItem('5pm'));
//saving thr data and keeping it there

window.onbeforeunload = function remember(){
    localStorage.setItem('9am', $('#t1').val());
    localStorage.setItem('10am', $('#t2').val());
    localStorage.setItem('11am', $('#t3').val());
    localStorage.setItem('12pm', $('#t4').val());
    localStorage.setItem('1pm', $('#t5').val());
    localStorage.setItem('2pm', $('#t6').val());
    localStorage.setItem('3pm', $('#t7').val());
    localStorage.setItem('4pm', $('#t8').val());
    localStorage.setItem('5pm', $('#t9').val());
}   

// $('#btn1').click(function remember(){}


//past present and future- color coding
function timeColor() {
    if(h1El <= time) {
        console.log('is this working')
        $('#t1').addClass("past");
    }else if(h1El == time) {
        console.log('is this one here')
        $('#t1').addClass('present')
    }else if(h1El > time) {
        console.log('what about this one')
        $('#t1').addClass('future')
    }

    if(h2El <= time) {
        $('#t2').addClass("past");
    }else if(h2El == time) {
        $('#t2').addClass('present')
    }else if(h2El > time) {
        $('#t2').addClass('future')
    }

    if(h3El <= time) {
        $('#t3').addClass("past");
    }else if(h3El == time) {
        $('#t3').addClass('present')
    }else if(h3El > time) {
        $('#t3').addClass('future')
    }

    if(h4El <= time) {
        $('#t4').addClass("past");
    }else if(h4El == time) {
        $('#t4').addClass('present')
    }else if(h4El > time) {
        $('#t4').addClass('future')
    }

    if(h5El <= time) {
        $('#t5').addClass("past");
    }else if(h5El == time) {
        $('#t5').addClass('present')
    }else if(h5El > time) {
        $('#t5').addClass('future')
    }

    if(h6El <= time) {
        $('#t6').addClass("past");
    }else if(h6El == time) {
        $('#t6').addClass('present')
    }else if(h6El > time) {
        $('#t6').addClass('future')
    }

    if(h7El <= time) {
        $('#t7').addClass("past");
    }else if(h7El == time) {
        $('#t7').addClass('present')
    }else if(h7El > time) {
        $('#t7').addClass('future')
    }

    if(h8El <= time) {
        $('#t8').addClass("past");
    }else if(h8El == time) {
        $('#t8').addClass('present')
    }else if(h8El > time) {
        $('#t8').addClass('future')
    }

    if(h9El <= time) {
        $('#t9').addClass("past");
    }else if(h9El == time) {
        $('#t9').addClass('present')
    }else if(h9El > time) {
        $('#t9').addClass('future')
    }

}
timeColor()







