let calculation = []
let accCalculation

const textOutput = document.querySelector('.output-container');



function calculate(button){
    if(button === 'AC'){
        calculation = []
        textOutput.textContent = ''
    }else if(button === '='){
        //let result = eval(accCalculation)
        let result = Function('return ' + accCalculation)()
        let roundedResult = limitNumberTo12Digits(result)
        //result = Number(result).toFixed(12);
        textOutput.textContent = roundedResult
        let roundedResultString = roundedResult.toString()
        calculation = [...roundedResultString]
        console.log(calculation.length)
        
    }
    else if(calculation.length < 15){
        calculation.push(button)
        accCalculation = calculation.join('')
        textOutput.textContent = accCalculation
    }
    
}

function roundDown(num){ //rounds down the ressult to 8 decimal places
    const decimalPlaces = 8;
    const multiplier = 10 ** decimalPlaces;
    const roundedNumber = Math.floor(num * multiplier) / multiplier;
    return parseFloat(roundedNumber.toFixed(decimalPlaces));
}

function limitNumberTo12Digits(num) {
    // Convert the number to a string
    let numStr = num.toString();
  
    // Check if the number has more than 12 digits
    if (numStr.length > 12) {
      // If it has more than 12 digits, truncate it to 12 digits
      numStr = numStr.slice(0, 12);
    }
  
    // Convert the truncated string back to a number
    const limitedNum = parseFloat(numStr);
  
    return limitedNum;
  }
  