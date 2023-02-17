const buttons = document.getElementsByClassName('btn-main');
for(const btn of buttons){
    btn.addEventListener('click', function(e){
        const inputField = document.getElementById('input-field');
        const numberValue = e.target.innerText;
        console.log(numberValue)
        const inputString = inputField.value + numberValue;
        console.log(inputString);

        if(numberValue === 'DEL'){
            inputField.value ='';
        }
        else if(numberValue === 'BACK'){
            const inputValue = inputField.value;
            const inputValueString = inputValue.split('');
            inputValueString.pop();
            const newInputValue = inputValueString.join('');
            inputField.value = newInputValue;
        }
        else if(numberValue === '='){
            const inputValue = inputField.value;
            const result = eval(inputValue);
            if(Number.isInteger(result)){
                inputField.value = result;
                console.log(result)
            }
            else{
                const result = eval(inputValue).toFixed(2);
                inputField.value = result;
            }
        }
        else{
            inputField.value = inputString;
        }
    })
}