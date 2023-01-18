function klik(url){
    window.location = url;
  }

function out(url){
  Swal.fire({
    title: 'Kamu yakin untuk keluar?',
    icon: 'warning',
    cancelButtonText: 'Kembali',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Keluar',
    confirmButtonColor: '#d33',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
        window.location = url;
    }
  })
}