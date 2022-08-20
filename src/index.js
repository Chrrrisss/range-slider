module.exports = range_slider

function range_slider () {
    const el = document.createElement("div")
    el.classList.add("container1")
    const shadow = el.attachShadow({ mode: "closed" })
    
    const input = document.createElement("input")
    input.type = "range"

    const style = document.createElement("style")
    style.textContent = get_theme()

    shadow.append(input, style)
    
    return el
}


function get_theme () {
    return `
        :host(.container1) {
            background-color: grey;
        }
    input {
        width: 100%;
    }
    `
}