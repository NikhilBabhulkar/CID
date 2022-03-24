//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
let isSelected = false;
window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const uname = params.get('username');
    document.getElementById('user_name').innerHTML = uname;
});
// if startQuiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}
continue_btn.onclick = () => {
    info_box.classList.add("quizInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(30); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


// if quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {

    let userAns = ansarr[clicked].textContent; //getting user selected option
    Abhi(userAns);
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}


function Abhi(userAns) {
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    //console.log(answer);
    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        console.log("Increse");

        userScore += 1; //upgrading score value with 1
        console.log(userScore);
    }
}

// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");


    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';




let clicked = -1;
let ansarr = [];
//if user clicked on option
function optionSelected(answer) {

    clicked++;

    ansarr.push(answer);
    if (clicked >= 1) {
        //    console.log("here");
        //    console.log(ansarr[clicked]);

        ansarr[clicked - 1].style.backgroundColor = '#ffffff';
        ansarr[clicked].style.backgroundColor = '#007bff';
    }
    else {
        ansarr[clicked].style.backgroundColor = '#007bff';
    }


    // for(i=0; i < allOptions; i++){
    //     option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    // }
    next_btn.classList.add("show"); //show the next button if user selected any option
}


function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    let que1 = questions.length;
    const cometext = result_box.querySelector(".complete_text");
    if (userScore > 30) { // if user scored more than 3

        let scoreTag = "You've completed this Round" + ' In ' + time1 + 'min' +
            '<span style="display: block;text-align: center">and congrats!, You got ' +
            userScore + ' out of ' + que1 + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 10) { // if user scored more than 1

        let scoreTag = "You've completed this Round" + ' In ' + time1 + 'min' +
            '<span style="display: block;text-align: center">and nice!, You got ' +
            userScore + ' out of ' + que1 + '</p></span>';
        scoreText.innerHTML = scoreTag;

    }
    else { // if user scored less than 1
        // cometext.innerHTML= "You've completed this Round"+' In '+time1+'min';
        let scoreTag = "You've completed this Round" + ' In ' + time1 + 'min' +
            '<span style="display: block;text-align: center">You got ' +
            userScore + ' out of ' + que1 + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
let time1;
function startTimer(time) {
    counter = setInterval(timer, 1000);
    var sec = 1800;

    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        'use strict';
        var min = Math.floor(sec / 60),
            remSec = sec % 60;
        if (remSec < 10) {
            remSec = '0' + remSec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        time1 = (29 - min) + ":" + (60 - remSec)
        timeCount.textContent = min + ":" + remSec;

        if (sec > 0) {
            sec = sec - 1;
        }
        if (remSec == 0 && min == 0 && sec == 0) {
            timeCount.textContent = 'Time Off';
            showResult();
        }
    }
}

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let que = questions.length;
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + que + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
