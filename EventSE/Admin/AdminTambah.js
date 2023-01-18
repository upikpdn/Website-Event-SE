function klik(url){
  window.location = url;
}

function daftar(url){ 
    var acara = document.getElementById("acara").value;
    var exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1").value;

    if (acara != "" && exampleFormControlTextarea1 != "" ) {
        Swal.fire({
            icon: 'success',
            title: 'Acara kamu berhasil diunggah!',
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

