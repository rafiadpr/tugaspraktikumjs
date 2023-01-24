let siswa = [
    {
        nama_depan:"Jack", 
        nama_belakang:"Ma"
    },
    {
        nama_depan:"Johnny", 
        nama_belakang:"English"
    },
    {
        nama_depan:"John", 
        nama_belakang:"Cena"
    }
]

siswa.map(
    (sis, index) =>{
        console.log(sis.nama_depan + " " + sis.nama_belakang)
    }
)