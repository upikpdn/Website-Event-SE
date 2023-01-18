function klik(url){
    window.location = url;
  }
  
  function sertif(url){ 
    Swal.fire({
        icon: 'success',
        title: 'Sertifikat berhasil diunduh',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
      })

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