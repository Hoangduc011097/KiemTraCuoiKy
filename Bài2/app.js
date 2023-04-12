
const $number = document.getElementById ('input-number');
const $btn = document.getElementById('btn');
const $hinh = document.getElementById ('hinh');
const $tamGiac = document.getElementById ('tam-giac')

$btn.onclick = () => {

    

function numberOneTriangle (n){
    


    if (n < 1 | n > 10){
        console.log('Số không hợp lệ, điền lại số trong khoảng từ 1 đến 10');
        return;
    }

    
    for (let i = 1; i<=n; i++){
        let line ="";
        for( let j = 1 ; j <= i; j++){
            line += "*";

        }
        console.log(line);

    }
 
}
    numberOneTriangle($number.value);

}





 




