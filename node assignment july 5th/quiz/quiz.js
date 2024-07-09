const quizList = [
    { id: 1, q: " What is The National animal of India?", ans: "Tiger", op1: "Lion", op2: "Elephant", op3: "Cow", op4: "tiger" },
    { id: 2, q: " What is The National bird of India?", ans: "Peacock", op1: "Owl", op2: "Peacock", op3: "Sparrow", op4: "Robin" },
    { id: 3, q: " What is The capital of India?", ans: "Delhi", op1: "Agra", op2: "Mumbai", op3: "Kolkata", op4: "Delhi" },
    { id: 4, q: " What is The National animal of Afganistan?", ans: "Kabul", op1: "Luthiana", op2: "Kabul", op3: "Islamabad", op4: "Kandahar" },
    { id: 5, q: " What is The largets land animal?", ans: "Elephant", op1: "Whale", op2: "Elephant", op3: "Bispn", op4: "Giraffe" },
    { id: 6, q: " What is The 3rd planet from the sun?", ans: "Earth", op1: "Earth", op2: "Jupiter", op3: "Mars", op4: "Uranus" },
    { id: 7, q: " What is The National animal of China?", ans: "Panda", op1: "Deer", op2: "Dragon", op3: "Panda", op4: "tiger" }
];

let x = 0;
let score = 0;
//let timePerQuestion = 10; // 1 minute timer
let timer;
let timelimit=10
function timers(num){
        let timeleft=timelimit;
        clearInterval(timer)
        document.getElementById("timer").textContent=`${timeleft}`
        timer=setInterval(()=>{
            if(timeleft<=0){
                clearInterval(timer);
                submitClick(num,"wrong")

            }
            else{
                timeleft--
                document.getElementById("timer").textContent=`time left:${timeleft}`
                
            }
        },1000)
}

function displayQuestion(num) {
    document.getElementById("ques").innerHTML = "";
    document.getElementById('ques1').innerHTML='';
    let answer;
    document.getElementById("ques").innerHTML = quizList[num].q + "<br>";
    let options = [quizList[num].op1, quizList[num].op2, quizList[num].op3, quizList[num].op4];
    for (let i = 0; i < options.length; i++) {
        const rad = document.createElement("input");
        rad.type = "radio";
        rad.name = "q" + num;
        rad.value = options[i];
        rad.addEventListener("click", () => {
            answer = options[i];
        });

        const label = document.createElement("label");
        label.textContent = options[i];

        document.getElementById("ques").appendChild(rad);
        document.getElementById("ques").appendChild(label);
    }

    const submit = document.createElement("button");
    submit.textContent = "SUBMIT";
    submit.addEventListener("click", () => submitClick(num, answer));
    document.getElementById("ques1").appendChild(submit);
    
}

function submitClick(num, value) {
    if (quizList[num].ans.toLowerCase() === value.toLowerCase()) {
        score++;
        console.log(score);
    }
    if (x < quizList.length - 1) {
        x++;
        displayQuestion(x);
        timers(x)
    } else {
        resultDisplay();
        document.getElementById("timer").textContent=''
    }
}

function resultDisplay() {
    let resultHtml = `Quiz complete! Your score is ${score} out of ${quizList.length}.<br><br>`;
    for (let i = 0; i < quizList.length; i++) {
        resultHtml += `Question ${i + 1}: ${quizList[i].q}<br>`;
        resultHtml += `Correct answer: ${quizList[i].ans}<br><br>`;
    }
    document.getElementById("ques").innerHTML = resultHtml;
    document.getElementById("ques1").innerHTML='';
    document.getElementById("timer").innerHTML='';
}
// let time=10
// function timer(){

//     document.getElementById("timer").innerHTML=time
//     time--
//     if(time<0){
//         submitClick()
//     }
// }



displayQuestion(x);
timers(x);