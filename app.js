const randomNumber = (intervalNumber, duration) => {
    const elementNumber = document.querySelector("div.generator-container h1")
    const btn = document.querySelector("div.generator-container button")
    let animation

    btn.onclick = () => {
        btn.classList.toggle("sort")
        animation = setInterval(() => {
            elementNumber.textContent = Math.floor(Math.random() * intervalNumber + 1)
        }, 25)

        setTimeout(() => {
            btn.classList.toggle("sort")
            clearInterval(animation)
        }, duration)
    }
}

window.onload = randomNumber(10, 1000)