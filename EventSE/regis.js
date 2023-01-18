function validasi(url) {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var institusi = document.getElementById("institusi").value;
    var sandi = document.getElementById("sandi").value;
    var konfirm = document.getElementById("konfirm").value;
    
    if (nama != "" && email != "" && institusi != "" && sandi != "" && konfirm == sandi ) {
        window.location = url;
    } else if (konfirm != sandi) {
        Swal.fire(
            '',
            'Kata sandi tidak cocok',
            'error'
        )
    } else {
        Swal.fire(
            '',
            'Anda harus mengisi data lengkap',
            'error'
        ) 
    }
}

function myFunctiondemo() {
    var x = document.getElementById("myList").value;
}
