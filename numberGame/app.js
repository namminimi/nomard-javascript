const loginForm = document.querySelector("#login-form")
const generateNumber = document.querySelector("#generateNumber input")
const guessNumber = document.querySelector("#guessNumber input")


const result = document.querySelector("#result")
const choseNumber = document.querySelector("#result p")
const winner = document.querySelector("#result h2")

console.log(choseNumber)



function onSubmitForm(e) {
    e.preventDefault()
    let genNum = Number(generateNumber.value)
    let gueNum = Number(guessNumber.value)
    if(genNum < 0 || gueNum < 0) {
        alert("0 이상의 값을 입력해야합니다")
        generateNumber.value = null    
        guessNumber.value = null
        result.classList.add("hidden")
    } else if(genNum < gueNum) {
        alert("설정하신 숫자 범위를 벗어납니다")
        generateNumber.value = null    
        guessNumber.value = null
        result.classList.add("hidden")
    }
    else {
        result.classList.remove("hidden")
        let randomNumber = Math.floor(Math.random() * genNum) + 1
        choseNumber.innerText = `You chose: ${gueNum}, the machine chose: ${randomNumber}.`
        if(gueNum === randomNumber) {
            winner.innerText = "You Won!!!"
        } else {
            winner.innerText = "You Lost!"
        }
    }
    
}


loginForm.addEventListener("submit", onSubmitForm)