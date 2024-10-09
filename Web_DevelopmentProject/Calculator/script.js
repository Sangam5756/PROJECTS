function showonDisplay(value){
    document.getElementById('display').value +=value;
}

function clearDisplay(){
    document.getElementById('display').value ='';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function onpress(event){
    const key = event.key;

    if(key === 'enter'){
        calculate();
        event.preventDefault();
    }
}