function klik(url){
  window.location = url;
}

function hapus(url){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    // buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Kamu Yakin?',
    text: "Acara akan terhapus, kamu tidak dapat mengembalikannya",
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
        'Acara sudah tidak dipublikasikan',
        'success',
        window.location = url
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Dibatalkan',
        'Acara kamu masih dipublikasikan :)',
        'error'
      )
    }
  })
}