function Login(url){ 
    var email = document.getElementById("email").value;
    var sandi = document.getElementById("sandi").value;

    if (email !="" && sandi != ""){
        window.location = url;
    }else{
        Swal.fire(
            '',
            'Email atau kata sandi yang kamu masukkan salah',
            'error'
        ) 
    }
}