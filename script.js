let inputEl = document.getElementById("inputBox");

let btnEls = document.querySelectorAll('button');

let string = '';

let arr = Array.from(btnEls)

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == "=") {
      // Check if the expression contains a percentage symbol (%)
      if (string.includes('%')) {
        // If yes, convert the percentage to a decimal and evaluate the expression
        string = string.replace(/(\d+)%/g, (match, p1) => (p1 / 100)*100);
      }
      string = eval(string)
      inputEl.value = string
    } else if (e.target.innerHTML == "Ac") {
      string = ""
      inputEl.value = string
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1)
      inputEl.value = string
    } else {
      string += e.target.innerHTML
      inputEl.value = string
    }
  })
})
