/**
 * Adds together two numbers
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total
 */
function sum(a: number, b: number): number {
  return a + b;
}

export default sum;

export function returnFirstNumberInArray(arrayToProcess:number[]|undefined):number|undefined{

  let firstItemInArray:number|undefined
  if(arrayToProcess!==undefined ) {
    firstItemInArray = arrayToProcess.shift() 
  }
  return firstItemInArray;
}

export function returnLastNumberInArray(arrayToProcess:number[]|undefined):number|undefined{
  let lastItemInArray:number|undefined
  if(arrayToProcess !== undefined){
    lastItemInArray  = arrayToProcess.pop();
  }
  return lastItemInArray;
}

export function returnSmallerOfTwoNumbers(num1:number,num2:number):number{
  const smaller:number = num1<num2?num1:num2
  
  return smaller
}

interface MinAndMax {
  min: number;
  max: number;
}

export function findAndReturnMinAndMax(arrayToCheck:number[]):MinAndMax{
  let min:number = arrayToCheck[0];
  let max:number = arrayToCheck[0];

  arrayToCheck.map((el) => 
    {
      if(el<min){
        min = el
      }
    }
  )

  arrayToCheck.map((el) => 
    {
      if(el>max){
        max = el
      }
    }
    
  )

  const minAndMaxArray:MinAndMax = {
    min : min,
    max : max
  }
  return minAndMaxArray;
}

export function reverseAString(textToReverse:string):string{
  const reversedStringAsArray:string[]= textToReverse.split("").reverse();
  return reversedStringAsArray.toString().replace(/[,]/g,"");
}