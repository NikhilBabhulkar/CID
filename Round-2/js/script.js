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
 window.addEventListener('load',()=>{
            const params = (new URL(document.location)).searchParams;
            const uname = params.get('username');
            document.getElementById('user_name').innerHTML = uname;
 });
// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}
continue_btn.onclick = ()=>{
    info_box.classList.add("quizInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(30); //calling startTimer function
    //startTimerLine(0); //calling startTimerLine function
}

let timeValue =  30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
function checkAnswer(){
    if(que_count < questions.length ){ //if question count is less than total question length
        var elem = document.getElementsByTagName("input");
        var names = [];
        for (var i = 0; i < elem.length; ++i) {
          if (typeof elem[i].attributes.id !== "undefined") {
              names+=elem[i].value;
          }
        }
        let userAns = names.toString().replace(/\s+/g,'');
        let correcAns = questions[que_count].answer; //getting correct answer from array
       
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1   
    }
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        //next_btn.classList.remove("show"); //hide the next button
        next_btn.classList.add("show"); 
    
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    next_btn.classList.add("show"); 

   
}

//if user clicked on option
function optionSelected(answer){
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    answer.style.backgroundColor = '#007bff'; 
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
    }else{
        
    }
    
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    console.log(time1);
    const scoreText = result_box.querySelector(".score_text");
    const comptext=result_box.querySelector(".complete_text");
    
    if (userScore > 45){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        comptext.innerHTML="You've completed this Round"+' In '+time1+'';
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 15){ // if user scored more than 1
        comptext.innerHTML="You've completed this Round"+' In '+time1+'';
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        comptext.innerHTML="You've completed this Round"+' In '+time1+'';
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

let time1;
function startTimer(time){
    counter = setInterval(timer,1000);
    var sec = 2100;

    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
      // console.log(timeCount);
        'use strict';
        var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
        //console.log(remSec);
        if (remSec < 10) {
            remSec = '0' + remSec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        time1=(34-min)+":"+(60-remSec)
        //console.log(time1);
        timeCount.textContent = min + ":" + remSec;
    
        if (sec > 0) {
            sec = sec - 1;  
        }
		if(remSec==0 && min==0 && sec==0){  
            timeCount.textContent = 'Time Off';
            showResult();
        } 
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
