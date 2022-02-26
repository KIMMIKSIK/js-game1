//1. 랜덤번호지정
//유저가 번호를 입력한다. go라는 버튼을 누른다.
//유저가 랜덤번호를 맞추면 맞췄습니다.
//랜덤번호보다 낮으면 업!
//높으면 다운!!
//reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다 쓰면 게임이 끝난다.(더 이상 추측이 불가하며,버튼이 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다,기회안깎음
//유저가 이미 입력한 번호를 입력하면 알려주고 기회안깎음



let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-number")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances=7;
let gameOver = false;
let chanceCount = document.getElementById("count-chance")
let history = [];


playButton.addEventListener("click", play) 
//focus,hover,mouseover등 다양한 이벤트 추가 가능

resetButton.addEventListener("click", reset)
userInput.addEventListener("click", function(){userInput.value=""; userInput.placeholder=""})


function pickRandomNum(){

    computerNum = Math.floor(Math.random() * 100)+1;  
    //Math.Random은 1은아니되 1에 가장 가까운수

    console.log("정답",computerNum)


}

pickRandomNum();

function play(){
    let userValue = userInput.value;

    if(userValue > 100 || userValue < 0){
        resultArea.textContent="1~100사이의 값을 입력하세요";
        return;
    }
    if(history.includes(userValue)){

        resultArea.textContent="이미 입력했던 값~ 다시입력하세요"
        return;
    }




  
    history.push(userValue);
    

  
    
    if(userValue < computerNum) {


        resultArea.textContent = "업!!하세요!"
    
    }

    else if(userValue > computerNum) {

        resultArea.textContent = "다운!!하세요!"
    
    }
    else{

        resultArea.textContent = "맞췄습니다."
        playButton.disabled = true;

        
        

    }

    chances--
    chanceCount.textContent = `남은기회: ${chances}회`;

    if(resultArea.textContent=="맞췄습니다."){

        return;

    }

    if(chances<1){

        gameOver = true;
        resultArea.textContent = "으이그 이사람아 마시게!"
    }

    if(gameOver){

        playButton.disabled = true;

    }

}


function reset(){

    resultArea.textContent = "결과가 나옵니다.";
    userInput.value="";
    userInput.placeholder="값을 입력하세요";

    chances=7;
    chanceCount.textContent=`남은기회: ${chances}회`
    gameOver = false;
    playButton.disabled = false;
    history = [];
   
    pickRandomNum();


}






