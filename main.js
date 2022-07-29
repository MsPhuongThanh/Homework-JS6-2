function exercise5() {
    // Input : khởi tạo biến
    let number1 = +document.getElementById("number1").value;

//    Process

    let ketqua = " "; 
    for( let inumber = 2; inumber <= number1; inumber++){
        //số nguyên tố là các số chỉ chia hết cho 1 và chính nó
        let checknumber = true;
        for(let i = 2; i <= Math.sqrt(inumber); i++) {
            if (inumber % i === 0){
                checknumber = false;
                break;
            }
        }
        if(checknumber) {
            ketqua += inumber + " "; 
        }
    }
    // Output
    console.log(ketqua)
    
  let divResult = document.getElementById("result");
  divResult.style.display = "block";
  divResult.innerHTML = ketqua;
};
