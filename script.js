function increase() {
    var counter = document.getElementById("Counter").innerHTML;
    document.getElementById("Counter").innerHTML = Number(counter) + 1;
}

function reset() {
    document.getElementById("Counter").innerHTML = 0;
}

function decrease() {
    var counter = document.getElementById("Counter").innerHTML;

    if(counter >0) {
        document.getElementById("Counter").innerHTML = Number(counter) - 1;
    }
}