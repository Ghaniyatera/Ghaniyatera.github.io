//function berfungsi u membuat sebuah fungsi versi kita sendiri
//void funct biasany hanya u cek error, biasany lebih banyak pakai return biar bisa dipakai nilainy

//void function, tdk ada nilai returnya
function helloWorld(){
    console.log("Hello World")
}
helloWorld()

//return function
function helloWorld2(){
    return "Halo Duniah";
}
let cetakhHelloWorld2 = helloWorld2()
console.log(cetakHelloWorld)

//function parameter
function penjumlahanBilangan(bilangan1, bilangan2){
    return bilangan1 + bilangan2;
}
let cetakPenjumlahan = penjumlahanBilangan(2,3)
console.log(cetakPenjumlahan);

function penjumlahanBilangan2(bilangan1, bilangan2){
    if(bilangan1 <1){
        return "Bilangan pertama lebih kecil dari 1";
    } else if (bilangan2 < 1){
        return "Bilangan kedua lebih kecil dari 1";
    } else {
        return bilangan1 + bilangan2;
    }
}
let cetakPenjumlahan2 = penjumlahanBilangan2(0,2)
console.log(cetakPenjumlahan2)

//function deklaratif
const penguranganBilangan = (bilangan1, bilangan2) => {
    if(bilangan1 <1){
        return "Bilangan pertama lebih kecil dari 1";
    } else if (bilangan2 < 1){
        return "Bilangan kedua lebih kecil dari 1";
    } else {
        return bilangan1 - bilangan2;
    }
}
console.log(penguranganBilangan(1,2))

//DI RETURN BS DITAMBAH parseInt(bilangan1) - parseInt(bilangan2). UNTUK MENGHINDARI SEMBARANG INPUT