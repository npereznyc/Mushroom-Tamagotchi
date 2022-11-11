//SUBMIT NAME

//targets:
const form=document.querySelector('#form') //encompasses entire form, up to start button
const input=document.querySelector('#name') //input field


//handler
form.addEventListener("submit", (event) => {
    event.preventDefault(); //prevents the page from automatically reloading every time the submit button is clicked
    const inputName=input.value; //saving the user's input as inputName

    console.log(inputName)

    event.target.reset()

    const displayName=document.createElement('h4')
    displayName.innerHTML=inputName
    document.querySelector('#nameInput').appendChild(displayName)


})


//targets:
let timer=document.querySelector('#timerCount');
let startingAge=document.querySelector('#age');
let startingHunger=document.querySelector('#hunger');
let startingSleep=document.querySelector('#sleep');
let startingBored=document.querySelector('#bored');

//handlers
startBtn.addEventListener('click', function() {
    let time=Number(timer.textContent);
    let age=Number(startingAge.textContent);
    let hunger=Number(startingHunger.textContent);
    let sleep=Number(startingSleep.textContent);
    let bored=Number(startingBored.textContent);

    //Number() takes the number 0 from the html (a string) and converts it to a number that JS can work with.

    let feedBtn=document.querySelector('#feedBtn');
    let lightsBtn=document.querySelector('#lightsBtn');
    let playBtn=document.querySelector('#playBtn');

    

    function updateTimer(num) {
    timer.textContent=num; //changing the content of 'timer' to 'num', which is a placeholder in the updateTimer function(for now), for a value that will be passed into it...
}
    interval=setInterval(()=> {
        time+=1;
        updateTimer(time);
    }, 1000) 
    //This interval takes the value of 'time' and increments it by 1, it then passes the new value of 'time' to the updateTimer function, updating the content of 'timer' to the incremented value. It does this every second.

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

    feedBtn.addEventListener('click', function () {
        hunger-=1;
        updateHunger(hunger)
    })

    function updateSleep(num) {
        startingSleep.textContent=num;
    }
    interval=setInterval(()=> {
        sleep+=1;
        updateSleep(sleep);
    }, 6000)

    lightsBtn.addEventListener('click', function () {
        sleep-=1;
        updateSleep(sleep)
    })

    function updateBored(num) {
        startingBored.textContent=num;
    }

    interval=setInterval(()=> {
        bored+=1;
        updateBored(bored);
    }, 3000)

    playBtn.addEventListener('click', function () {
        bored-=1;
        updateBored(bored)
    })

    startTimer.disabled=true;
})