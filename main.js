const words = {
    Movies: ["Prestige" , "Inception" , "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Tarazan"],
    People: ["Einstein", "Hitchcock" , "Alexander", "Cleopatra" , "Sherlock"],
    Countries: ["Egypt" , "Syria" , "Yemen", "Palestine", "Bahrain", "Qatar"],
    Sport: ["Football", "Tennis", "Golf", "Basketball", "Hockey", "Volleyball"]
}
let correct = 0
let incorrect = 0
const correctSound = new Audio('audio/true.mp3')
const falseSound = new Audio('audio/false.mp3')
const gameOver = new Audio('audio/gameover.mp3')
const wrong1 = document.querySelectorAll(".wrong1")[0]
const wrong2 = document.querySelectorAll(".wrong2")[0]
const wrong3 = document.querySelectorAll(".wrong3")[0]
const wrong4 = document.querySelectorAll(".wrong4")[0]
const wrong5 = document.querySelectorAll(".wrong5")[0]
const wrong6 = document.querySelectorAll(".wrong6")[0]
const wrong7 = document.querySelectorAll(".wrong7")[0]
const wrong8 = document.querySelectorAll(".wrong8")[0]
const playagain = document.querySelectorAll(".playagain")
const charsContainer = document.querySelectorAll(".chars")[0]
const allkeys = Object.keys(words)
const randompropkey = Math.floor(Math.random() * allkeys.length)
const randomkey = allkeys[randompropkey]
const theKey = document.querySelectorAll(".header p span")[0]
theKey.textContent = randomkey
const randompropword = Math.floor(Math.random() * words[randomkey].length)
const randomword = words[randomkey][randompropword]
const wordLength = randomword.length
for(let i = 0 ; i< wordLength ; i++){
    let holder = document.createElement("div")
    charsContainer.insertAdjacentElement("afterbegin" , holder)
}
////////////////////////////////////////////////////////////////////////////
const chars = document.querySelectorAll(".littercontainer div")
chars.forEach((element) => {
    element.onclick = function() {
        if(!element.classList.contains("clicked")){
            let char = element.textContent.toLowerCase()
            if(randomword.toLowerCase().includes(char)){
                let holder = document.querySelectorAll(".chars div")
                let temp = []
                for(let i = 0 ; i<wordLength ; i++){
                    if(randomword[i].toLowerCase() === char){
                        temp.push(i)
                    }
                }
                for(let i=0 ; i<temp.length ; i++){
                    holder[temp[i]].textContent = char.toUpperCase()
                    holder[temp[i]].classList.add("done")
                    correct += 1
                }
                if(Array.from(holder).every(div => div.classList.contains("done"))){
                    let win = document.querySelectorAll(".win")[0]
                    let overlay = document.querySelectorAll(".overlay")[0]
                    let score = document.querySelectorAll(".win span")[0]
                    score.textContent = correct * 100
                    win.style.display = "block"
                    overlay.style.display = "block"
                }
                correctSound.play()
                
            }else {
                falseSound.play()
                incorrect++
            switch(incorrect){
                case 1:
                    wrong1.style.display = "block"
                    break;
                case 2:
                    wrong2.style.display = "block"
                    break;
                case 3:
                    wrong3.style.display = "block"
                    break;
                case 4:
                    wrong4.style.display = "block"
                    break;
                case 5:
                    wrong5.style.display = "block"
                    break;
                case 6:
                    wrong6.style.display = "block"
                    break;
                case 7:
                    wrong7.style.display = "block"
                    break;
                case 8:
                    wrong8.style.display = "block"
                    gameOver.play()
                    let overlay = document.querySelectorAll(".overlay")[0]
                    let popup = document.querySelectorAll(".popup")[0]
                    let score = document.querySelectorAll(".popup span")[0]
                    score.textContent = correct * 100
                    overlay.style.display = "block"
                    popup.style.display = "block"
                    break;
            }
            }
            element.classList.add("clicked")
        }
    }
})

playagain.forEach((element) => {
    element.onclick = function() {
        location.reload()
    }
})