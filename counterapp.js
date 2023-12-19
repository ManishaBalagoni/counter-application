let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue
    
    if (updatedCounterValue > 0){
        counterElement.style.color = "darkmagneta";
    }
    else if (updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color="white";
    }
}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue

    if (updatedCounterValue > 0){
        counterElement.style.color = "darkmagneta";
    }
    else if (updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color="white";
    }
}

function onReset() {
    let updatedCounterValue = 0
    counterElement.textContent = updatedCounterValue
    counterElement.style.color="white";
    
}