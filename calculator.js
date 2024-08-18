function chooseSign(input) {
    const screen = document.querySelector("#screen");
    if (!isNaN(input)) { // Check if input is a number
        screen.innerHTML += input;
    } else if (input === '=') {
        try {
            const result = eval(screen.innerHTML); // Evaluate the expression
            screen.innerHTML = result;
        } catch (error) {
            screen.innerHTML = 'Error';
        }
    } else {
        screen.innerHTML += ` ${input} `;
    }
}
function reset(){
    document.querySelector("#screen").innerHTML = '';
}