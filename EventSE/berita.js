function klik(url){
    window.location = url;
  }
  
  function daftar(url){ 
      window.location = url;
  }
  function unduh(){
      Swal.fire({
          icon: 'success',
          title: 'Silabus berhasil diunduh',
          showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
  } 