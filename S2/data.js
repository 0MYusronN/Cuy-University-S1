const nama ="Tanggo";
let usia = 10;

const biodata = document.getElementById('biodata');
console.log(biodata);
// variabel ada const dan let
// var const nilainya tidak bisa di ubah , let bisa diubah
// console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
// console.log(`nama saya adalah`, nama, `usia saya adalah`,usia);

// function
// function genereateBiodata() {
//     console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
// }

// console.log(nama);
// console.log(usia);

// genereateBiodata();

// statement if else
function genereateBiodata() {
    // if(usia == 30){
    //     // INI ADALAH KONDISI PERTAMA
    //     console.log('anda dewasa')
    // } else{
    //     // JIKA KONDISI TDK TERPENUHI
    //     console.log('anda anak anak');
    // }
    let generasi;
    if (usia > 10 && usia <18) {
        generasi = "Generasi remaja";
    } 
    else if (usia > 18 && usia < 30){
        generasi = "Generasi Dewasa";
    }
    else if (usia >= 30){
        generasi = "Generasi Tua";
    }
    else if (usia > 2 && usia < 10){
        generasi = "Generasi Anak";
    }
    else {
        generasi = "Generasi Bayi";
    }
    return biodata.innerHTML = generasi;
}
genereateBiodata();
