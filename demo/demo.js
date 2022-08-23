const range_slider = require("range-slider-213")

const range = range_slider({ min: 0, max: 100 })

document.body.innerHTML = `<h1> range slider </h1>`

const main = document.createElement("div")
main.classList.add("type1")

const style = document.createElement("style")
style.textContent = `
    .type1 {
        padding: 50px;
}
`

main.append(range)
document.body.append(main, style)