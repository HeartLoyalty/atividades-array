//Crie um array com os números de 1 a 10. Mostre apenas os números pares (dica: usar if dentro de um for).//

let numbers = [1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < numbers.length; index++) {
    let atualnumber = numbers[index]
    if (atualnumber % 2==0) {
        
        console.log(atualnumber);       
    }
    
}