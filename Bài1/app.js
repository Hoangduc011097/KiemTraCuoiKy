// Bài 1

const $inputNumberA = document.getElementById('input-A');
const $inputNumberB = document.getElementById('input-B');
const $Sum = document.getElementById('ket-qua');
const $btnSum = document.getElementById('btn-sum');

function array(n){
    if (n < 2 ){
        return false;

    }
    for (let i = 2; i<= Math.sqrt(n); i++){
        if ( n%i === 0 ){
            return false;

        }
    }
    return true;

}


 $btnSum.onclick =  () => {
    const a = $inputNumberA.value;
    const b = $inputNumberB.value;
    let sum = 0;
     for (let i = a; i <= b; i++){
        if (array(i)){
            $Sum.innerHTML +=` ${i} +`;
            sum += i;

        }

     }
     let str = $Sum.innerHTML;
     str.slice(0, -1);

     $Sum.innerHTML = `${str} = ${sum}`;
console.log (sum);



}




