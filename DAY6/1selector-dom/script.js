//PLIS BIAR DK SALAH INGAT KONSISTEN PKE BAHASA INDO ATAU INGGRIS
//di atas document ad WINDOW
//klo mau kendalikan browserny pke property WINDOW
const judul = document.getElementById("Judul")
console.log(judul)

/**
 * Seleksi elemen html dg selector ID
 * 
 */

//MENGUBAHS TEKS DALAM TAG
judul.innerHTML = "Ganti isi HTML dg INNERHTML"

//memodif style dari elemen
judul.style.backgroundColor = "#CBD1FF"

//seleksi elemen brdarkn tag html
const elementList = document.getElementsByTagName("li")
console.log(elementList)

//elementList[1].innerHTML = "Mengganti isi HTML pada array"
for (let a = 0; a < elementList.length; a++) {
    elementList[a].innerHTML = "Elemen Indeks ke: " + a + "dimodif via Dom"
}

//buat for loop serupa tpi yg dimodif warna colornya
for (let a = 0; a < elementList.length; a++) {
    elementList[a].style.color = "red"
}

//querySelector, selector dg query css
//BISA AKSES ELEMEN TURUNANNY ALIAS CHILD-NY, LIAT INI PARENT CONTENT, BSA DICONSOLELOG MAIN
const querySelectorJudul = document.querySelector(".content")
//console.log(querySelectorJudul)
console.log(querySelectorJudul.querySelector(".main"))


//queryselectorALL
//getValueFormText menangkap semua dg value text, input[] artiny crikan sya semua yg inputny text
const getValueFormText = document.querySelectorAll("input[type=text]")

const getValueFormPassword = document.querySelectorAll("input[type=password]")

//console.log(getValueFormText[0].value) 
//dg value, bakal mencetak value dri dlaamny itu
//console.log(getValueFormText[1].value)

// 2: MANIPULASI DOM
const buttonTampil = document.querySelector("#tampilTeks")
console.log(buttonTampil)

//buat function listener-nya dulu u manipulasi elemen
//target teks diubah di html p yg sdh dibuat di indexhtml
function changeText() {
    const tampilLogin = document.getElementById("teksUbah")

    //buat validasi ajjah
    if (getValueFormText[0].value == "admin") {
        if (getValueFormText[1].value == "Makassar") {
            if (getValueFormPassword[0].value == "12345") {
                tampilLogin.innerHTML = "Selamat Datang Admin >o<"
            } else {
                tampilLogin.innerHTML = "Password Anda Salah"
            }
        } else {
            tampilLogin.innerHTML = "Bukan Admin Makassar"
        }
    } else {
        tampilLogin.innerHTML = "Bukan Admin"
    }

}

buttonTampil.addEventListener("click", changeText )
