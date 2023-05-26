var a = document.getElementById("inp1")

function getvalue(num) {
    a.value += num 
    console.log(a.value);
}

function calculatevalue(){
    var ans = eval(a.value) 
    // console.log(ans);
    a.value = ans
}


function clearALL() {
    a.value = "";
}