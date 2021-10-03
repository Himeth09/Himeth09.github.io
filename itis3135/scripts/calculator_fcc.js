const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');
const previousKeyType = calculator.dataset.previousKeyType;

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if(!action){
            console.log('number key');
        }
        if(
            action === 'add' ||
            action === 'subtract' ||
            action === 'mulitply' ||
            action === 'divide'
        ){
            console.log('operator key');
        }

        if(action === 'decimal'){
            console.log('decimal key');
        }
        if(action === 'clear'){
            console.log('clear key');
        }
        if(action === 'calculate'){
            console.log('equal key');
        }
        const createResultString = () => {
            if(!action){
                return displayedNum==='0' || 
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
                ? keyContent
                : displayedNum + keyContent;
            }
        }
        
        const createResultString = () => {
            if(action === 'decimal'){
                if(!displayedNum.includes('.')){
                    return displayedNum + '.';
                }
                if(previousKeyType === 'operator'||
                previousKeyType === 'calculate'){
                    return '0.';
                }
                return displayedNum;
            }
        }
       

        if(
            action === 'add' ||
            action === 'subtract' ||
            action === 'mulitply' ||
            action === 'divide'
        ){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if(firstValue &&
                operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate'
                ){
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            }else{
                calculator.dataset.firstValue = displayedNum;
            }

            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
        }

        Array.from(key.parentNode.children).forEach(k=>k.classList.remove('is-depressed'));

        // calculator.dataset.previousKeyType = 'operator';

        if (action === 'calculate'){
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if(firstValue){
                if(previousKeyType === 'calculate'){
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }
                display.textContent = calculate(firstValue, operator, secondValue); 
            }
            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
        }

        if(action === 'clear'){
            if(key.textContent === 'AC'){
                calculator.dataset.firstValue='';
                calculator.dataset.modValue='';
                calculator.dataset.operator='';
                calculator.dataset.previousKeyType='';
            }else{
                key.textContent='AC';
            }

            display.textContent=0;
            calculator.dataset.previousKeyType = 'clear';
        }

        if(action != 'clear'){
            const clearButton = calculator.querySelector('[data-action-clear]');
            clearButton.textContent= 'CE';
        }
    }
});

const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);

    if(operator === 'add'){
        return firstNum + secondNum;
    }
    if(operator === 'subtract'){
        return firstNum - secondNum;
    }
    if(operator === 'multipy'){
        return firstNum * secondNum;
    }
    if(operator === 'divide'){
        return firstNum / secondNum;
    }
}