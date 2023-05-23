const hello = document.querySelector(".good")


console.dir(hello)

hello.sytled.color = ""

function helloMouseenter() {
    hello.innerText = "mouse is here"
} 

function helloMouseleave() {
    hello.innerText = "mouse is gone"
} 

function helloResize() {
    hello.innerText = "text is resized"
} 

function helloClick() {
    hello.innerText = "text is contextmenu"
} 

hello.addEventListener("mouseenter", helloMouseenter)
hello.addEventListener("mouseleave", helloMouseleave)
window.addEventListener("resize", helloResize)
window.addEventListener("contextmenu", helloClick)
