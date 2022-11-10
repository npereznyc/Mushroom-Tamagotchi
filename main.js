//START: Timer & Metrics

//targets:
let timer=document.querySelector('#timerCount');
const startTimer=document.querySelector('#startTimer');
let startingAge=document.querySelector('#age');
let startingHunger=document.querySelector('#hunger');
let startingSleep=document.querySelector('#sleep');
let startingBored=document.querySelector('#bored');

//handler
startTimer.addEventListener('click', function() {
    let time=Number(timer.textContent);
    let age=Number(startingAge.textContent);
    let hunger=Number(startingHunger.textContent);
    let sleep=Number(startingSleep.textContent);
    let bored=Number(startingBored.textContent);

    function updateTimer(num) {
    timer.textContent=num;
}
    interval=setInterval(()=> {
        time+=1;
        updateTimer(time);
    }, 1000)

    function updateAge(num) {
        startingAge.textContent=num;
    }
    interval=setInterval(()=> {
        age+=1;
        updateAge(age);
    }, 12000)

    function updateHunger(num) {
        startingHunger.textContent=num;
    }
    interval=setInterval(()=> {
        hunger+=1;
        updateHunger(hunger);
    }, 4000)

    function updateSleep(num) {
        startingSleep.textContent=num;
    }
    interval=setInterval(()=> {
        sleep+=1;
        updateSleep(sleep);
    }, 6000)

    function updateBored(num) {
        startingBored.textContent=num;
    }

    interval=setInterval(()=> {
        bored+=1;
        updateBored(bored);
    }, 3000)

    startTimer.disabled=true;
})

//SUBMIT NAME

//targets:
const form=document.querySelector('#form')
const input=document.querySelector('#name')

//dom update
// function updateName(input) {
//     displayName.textContent=input;
// }

//handler
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input=document.querySelector('#name')
    const inputName=input.value;
    console.log(inputName)

    event.target.reset()

    const displayName=document.createElement('h4')
    displayName.innerHTML=inputName
    document.querySelector('#nameInput').appendChild(displayName)

//updateName();
})
