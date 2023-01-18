function klik(url){
  window.location = url;
}

function daftar(url){ 
    var nama = document.getElementById("nama").value;
    var exampleFormControlInput1 = document.getElementById("exampleFormControlInput1").value;
    var nim = document.getElementById("nim").value;
    var nowa = document.getElementById("nowa").value;

    if (nama != "" && exampleFormControlInput1 != "" && nowa != "" && nim != "") {
        Swal.fire({
            icon: 'success',
            title: 'Pendaftaran kamu berhasil!',
            text: "Tunggu penyelenggara memverifikasi pendaftaranmu",
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Kembali ke beranda',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          }).then((result) => {
            if (result.isConfirmed) {
                window.location = url;
            }
          })
    } else {
        Swal.fire('Kamu harus mengisi data dengan lengkap!')    }

    
}

function kembali(url){
    Swal.fire({
        title: 'Kamu yakin untuk kembali?',
        text: "Data kamu tidak akan tersimpan",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya. Kembali!',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location = url;
        }
      })
}

