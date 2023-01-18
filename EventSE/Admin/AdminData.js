function klik(url) {
    window.location = url;
}

function unduh(){
    Swal.fire({
        icon: 'success',
        title: 'Dokumen Terunduh',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Oke',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })

}
function unggah() {
    Swal.fire({
        icon: 'success',
        title: 'Dokumen Terunggah',
        text: "Sertifikat akan dibagikan ke peserta",
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Oke',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}
function hapus(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      // buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Kamu Yakin?',
      text: "Peserta akan terhapus, kamu tidak dapat mengembalikannya",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Hapus',
      cancelButtonText: 'Batal',
      confirmButtonColor: '#145880',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Terhapus!',
          'Peserta terhapus dalam daftar',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Dibatalkan',
          'Peserta masih dalam daftar :)',
          'error'
        )
      }
    })
  }