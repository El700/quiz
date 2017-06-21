function check () {

var question1 = document.quiz.albumName.value;
var question2 = document.quiz.loveTrain.value;
var question3 = document.quiz.shows.value;
var question4 = document.quiz.location.value;
var question5 = document.quiz.date.value;
var correct = 0;

    if(question1 == "Holly Rolling") {
        correct++;
}
    if(question2 == "El Mega") {
        correct++;
}
    if(question3 == "Big Bang MTL") {
        correct++;
}
    if(question4 == "Montreal") {
        correct++;
}
    if(question5 == "2014") {
        correct++;
}
    if(correct == 3) {
        console.log("YOU WON OUR LATEST ALBUM; PROTOOLS CALLS OF ZION");
    }

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + "/5";
    
}