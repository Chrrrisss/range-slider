const range_slider = require("..")

const range = range_slider()

document.body.innerHTML = `<h1> range slider </h1>`

const main = document.createElement("div")
main.classList.add("type1")

const style = document.createElement("style")
style.textContent = `
    .type1 {
        border: 1px solid grey;
        padding: 50px;
}
`

main.append(range)
document.body.append(main, style)