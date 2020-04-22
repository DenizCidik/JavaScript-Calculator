function buttonClick(button) {
    let display = document.querySelector("#board");

    if (isNaN(button) == false) {
        display.innerHTML += button;
    }

    if (button == 'C') {
        display.innerHTML = '';
    }

    if (button == '+' || button == '-' || button == '*' || button == '/'){
        // for adding operator button to the expression (not changing)
        if (isNaN(display.innerHTML.slice(-1)) == false && display.innerHTML.length != 0){
            display.innerHTML += button;
        }
        // for adding minus to empty board
        if (button == '-' && display.innerHTML.length == 0){
            display.innerHTML = '-'
                }

        // for changing operator////
        if(isNaN(display.innerHTML.slice(-1)) == true){
            display.innerHTML = display.innerHTML.slice(0, -1) + button;
        }
    }

    else if (button == "."){
        if(display.innerHTML.slice(-1) != '.'){
            display.innerHTML += '.';
        }
    }

    else if(button =="="){
        if(isNaN(display.innerHTML.slice(-1)) == true){
            display.innerHTML = eval(display.innerHTML.slice(0, -1));
        }

        else{
            display.innerHTML = eval(display.innerHTML);
        }
    }
}